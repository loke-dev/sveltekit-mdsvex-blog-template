

export const index = 8;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/test/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/8.311a0eef.js","_app/immutable/chunks/index.8762ca70.js"];
export const stylesheets = [];
export const fonts = [];
