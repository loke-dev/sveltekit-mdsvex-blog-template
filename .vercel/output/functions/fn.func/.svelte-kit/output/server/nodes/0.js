

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.a74fd74a.js","_app/immutable/chunks/index.8762ca70.js","_app/immutable/chunks/stores.b8968a5a.js","_app/immutable/chunks/singletons.f76b9d74.js","_app/immutable/chunks/index.0e2713aa.js"];
export const stylesheets = ["_app/immutable/assets/0.4f35da9d.css"];
export const fonts = [];
