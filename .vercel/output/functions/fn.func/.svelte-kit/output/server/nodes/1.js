

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.be16dbae.js","_app/immutable/chunks/index.8762ca70.js","_app/immutable/chunks/stores.83e14750.js","_app/immutable/chunks/singletons.35011bb4.js"];
export const stylesheets = [];
export const fonts = [];
