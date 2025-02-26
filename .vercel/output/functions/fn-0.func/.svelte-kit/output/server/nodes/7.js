

export const index = 7;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/7.616bcd2a.js","_app/immutable/chunks/index.8762ca70.js"];
export const stylesheets = [];
export const fonts = [];
