<script lang="ts">
  import { supabase } from '$lib/supabase';
  import { page } from '$app/stores';
  import { onMount, onDestroy, afterUpdate } from 'svelte';
  import { invalidate } from '$app/navigation';

  let loading = false;
  let error: string | null = null;
  let email = '';
  let password = '';
  let showEmailForm = false;
  let sessionChecked = false;
  let authStateUnsubscribe: (() => void) | undefined;

  // Function to refresh the session state
  async function refreshSession() {
    try {
      const { data, error: sessionError } = await supabase.auth.getSession();
      if (sessionError) {
        console.error('Error refreshing session:', sessionError);
      } else {
        console.log('Session refreshed:', !!data.session);
        // Invalidate to trigger a reload of data that depends on auth state
        await invalidate('supabase:auth');
      }
    } catch (e) {
      console.error('Exception refreshing session:', e);
    } finally {
      sessionChecked = true;
    }
  }

  // Check session on mount and setup auth state change listener
  onMount(() => {
    refreshSession();

    // Set up auth state change listener
    const { data } = supabase.auth.onAuthStateChange((event, session) => {
      console.log('Auth state changed in component:', event, !!session);
      refreshSession();
    });

    authStateUnsubscribe = data.subscription.unsubscribe;
  });

  // Clean up the subscription when the component is destroyed
  onDestroy(() => {
    if (authStateUnsubscribe) {
      authStateUnsubscribe();
    }
  });

  // Check for auth_time parameter in URL which indicates we just came back from auth
  afterUpdate(() => {
    const url = new URL(window.location.href);
    const hasAuthTime = url.searchParams.has('auth_time');

    if (hasAuthTime) {
      console.log('Auth component detected auth_time parameter, refreshing session');
      refreshSession();

      // Remove the auth_time parameter to prevent refreshing on every update
      url.searchParams.delete('auth_time');
      window.history.replaceState({}, '', url.toString());
    }
  });

  async function signInWithGithub() {
    loading = true;
    error = null;

    try {
      const redirectUrl = `${window.location.origin}/auth/callback?next=${encodeURIComponent(window.location.pathname)}`;

      const { data, error: signInError } = await supabase.auth.signInWithOAuth({
        provider: 'github',
        options: {
          redirectTo: redirectUrl,
          skipBrowserRedirect: false
        }
      });

      if (signInError) {
        error = signInError.message;
        console.error('GitHub sign in error:', signInError);
      } else if (data && data.url) {
        // Force a hard redirect to the OAuth provider
        window.location.href = data.url;
      } else {
        error = 'No URL returned from GitHub OAuth';
      }
    } catch (e) {
      console.error('GitHub sign in exception:', e);
      error = e instanceof Error ? e.message : 'An unknown error occurred';
    } finally {
      loading = false;
    }
  }

  async function signInWithGoogle() {
    loading = true;
    error = null;

    try {
      const redirectUrl = `${window.location.origin}/auth/callback?next=${encodeURIComponent(window.location.pathname)}`;

      const { data, error: signInError } = await supabase.auth.signInWithOAuth({
        provider: 'google',
        options: {
          redirectTo: redirectUrl,
          skipBrowserRedirect: false
        }
      });

      if (signInError) {
        error = signInError.message;
        console.error('Google sign in error:', signInError);
      } else if (data && data.url) {
        // Force a hard redirect to the OAuth provider
        window.location.href = data.url;
      } else {
        error = 'No URL returned from Google OAuth';
      }
    } catch (e) {
      console.error('Google sign in exception:', e);
      error = e instanceof Error ? e.message : 'An unknown error occurred';
    } finally {
      loading = false;
    }
  }

  async function signInWithEmail() {
    if (!email.trim()) {
      error = 'Email is required';
      return;
    }

    if (!password.trim()) {
      error = 'Password is required';
      return;
    }

    loading = true;
    error = null;

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password: password.trim()
      });

      if (signInError) {
        error = signInError.message;
        console.error('Email sign in error:', signInError);
      } else {
        console.log('Email sign in successful');
        await refreshSession();
      }
    } catch (e) {
      console.error('Email sign in exception:', e);
      error = e instanceof Error ? e.message : 'An unknown error occurred';
    } finally {
      loading = false;
    }
  }

  async function signUpWithEmail() {
    if (!email.trim()) {
      error = 'Email is required';
      return;
    }

    if (!password.trim() || password.length < 6) {
      error = 'Password must be at least 6 characters';
      return;
    }

    loading = true;
    error = null;

    try {
      const redirectUrl = `${window.location.origin}/auth/callback`;

      const { data, error: signUpError } = await supabase.auth.signUp({
        email: email.trim(),
        password: password.trim(),
        options: {
          emailRedirectTo: redirectUrl
        }
      });

      if (signUpError) {
        error = signUpError.message;
        console.error('Email sign up error:', signUpError);
      } else if (data.user?.identities?.length === 0) {
        error = 'This email is already registered. Please sign in instead.';
      } else {
        // Show success message
        error = null;
        alert('Check your email for a confirmation link!');
      }
    } catch (e) {
      console.error('Email sign up exception:', e);
      error = e instanceof Error ? e.message : 'An unknown error occurred';
    } finally {
      loading = false;
    }
  }

  async function signOut() {
    loading = true;
    try {
      const { error: signOutError } = await supabase.auth.signOut();

      if (signOutError) {
        error = signOutError.message;
        console.error('Sign out error:', signOutError);
      } else {
        console.log('Sign out successful');
        await refreshSession();
      }
    } catch (e) {
      console.error('Sign out exception:', e);
      error = e instanceof Error ? e.message : 'An unknown error occurred';
    } finally {
      loading = false;
    }
  }

  function toggleEmailForm() {
    showEmailForm = !showEmailForm;
    error = null;
    console.log(`Toggled email form: ${showEmailForm ? 'showing' : 'hiding'}`);
  }
