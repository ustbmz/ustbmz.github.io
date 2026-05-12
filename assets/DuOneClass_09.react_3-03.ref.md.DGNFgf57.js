import{_ as s,o as a,c as p,a2 as e}from"./chunks/framework.CAKCj7G0.js";const u=JSON.parse('{"title":"ref","description":"","frontmatter":{},"headers":[],"relativePath":"DuOneClass/09.react/3-03.ref.md","filePath":"DuOneClass/09.react/3-03.ref.md"}'),l={name:"DuOneClass/09.react/3-03.ref.md"};function r(i,n,c,t,o,b){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h1 id="ref" tabindex="-1">ref <a class="header-anchor" href="#ref" aria-label="Permalink to &quot;ref&quot;">​</a></h1><p>reference: 引用</p><p>场景：希望直接使用dom元素中的某个方法，或者希望直接使用自定义组件中的某个方法</p><ol><li>ref作用于内置的html组件，得到的将是真实的dom对象</li><li>ref作用于类组件，得到的将是类的实例</li><li>ref不能作用于函数组件</li></ol><p>ref不再推荐使用字符串赋值，字符串赋值的方式将来可能会被移出</p><p>目前，ref推荐使用对象或者是函数</p><p><strong>对象</strong></p><p>通过 React.createRef 函数创建</p><p><strong>函数</strong></p><p>函数的调用时间：</p><ol><li>componentDidMount的时候会调用该函数 <ol><li>在componentDidMount事件中可以使用ref</li></ol></li><li>如果ref的值发生了变动（旧的函数被新的函数替代），分别调用旧的函数以及新的函数，时间点出现在componentDidUpdate之前 <ol><li>旧的函数被调用时，传递null</li><li>新的函数被调用时，传递对象</li></ol></li><li>如果ref所在的组件被卸载，会调用函数</li></ol><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function A(props, ref) {</span></span>
<span class="line"><span>  console.log(&#39;🐤 ≂ props:&#39;, props)</span></span>
<span class="line"><span>  console.log(&#39;🐤 ≂ ref:&#39;, ref)</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;h1 ref={ref}&gt;</span></span>
<span class="line"><span>      组件A</span></span>
<span class="line"><span>      &lt;span&gt;{props.words}&lt;/span&gt;</span></span>
<span class="line"><span>    &lt;/h1&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const NewA = React.forwardRef(A)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class index extends Component {</span></span>
<span class="line"><span>  ARef = React.createRef()</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  componentDidMount() {</span></span>
<span class="line"><span>    console.log(this.ARef)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;NewA ref={this.ARef} words={&#39;testRefForward&#39;}&gt;&lt;/NewA&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><p><strong>谨慎使用ref</strong></p><p>能够使用属性和状态进行控制，就不要使用ref。</p><ol><li>调用真实的DOM对象中的方法</li><li>某个时候需要调用类组件的方法</li></ol><p><strong>常用</strong></p><p>高阶组件中 Ref 的转发</p>`,17)])])}const f=s(l,[["render",r]]);export{u as __pageData,f as default};
