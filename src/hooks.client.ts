import { invalidate } from "$app/navigation"
import { supabase } from "$lib/supabase"

// Setup Supabase auth state change listener
supabase.auth.onAuthStateChange((event, session) => {
  console.log("Auth state changed:", event, !!session)

  if (event === "SIGNED_IN" || event === "TOKEN_REFRESHED") {
    // When user signs in or token is refreshed, invalidate all data to refresh the UI
    invalidate("supabase:auth")
  }

  if (event === "SIGNED_OUT") {
    // When user signs out, invalidate all data to refresh the UI
    invalidate("supabase:auth")
  }
})
