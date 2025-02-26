import{S as ae,i as ie,s as re,L as ne,k as m,a as R,F as S,l as p,m as d,c as G,h as o,G as P,n as t,b as F,C as n,N as ce,O as oe,P as fe,g as ue,d as de,q as te,r as le,u as se,R as Y}from"../chunks/index.8762ca70.js";function Z(c){let e,s;return{c(){e=m("span"),s=te(c[0]),this.h()},l(l){e=p(l,"SPAN",{class:!0});var i=d(e);s=le(i,c[0]),i.forEach(o),this.h()},h(){t(e,"class","text-base text-primary font-semibold tracking-wide")},m(l,i){F(l,e,i),n(e,s)},p(l,i){i&1&&se(s,l[0])},d(l){l&&o(e)}}}function $(c){let e,s;return{c(){e=m("h3"),s=te(c[1]),this.h()},l(l){e=p(l,"H3",{class:!0});var i=d(e);s=le(i,c[1]),i.forEach(o),this.h()},h(){t(e,"class","mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-100 sm:text-4xl}")},m(l,i){F(l,e,i),n(e,s)},p(l,i){i&2&&se(s,l[1])},d(l){l&&o(e)}}}function ee(c){let e,s,l,i,u,h;return{c(){e=m("picture"),s=m("source"),i=R(),u=m("img"),this.h()},l(f){e=p(f,"PICTURE",{});var a=d(e);s=p(a,"SOURCE",{srcset:!0,type:!0}),i=G(a),u=p(a,"IMG",{class:!0,src:!0,alt:!0,width:!0,height:!0}),a.forEach(o),this.h()},h(){t(s,"srcset",l=`${c[2]}.webp`),t(s,"type","image/webp"),t(u,"class","rounded-lg shadow-lg bg-white object-contain object-center"),Y(u.src,h=`${c[2]}.png`)||t(u,"src",h),t(u,"alt",c[1]),t(u,"width",370),t(u,"height",370)},m(f,a){F(f,e,a),n(e,s),n(e,i),n(e,u)},p(f,a){a&4&&l!==(l=`${f[2]}.webp`)&&t(s,"srcset",l),a&4&&!Y(u.src,h=`${f[2]}.png`)&&t(u,"src",h),a&2&&t(u,"alt",f[1])},d(f){f&&o(e)}}}function he(c){let e,s,l,i,u,h,f,a,w,x,I,k,N,V,C,D,A,y,U,q,g=c[0]&&Z(c),_=c[1]&&$(c),v=c[2]&&ee(c);const H=c[5].default,b=ne(H,c,c[4],null);return{c(){e=m("div"),s=m("div"),l=m("div"),g&&g.c(),i=R(),_&&_.c(),u=R(),h=m("div"),f=m("div"),a=S("svg"),w=S("defs"),x=S("pattern"),I=S("rect"),k=S("rect"),N=R(),V=m("div"),C=m("figure"),D=m("div"),v&&v.c(),A=R(),y=m("div"),U=m("div"),b&&b.c(),this.h()},l(r){e=p(r,"DIV",{class:!0});var E=d(e);s=p(E,"DIV",{class:!0});var M=d(s);l=p(M,"DIV",{});var O=d(l);g&&g.l(O),i=G(O),_&&_.l(O),O.forEach(o),M.forEach(o),u=G(E),h=p(E,"DIV",{class:!0});var j=d(h);f=p(j,"DIV",{class:!0});var B=d(f);a=P(B,"svg",{class:!0,width:!0,height:!0,fill:!0,viewBox:!0,"aria-hidden":!0});var L=d(a);w=P(L,"defs",{});var T=d(w);x=P(T,"pattern",{id:!0,x:!0,y:!0,width:!0,height:!0,patternUnits:!0});var z=d(x);I=P(z,"rect",{x:!0,y:!0,width:!0,height:!0,class:!0,fill:!0}),d(I).forEach(o),z.forEach(o),T.forEach(o),k=P(L,"rect",{width:!0,height:!0,fill:!0}),d(k).forEach(o),L.forEach(o),N=G(B),V=p(B,"DIV",{class:!0});var J=d(V);C=p(J,"FIGURE",{});var K=d(C);D=p(K,"DIV",{class:!0});var Q=d(D);v&&v.l(Q),Q.forEach(o),K.forEach(o),J.forEach(o),B.forEach(o),A=G(j),y=p(j,"DIV",{class:!0});var W=d(y);U=p(W,"DIV",{class:!0});var X=d(U);b&&b.l(X),X.forEach(o),W.forEach(o),j.forEach(o),E.forEach(o),this.h()},h(){t(s,"class","mx-auto text-base max-w-prose lg:grid lg:grid-cols-2 lg:gap-8 lg:max-w-none"),t(I,"x",0),t(I,"y",0),t(I,"width",4),t(I,"height",4),t(I,"class","text-faded"),t(I,"fill","currentColor"),t(x,"id","square-pattern"),t(x,"x",0),t(x,"y",0),t(x,"width",20),t(x,"height",20),t(x,"patternUnits","userSpaceOnUse"),t(k,"width",404),t(k,"height",384),t(k,"fill","url(#square-pattern)"),t(a,"class","hidden lg:block absolute top-0 right-0 -mt-20 -mr-20"),t(a,"width",404),t(a,"height",384),t(a,"fill","none"),t(a,"viewBox","0 0 404 384"),t(a,"aria-hidden","true"),t(D,"class","aspect-w-12 aspect-h-7 lg:aspect-none"),t(V,"class","relative text-base mx-auto max-w-prose lg:max-w-none"),t(f,"class","relative lg:row-start-1 lg:col-start-2"),t(U,"class","prose mx-auto lg:max-w-none lg:row-start-1 lg:col-start-1"),t(y,"class","mt-8 lg:mt-0"),t(h,"class","mt-8 lg:grid lg:grid-cols-2 lg:gap-8"),t(e,"class","relative max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8")},m(r,E){F(r,e,E),n(e,s),n(s,l),g&&g.m(l,null),n(l,i),_&&_.m(l,null),n(e,u),n(e,h),n(h,f),n(f,a),n(a,w),n(w,x),n(x,I),n(a,k),n(f,N),n(f,V),n(V,C),n(C,D),v&&v.m(D,null),n(h,A),n(h,y),n(y,U),b&&b.m(U,null),q=!0},p(r,[E]){r[0]?g?g.p(r,E):(g=Z(r),g.c(),g.m(l,i)):g&&(g.d(1),g=null),r[1]?_?_.p(r,E):(_=$(r),_.c(),_.m(l,null)):_&&(_.d(1),_=null),r[2]?v?v.p(r,E):(v=ee(r),v.c(),v.m(D,null)):v&&(v.d(1),v=null),b&&b.p&&(!q||E&16)&&ce(b,H,r,r[4],q?fe(H,r[4],E,null):oe(r[4]),null)},i(r){q||(ue(b,r),q=!0)},o(r){de(b,r),q=!1},d(r){r&&o(e),g&&g.d(),_&&_.d(),v&&v.d(),b&&b.d(r)}}}function ge(c,e,s){let{$$slots:l={},$$scope:i}=e;const u="right";let{prefix:h=void 0}=e,{title:f=void 0}=e,{image:a=void 0}=e;return c.$$set=w=>{"prefix"in w&&s(0,h=w.prefix),"title"in w&&s(1,f=w.title),"image"in w&&s(2,a=w.image),"$$scope"in w&&s(4,i=w.$$scope)},[h,f,a,u,i,l]}class ve extends ae{constructor(e){super(),ie(this,e,ge,he,re,{variant:3,prefix:0,title:1,image:2})}get variant(){return this.$$.ctx[3]}}export{ve as component};
