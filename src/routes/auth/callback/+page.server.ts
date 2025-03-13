import { redirect } from "@sveltejs/kit"
import type { RequestEvent } from "@sveltejs/kit"

export const load = async ({ url, cookies, locals }: RequestEvent) => {
  const code = url.searchParams.get("code")
  const next = url.searchParams.get("next") || "/journal"

  console.log("Auth callback received, code present:", !!code)
  console.log("Will redirect to:", next)

  if (code) {
    try {
      // Exchange the auth code for a session
      const { data, error } = await locals.supabase.auth.exchangeCodeForSession(code)

      if (error) {
        console.error("Error exchanging code for session:", error)
      } else if (data?.session) {
        console.log("Successfully exchanged code for session")
        console.log("User authenticated:", data.session.user.email)

        // Store the session in cookies
        cookies.set("sb-access-token", data.session.access_token, {
          path: "/",
          httpOnly: false,
          secure: true,
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 1 week
        })

        cookies.set("sb-refresh-token", data.session.refresh_token, {
          path: "/",
          httpOnly: false,
          secure: true,
          sameSite: "lax",
          maxAge: 60 * 60 * 24 * 7, // 1 week
        })
      }
    } catch (error) {
      console.error("Error in auth callback:", error)
    }
  }

  const redirectUrl = new URL(next, url.origin)
  redirectUrl.searchParams.set("auth_time", Date.now().toString())

  throw redirect(303, redirectUrl.toString())
}
