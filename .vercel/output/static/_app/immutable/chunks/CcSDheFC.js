import{f as y,h as m,d as g,E as k,l as p,m as w,o as P}from"./BfQri65O.js";function A(u,i,a){m&&g();var c=u,r,o;y(()=>{r!==(r=i())&&(o&&(w(o),o=null),r&&(o=p(()=>a(c,r))))},k),m&&(c=P)}const R="modulepreload",S=function(u,i){return new URL(u,i).href},v={},C=function(i,a,c){let r=Promise.resolve();if(a&&a.length>0){const s=document.getElementsByTagName("link"),e=document.querySelector("meta[property=csp-nonce]"),h=(e==null?void 0:e.nonce)||(e==null?void 0:e.getAttribute("nonce"));r=Promise.allSettled(a.map(t=>{if(t=S(t,c),t in v)return;v[t]=!0;const l=t.endsWith(".css"),E=l?'[rel="stylesheet"]':"";if(!!c)for(let f=s.length-1;f>=0;f--){const d=s[f];if(d.href===t&&(!l||d.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${t}"]${E}`))return;const n=document.createElement("link");if(n.rel=l?"stylesheet":R,l||(n.as="script"),n.crossOrigin="",n.href=t,h&&n.setAttribute("nonce",h),document.head.appendChild(n),l)return new Promise((f,d)=>{n.addEventListener("load",f),n.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${t}`)))})}))}function o(s){const e=new Event("vite:preloadError",{cancelable:!0});if(e.payload=s,window.dispatchEvent(e),!e.defaultPrevented)throw s}return r.then(s=>{for(const e of s||[])e.status==="rejected"&&o(e.reason);return i().catch(o)})};export{C as _,A as c};
