export const manifest = (() => {
function __memo(fn) {
	let value;
	return () => value ??= (value = fn());
}

return {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["apple-touch-icon.png","favicon.svg","icon-192.png","icon-512.png","images/abstract.png","images/gitdash.png","images/gitdash.webp","images/jam.png","images/loke-dev-intro.png","images/loke.png","images/loke.webp","images/shortname.png","manifest.json","robots.txt","service-worker.js","sitemap.xml"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".webp":"image/webp",".json":"application/json",".txt":"text/plain",".js":"text/javascript",".xml":"text/xml"},
	_: {
		client: {start:"_app/immutable/entry/start.BWfFn2lm.js",app:"_app/immutable/entry/app.CRbp2eRe.js",imports:["_app/immutable/entry/start.BWfFn2lm.js","_app/immutable/chunks/DZTzMuU2.js","_app/immutable/chunks/BfQri65O.js","_app/immutable/chunks/D9tBICCU.js","_app/immutable/chunks/CYgJF_JY.js","_app/immutable/chunks/Dhqd5EEV.js","_app/immutable/entry/app.CRbp2eRe.js","_app/immutable/chunks/CcSDheFC.js","_app/immutable/chunks/BfQri65O.js","_app/immutable/chunks/gqZiSrzS.js","_app/immutable/chunks/Cm_gkIrD.js","_app/immutable/chunks/woIyr73P.js","_app/immutable/chunks/C6tKUGEb.js","_app/immutable/chunks/C0LnzapF.js","_app/immutable/chunks/DOzosC6K.js","_app/immutable/chunks/D9tBICCU.js","_app/immutable/chunks/5EhBnL9V.js","_app/immutable/chunks/Dhqd5EEV.js"],stylesheets:[],fonts:[],uses_env_dynamic_public:false},
		nodes: [
			
		],
		routes: [
			
		],
		prerendered_routes: new Set(["/","/about","/contact","/journal","/journal/__data.json","/projects","/test","/journal/understanding-web-accessibility-for-beginners","/journal/mastering-command-line-basics","/journal/understanding-api-requests-for-beginners","/journal/javascript-array-methods-every-beginner-should-know","/journal/responsive-web-design-fundamentals","/journal/react-hooks-explained-for-beginners","/journal/git-basics-for-beginners","/journal/debugging-javascript-like-a-pro","/journal/css-flexbox-layout-simplified","/journal/understanding-javascript-promises-for-beginners","/journal/typescript-tips-for-better-code","/journal/modern-css-techniques-2023","/journal/web-accessibility-practical-guide","/journal/ai-tools-for-modern-web-development","/journal/nextjs-vs-sveltekit-choosing-the-right-framework","/journal/progressive-web-apps-in-2023","/journal/svelte-kit-for-beginners","/journal/the-power-of-chat-gpt-for-web-developers","/journal/tips-and-tricks-to-leverage-chat-gpt-as-a-web-developer","/journal/gridsome-netlify-forms","/journal/gridsome-disqus","/journal/jamstack"]),
		matchers: async () => {
			
			return {  };
		},
		server_assets: {}
	}
}
})();
