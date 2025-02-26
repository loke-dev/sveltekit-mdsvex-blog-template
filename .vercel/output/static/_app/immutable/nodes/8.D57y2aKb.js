import{t as b,h as g,a as d}from"../chunks/woIyr73P.js";import"../chunks/CYm51p4s.js";import{p as v,t as y,a as h,$ as f,s as p,c as r,B as x,D as k,b as o,n as w,C as T}from"../chunks/BfQri65O.js";import{s as L}from"../chunks/gqZiSrzS.js";import{i as _}from"../chunks/BCr23NE9.js";import{o as B}from"../chunks/Dhqd5EEV.js";var N=b('<meta name="description" content="Testing keyboard navigation">'),$=b('<div class="max-w-4xl mx-auto"><h1 class="mb-8">Keyboard Navigation Test</h1> <div class="bg-gray-800 p-6 rounded-lg mb-8"><h2 class="mb-4">Currently focused element:</h2> <pre class="bg-gray-900 p-4 rounded text-green-400 overflow-x-auto"> </pre></div> <div class="mb-8"><h2 class="mb-4">Test Links</h2> <div class="flex flex-wrap gap-4"><a href="/test/link1" class="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Link 1</a> <a href="/test/link2" class="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Link 2</a> <a href="/test/link3" class="px-4 py-2 bg-gray-700 rounded hover:bg-gray-600">Link 3</a></div></div> <div class="mb-8"><h2 class="mb-4">Test Buttons</h2> <div class="flex flex-wrap gap-4"><button class="px-4 py-2 bg-primary rounded hover:bg-opacity-80">Button 1</button> <button class="px-4 py-2 bg-primary rounded hover:bg-opacity-80">Button 2</button> <button class="px-4 py-2 bg-primary rounded hover:bg-opacity-80">Button 3</button></div></div> <div class="mb-8"><h2 class="mb-4">Test Form</h2> <form class="space-y-4"><div><label for="name" class="block mb-2">Name</label> <input type="text" id="name" class="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white"></div> <div><label for="email" class="block mb-2">Email</label> <input type="email" id="email" class="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded text-white"></div> <button type="submit" class="px-6 py-2 bg-primary rounded hover:bg-opacity-80">Submit</button></form></div> <div class="mt-12 p-4 bg-gray-800 rounded"><h3 class="mb-2">Instructions:</h3> <ol class="list-decimal pl-5 space-y-2"><li>Press the Tab key to navigate through interactive elements</li> <li>The currently focused element will be displayed at the top</li> <li>You should see a visible outline around the focused element</li> <li>Try navigating through the entire page using only the keyboard</li></ol></div></div>');function D(m,c){v(c,!1);let i=k("");B(()=>{const e=s=>{const t=s.target;x(i,`${t.tagName.toLowerCase()}${t.id?"#"+t.id:""}.${Array.from(t.classList).join(".")}`)};return document.addEventListener("focusin",e),()=>{document.removeEventListener("focusin",e)}}),_();var a=$();g(e=>{var s=N();f.title="Keyboard Navigation Test - loke.dev",d(e,s)});var l=p(r(a),2),n=p(r(l),2),u=r(n,!0);o(n),o(l),w(8),o(a),y(()=>L(u,T(i)||"None")),d(m,a),h()}export{D as component};