</script>

{#if $page.data.session}
  <div class="flex flex-col items-start gap-4">
    <div class="flex items-center gap-2">
      {#if $page.data.session.user?.user_metadata?.avatar_url}
        <img
          src={$page.data.session.user.user_metadata.avatar_url}
          alt="Avatar"
          class="w-8 h-8 rounded-full"
        />
      {/if}
      <span>Signed in as {$page.data.session.user?.email || 'User'}</span>
    </div>
    <button
      on:click={signOut}
      disabled={loading}
      class="px-4 py-2 text-sm font-medium text-white bg-red-600 rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 disabled:opacity-50"
    >
      {loading ? 'Signing out...' : 'Sign out'}
    </button>
  </div>
{:else}
  <div class="flex flex-col gap-4">
    <h3 class="text-lg font-medium">Sign in to comment</h3>
    {#if error}
      <div class="p-3 text-sm text-red-700 bg-red-100 rounded-md">
        {error}
      </div>
    {/if}

    {#if showEmailForm}
      <form on:submit|preventDefault={signInWithEmail} class="space-y-4">
        <div>
          <label for="email" class="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            bind:value={email}
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="your@email.com"
            disabled={loading}
          />
        </div>
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
          <input
            type="password"
            id="password"
            bind:value={password}
            class="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
            placeholder="••••••••"
            disabled={loading}
          />
        </div>
        <div class="flex gap-2">
          <button
            type="submit"
            disabled={loading}
            class="flex-1 px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? 'Signing in...' : 'Sign in'}
          </button>
          <button
            type="button"
            on:click={signUpWithEmail}
            disabled={loading}
            class="flex-1 px-4 py-2 text-sm font-medium text-blue-700 bg-blue-100 rounded-md hover:bg-blue-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
          >
            {loading ? 'Signing up...' : 'Sign up'}
          </button>
        </div>
        <button
          type="button"
          on:click={toggleEmailForm}
          class="w-full text-sm text-gray-600 hover:text-gray-900"
        >
          Back to all sign-in options
        </button>
      </form>
    {:else}
      <div class="flex flex-col gap-2">
        <button
          on:click={toggleEmailForm}
          disabled={loading}
          class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg>
          Sign in with Email
        </button>

        <button
          on:click={signInWithGithub}
          disabled={loading}
          class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 disabled:opacity-50"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd" />
          </svg>
          {loading ? 'Signing in...' : 'Sign in with GitHub'}
        </button>

        <button
          on:click={signInWithGoogle}
          disabled={loading}
          class="flex items-center justify-center gap-2 px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50"
        >
          <svg class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05" />
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
          </svg>
          {loading ? 'Signing in...' : 'Sign in with Google'}
        </button>
      </div>
    {/if}
  </div>
{/if}