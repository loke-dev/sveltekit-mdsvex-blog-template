import { createClient } from "@supabase/supabase-js"
import { SUPABASE_URL, SUPABASE_ANON_KEY } from "$lib/env"
import { browser } from "$app/environment"

// Ensure we have non-empty values
const url = SUPABASE_URL || "https://aegdighcrzwfyvjmiwva.supabase.co"
const key =
  SUPABASE_ANON_KEY ||
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZ2RpZ2hjcnp3Znl2am1pd3ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTMxNjYsImV4cCI6MjA1NzQ2OTE2Nn0.3OLMzjLI_r9PS3Rp0uZPScyIMRDrxTWHyvyXkmlRiUI"

// Create the Supabase client with our environment variables
export const supabase = createClient(url, key, {
  auth: {
    persistSession: true,
    autoRefreshToken: true,
    detectSessionInUrl: browser,
    flowType: "pkce",
  },
})
