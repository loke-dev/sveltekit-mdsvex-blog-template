import { injectSpeedInsights } from '@vercel/speed-insights/sveltekit';

// This will automatically inject the Speed Insights script in production
// It does not track data in development mode
injectSpeedInsights();

export const prerender = true;