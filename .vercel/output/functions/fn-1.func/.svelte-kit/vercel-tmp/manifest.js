export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.svg","icon-192.png","icon-512.png","images/abstract.png","images/gitdash.png","images/gitdash.webp","images/jam.png","images/loke-dev-intro.png","images/loke.png","images/loke.webp","images/shortname.png","manifest.json","robots.txt","service-worker.js","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".json":"application/json",".txt":"text/plain",".js":"application/javascript",".xml":"application/xml"},
	_: {
		client: {"start":"_app/immutable/entry/start.6216604f.js","app":"_app/immutable/entry/app.c7aa213b.js","imports":["_app/immutable/entry/start.6216604f.js","_app/immutable/chunks/index.8762ca70.js","_app/immutable/chunks/singletons.35011bb4.js","_app/immutable/chunks/control.f5b05b5f.js","_app/immutable/entry/app.c7aa213b.js","_app/immutable/chunks/preload-helper.a4192956.js","_app/immutable/chunks/index.8762ca70.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			__memo(() => import('../output/server/nodes/0.js')),
			__memo(() => import('../output/server/nodes/1.js')),
			__memo(() => import('../output/server/nodes/8.js'))
		],
		routes: [
			{
				id: "/test",
				pattern: /^\/test\/?$/,
				params: [],
				page: { layouts: [0,], errors: [1,], leaf: 2 },
				endpoint: null
			}
		],
		matchers: async () => {
			
			return {  };
		}
	}
}
})();
