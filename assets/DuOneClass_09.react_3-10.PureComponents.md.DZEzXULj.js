import{_ as n,o as a,c as p,a2 as e}from"./chunks/framework.CAKCj7G0.js";const m=JSON.parse('{"title":"PureComponents","description":"","frontmatter":{},"headers":[],"relativePath":"DuOneClass/09.react/3-10.PureComponents.md","filePath":"DuOneClass/09.react/3-10.PureComponents.md"}'),l={name:"DuOneClass/09.react/3-10.PureComponents.md"};function i(r,s,t,c,o,b){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="purecomponents" tabindex="-1">PureComponents <a class="header-anchor" href="#purecomponents" aria-label="Permalink to &quot;PureComponents&quot;">​</a></h1><p>纯组件，用于避免不必要的渲染（运行render函数），从而提升效率</p><p>优化：如果一个组件的属性和状态，都没有发生变化，重新渲染此组件是没有必要的。</p><p>内部实现了浅比较，第一节点相同，则shouldComponentUpdate返回false</p><p>PureComponents是一个组件，如果某个组件继承了该组件，则再shouldComponentUpdate的函数执行时，会对该组件的属性和状态进行浅比较，如果相同则不会进行渲染</p><blockquote><p>extends PureComponent 实现原理</p></blockquote><p>浅比较方法</p><div class="language-javascript vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">javascript</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ObjectEqual</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">obj2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> key </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">in</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj1){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(obj1[key] </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">!==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> obj2[key]){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> false</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> true</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><p>子组件: shouldComponentUpdate</p><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import PropTypes from &#39;prop-types&#39;</span></span>
<span class="line"><span>import &#39;./index.css&#39;</span></span>
<span class="line"><span>import { ObjectEqual } from &#39;../../utils/helper&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class Task extends Component {</span></span>
<span class="line"><span>  static defaultProps = {</span></span>
<span class="line"><span>    name: PropTypes.string.isRequired,</span></span>
<span class="line"><span>    finish: PropTypes.bool.isRequired,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  shouldComponentUpdate(nextProps, nextState) {</span></span>
<span class="line"><span>    if (</span></span>
<span class="line"><span>      ObjectEqual(this.prop, nextProps) &amp;&amp;</span></span>
<span class="line"><span>      ObjectEqual(this.state, nextState)</span></span>
<span class="line"><span>    ) {</span></span>
<span class="line"><span>      return false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return true</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    console.log(&#39;Task Render&#39;)</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;li className={this.props.finish ? &#39;isFinish&#39; : &#39;&#39;}&gt;{this.props.name}&lt;/li&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br></div></div><p><em><strong>注意</strong></em></p><ol><li><p>pureComponent进行的是浅比较。</p><ol><li>为了效率，应尽量使用 pureComponent</li><li>要求不要改动之前的状态，<strong>永远是创建新的状态去覆盖之前的状态</strong> （ImmuTable,不可变对象）</li><li>第三方库, immutable.js 专门用于制作不可变对象</li></ol></li><li><p>函数式组件</p><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React from &#39;react&#39;</span></span>
<span class="line"><span>import PropTypes from &#39;prop-types&#39;</span></span>
<span class="line"><span>import &#39;./index.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Task(props) {</span></span>
<span class="line"><span>  return &lt;li className={props.finish ? &#39;isFinish&#39; : &#39;&#39;}&gt;{props.name}&lt;/li&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>Task.propTypes = {</span></span>
<span class="line"><span>  name: PropTypes.string.isRequired,</span></span>
<span class="line"><span>  finish: PropTypes.bool.isRequired,</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default React.memo(Task)</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div></li></ol><blockquote><p>React.memo()原理</p></blockquote><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>function memo(FunComp){</span></span>
<span class="line"><span>	return class memo extend PureComponent(comp){</span></span>
<span class="line"><span>		render(){</span></span>
<span class="line"><span>			return &lt;&gt;</span></span>
<span class="line"><span>            	{FunComp {this.props}}</span></span>
<span class="line"><span>            &lt;/&gt;</span></span>
<span class="line"><span>		}</span></span>
<span class="line"><span>	}</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br></div></div>`,14)])])}const h=n(l,[["render",i]]);export{m as __pageData,h as default};
