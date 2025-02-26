import{S as ti,i as oi,s as ii,k as a,a as u,q as r,l as s,m as h,h as t,c,r as n,R as li,n as p,b as l,C as o,K as no}from"./index.8762ca70.js";function ai(ei){let k,A,ho,me,we,be,y,ze,K,Ke,Qe,Q,Xe,$e,X,et,tt,ke,v,$,ot,it,ee,lt,at,te,st,rt,oe,nt,_e,D,ht,Ee,w,ie,ut,ct,le,pt,ft,ae,dt,ge,R,yt,Se,M,vt,Ne,F,mt,Ae,W,wt,Me,B,bt,Ge,G,kt,Ie,O,_t,xe,f,se,Et,gt,re,St,Nt,ne,At,Mt,he,Gt,It,ue,xt,Jt,ce,Pt,Je,I,Ct,Pe,d,pe,Tt,Lt,fe,Ht,jt,de,Yt,Dt,ye,Rt,Ft,ve,Wt,Ce,x,Bt,Te,J,Ot,Le,_,Zt,P,Ut,Vt,He,C,qt,je,E,zt,T,Kt,Qt,Ye,L,Xt,De,g,$t,H,eo,to,Re,j,oo,Fe,Z,io,We,Y,lo,Be,U,ao,Oe,V,so,Ze,q,ro;return{c(){k=a("p"),A=a("img"),me=u(),we=a("br"),be=u(),y=a("p"),ze=r("You might have heard the term JAMstack if you’re into web development at all. It is similar to the LAMP or MEAN stack, which describes a certain technology stack used in web development. But if you are unsure what it is all about, JAM stands for "),K=a("strong"),Ke=r("J"),Qe=r("avaScript, "),Q=a("strong"),Xe=r("A"),$e=r("PI, "),X=a("strong"),et=r("M"),tt=r("arkup. Some core characteristics of the JAMstack includes:"),ke=u(),v=a("ul"),$=a("li"),ot=r("Great performance"),it=u(),ee=a("li"),lt=r("High security"),at=u(),te=a("li"),st=r("Free or very cheap to host"),rt=u(),oe=a("li"),nt=r("Good developer experience"),_e=u(),D=a("p"),ht=r("This is the future way of building websites."),Ee=u(),w=a("ol"),ie=a("li"),ut=r("Pick a framework of your choosing, for example Gridsome, Gatsby or Hugo, or even go vanilla JavaScript if that’s your thing."),ct=u(),le=a("li"),pt=r("Add a headless CMS which you like, or simply use local markdown files directly in the project, for example Contentful, Netlify CMS or Forestry."),ft=u(),ae=a("li"),dt=r("Connect the project to a hosting service, for example Netlify or Now."),ge=u(),R=a("p"),yt=r("And you are done!"),Se=u(),M=a("h3"),vt=r("What is not JAMstack then?"),Ne=u(),F=a("p"),mt=r("When you are running a site with a server side CMS, most popular examples of this setup includes WordPress, Drupal and Joomla."),Ae=u(),W=a("p"),wt=r("If you have a single page application with isomorphic rendering, in other words a React application with server side rendering."),Me=u(),B=a("p"),bt=r("Or if you have a site that runs with a backend language like Ruby on Rails, Node.js or Java."),Ge=u(),G=a("h3"),kt=r("Best practices"),Ie=u(),O=a("p"),_t=r("There are a few best practices which will make the most out of you JAMstack site if you stick to them. These guidelines and best practices are mostly standard when you are working the most popular and largest frameworks and tools, but these are some key points to keep in mind when working with JAM."),xe=u(),f=a("ul"),se=a("li"),Et=r("Have your entire site live on a CDN, since JAMstack sites are just static files that gets generated on build, you can easily host the files on a CDN which gives you way more speed and performance compared to an application living on a server. A CDN also gives you way better geographical covering, giving you low latency whether you access the site from Alaska, Netherlands or New Zealand."),gt=u(),re=a("li"),St=r("Your entire application should be able to be version controlled on a service like Github, it should be easy to just clone the repository, install the dependencies and be good to go. There should not be any need to clone databases or setup complex development environment."),Nt=u(),ne=a("li"),At=r("You want to utilize modern build tool to help you use modern web standars while still be able to support old browsers. Here you have tools like Babel and Webpack to help with transpiling your modern ES6 and such to plain old JavaScript that old browsers can interpret."),Mt=u(),he=a("li"),Gt=r("Automated builds are very much needed when your site needs to be build every time you change the application. This can be handled with webhooks, or more convenient, use a service that provide this functionality right out of the box. Two of the most popular services, Netlify and Zeit’s Now is offering this."),It=u(),ue=a("li"),xt=r("Instant cache invalidation is a good way to keep your users updated with fresh content as your builds go live. There are different ways to achieve this, but again popular services like Netlify offers this out of the box."),Jt=u(),ce=a("li"),Pt=r("Functionality such as dynamic comments, authentication and additional dynamic fetching of data is all done through external APIs. These things load asynchronously on the client only."),Je=u(),I=a("h3"),Ct=r("Example workflow"),Pe=u(),d=a("ol"),pe=a("li"),Tt=r("Developing your application local"),Lt=u(),fe=a("li"),Ht=r("Commit your changes to Github"),jt=u(),de=a("li"),Yt=r("Automatically triggers an build on Netlify via webhooks"),Dt=u(),ye=a("li"),Rt=r("Static files are optimised and minified"),Ft=u(),ve=a("li"),Wt=r("CDN is updated and cache is invalidated"),Ce=u(),x=a("h3"),Bt=r("Getting started"),Te=u(),J=a("h4"),Ot=r("1. Pick your Static Site Generator"),Le=u(),_=a("p"),Zt=r("There are several great SSG’s out there, but some of the most popular ones are includes Gridsome, Nuxt, Next, Gatsby, Hugo and Jekyll. You can find SSG’s on this site: "),P=a("a"),Ut=r("https://www.staticgen.com/"),Vt=r("."),He=u(),C=a("h4"),qt=r("2. Find a hosting service"),je=u(),E=a("p"),zt=r("The most popular host today is by far Netlify, but also Zeit’s Now and Github Pages. You can find out more about hosting services here: "),T=a("a"),Kt=r("https://www.thenewdynamic.org/tools/hosting-deployment/"),Qt=r("."),Ye=u(),L=a("h4"),Xt=r("3. Use your preferred version control service"),De=u(),g=a("p"),$t=r("The most widely used and best supported service is "),H=a("a"),eo=r("Github"),to=r(" which is what I can recommend you chose if you aren’t invested into another service already. Microsoft has done a great job improving Github, and if you are using Visual Studio Code there are great integrations between them."),Re=u(),j=a("h4"),oo=r("4. Start hacking! 🎉"),Fe=u(),Z=a("p"),io=r("Now you can start coding and when you push your commits to Github, Netlify will automatically build and deploy your application, simple as that!"),We=u(),Y=a("h3"),lo=r("Vendor lock-in"),Be=u(),U=a("p"),ao=r("Since you are working with static files once your web app is built, you wont have any problems deploying anywhere. It is very easy to move your application to a new hosting service."),Oe=u(),V=a("p"),so=r("You also have the advantage when dealing with a headless CMS to more easily be able to move to another service since it is completely decoupled from the frontend."),Ze=u(),q=a("p"),ro=r("You also have the option to work with local markdown files in the project and using a service like Forestry to interact with the content as if they were located in an external CMS. This way you will have even more freedom of how you chose to interact with your content."),this.h()},l(e){k=s(e,"P",{});var i=h(k);A=s(i,"IMG",{src:!0,alt:!0,title:!0}),i.forEach(t),me=c(e),we=s(e,"BR",{}),be=c(e),y=s(e,"P",{});var S=h(y);ze=n(S,"You might have heard the term JAMstack if you’re into web development at all. It is similar to the LAMP or MEAN stack, which describes a certain technology stack used in web development. But if you are unsure what it is all about, JAM stands for "),K=s(S,"STRONG",{});var uo=h(K);Ke=n(uo,"J"),uo.forEach(t),Qe=n(S,"avaScript, "),Q=s(S,"STRONG",{});var co=h(Q);Xe=n(co,"A"),co.forEach(t),$e=n(S,"PI, "),X=s(S,"STRONG",{});var po=h(X);et=n(po,"M"),po.forEach(t),tt=n(S,"arkup. Some core characteristics of the JAMstack includes:"),S.forEach(t),ke=c(e),v=s(e,"UL",{});var N=h(v);$=s(N,"LI",{});var fo=h($);ot=n(fo,"Great performance"),fo.forEach(t),it=c(N),ee=s(N,"LI",{});var yo=h(ee);lt=n(yo,"High security"),yo.forEach(t),at=c(N),te=s(N,"LI",{});var vo=h(te);st=n(vo,"Free or very cheap to host"),vo.forEach(t),rt=c(N),oe=s(N,"LI",{});var mo=h(oe);nt=n(mo,"Good developer experience"),mo.forEach(t),N.forEach(t),_e=c(e),D=s(e,"P",{});var wo=h(D);ht=n(wo,"This is the future way of building websites."),wo.forEach(t),Ee=c(e),w=s(e,"OL",{});var z=h(w);ie=s(z,"LI",{});var bo=h(ie);ut=n(bo,"Pick a framework of your choosing, for example Gridsome, Gatsby or Hugo, or even go vanilla JavaScript if that’s your thing."),bo.forEach(t),ct=c(z),le=s(z,"LI",{});var ko=h(le);pt=n(ko,"Add a headless CMS which you like, or simply use local markdown files directly in the project, for example Contentful, Netlify CMS or Forestry."),ko.forEach(t),ft=c(z),ae=s(z,"LI",{});var _o=h(ae);dt=n(_o,"Connect the project to a hosting service, for example Netlify or Now."),_o.forEach(t),z.forEach(t),ge=c(e),R=s(e,"P",{});var Eo=h(R);yt=n(Eo,"And you are done!"),Eo.forEach(t),Se=c(e),M=s(e,"H3",{id:!0});var go=h(M);vt=n(go,"What is not JAMstack then?"),go.forEach(t),Ne=c(e),F=s(e,"P",{});var So=h(F);mt=n(So,"When you are running a site with a server side CMS, most popular examples of this setup includes WordPress, Drupal and Joomla."),So.forEach(t),Ae=c(e),W=s(e,"P",{});var No=h(W);wt=n(No,"If you have a single page application with isomorphic rendering, in other words a React application with server side rendering."),No.forEach(t),Me=c(e),B=s(e,"P",{});var Ao=h(B);bt=n(Ao,"Or if you have a site that runs with a backend language like Ruby on Rails, Node.js or Java."),Ao.forEach(t),Ge=c(e),G=s(e,"H3",{id:!0});var Mo=h(G);kt=n(Mo,"Best practices"),Mo.forEach(t),Ie=c(e),O=s(e,"P",{});var Go=h(O);_t=n(Go,"There are a few best practices which will make the most out of you JAMstack site if you stick to them. These guidelines and best practices are mostly standard when you are working the most popular and largest frameworks and tools, but these are some key points to keep in mind when working with JAM."),Go.forEach(t),xe=c(e),f=s(e,"UL",{});var m=h(f);se=s(m,"LI",{});var Io=h(se);Et=n(Io,"Have your entire site live on a CDN, since JAMstack sites are just static files that gets generated on build, you can easily host the files on a CDN which gives you way more speed and performance compared to an application living on a server. A CDN also gives you way better geographical covering, giving you low latency whether you access the site from Alaska, Netherlands or New Zealand."),Io.forEach(t),gt=c(m),re=s(m,"LI",{});var xo=h(re);St=n(xo,"Your entire application should be able to be version controlled on a service like Github, it should be easy to just clone the repository, install the dependencies and be good to go. There should not be any need to clone databases or setup complex development environment."),xo.forEach(t),Nt=c(m),ne=s(m,"LI",{});var Jo=h(ne);At=n(Jo,"You want to utilize modern build tool to help you use modern web standars while still be able to support old browsers. Here you have tools like Babel and Webpack to help with transpiling your modern ES6 and such to plain old JavaScript that old browsers can interpret."),Jo.forEach(t),Mt=c(m),he=s(m,"LI",{});var Po=h(he);Gt=n(Po,"Automated builds are very much needed when your site needs to be build every time you change the application. This can be handled with webhooks, or more convenient, use a service that provide this functionality right out of the box. Two of the most popular services, Netlify and Zeit’s Now is offering this."),Po.forEach(t),It=c(m),ue=s(m,"LI",{});var Co=h(ue);xt=n(Co,"Instant cache invalidation is a good way to keep your users updated with fresh content as your builds go live. There are different ways to achieve this, but again popular services like Netlify offers this out of the box."),Co.forEach(t),Jt=c(m),ce=s(m,"LI",{});var To=h(ce);Pt=n(To,"Functionality such as dynamic comments, authentication and additional dynamic fetching of data is all done through external APIs. These things load asynchronously on the client only."),To.forEach(t),m.forEach(t),Je=c(e),I=s(e,"H3",{id:!0});var Lo=h(I);Ct=n(Lo,"Example workflow"),Lo.forEach(t),Pe=c(e),d=s(e,"OL",{});var b=h(d);pe=s(b,"LI",{});var Ho=h(pe);Tt=n(Ho,"Developing your application local"),Ho.forEach(t),Lt=c(b),fe=s(b,"LI",{});var jo=h(fe);Ht=n(jo,"Commit your changes to Github"),jo.forEach(t),jt=c(b),de=s(b,"LI",{});var Yo=h(de);Yt=n(Yo,"Automatically triggers an build on Netlify via webhooks"),Yo.forEach(t),Dt=c(b),ye=s(b,"LI",{});var Do=h(ye);Rt=n(Do,"Static files are optimised and minified"),Do.forEach(t),Ft=c(b),ve=s(b,"LI",{});var Ro=h(ve);Wt=n(Ro,"CDN is updated and cache is invalidated"),Ro.forEach(t),b.forEach(t),Ce=c(e),x=s(e,"H3",{id:!0});var Fo=h(x);Bt=n(Fo,"Getting started"),Fo.forEach(t),Te=c(e),J=s(e,"H4",{id:!0});var Wo=h(J);Ot=n(Wo,"1. Pick your Static Site Generator"),Wo.forEach(t),Le=c(e),_=s(e,"P",{});var Ue=h(_);Zt=n(Ue,"There are several great SSG’s out there, but some of the most popular ones are includes Gridsome, Nuxt, Next, Gatsby, Hugo and Jekyll. You can find SSG’s on this site: "),P=s(Ue,"A",{href:!0,rel:!0});var Bo=h(P);Ut=n(Bo,"https://www.staticgen.com/"),Bo.forEach(t),Vt=n(Ue,"."),Ue.forEach(t),He=c(e),C=s(e,"H4",{id:!0});var Oo=h(C);qt=n(Oo,"2. Find a hosting service"),Oo.forEach(t),je=c(e),E=s(e,"P",{});var Ve=h(E);zt=n(Ve,"The most popular host today is by far Netlify, but also Zeit’s Now and Github Pages. You can find out more about hosting services here: "),T=s(Ve,"A",{href:!0,rel:!0});var Zo=h(T);Kt=n(Zo,"https://www.thenewdynamic.org/tools/hosting-deployment/"),Zo.forEach(t),Qt=n(Ve,"."),Ve.forEach(t),Ye=c(e),L=s(e,"H4",{id:!0});var Uo=h(L);Xt=n(Uo,"3. Use your preferred version control service"),Uo.forEach(t),De=c(e),g=s(e,"P",{});var qe=h(g);$t=n(qe,"The most widely used and best supported service is "),H=s(qe,"A",{href:!0,rel:!0});var Vo=h(H);eo=n(Vo,"Github"),Vo.forEach(t),to=n(qe," which is what I can recommend you chose if you aren’t invested into another service already. Microsoft has done a great job improving Github, and if you are using Visual Studio Code there are great integrations between them."),qe.forEach(t),Re=c(e),j=s(e,"H4",{id:!0});var qo=h(j);oo=n(qo,"4. Start hacking! 🎉"),qo.forEach(t),Fe=c(e),Z=s(e,"P",{});var zo=h(Z);io=n(zo,"Now you can start coding and when you push your commits to Github, Netlify will automatically build and deploy your application, simple as that!"),zo.forEach(t),We=c(e),Y=s(e,"H3",{id:!0});var Ko=h(Y);lo=n(Ko,"Vendor lock-in"),Ko.forEach(t),Be=c(e),U=s(e,"P",{});var Qo=h(U);ao=n(Qo,"Since you are working with static files once your web app is built, you wont have any problems deploying anywhere. It is very easy to move your application to a new hosting service."),Qo.forEach(t),Oe=c(e),V=s(e,"P",{});var Xo=h(V);so=n(Xo,"You also have the advantage when dealing with a headless CMS to more easily be able to move to another service since it is completely decoupled from the frontend."),Xo.forEach(t),Ze=c(e),q=s(e,"P",{});var $o=h(q);ro=n($o,"You also have the option to work with local markdown files in the project and using a service like Forestry to interact with the content as if they were located in an external CMS. This way you will have even more freedom of how you chose to interact with your content."),$o.forEach(t),this.h()},h(){li(A.src,ho="/images/jam.png")||p(A,"src",ho),p(A,"alt","JAMstack"),p(A,"title","JAMstack"),p(M,"id","what-is-not-jamstack-then"),p(G,"id","best-practices"),p(I,"id","example-workflow"),p(x,"id","getting-started"),p(J,"id","1-pick-your-static-site-generator"),p(P,"href","https://www.staticgen.com/"),p(P,"rel","nofollow"),p(C,"id","2-find-a-hosting-service"),p(T,"href","https://www.thenewdynamic.org/tools/hosting-deployment/"),p(T,"rel","nofollow"),p(L,"id","3-use-your-preferred-version-control-service"),p(H,"href","https://github.com"),p(H,"rel","nofollow"),p(j,"id","4-start-hacking-"),p(Y,"id","vendor-lock-in")},m(e,i){l(e,k,i),o(k,A),l(e,me,i),l(e,we,i),l(e,be,i),l(e,y,i),o(y,ze),o(y,K),o(K,Ke),o(y,Qe),o(y,Q),o(Q,Xe),o(y,$e),o(y,X),o(X,et),o(y,tt),l(e,ke,i),l(e,v,i),o(v,$),o($,ot),o(v,it),o(v,ee),o(ee,lt),o(v,at),o(v,te),o(te,st),o(v,rt),o(v,oe),o(oe,nt),l(e,_e,i),l(e,D,i),o(D,ht),l(e,Ee,i),l(e,w,i),o(w,ie),o(ie,ut),o(w,ct),o(w,le),o(le,pt),o(w,ft),o(w,ae),o(ae,dt),l(e,ge,i),l(e,R,i),o(R,yt),l(e,Se,i),l(e,M,i),o(M,vt),l(e,Ne,i),l(e,F,i),o(F,mt),l(e,Ae,i),l(e,W,i),o(W,wt),l(e,Me,i),l(e,B,i),o(B,bt),l(e,Ge,i),l(e,G,i),o(G,kt),l(e,Ie,i),l(e,O,i),o(O,_t),l(e,xe,i),l(e,f,i),o(f,se),o(se,Et),o(f,gt),o(f,re),o(re,St),o(f,Nt),o(f,ne),o(ne,At),o(f,Mt),o(f,he),o(he,Gt),o(f,It),o(f,ue),o(ue,xt),o(f,Jt),o(f,ce),o(ce,Pt),l(e,Je,i),l(e,I,i),o(I,Ct),l(e,Pe,i),l(e,d,i),o(d,pe),o(pe,Tt),o(d,Lt),o(d,fe),o(fe,Ht),o(d,jt),o(d,de),o(de,Yt),o(d,Dt),o(d,ye),o(ye,Rt),o(d,Ft),o(d,ve),o(ve,Wt),l(e,Ce,i),l(e,x,i),o(x,Bt),l(e,Te,i),l(e,J,i),o(J,Ot),l(e,Le,i),l(e,_,i),o(_,Zt),o(_,P),o(P,Ut),o(_,Vt),l(e,He,i),l(e,C,i),o(C,qt),l(e,je,i),l(e,E,i),o(E,zt),o(E,T),o(T,Kt),o(E,Qt),l(e,Ye,i),l(e,L,i),o(L,Xt),l(e,De,i),l(e,g,i),o(g,$t),o(g,H),o(H,eo),o(g,to),l(e,Re,i),l(e,j,i),o(j,oo),l(e,Fe,i),l(e,Z,i),o(Z,io),l(e,We,i),l(e,Y,i),o(Y,lo),l(e,Be,i),l(e,U,i),o(U,ao),l(e,Oe,i),l(e,V,i),o(V,so),l(e,Ze,i),l(e,q,i),o(q,ro)},p:no,i:no,o:no,d(e){e&&t(k),e&&t(me),e&&t(we),e&&t(be),e&&t(y),e&&t(ke),e&&t(v),e&&t(_e),e&&t(D),e&&t(Ee),e&&t(w),e&&t(ge),e&&t(R),e&&t(Se),e&&t(M),e&&t(Ne),e&&t(F),e&&t(Ae),e&&t(W),e&&t(Me),e&&t(B),e&&t(Ge),e&&t(G),e&&t(Ie),e&&t(O),e&&t(xe),e&&t(f),e&&t(Je),e&&t(I),e&&t(Pe),e&&t(d),e&&t(Ce),e&&t(x),e&&t(Te),e&&t(J),e&&t(Le),e&&t(_),e&&t(He),e&&t(C),e&&t(je),e&&t(E),e&&t(Ye),e&&t(L),e&&t(De),e&&t(g),e&&t(Re),e&&t(j),e&&t(Fe),e&&t(Z),e&&t(We),e&&t(Y),e&&t(Be),e&&t(U),e&&t(Oe),e&&t(V),e&&t(Ze),e&&t(q)}}}const ri={title:"JAMstack",description:"JAM stands for JavaScript API Markup. It is a new way to build websites that are fast, scalable and secure.",date:"2019-05-06T00:00:00.000Z",published:!0};class ni extends ti{constructor(k){super(),oi(this,k,null,ai,ii,{})}}export{ni as default,ri as metadata};
