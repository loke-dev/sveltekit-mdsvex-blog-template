import { createClient } from "@supabase/supabase-js"
import type { Handle } from "@sveltejs/kit"
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "$lib/env"

// Ensure we have non-empty values
const url = SUPABASE_URL || "https://aegdighcrzwfyvjmiwva.supabase.co"
const key =
  SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZ2RpZ2hjcnp3Znl2am1pd3ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTMxNjYsImV4cCI6MjA1NzQ2OTE2Nn0.3OLMzjLI_r9PS3Rp0uZPScyIMRDrxTWHyvyXkmlRiUI"

export const handle: Handle = async ({ event, resolve }) => {
  // Create a new supabase browser client on every request
  event.locals.supabase = createClient(url, key, {
    auth: {
      flowType: "pkce",
    },
  })

  // Get the session from the cookies
  const accessToken = event.cookies.get("sb-access-token")
  const refreshToken = event.cookies.get("sb-refresh-token")

  if (accessToken && refreshToken) {
    const { data, error } = await event.locals.supabase.auth.setSession({
      access_token: accessToken,
      refresh_token: refreshToken,
    })

    if (error) {
      console.error("Error setting session from cookies:", error)
      // Clear invalid cookies
      event.cookies.delete("sb-access-token", { path: "/" })
      event.cookies.delete("sb-refresh-token", { path: "/" })
    } else {
      // If session was refreshed, update the cookies
      if (data.session) {
        event.cookies.set("sb-access-token", data.session.access_token, {
          path: "/",
          httpOnly: false,
          secure: true,
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 1 week
        })

        event.cookies.set("sb-refresh-token", data.session.refresh_token, {
          path: "/",
          httpOnly: false,
          secure: true,
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 1 week
        })
      }
    }
  }

  // Expose the session getter to the rest of the app
  event.locals.getSession = async () => {
    const {
      data: { session },
    } = await event.locals.supabase.auth.getSession()

    // If we have a session, make sure we have cookies set
    if (session) {
      event.cookies.set("sb-access-token", session.access_token, {
        path: "/",
        httpOnly: false,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      })

      event.cookies.set("sb-refresh-token", session.refresh_token, {
        path: "/",
        httpOnly: false,
        secure: true,
        sameSite: "lax",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      })
    }

    return session
  }

  return resolve(event, {
    filterSerializedResponseHeaders(name) {
      return name === "content-range"
    },
  })
}
