import{S as ne,i as oe,s as ae,k as d,a as U,q as j,l as u,m as L,h as s,c as K,r as F,n,b as Q,C as a,K as G,o as le,j as re,y as se,M as ie,z as ce,A as de,g as ue,d as he,B as pe}from"../chunks/index.8762ca70.js";function me(Y){let p,r,g,f,m,S,A,l,b,y,w,_,v,$,T;return{c(){p=d("div"),r=d("canvas"),g=U(),f=d("div"),m=d("h2"),S=j("Welcome to"),A=U(),l=d("h1"),b=j("Loke "),y=d("span"),w=j("—"),_=d("br"),v=d("span"),$=j("—"),T=j(" Dev"),this.h()},l(k){p=u(k,"DIV",{class:!0});var M=L(p);r=u(M,"CANVAS",{id:!0,class:!0}),L(r).forEach(s),g=K(M),f=u(M,"DIV",{class:!0});var C=L(f);m=u(C,"H2",{class:!0});var E=L(m);S=F(E,"Welcome to"),E.forEach(s),A=K(C),l=u(C,"H1",{class:!0});var q=L(l);b=F(q,"Loke "),y=u(q,"SPAN",{class:!0});var R=L(y);w=F(R,"—"),R.forEach(s),_=u(q,"BR",{class:!0}),v=u(q,"SPAN",{class:!0});var W=L(v);$=F(W,"—"),W.forEach(s),T=F(q," Dev"),q.forEach(s),C.forEach(s),M.forEach(s),this.h()},h(){n(r,"id","hero-canvas"),n(r,"class","svelte-gg95x8"),n(m,"class","prefix svelte-gg95x8"),n(y,"class","svelte-gg95x8"),n(_,"class","svelte-gg95x8"),n(v,"class","svelte-gg95x8"),n(l,"class","title svelte-gg95x8"),n(f,"class","hero-content svelte-gg95x8"),n(p,"class","hero fullWidth svelte-gg95x8")},m(k,M){Q(k,p,M),a(p,r),a(p,g),a(p,f),a(f,m),a(m,S),a(f,A),a(f,l),a(l,b),a(l,y),a(y,w),a(l,_),a(l,v),a(v,$),a(l,T)},p:G,i:G,o:G,d(k){k&&s(p)}}}const fe="#c6c7c950",N=15,X=45,ee=400,J=200,ve=2.25,ge=.3,te=.7,ye=50;function we(Y){const p=[];let r=1,g=[],f=!1,m,S,A,l=null,b=!1,y=null,w=null,_=!1,v=null;const $=t=>{var h;const e=t.getBoundingClientRect();f=!1,t.width=e.width*r,t.height=e.height*r,m=Math.floor(e.width/(N+X)),S=Math.floor(e.height/(N+X)+.5);const i=(h=document.querySelector(".hero-content"))==null?void 0:h.getBoundingClientRect();if(!i)return;const c=t.getBoundingClientRect();A={x:(i.left-c.left)*r,y:(i.top-c.top)*r,width:i.width*r,height:i.height*r};const x=(e.width-(m*(N+X)-X))/2,o=10;g=[];for(let D=0;D<m;D++){let z=[];for(let P=0;P<S;P++){const O=x+D*(N+X),B=o+P*(N+X),V={opacity:.01,targetOpacity:.01,x:O*r,y:B*r,width:N*r,height:N*r,centerX:O*r+N*r/2,centerY:B*r+N*r/2,draw:!1};V.draw=!T(A,V),z.push(V)}g.push(z)}},T=(t,e)=>{let i=!1,c=!1;return(e.x+e.width>t.x&&e.x+e.width<t.x+t.width||e.x>t.x&&e.x<t.x+t.width)&&(i=!0),(e.y+e.height>t.y&&e.y+e.height<t.y+t.height||e.y>t.y&&e.y<t.y+t.height)&&(c=!0),c&&i},k=t=>{if(b)return;const e=t.getContext("2d",{willReadFrequently:!0});if(!e)return;const i=500;let c=e.createLinearGradient(0,0,i,0);if($(t),c.addColorStop(1/3*0,"#fc44e4"),c.addColorStop(1/3*1,"#4b2ec6"),c.addColorStop(1/3*2,"#FFBA02"),c.addColorStop(1/3*3,"#FF295D"),e.fillStyle=c,e.fillRect(0,0,i,2),p.length===0)for(let x=0;x<J;x++){const o=e.getImageData(x*(i/J),1,1,1).data;p.push({r:o[0],g:o[1],b:o[2]})}b=!0,M(t)},M=t=>{if(f){window.requestAnimationFrame(()=>M(t));return}const e=t.getContext("2d",{willReadFrequently:!0});if(!e)return;let i=!1;e.clearRect(0,0,t.width,t.height);for(let c=0;c<S;c++)for(let x=0;x<m;x++){const o=g[x][c];o.targetOpacity!==void 0&&Math.abs(o.opacity-o.targetOpacity)>.001&&(o.opacity+=(o.targetOpacity-o.opacity)*ge,i=!0);const h=o.opacity>.02?1+o.opacity*ve:1,D=o.width*h,z=o.height*h,P=(D-o.width)/2;if(o.draw!=!1&&(e.fillStyle=fe,e.fillRect(o.x-P,o.y-P,D,z),o.opacity>.02)){const O=Math.floor(x/m*J+.5),B=p[O];e.fillStyle=`rgba(${B.r}, ${B.g}, ${B.b}, ${o.opacity})`,e.fillRect(o.x-P,o.y-P,D,z)}}i||(f=!0),window.requestAnimationFrame(()=>M(t))},C=t=>{f=!1,y=t;for(let e=0;e<m;e++)for(let i=0;i<S;i++){const c=g[e][i],x=Math.abs(t.x*r-c.centerX),o=Math.abs(t.y*r-c.centerY),h=Math.sqrt(o*o+x*x);if(h<ee){const D=1-h/ee;c.targetOpacity=D,_||(c.opacity=c.opacity*te+D*(1-te))}else c.targetOpacity=.01}},E=()=>{y&&C(y)},q=()=>{_=!0},R=t=>{if(!l)return;v!==null&&(window.clearTimeout(v),v=null),_=!1,v=window.setTimeout(q,ye);const e=l.getBoundingClientRect();C({x:t.clientX-e.left,y:t.clientY-e.top})},W=()=>{w===null&&(w=window.setInterval(E,100))},H=()=>{w!==null&&(window.clearInterval(w),w=null),v!==null&&(window.clearTimeout(v),v=null),_=!1,y=null;for(let t=0;t<m;t++)for(let e=0;e<S;e++)g[t]&&g[t][e]&&(g[t][e].targetOpacity=.01)},I=()=>{l&&(r=window.devicePixelRatio,k(l),l.addEventListener("mousemove",R),l.addEventListener("mouseenter",W),l.addEventListener("mouseleave",H))};return le(()=>(window.addEventListener("resize",()=>{l&&$(l)}),()=>{window.removeEventListener("resize",()=>{l&&$(l)}),l&&(l.removeEventListener("mousemove",R),l.removeEventListener("mouseenter",W),l.removeEventListener("mouseleave",H)),w!==null&&window.clearInterval(w),v!==null&&window.clearTimeout(v)})),re(()=>{!b&&!l&&(l=document.querySelector("#hero-canvas"),l&&I())}),[]}class xe extends ne{constructor(p){super(),oe(this,p,we,me,ae,{})}}function _e(Y){let p,r,g,f,m,S,A,l,b,y,w,_,v,$,T,k,M,C,E,q,R,W,H,I,t,e,i,c,x;return k=new xe({}),{c(){p=d("meta"),r=d("meta"),g=d("meta"),f=d("meta"),m=d("meta"),S=d("meta"),A=d("meta"),l=d("meta"),b=d("meta"),y=d("meta"),w=d("meta"),_=d("script"),v=j(`{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Loke",
    "url": "https://loke.dev",
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Loke.dev"
    },
    "sameAs": [
      "https://github.com/loke-dev",
      "https://twitter.com/loke_dev"
    ]
  }`),$=U(),T=d("section"),se(k.$$.fragment),M=U(),C=d("div"),E=d("p"),q=j("Contact me via "),R=d("a"),W=j("Email"),H=j(` or find me on other medias:
      `),I=d("a"),t=j("Github"),e=j(`
      | `),i=d("a"),c=j("Twitter"),this.h()},l(o){const h=ie("svelte-1pakcd8",document.head);p=u(h,"META",{name:!0,content:!0}),r=u(h,"META",{name:!0,content:!0}),g=u(h,"META",{property:!0,content:!0}),f=u(h,"META",{property:!0,content:!0}),m=u(h,"META",{property:!0,content:!0}),S=u(h,"META",{property:!0,content:!0}),A=u(h,"META",{property:!0,content:!0}),l=u(h,"META",{name:!0,content:!0}),b=u(h,"META",{name:!0,content:!0}),y=u(h,"META",{name:!0,content:!0}),w=u(h,"META",{name:!0,content:!0}),_=u(h,"SCRIPT",{type:!0});var D=L(_);v=F(D,`{
    "@context": "https://schema.org",
    "@type": "Person",
    "name": "Loke",
    "url": "https://loke.dev",
    "jobTitle": "Web Developer",
    "worksFor": {
      "@type": "Organization",
      "name": "Loke.dev"
    },
    "sameAs": [
      "https://github.com/loke-dev",
      "https://twitter.com/loke_dev"
    ]
  }`),D.forEach(s),h.forEach(s),$=K(o),T=u(o,"SECTION",{});var z=L(T);ce(k.$$.fragment,z),M=K(z),C=u(z,"DIV",{class:!0});var P=L(C);E=u(P,"P",{});var O=L(E);q=F(O,"Contact me via "),R=u(O,"A",{href:!0,class:!0,"aria-label":!0});var B=L(R);W=F(B,"Email"),B.forEach(s),H=F(O,` or find me on other medias:
      `),I=u(O,"A",{href:!0,class:!0,rel:!0,"aria-label":!0});var V=L(I);t=F(V,"Github"),V.forEach(s),e=F(O,`
      | `),i=u(O,"A",{href:!0,class:!0,rel:!0,"aria-label":!0});var Z=L(i);c=F(Z,"Twitter"),Z.forEach(s),O.forEach(s),P.forEach(s),z.forEach(s),this.h()},h(){document.title="Loke.dev | Web Developer",n(p,"name","description"),n(p,"content","Loke is a web developer based in Sweden. Specializing in fullstack development with expertise in React, Svelte, Node.js, and TypeScript."),n(r,"name","keywords"),n(r,"content","web developer, fullstack developer, software engineer, Sweden, React, Svelte, Node.js, TypeScript"),n(g,"property","og:title"),n(g,"content","Loke.dev | Web Developer"),n(f,"property","og:type"),n(f,"content","website"),n(m,"property","og:url"),n(m,"content","https://loke.dev/"),n(S,"property","og:image"),n(S,"content","https://loke.dev/images/og-image.jpg"),n(A,"property","og:description"),n(A,"content","Loke is a web developer based in Sweden. Specializing in fullstack development with expertise in React, Svelte, Node.js, and TypeScript."),n(l,"name","twitter:title"),n(l,"content","Loke.dev | Web Developer"),n(b,"name","twitter:description"),n(b,"content","Loke is a web developer based in Sweden. Specializing in fullstack development with expertise in React, Svelte, Node.js, and TypeScript."),n(y,"name","twitter:image"),n(y,"content","https://loke.dev/images/og-image.jpg"),n(w,"name","Cache-Control"),n(w,"content","max-age=86400, stale-while-revalidate=604800"),n(_,"type","application/ld+json"),n(R,"href","mailto:hello@loke.dev"),n(R,"class","footer-link svelte-rlge40"),n(R,"aria-label","Send email to hello@loke.dev"),n(I,"href","https://github.com/loke-dev"),n(I,"class","footer-link svelte-rlge40"),n(I,"rel","noopener noreferrer"),n(I,"aria-label","Visit my GitHub profile"),n(i,"href","https://twitter.com/loke_dev"),n(i,"class","footer-link svelte-rlge40"),n(i,"rel","noopener noreferrer"),n(i,"aria-label","Visit my Twitter profile"),n(C,"class","flex flex-col items-center text-center mt-20")},m(o,h){a(document.head,p),a(document.head,r),a(document.head,g),a(document.head,f),a(document.head,m),a(document.head,S),a(document.head,A),a(document.head,l),a(document.head,b),a(document.head,y),a(document.head,w),a(document.head,_),a(_,v),Q(o,$,h),Q(o,T,h),de(k,T,null),a(T,M),a(T,C),a(C,E),a(E,q),a(E,R),a(R,W),a(E,H),a(E,I),a(I,t),a(E,e),a(E,i),a(i,c),x=!0},p:G,i(o){x||(ue(k.$$.fragment,o),x=!0)},o(o){he(k.$$.fragment,o),x=!1},d(o){s(p),s(r),s(g),s(f),s(m),s(S),s(A),s(l),s(b),s(y),s(w),s(_),o&&s($),o&&s(T),pe(k)}}}class ke extends ne{constructor(p){super(),oe(this,p,null,_e,ae,{})}}export{ke as component};
