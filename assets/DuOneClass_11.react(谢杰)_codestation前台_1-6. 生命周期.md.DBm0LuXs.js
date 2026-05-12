import{_ as n,o as a,c as e,a2 as p}from"./chunks/framework.CAKCj7G0.js";const b=JSON.parse('{"title":"1-6. 生命周期","description":"","frontmatter":{},"headers":[],"relativePath":"DuOneClass/11.react(谢杰)/codestation前台/1-6. 生命周期.md","filePath":"DuOneClass/11.react(谢杰)/codestation前台/1-6. 生命周期.md"}'),l={name:"DuOneClass/11.react(谢杰)/codestation前台/1-6. 生命周期.md"};function r(t,s,i,c,m,o){return a(),e("div",null,[...s[0]||(s[0]=[p(`<h1 id="_1-6-生命周期" tabindex="-1">1-6. 生命周期 <a class="header-anchor" href="#_1-6-生命周期" aria-label="Permalink to &quot;1-6. 生命周期&quot;">​</a></h1><h1 id="生命周期" tabindex="-1">生命周期 <a class="header-anchor" href="#生命周期" aria-label="Permalink to &quot;生命周期&quot;">​</a></h1><p>本章主要包含以下知识点：</p><ul><li>什么是生命周期</li><li>常用的生命周期钩子函数</li></ul><h2 id="什么是生命周期" tabindex="-1">什么是生命周期 <a class="header-anchor" href="#什么是生命周期" aria-label="Permalink to &quot;什么是生命周期&quot;">​</a></h2><p>所谓生命周期，指的是组件从诞生到销毁会经历一系列的过程，该过程就叫做生命周期。</p><p><em>React</em> 在组件的生命周期中提供了一系列的钩子函数（类似于事件），可以让开发者在函数中注入代码，这些代码会在适当的时候运行。</p><p><strong>生命周期钩子函数是属于类组件所独有的东西</strong>，但是从 <em>React 16.8</em> 推出 <em>Hooks</em> 以来，整体已经开始以函数组件为主，因此这里我们仅介绍一些常用的生命周期钩子函数。</p><p>完整的生命周期图谱，可以参阅官网：<em><a href="https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/" target="_blank" rel="noreferrer">https://projects.wojtekmaj.pl/react-lifecycle-methods-diagram/</a></em></p><h2 id="常用的生命周期钩子函数" tabindex="-1">常用的生命周期钩子函数 <a class="header-anchor" href="#常用的生命周期钩子函数" aria-label="Permalink to &quot;常用的生命周期钩子函数&quot;">​</a></h2><p>有关生命周期钩子函数的介绍，可以参阅官网：<em><a href="https://zh-hans.reactjs.org/docs/react-component.html" target="_blank" rel="noreferrer">https://zh-hans.reactjs.org/docs/react-component.html</a></em></p><p>官网中在介绍这些钩子函数时，也是分为了<strong>常用</strong>和<strong>不常用</strong>两大块来介绍的。</p><p>常用的生命周期钩子函数如下：</p><ul><li><p><em>constructor</em></p><ul><li>同一个组件对象只会创建一次</li><li>不能在第一次挂载到页面之前，调用 <em>setState</em>，为了避免问题，构造函数中严禁使用 <em>setState</em></li></ul></li><li><p><em>render</em></p><ul><li><em>render</em> 是整个类组件中必须要书写的生命周期方法</li><li>返回一个虚拟 <em>DOM</em>，会被挂载到虚拟 <em>DOM</em> 树中，最终渲染到页面的真实 <em>DOM</em> 中</li><li><em>render</em> 可能不只运行一次，只要需要重新渲染，就会重新运行</li><li>严禁使用 <em>setState</em>，因为可能会导致无限递归渲染</li></ul></li></ul><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React from &quot;react&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 类组件</span></span>
<span class="line"><span>class App extends React.Component {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    super();</span></span>
<span class="line"><span>    // 主要做一些初始化操作，例如该组件的状态</span></span>
<span class="line"><span>    this.state = {</span></span>
<span class="line"><span>      value : 1</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    console.log(&quot;constructor&quot;);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  clickHandle=()=&gt;{</span></span>
<span class="line"><span>    this.setState({</span></span>
<span class="line"><span>      value : this.state.value + 1</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    console.log(&quot;render&quot;);</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;div&gt;{this.state.value}&lt;/div&gt;</span></span>
<span class="line"><span>        &lt;button onClick={this.clickHandle}&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br></div></div><ul><li><em>componentDidMount</em><ul><li>类似于 <em>Vue</em> 里面的 <em>mounted</em></li><li>只会执行一次</li><li>可以使用 <em>setState</em></li><li>通常情况下，会将网络请求、启动计时器等一开始需要的操作，书写到该函数中</li></ul></li><li><em>componentWillUnmount</em><ul><li>通常在该函数中销毁一些组件依赖的资源，比如计时器</li></ul></li></ul>`,16)])])}const d=n(l,[["render",r]]);export{b as __pageData,d as default};
