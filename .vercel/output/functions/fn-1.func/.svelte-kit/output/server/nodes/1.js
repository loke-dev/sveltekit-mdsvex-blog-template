

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.cd670d78.js","_app/immutable/chunks/index.8762ca70.js","_app/immutable/chunks/stores.b8968a5a.js","_app/immutable/chunks/singletons.f76b9d74.js"];
export const stylesheets = [];
export const fonts = [];
