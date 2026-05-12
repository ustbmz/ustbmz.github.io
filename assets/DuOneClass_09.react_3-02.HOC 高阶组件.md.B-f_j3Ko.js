import{_ as s,o as a,c as p,a2 as e}from"./chunks/framework.CAKCj7G0.js";const u=JSON.parse('{"title":"HOC 高阶组件","description":"","frontmatter":{},"headers":[],"relativePath":"DuOneClass/09.react/3-02.HOC 高阶组件.md","filePath":"DuOneClass/09.react/3-02.HOC 高阶组件.md"}'),l={name:"DuOneClass/09.react/3-02.HOC 高阶组件.md"};function i(r,n,t,c,o,b){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h1 id="hoc-高阶组件" tabindex="-1">HOC 高阶组件 <a class="header-anchor" href="#hoc-高阶组件" aria-label="Permalink to &quot;HOC 高阶组件&quot;">​</a></h1><p>HOF：Higher-Order Function, 高阶函数，以函数作为参数，并返回一个函数 HOC: Higher-Order Component, 高阶组件，以组件作为参数，并返回一个组件</p><p>通常，可以利用HOC实现横切关注点。</p><blockquote><p>举例：20个组件，每个组件在创建组件和销毁组件时，需要作日志记录 20个组件，它们需要显示一些内容，得到的数据结构完全一致</p></blockquote><p><strong>注意</strong></p><ol><li>不要在render中使用高阶组件,会导致组件被重新渲染，每次render都会拿到一个新的组件</li></ol><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 不要在render中使用高阶组件</span></span>
<span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>import { A, B } from &#39;./components/Comps&#39;</span></span>
<span class="line"><span>import withTest from &#39;./HOC/withTest&#39;</span></span>
<span class="line"><span>import withLogin from &#39;./HOC/withLogin&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// const ALog = withLogin(withTest(A))</span></span>
<span class="line"><span>// const Blog = withLogin(withTest(B))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class App extends Component {</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    const ALog = withLogin(withTest(A))</span></span>
<span class="line"><span>    const Blog = withLogin(withTest(B))</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;ALog a={1} isLogin /&gt;</span></span>
<span class="line"><span>        &lt;Blog b={2} isLogin /&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><p><img src="https://s2.loli.net/2024/06/24/Alw83ae9r7pZ4Vd.png" alt="image-20240624180322260"></p><ol start="2"><li>不要在高阶组件内部更改传入的组件</li></ol>`,9)])])}const d=s(l,[["render",i]]);export{u as __pageData,d as default};
