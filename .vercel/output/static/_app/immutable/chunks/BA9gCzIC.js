import{t as q,a as T}from"./woIyr73P.js";import"./CYm51p4s.js";import{s as n,P as M,c as s,b as a,n as I}from"./BfQri65O.js";import{h as t}from"./yyGB2fVy.js";const z={title:"Modern CSS Techniques Every Web Developer Should Know in 2023",description:"Explore the latest CSS features and techniques that are transforming web development, from container queries and cascade layers to the CSS grid and custom properties. Learn how these modern approaches can simplify your code and enhance your designs.",date:"2023-09-10T00:00:00.000Z",published:!0},{title:G,description:A,date:B,published:H}=z;var P=q('<h1 id="modern-css-techniques-every-web-developer-should-know-in-2023">Modern CSS Techniques Every Web Developer Should Know in 2023</h1> <h2 id="introduction">Introduction</h2> <p>CSS has evolved dramatically in recent years, transforming from a simple styling language into a powerful system for creating dynamic, responsive layouts and sophisticated visual effects. As someone who’s been building websites for years, I’ve witnessed this evolution firsthand and continue to be amazed by what’s possible with modern CSS. In this article, I’ll share some of the most exciting CSS techniques that have become practical to use in production in 2023.</p> <h2 id="container-queries-responsive-design-reimagined">Container Queries: Responsive Design Reimagined</h2> <p>For years, media queries have been our primary tool for responsive design, allowing us to adapt layouts based on viewport dimensions. However, they fall short when components need to respond to their container’s size rather than the viewport.</p> <p>Enter container queries, which finally solve this long-standing limitation:</p> <pre class="language-css"><!></pre> <p>With container queries, we can create truly reusable components that adapt to their context, regardless of where they’re placed in the layout. This is a game-changer for component-based design systems.</p> <h2 id="cascade-layers-managing-specificity">Cascade Layers: Managing Specificity</h2> <p>CSS specificity has always been a challenge in large projects. The new cascade layers feature provides a way to organize and prioritize your styles, making specificity conflicts much easier to manage:</p> <pre class="language-css"><!></pre> <p>With cascade layers, styles in later layers take precedence over earlier ones, regardless of specificity. This gives you explicit control over the cascade, making your CSS more predictable and maintainable.</p> <h2 id="custom-properties-beyond-simple-variables">Custom Properties: Beyond Simple Variables</h2> <p>CSS custom properties (variables) have been around for a while, but their potential goes far beyond simple color or size definitions. Here are some advanced techniques:</p> <h3 id="theming-with-custom-properties">Theming with Custom Properties</h3> <pre class="language-css"><!></pre> <h3 id="component-variants-with-custom-properties">Component Variants with Custom Properties</h3> <pre class="language-css"><!></pre> <p>This approach creates a clean API for component variants and makes your CSS more maintainable.</p> <h2 id="the-power-of-modern-layout-techniques">The Power of Modern Layout Techniques</h2> <h3 id="css-grid-for-two-dimensional-layouts">CSS Grid for Two-Dimensional Layouts</h3> <p>CSS Grid has matured into a reliable, powerful layout system. Here’s a responsive grid that adapts to available space without media queries:</p> <pre class="language-css"><!></pre> <p>This creates a responsive grid where items are at least 250px wide, and the number of columns adjusts automatically based on available space.</p> <h3 id="subgrid-for-nested-grids">Subgrid for Nested Grids</h3> <p>The newer subgrid feature allows nested grids to participate in the parent grid’s layout:</p> <pre class="language-css"><!></pre> <p>This is particularly useful for maintaining alignment across complex nested components.</p> <h2 id="scroll-driven-animations">Scroll-Driven Animations</h2> <p>One of the newest additions to CSS is the ability to create scroll-driven animations without JavaScript:</p> <pre class="language-css"><!></pre> <p>This creates an animation that’s driven by the element’s position in the viewport as the user scrolls, with no JavaScript required.</p> <h2 id="logical-properties-for-international-layouts">Logical Properties for International Layouts</h2> <p>If you’re building sites that support multiple languages, including right-to-left scripts, logical properties make your life much easier:</p> <pre class="language-css"><!></pre> <p>Instead of using directional properties like <code>margin-left</code> or <code>padding-right</code>, logical properties adapt automatically to the text direction.</p> <h2 id="modern-selectors-for-cleaner-markup">Modern Selectors for Cleaner Markup</h2> <p>New CSS selectors can help you write more maintainable code with less markup:</p> <h3 id="has---the-parent-selector">:has() - The “Parent Selector”</h3> <pre class="language-css"><!></pre> <h3 id="where-and-is-for-grouping-selectors">:where() and :is() for Grouping Selectors</h3> <pre class="language-css"><!></pre> <h2 id="conclusion">Conclusion</h2> <p>Modern CSS has evolved into a powerful, flexible system that can handle complex layouts and interactions that previously required JavaScript. By embracing these newer features, you can write more maintainable code, create more robust designs, and deliver better user experiences.</p> <p>The best part is that browser support for these features has improved dramatically. With the right progressive enhancement approach, you can start using most of these techniques in production today.</p>',1);function J(m){var d=P(),p=n(M(d),12),y=s(p);t(y,()=>`<code class="language-css"><span class="token comment">/* Define a container */</span>
<span class="token selector">.card-container</span> <span class="token punctuation">&#123;</span>
  <span class="token property">container-type</span><span class="token punctuation">:</span> inline-size<span class="token punctuation">;</span>
  <span class="token property">container-name</span><span class="token punctuation">:</span> card<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Style based on container width */</span>
<span class="token atrule"><span class="token rule">@container</span> card <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 400px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.card</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> row<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.card-image</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 40%<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.card-content</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 60%<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),a(p);var e=n(p,8),g=s(e);t(g,()=>`<code class="language-css"><span class="token atrule"><span class="token rule">@layer</span> reset<span class="token punctuation">,</span> base<span class="token punctuation">,</span> components<span class="token punctuation">,</span> utilities<span class="token punctuation">;</span></span>

<span class="token atrule"><span class="token rule">@layer</span> reset</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/* Reset styles here */</span>
  <span class="token selector">*</span> <span class="token punctuation">&#123;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">box-sizing</span><span class="token punctuation">:</span> border-box<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token atrule"><span class="token rule">@layer</span> base</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/* Base styles here */</span>
  <span class="token selector">body</span> <span class="token punctuation">&#123;</span>
    <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Inter'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
    <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token atrule"><span class="token rule">@layer</span> components</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/* Component styles here */</span>
  <span class="token selector">.button</span> <span class="token punctuation">&#123;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0.5rem 1rem<span class="token punctuation">;</span>
    <span class="token property">border-radius</span><span class="token punctuation">:</span> 0.25rem<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token atrule"><span class="token rule">@layer</span> utilities</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/* Utility styles here */</span>
  <span class="token selector">.mt-4</span> <span class="token punctuation">&#123;</span>
    <span class="token property">margin-top</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),a(e);var o=n(e,10),f=s(o);t(f,()=>`<code class="language-css"><span class="token selector">:root</span> <span class="token punctuation">&#123;</span>
  <span class="token property">--primary-h</span><span class="token punctuation">:</span> 220<span class="token punctuation">;</span>
  <span class="token property">--primary-s</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
  <span class="token property">--primary-l</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>

  <span class="token property">--primary</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--primary-h<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-s<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-l<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--primary-light</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--primary-h<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-s<span class="token punctuation">)</span><span class="token punctuation">,</span> 70%<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--primary-dark</span><span class="token punctuation">:</span> <span class="token function">hsl</span><span class="token punctuation">(</span><span class="token function">var</span><span class="token punctuation">(</span>--primary-h<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary-s<span class="token punctuation">)</span><span class="token punctuation">,</span> 30%<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">[data-theme="green"]</span> <span class="token punctuation">&#123;</span>
  <span class="token property">--primary-h</span><span class="token punctuation">:</span> 150<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(o);var c=n(o,4),v=s(c);t(v,()=>`<code class="language-css"><span class="token selector">.button</span> <span class="token punctuation">&#123;</span>
  <span class="token property">--button-bg</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">--button-color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">--button-padding</span><span class="token punctuation">:</span> 0.5rem 1rem<span class="token punctuation">;</span>

  <span class="token property">background-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--button-bg<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--button-color<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--button-padding<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.button.button-large</span> <span class="token punctuation">&#123;</span>
  <span class="token property">--button-padding</span><span class="token punctuation">:</span> 0.75rem 1.5rem<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.button.button-secondary</span> <span class="token punctuation">&#123;</span>
  <span class="token property">--button-bg</span><span class="token punctuation">:</span> transparent<span class="token punctuation">;</span>
  <span class="token property">--button-color</span><span class="token punctuation">:</span> <span class="token function">var</span><span class="token punctuation">(</span>--primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(c);var i=n(c,10),b=s(i);t(b,()=>`<code class="language-css"><span class="token selector">.grid</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>auto-fit<span class="token punctuation">,</span> <span class="token function">minmax</span><span class="token punctuation">(</span>250px<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(i);var r=n(i,8),w=s(r);t(w,()=>`<code class="language-css"><span class="token selector">.parent-grid</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> <span class="token function">repeat</span><span class="token punctuation">(</span>3<span class="token punctuation">,</span> 1fr<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> auto auto<span class="token punctuation">;</span>
  <span class="token property">gap</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.child</span> <span class="token punctuation">&#123;</span>
  <span class="token property">grid-column</span><span class="token punctuation">:</span> span 2<span class="token punctuation">;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> grid<span class="token punctuation">;</span>
  <span class="token property">grid-template-columns</span><span class="token punctuation">:</span> subgrid<span class="token punctuation">;</span>
  <span class="token property">grid-template-rows</span><span class="token punctuation">:</span> subgrid<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(r);var l=n(r,8),S=s(l);t(S,()=>`<code class="language-css"><span class="token atrule"><span class="token rule">@keyframes</span> fade-in</span> <span class="token punctuation">&#123;</span>
  <span class="token selector">from</span> <span class="token punctuation">&#123;</span> <span class="token property">opacity</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
  <span class="token selector">to</span> <span class="token punctuation">&#123;</span> <span class="token property">opacity</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span> <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.reveal</span> <span class="token punctuation">&#123;</span>
  <span class="token property">animation</span><span class="token punctuation">:</span> fade-in linear<span class="token punctuation">;</span>
  <span class="token property">animation-timeline</span><span class="token punctuation">:</span> <span class="token function">scroll</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token property">animation-range</span><span class="token punctuation">:</span> entry 10% cover 30%<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(l);var u=n(l,8),C=s(u);t(C,()=>`<code class="language-css"><span class="token selector">.card</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-block</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">margin-inline</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
  <span class="token property">padding-inline-start</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token property">border-inline-start</span><span class="token punctuation">:</span> 3px solid <span class="token function">var</span><span class="token punctuation">(</span>--primary<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(u);var k=n(u,10),_=s(k);t(_,()=>`<code class="language-css"><span class="token comment">/* Style a card differently when it contains an image */</span>
<span class="token selector">.card:has(img)</span> <span class="token punctuation">&#123;</span>
  <span class="token property">padding-block-start</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Style form fields that are required and invalid */</span>
<span class="token selector">input:is([required]):is(:invalid)</span> <span class="token punctuation">&#123;</span>
  <span class="token property">border-color</span><span class="token punctuation">:</span> red<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(k);var h=n(k,4),x=s(h);t(x,()=>`<code class="language-css"><span class="token comment">/* Lower specificity with :where() */</span>
<span class="token selector">:where(h1, h2, h3, h4, h5, h6)</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-family</span><span class="token punctuation">:</span> <span class="token string">'Montserrat'</span><span class="token punctuation">,</span> sans-serif<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Maintain specificity with :is() */</span>
<span class="token selector">:is(section, article, aside) h2</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1.5rem<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(h),I(6),T(m,d)}export{J as default,z as metadata};
