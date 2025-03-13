import { sveltekit } from "@sveltejs/kit/vite"
import { defineConfig } from 'vite'
import dotenv from 'dotenv'

// Load environment variables from .env file
dotenv.config()

/** @type {import('vite').UserConfig} */
export default defineConfig({
  plugins: [sveltekit()],
  // Make sure Vite properly loads environment variables
  define: {
    // For better error messages during development
    'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
    // Explicitly define environment variables with fallbacks
    'import.meta.env.PUBLIC_SUPABASE_URL': JSON.stringify(
      process.env.PUBLIC_SUPABASE_URL || 'https://aegdighcrzwfyvjmiwva.supabase.co'
    ),
    'import.meta.env.PUBLIC_SUPABASE_ANON_KEY': JSON.stringify(
      process.env.PUBLIC_SUPABASE_ANON_KEY || 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImFlZ2RpZ2hjcnp3Znl2am1pd3ZhIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE4OTMxNjYsImV4cCI6MjA1NzQ2OTE2Nn0.3OLMzjLI_r9PS3Rp0uZPScyIMRDrxTWHyvyXkmlRiUI'
    )
  },
  // Ensure environment variables are properly loaded
  envPrefix: ['VITE_', 'PUBLIC_']
})
