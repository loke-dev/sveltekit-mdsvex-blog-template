// This file provides a consistent way to access environment variables
// across both server and client environments

import { browser } from "$app/environment"

// Helper function to safely get environment variables with fallbacks
function getEnv(key: string, fallback: string): string {
  if (browser) {
    return (import.meta.env[key] as string) || fallback
  }
  return process.env[key] || fallback
}

// Supabase environment variables with hardcoded fallbacks to prevent crashes
export const SUPABASE_URL = getEnv(
  "PUBLIC_SUPABASE_URL",
  "https://aegdighcrzwfyvjmiwva.supabase.co"
)

export const SUPABASE_ANON_KEY = getEnv(
  "PUBLIC_SUPABASE_ANON_KEY",
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZ2RpZ2hjcnp3Znl2am1pd3ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTMxNjYsImV4cCI6MjA1NzQ2OTE2Nn0.3OLMzjLI_r9PS3Rp0uZPScyIMRDrxTWHyvyXkmlRiUI"
)
