(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"./src/markdown/tutorial/04-router.md":function(n,a,s){"use strict";s.r(a),s.d(a,"title",function(){return o});var t=s("./node_modules/react/index.js"),p=s.n(t);const o="Tutorial - Router";a.default=function(){return p.a.createElement("div",{className:"markdown",dangerouslySetInnerHTML:{__html:'<h1>Tutorial - Router</h1>\n<p>Next we import <a href="../api/Router">Router</a>, render it, and render our <a href="../api/RouteComponent">Route Components</a> as children. All that’s left is to add a <code>path</code> prop to each child.</p>\n<pre><code class="language-jsx"><span class="token keyword">import</span> <span class="token punctuation">{</span> Link<span class="token punctuation">,</span> Router <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">"@reach/router"</span>\n\n<span class="token comment">// under the `nav`</span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Router</span><span class="token punctuation">></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Home</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>Dashboard</span> <span class="token attr-name">path</span><span class="token attr-value"><span class="token punctuation">=</span><span class="token punctuation">"</span>/dashboard<span class="token punctuation">"</span></span> <span class="token punctuation">/></span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>Router</span><span class="token punctuation">></span></span>\n</code></pre>\n'}})}}}]);