import{aw as l,ax as f,ay as y,a2 as g,x as E,q as L,y as S,_ as B}from"./BfQri65O.js";function O(r){var a=y,i=g;l(null),f(null);try{return r()}finally{l(a),f(i)}}const M=new Set,N=new Set;function T(r,a,i,c={}){function e(t){if(c.capture||W.call(a,t),!t.cancelBubble)return O(()=>i==null?void 0:i.call(this,t))}return r.startsWith("pointer")||r.startsWith("touch")||r==="wheel"?L(()=>{a.addEventListener(r,e,c)}):a.addEventListener(r,e,c),e}function P(r,a,i,c,e){var t={capture:c,passive:e},u=T(r,a,i,t);(a===document.body||a===window||a===document)&&E(()=>{a.removeEventListener(r,u,t)})}function W(r){var d;var a=this,i=a.ownerDocument,c=r.type,e=((d=r.composedPath)==null?void 0:d.call(r))||[],t=e[0]||r.target,u=0,v=r.__root;if(v){var _=e.indexOf(v);if(_!==-1&&(a===document||a===window)){r.__root=a;return}var h=e.indexOf(a);if(h===-1)return;_<=h&&(u=_)}if(t=e[u]||r.target,t!==a){S(r,"currentTarget",{configurable:!0,get(){return t||i}});var b=y,x=g;l(null),f(null);try{for(var n,w=[];t!==null;){var p=t.assignedSlot||t.parentNode||t.host||null;try{var o=t["__"+c];if(o!==void 0&&(!t.disabled||r.target===t))if(B(o)){var[k,...q]=o;k.apply(t,[r,...q])}else o.call(t,r)}catch(s){n?w.push(s):n=s}if(r.cancelBubble||p===a||p===null)break;t=p}if(n){for(let s of w)queueMicrotask(()=>{throw s});throw n}}finally{r.__root=a,delete r.currentTarget,l(b),f(x)}}}export{M as a,P as e,W as h,N as r,O as w};
