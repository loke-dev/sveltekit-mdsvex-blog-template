import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';
import { invalidate } from "$app/navigation"
import { supabase } from "$lib/supabase"
import { browser } from "$app/environment"
import type { Load } from "@sveltejs/kit"

// This will automatically inject the Speed Insights script in production
// It does not track data in development mode
injectSpeedInsights()

// Disable prerendering for routes that need dynamic session data
export const prerender = false

export const load: Load = async ({ data, depends }) => {
  // Register a dependency on the auth state
  depends("supabase:auth")

  // Type assertion for data to include session
  const session = data?.session || null

  if (browser) {
    // Check for auth code in URL and process it
    const url = new URL(window.location.href)
    const hasAuthCode = url.searchParams.has("code")
    const hasAuthTime = url.searchParams.has("auth_time")

    // If we just came back from an auth redirect, refresh the session
    if (hasAuthTime) {
      try {
        const { data: sessionData } = await supabase.auth.getSession()
        console.log("Layout: Session after redirect:", !!sessionData.session)

        // If we have a session but the server doesn't know about it yet, invalidate
        if (sessionData.session && !session) {
          console.log("Layout: Session mismatch, invalidating")
          await invalidate("supabase:auth")
        }
      } catch (e) {
        console.error("Layout: Error getting session:", e)
      }
    }

    // Set up auth state change listener
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(async (event, newSession) => {
      console.log("Layout: Auth state changed:", event, !!newSession)
      if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED" || event === "SIGNED_OUT") {
        await invalidate("supabase:auth")
      }
    })

    // Return cleanup function
    return {
      session,
      cleanup: () => {
        subscription.unsubscribe()
      },
    }
  }

  return { session }
}