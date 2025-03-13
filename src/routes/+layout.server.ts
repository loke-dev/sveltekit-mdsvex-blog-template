import type { LayoutServerLoad } from "./$types"

export const load: LayoutServerLoad = async ({ locals: { getSession }, depends }) => {
  // This tells SvelteKit to re-run this load function when the 'supabase:auth' dependency changes
  depends("supabase:auth")

  return {
    session: await getSession(),
  }
}
