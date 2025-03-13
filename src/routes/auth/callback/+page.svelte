<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { supabase } from '$lib/supabase';
  import { goto } from '$app/navigation';
  import { invalidate } from '$app/navigation';

  let message = 'Processing authentication...';
  let countdown = 5;
  let redirectUrl = '/journal';
  let interval: ReturnType<typeof setInterval> | undefined;

  onMount(() => {
    handleAuth();
    return () => {
      if (interval) clearInterval(interval);
    };
  });

  async function handleAuth() {
    // Get the next parameter from the URL
    const urlParams = new URLSearchParams(window.location.search);
    const next = urlParams.get('next');
    if (next) {
      redirectUrl = next;
      console.log('Will redirect to:', redirectUrl);
    }

    // Check if there's an error in the URL
    const error = urlParams.get('error');
    const errorDescription = urlParams.get('error_description');

    if (error) {
      message = `Authentication error: ${errorDescription || error}`;
      console.error('Auth error:', error, errorDescription);
    }

    // The server has already exchanged the code for a session
    // We just need to make sure the client has the latest session
    try {
      // Force a refresh of the session
      await invalidate('supabase:auth');

      // Get the session
      const { data, error: sessionError } = await supabase.auth.getSession();

      if (sessionError) {
        console.error('Error getting session:', sessionError);
        message = 'Error establishing session. Please try again.';
      } else if (data?.session) {
        console.log('Session established successfully');
        message = 'Authentication successful! Redirecting...';

        // Redirect immediately
        const url = new URL(redirectUrl, window.location.origin);
        url.searchParams.set('auth_time', Date.now().toString());
        goto(url.toString());
        return;
      } else {
        console.log('No session found after authentication');
        message = 'Authentication completed, but no session was established. Please try again.';
      }
    } catch (e) {
      console.error('Error checking session:', e);
      message = 'Error processing authentication. Please try again.';
    }

    // Countdown timer (only runs if we didn't redirect immediately)
    interval = setInterval(() => {
      countdown--;
      if (countdown <= 0) {
        if (interval) clearInterval(interval);
        message = `Redirecting to ${redirectUrl}...`;

        // Add a cache-busting parameter to force a refresh
        const url = new URL(redirectUrl, window.location.origin);
        url.searchParams.set('auth_time', Date.now().toString());

        window.location.href = url.toString();
      }
    }, 1000);
  }
</script>

<div class="flex items-center justify-center min-h-screen bg-gray-100">
  <div class="p-8 bg-white rounded-lg shadow-md text-center">
    <h1 class="text-2xl font-bold mb-4">Authentication</h1>
    <p class="mb-4">{message}</p>
    <div class="w-12 h-12 border-t-4 border-blue-500 border-solid rounded-full animate-spin mx-auto"></div>
    <p class="mt-4 text-sm text-gray-500">
      Redirecting in {countdown} seconds...
      <br>
      If you are not redirected automatically, <a href={redirectUrl} class="text-blue-500 hover:underline">click here</a>.
    </p>
  </div>
</div>