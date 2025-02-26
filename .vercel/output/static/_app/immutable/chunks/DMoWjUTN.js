import{t as J,a as Y}from"./woIyr73P.js";import"./CYm51p4s.js";import{s as n,P as Q,c as s,b as a,n as V}from"./BfQri65O.js";import{h as t}from"./yyGB2fVy.js";const Z={title:"Responsive Web Design Fundamentals: Building Sites That Work Everywhere",description:"Learn the essential principles of responsive web design to create websites that look great on any device. This beginner-friendly guide covers viewport settings, fluid layouts, media queries, responsive images, and practical techniques to solve common responsive design challenges.",date:"2024-02-05T00:00:00.000Z",published:!0},{title:an,description:tn,date:pn,published:en}=Z;var K=J('<h1 id="responsive-web-design-fundamentals-building-sites-that-work-everywhere">Responsive Web Design Fundamentals: Building Sites That Work Everywhere</h1> <h2 id="introduction">Introduction</h2> <p>In today’s digital landscape, people access websites from a vast array of devices with different screen sizes—from small smartphones to large desktop monitors. Responsive web design is the approach that allows your website to adapt and provide an optimal viewing experience across all these devices. In this guide, I’ll walk you through the fundamental concepts and practical techniques of responsive design that will help you build websites that look great everywhere.</p> <h2 id="what-is-responsive-web-design">What is Responsive Web Design?</h2> <p>Responsive web design (RWD) is an approach to web design that makes web pages render well on a variety of devices and window or screen sizes. Rather than creating separate websites for different devices, you create one website that adjusts its layout and content based on the available screen space.</p> <p>The three core ingredients of responsive design are:</p> <ol><li><strong>Fluid layouts</strong>: Using relative units instead of fixed pixels</li> <li><strong>Flexible images</strong>: Ensuring media scales appropriately</li> <li><strong>Media queries</strong>: Applying different CSS styles based on device characteristics</li></ol> <h2 id="setting-up-your-responsive-foundation">Setting Up Your Responsive Foundation</h2> <h3 id="the-viewport-meta-tag">The Viewport Meta Tag</h3> <p>The first step in creating a responsive website is setting the viewport correctly. This meta tag tells mobile browsers how to control the page’s dimensions and scaling:</p> <pre class="language-html"><!></pre> <p>This tag should be placed in the <code>&lt;head&gt;</code> section of your HTML document. It instructs the browser to:</p> <ul><li>Set the width of the page to follow the screen width of the device (<code>width=device-width</code>)</li> <li>Set the initial zoom level to 1.0 (<code>initial-scale=1.0</code>)</li></ul> <p>Without this tag, mobile browsers will render the page at a typical desktop screen width and then scale it down, resulting in a poor user experience.</p> <h3 id="using-relative-units">Using Relative Units</h3> <p>To create truly responsive layouts, avoid fixed pixel sizes and use relative units instead:</p> <pre class="language-css"><!></pre> <p>Common relative units include:</p> <ul><li><strong>Percentages (%)</strong>: Relative to the parent element</li> <li><strong>em</strong>: Relative to the font-size of the element</li> <li><strong>rem</strong>: Relative to the font-size of the root element</li> <li><strong>vw/vh</strong>: Relative to the viewport width/height (1vw = 1% of viewport width)</li></ul> <h3 id="creating-a-fluid-grid">Creating a Fluid Grid</h3> <p>A fluid grid uses percentage-based widths to create a flexible layout:</p> <pre class="language-css"><!></pre> <p>With modern CSS, you can use Flexbox or Grid for even more powerful fluid layouts.</p> <h2 id="media-queries-the-heart-of-responsive-design">Media Queries: The Heart of Responsive Design</h2> <p>Media queries allow you to apply different styles based on device characteristics, primarily screen width:</p> <pre class="language-css"><!></pre> <h3 id="common-breakpoints">Common Breakpoints</h3> <p>While you should design for your specific content, these are commonly used breakpoints:</p> <ul><li><strong>Small phones</strong>: 320px - 480px</li> <li><strong>Large phones/Small tablets</strong>: 481px - 768px</li> <li><strong>Tablets/Small laptops</strong>: 769px - 1024px</li> <li><strong>Desktops/Large laptops</strong>: 1025px - 1200px</li> <li><strong>Extra large screens</strong>: 1201px and above</li></ul> <h3 id="mobile-first-vs-desktop-first-approach">Mobile-First vs. Desktop-First Approach</h3> <p>There are two main approaches to writing media queries:</p> <p><strong>Mobile-First</strong> (recommended):</p> <pre class="language-css"><!></pre> <p><strong>Desktop-First</strong>:</p> <pre class="language-css"><!></pre> <p>The mobile-first approach is generally preferred because:</p> <ul><li>It prioritizes the mobile experience, which is how most users access the web</li> <li>It tends to result in cleaner, more efficient CSS</li> <li>It forces you to think about essential content first</li></ul> <h2 id="responsive-images-and-media">Responsive Images and Media</h2> <p>Images often cause problems in responsive designs because they have fixed dimensions. Here’s how to make them responsive:</p> <h3 id="basic-responsive-images">Basic Responsive Images</h3> <pre class="language-css"><!></pre> <p>This simple rule ensures images never exceed their container’s width while maintaining their aspect ratio.</p> <h3 id="using-the-picture-element-for-art-direction">Using the Picture Element for Art Direction</h3> <p>The <code>&lt;picture&gt;</code> element allows you to provide different image versions for different screen sizes:</p> <pre class="language-html"><!></pre> <p>This approach is useful when you want to:</p> <ul><li>Show a different crop or composition on different devices</li> <li>Serve smaller image files to mobile devices</li> <li>Change image formats based on browser support</li></ul> <h3 id="responsive-background-images">Responsive Background Images</h3> <p>For background images, you can use media queries:</p> <pre class="language-css"><!></pre> <h2 id="responsive-typography">Responsive Typography</h2> <p>Text should be readable on all devices without requiring zooming:</p> <pre class="language-css"><!></pre> <h3 id="fluid-typography">Fluid Typography</h3> <p>For even smoother scaling, you can use a technique called fluid typography with the <code>calc()</code> function and viewport units:</p> <pre class="language-css"><!></pre> <h2 id="solving-common-responsive-design-challenges">Solving Common Responsive Design Challenges</h2> <h3 id="challenge-1-navigation-menus">Challenge 1: Navigation Menus</h3> <p>Navigation menus often need significant changes between mobile and desktop:</p> <pre class="language-html"><!></pre> <pre class="language-css"><!></pre> <p>You’ll need JavaScript to toggle the <code>.active</code> class on the menu:</p> <pre class="language-javascript"><!></pre> <h3 id="challenge-2-data-tables">Challenge 2: Data Tables</h3> <p>Tables can be problematic on small screens. Here are a few approaches:</p> <p><strong>Horizontal Scrolling</strong>:</p> <pre class="language-css"><!></pre> <p><strong>Responsive Table with Data Attributes</strong>:</p> <pre class="language-html"><!></pre> <pre class="language-css"><!></pre> <h3 id="challenge-3-forms">Challenge 3: Forms</h3> <p>Forms should be usable on all devices:</p> <pre class="language-css"><!></pre> <h2 id="testing-your-responsive-design">Testing Your Responsive Design</h2> <p>To ensure your responsive design works well across devices:</p> <ol><li><strong>Use browser developer tools</strong>: Most browsers have device emulation features</li> <li><strong>Test on actual devices</strong>: Whenever possible, test on real phones and tablets</li> <li><strong>Use online testing tools</strong>: Services like BrowserStack or Responsively App</li> <li><strong>Check in different browsers</strong>: Ensure cross-browser compatibility</li></ol> <h2 id="performance-considerations">Performance Considerations</h2> <p>Responsive sites need to be fast on all devices, especially mobile:</p> <ol><li><strong>Optimize images</strong>: Use modern formats (WebP), appropriate sizes, and compression</li> <li><strong>Minimize HTTP requests</strong>: Combine CSS/JS files where appropriate</li> <li><strong>Use lazy loading</strong>: Load images only when they’re about to enter the viewport</li> <li><strong>Consider connection speed</strong>: Provide fallbacks for users on slow connections</li></ol> <pre class="language-html"><!></pre> <pre class="language-javascript"><!></pre> <h2 id="accessibility-in-responsive-design">Accessibility in Responsive Design</h2> <p>Responsive design and accessibility go hand in hand:</p> <ol><li><strong>Ensure proper contrast</strong>: Text should be readable on all backgrounds</li> <li><strong>Use semantic HTML</strong>: Proper heading structure, landmarks, etc.</li> <li><strong>Make touch targets large enough</strong>: At least 44×44 pixels for mobile</li> <li><strong>Test keyboard navigation</strong>: Ensure all interactive elements are accessible</li> <li><strong>Maintain focus management</strong>: Especially for mobile navigation toggles</li></ol> <h2 id="conclusion">Conclusion</h2> <p>Responsive web design is no longer optional—it’s a necessity. By mastering these fundamentals, you’ll be able to create websites that provide an excellent user experience across all devices.</p> <p>Remember these key principles:</p> <ul><li>Use the viewport meta tag</li> <li>Create fluid layouts with relative units</li> <li>Apply media queries strategically</li> <li>Make images and media responsive</li> <li>Test thoroughly on different devices</li> <li>Consider performance and accessibility</li></ul> <p>With these foundations in place, you’ll be well-equipped to tackle the challenges of building websites for our multi-device world.</p> <h2 id="further-resources">Further Resources</h2> <ul><li><a href="https://developer.mozilla.org/en-US/docs/Learn/CSS/CSS_layout/Responsive_Design" rel="nofollow">MDN Web Docs: Responsive Design</a></li> <li><a href="https://web.dev/responsive-web-design-basics/" rel="nofollow">Google’s Responsive Web Design Basics</a></li> <li><a href="https://alistapart.com/article/responsive-web-design/" rel="nofollow">A List Apart: Responsive Web Design</a></li> <li><a href="https://caniuse.com/" rel="nofollow">Can I Use</a> - Browser compatibility tables</li></ul>',1);function on(q){var _=K(),p=n(Q(_),20),T=s(p);t(T,()=>'<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">name</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>viewport<span class="token punctuation">"</span></span> <span class="token attr-name">content</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>width=device-width, initial-scale=1.0<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>'),a(p);var e=n(p,12),z=s(e);t(z,()=>`<code class="language-css"><span class="token comment">/* ❌ Fixed width - not responsive */</span>
<span class="token selector">.container</span> <span class="token punctuation">&#123;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 960px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* ✅ Relative width - responsive */</span>
<span class="token selector">.container</span> <span class="token punctuation">&#123;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 90%<span class="token punctuation">;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 1200px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(e);var o=n(e,10),R=s(o);t(R,()=>`<code class="language-css"><span class="token selector">.row</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">flex-wrap</span><span class="token punctuation">:</span> wrap<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.column</span> <span class="token punctuation">&#123;</span>
  <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* For a two-column layout */</span>
<span class="token selector">.column-50</span> <span class="token punctuation">&#123;</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* For a three-column layout */</span>
<span class="token selector">.column-33</span> <span class="token punctuation">&#123;</span>
  <span class="token property">flex-basis</span><span class="token punctuation">:</span> 33.333%<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(o);var c=n(o,8),C=s(c);t(C,()=>`<code class="language-css"><span class="token comment">/* Base styles for all devices */</span>
<span class="token selector">body</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Styles for tablets */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">body</span> <span class="token punctuation">&#123;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.column-50, .column-33</span> <span class="token punctuation">&#123;</span>
    <span class="token property">flex-basis</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span> <span class="token comment">/* Stack columns on smaller screens */</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Styles for mobile phones */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">body</span> <span class="token punctuation">&#123;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.nav-menu</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span> <span class="token comment">/* Hide regular menu on mobile */</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.mobile-menu</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span> <span class="token comment">/* Show mobile menu */</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),a(c);var l=n(c,14),D=s(l);t(D,()=>`<code class="language-css"><span class="token comment">/* Base styles for mobile */</span>
<span class="token selector">.element</span> <span class="token punctuation">&#123;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Tablet styles */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.element</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Desktop styles */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.element</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 33.333%<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),a(l);var u=n(l,4),M=s(u);t(M,()=>`<code class="language-css"><span class="token comment">/* Base styles for desktop */</span>
<span class="token selector">.element</span> <span class="token punctuation">&#123;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 33.333%<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Tablet styles */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 1023px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.element</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 50%<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Mobile styles */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 767px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.element</span> <span class="token punctuation">&#123;</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),a(u);var i=n(u,12),F=s(i);t(F,()=>`<code class="language-css"><span class="token selector">img</span> <span class="token punctuation">&#123;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">height</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(i);var r=n(i,8),I=s(r);t(I,()=>`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>picture</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-large.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 1024px)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>source</span> <span class="token attr-name">srcset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-medium.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">media</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>(min-width: 768px)<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>image-small.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Description of the image<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>picture</span><span class="token punctuation">></span></span></code>`),a(r);var k=n(r,10),j=s(k);t(j,()=>`<code class="language-css"><span class="token selector">.hero</span> <span class="token punctuation">&#123;</span>
  <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'hero-mobile.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token property">background-size</span><span class="token punctuation">:</span> cover<span class="token punctuation">;</span>
  <span class="token property">background-position</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.hero</span> <span class="token punctuation">&#123;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'hero-tablet.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 1024px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.hero</span> <span class="token punctuation">&#123;</span>
    <span class="token property">background-image</span><span class="token punctuation">:</span> <span class="token url"><span class="token function">url</span><span class="token punctuation">(</span><span class="token string url">'hero-desktop.jpg'</span><span class="token punctuation">)</span></span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),a(k);var g=n(k,6),A=s(g);t(A,()=>`<code class="language-css"><span class="token comment">/* Base font size */</span>
<span class="token selector">html</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 16px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Use relative units for typography */</span>
<span class="token selector">h1</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2.5rem<span class="token punctuation">;</span> <span class="token comment">/* 40px on default 16px base */</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">h2</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span> <span class="token comment">/* 32px on default 16px base */</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">p</span> <span class="token punctuation">&#123;</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span> <span class="token comment">/* 16px */</span>
  <span class="token property">line-height</span><span class="token punctuation">:</span> 1.5<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Adjust base font size for different screens */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">html</span> <span class="token punctuation">&#123;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 14px<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 480px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">html</span> <span class="token punctuation">&#123;</span>
    <span class="token property">font-size</span><span class="token punctuation">:</span> 12px<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),a(g);var d=n(g,6),W=s(d);t(W,()=>`<code class="language-css"><span class="token selector">h1</span> <span class="token punctuation">&#123;</span>
  <span class="token comment">/* Scales smoothly from 24px at 320px viewport to 40px at 1200px viewport */</span>
  <span class="token property">font-size</span><span class="token punctuation">:</span> <span class="token function">calc</span><span class="token punctuation">(</span>1.5rem + 1vw<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(d);var m=n(d,8),E=s(m);t(E,()=>`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>nav</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>logo<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>My Site<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>button</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>menu-toggle<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Menu<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>button</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>ul</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>nav-menu<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Home<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>About<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Services<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>li</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>a</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>#<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>Contact<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>a</span><span class="token punctuation">></span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>li</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>ul</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>nav</span><span class="token punctuation">></span></span></code>`),a(m);var h=n(m,2),L=s(h);t(L,()=>`<code class="language-css"><span class="token selector">nav</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">justify-content</span><span class="token punctuation">:</span> space-between<span class="token punctuation">;</span>
  <span class="token property">align-items</span><span class="token punctuation">:</span> center<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.nav-menu</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token property">list-style</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.menu-toggle</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token comment">/* Mobile styles */</span>
<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.nav-menu</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
    <span class="token property">flex-direction</span><span class="token punctuation">:</span> column<span class="token punctuation">;</span>
    <span class="token property">position</span><span class="token punctuation">:</span> absolute<span class="token punctuation">;</span>
    <span class="token property">top</span><span class="token punctuation">:</span> 60px<span class="token punctuation">;</span>
    <span class="token property">left</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">right</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">background</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
    <span class="token property">box-shadow</span><span class="token punctuation">:</span> 0 2px 5px <span class="token function">rgba</span><span class="token punctuation">(</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0<span class="token punctuation">,</span>0.1<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.nav-menu.active</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.menu-toggle</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),a(h);var v=n(h,4),U=s(v);t(U,()=>`<code class="language-javascript">document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.menu-toggle'</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">'click'</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  document<span class="token punctuation">.</span><span class="token function">querySelector</span><span class="token punctuation">(</span><span class="token string">'.nav-menu'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">toggle</span><span class="token punctuation">(</span><span class="token string">'active'</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`),a(v);var y=n(v,8),B=s(y);t(B,()=>`<code class="language-css"><span class="token selector">.table-container</span> <span class="token punctuation">&#123;</span>
  <span class="token property">overflow-x</span><span class="token punctuation">:</span> auto<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span></code>`),a(y);var f=n(y,4),P=s(f);t(P,()=>`<code class="language-html"><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>table</span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>responsive-table<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>thead</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Name<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Email<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Phone<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>th</span><span class="token punctuation">></span></span>Address<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>th</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>thead</span><span class="token punctuation">></span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tbody</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>tr</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">data-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Name<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>John Doe<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">data-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Email<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>john@example.com<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">data-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Phone<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>(123) 456-7890<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>td</span> <span class="token attr-name">data-label</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Address<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>123 Main St, City<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>td</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tr</span><span class="token punctuation">></span></span>
    <span class="token comment">&lt;!-- More rows --></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>tbody</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>table</span><span class="token punctuation">></span></span></code>`),a(f);var b=n(f,2),H=s(b);t(H,()=>`<code class="language-css"><span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">max-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.responsive-table thead</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.responsive-table tr</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.responsive-table td</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">text-align</span><span class="token punctuation">:</span> right<span class="token punctuation">;</span>
    <span class="token property">border-bottom</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.responsive-table td:before</span> <span class="token punctuation">&#123;</span>
    <span class="token property">content</span><span class="token punctuation">:</span> <span class="token function">attr</span><span class="token punctuation">(</span>data-label<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token property">float</span><span class="token punctuation">:</span> left<span class="token punctuation">;</span>
    <span class="token property">font-weight</span><span class="token punctuation">:</span> bold<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),a(b);var w=n(b,6),O=s(w);t(O,()=>`<code class="language-css"><span class="token selector">form</span> <span class="token punctuation">&#123;</span>
  <span class="token property">max-width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">.form-group</span> <span class="token punctuation">&#123;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">label</span> <span class="token punctuation">&#123;</span>
  <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
  <span class="token property">margin-bottom</span><span class="token punctuation">:</span> 0.5rem<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">input, select, textarea</span> <span class="token punctuation">&#123;</span>
  <span class="token property">width</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.75rem<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> 1px solid #ddd<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token selector">button</span> <span class="token punctuation">&#123;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 0.75rem 1.5rem<span class="token punctuation">;</span>
  <span class="token property">background</span><span class="token punctuation">:</span> #0066cc<span class="token punctuation">;</span>
  <span class="token property">color</span><span class="token punctuation">:</span> white<span class="token punctuation">;</span>
  <span class="token property">border</span><span class="token punctuation">:</span> none<span class="token punctuation">;</span>
  <span class="token property">border-radius</span><span class="token punctuation">:</span> 4px<span class="token punctuation">;</span>
  <span class="token property">cursor</span><span class="token punctuation">:</span> pointer<span class="token punctuation">;</span>
<span class="token punctuation">&#125;</span>

<span class="token atrule"><span class="token rule">@media</span> <span class="token punctuation">(</span><span class="token property">min-width</span><span class="token punctuation">:</span> 768px<span class="token punctuation">)</span></span> <span class="token punctuation">&#123;</span>
  <span class="token selector">.form-row</span> <span class="token punctuation">&#123;</span>
    <span class="token property">display</span><span class="token punctuation">:</span> flex<span class="token punctuation">;</span>
    <span class="token property">gap</span><span class="token punctuation">:</span> 1rem<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>

  <span class="token selector">.form-row .form-group</span> <span class="token punctuation">&#123;</span>
    <span class="token property">flex</span><span class="token punctuation">:</span> 1<span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span></code>`),a(w);var x=n(w,14),N=s(x);t(N,()=>`<code class="language-html"><span class="token comment">&lt;!-- Lazy loading example --></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>img</span> <span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>placeholder.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">data-src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>actual-image.jpg<span class="token punctuation">"</span></span> <span class="token attr-name">alt</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>Description<span class="token punctuation">"</span></span> <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>lazy<span class="token punctuation">"</span></span><span class="token punctuation">></span></span></code>`),a(x);var S=n(x,2),G=s(S);t(G,()=>`<code class="language-javascript"><span class="token comment">// Simple lazy loading implementation</span>
document<span class="token punctuation">.</span><span class="token function">addEventListener</span><span class="token punctuation">(</span><span class="token string">"DOMContentLoaded"</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
  <span class="token keyword">const</span> lazyImages <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">querySelectorAll</span><span class="token punctuation">(</span><span class="token string">"img.lazy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token keyword">if</span> <span class="token punctuation">(</span><span class="token string">"IntersectionObserver"</span> <span class="token keyword">in</span> window<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
    <span class="token keyword">const</span> imageObserver <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">IntersectionObserver</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">entries<span class="token punctuation">,</span> observer</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      entries<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">entry</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>entry<span class="token punctuation">.</span>isIntersecting<span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
          <span class="token keyword">const</span> image <span class="token operator">=</span> entry<span class="token punctuation">.</span>target<span class="token punctuation">;</span>
          image<span class="token punctuation">.</span>src <span class="token operator">=</span> image<span class="token punctuation">.</span>dataset<span class="token punctuation">.</span>src<span class="token punctuation">;</span>
          image<span class="token punctuation">.</span>classList<span class="token punctuation">.</span><span class="token function">remove</span><span class="token punctuation">(</span><span class="token string">"lazy"</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
          imageObserver<span class="token punctuation">.</span><span class="token function">unobserve</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">&#125;</span>
      <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    lazyImages<span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token keyword">function</span><span class="token punctuation">(</span><span class="token parameter">image</span><span class="token punctuation">)</span> <span class="token punctuation">&#123;</span>
      imageObserver<span class="token punctuation">.</span><span class="token function">observe</span><span class="token punctuation">(</span>image<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">&#125;</span>
<span class="token punctuation">&#125;</span><span class="token punctuation">)</span><span class="token punctuation">;</span></code>`),a(S),V(20),Y(q,_)}export{on as default,Z as metadata};
