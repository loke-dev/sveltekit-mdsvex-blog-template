<script lang="ts">
  import { onMount } from 'svelte';
  import { page } from '$app/stores';
  import { supabase } from '$lib/supabase';
  import Auth from './Auth.svelte';

  export let postSlug: string;

  let comments: App.Comment[] = [];
  let newComment = '';
  let loading = false;
  let error: string | null = null;
  let commentsSubscription: any;

  onMount(() => {
    loadComments();

    // Subscribe to changes in the comments table
    commentsSubscription = supabase
      .channel('comments-changes')
      .on('postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'comments',
          filter: `post_slug=eq.${postSlug}`
        },
        () => {
          loadComments();
        }
      )
      .subscribe();

    return () => {
      if (commentsSubscription) {
        supabase.removeChannel(commentsSubscription);
      }
    };
  });

  async function loadComments() {
    loading = true;
    error = null;

    try {
      const { data, error: loadError } = await supabase
        .from('comments')
        .select(`
          id,
          post_slug,
          user_id,
          content,
          created_at,
          profiles:user_id (
            id,
            email,
            display_name,
            avatar_url
          )
        `)
        .eq('post_slug', postSlug)
        .order('created_at', { ascending: true });

      if (loadError) {
        error = loadError.message;
        console.error('Error loading comments:', loadError);
      } else {
        comments = data as unknown as App.Comment[];
      }
    } catch (e) {
      error = e instanceof Error ? e.message : 'An unknown error occurred';
      console.error('Exception loading comments:', e);
    } finally {
      loading = false;
    }
  }

  async function addComment() {
    if (!$page.data.session) {
      error = 'You must be signed in to comment';
      return;
    }

    if (!newComment.trim()) {
      error = 'Comment cannot be empty';
      return;
    }

    loading = true;
    error = null;

    try {
      const { error: insertError } = await supabase
        .from('comments')
        .insert({
          post_slug: postSlug,
          user_id: $page.data.session.user.id,
          content: newComment.trim()
        });

      if (insertError) {
        error = insertError.message;
        console.error('Error adding comment:', insertError);
      } else {
        newComment = '';
        await loadComments();
      }
    } catch (e) {
      error = e instanceof Error ? e.message : 'An unknown error occurred';
      console.error('Exception adding comment:', e);
    } finally {
      loading = false;
    }
  }

  function formatDate(dateString: string) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
</script>

<section class="mt-12 space-y-8">
  <h2 class="text-2xl font-bold">Comments</h2>

  {#if loading && comments.length === 0}
    <div class="py-4 text-center">Loading comments...</div>
  {:else if comments.length === 0}
    <div class="py-4 text-center">No comments yet. Be the first to comment!</div>
  {:else}
    <div class="space-y-6">
      {#each comments as comment}
        <div class="p-4 bg-gray-50 rounded-lg">
          <div class="flex items-start gap-3">
            {#if comment.user?.avatar_url}
              <img
                src={comment.user.avatar_url}
                alt={comment.user.display_name || comment.user.email}
                class="w-10 h-10 rounded-full"
              />
            {:else}
              <div class="flex items-center justify-center w-10 h-10 text-white bg-blue-500 rounded-full">
                {(comment.user?.display_name || comment.user?.email || 'User').charAt(0).toUpperCase()}
              </div>
            {/if}
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <h3 class="font-medium">
                  {comment.user?.display_name || comment.user?.email || 'Anonymous'}
                </h3>
                <time class="text-sm text-gray-500">{formatDate(comment.created_at)}</time>
              </div>
              <p class="mt-1">{comment.content}</p>
            </div>
          </div>
        </div>
      {/each}
    </div>
  {/if}

  <div class="mt-8">
    {#if $page.data.session}
      <form on:submit|preventDefault={addComment} class="space-y-4">
        {#if error}
          <div class="p-3 text-sm text-red-700 bg-red-100 rounded-md">
            {error}
          </div>
        {/if}
        <div>
          <label for="comment" class="block mb-2 text-sm font-medium">
            Add a comment
          </label>
          <textarea
            id="comment"
            bind:value={newComment}
            rows="3"
            class="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            placeholder="Write your comment here..."
            disabled={loading}
          ></textarea>
        </div>
        <button
          type="submit"
          disabled={loading}
          class="px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50"
        >
          {loading ? 'Posting...' : 'Post Comment'}
        </button>
      </form>
    {:else}
      <div class="p-4 border border-gray-200 rounded-lg">
        <Auth />
      </div>
    {/if}
  </div>
</section>