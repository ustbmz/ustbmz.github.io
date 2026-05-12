import{_ as s,o as a,c as p,a2 as l}from"./chunks/framework.CAKCj7G0.js";const m=JSON.parse('{"title":"Context","description":"","frontmatter":{},"headers":[],"relativePath":"DuOneClass/09.react/3-08.Contextt.md","filePath":"DuOneClass/09.react/3-08.Contextt.md"}'),e={name:"DuOneClass/09.react/3-08.Contextt.md"};function i(r,n,t,c,b,o){return a(),p("div",null,[...n[0]||(n[0]=[l(`<h1 id="context" tabindex="-1">Context <a class="header-anchor" href="#context" aria-label="Permalink to &quot;Context&quot;">​</a></h1><p>上下文：Context，表示做某一些事情的环境</p><p>React中的上下文特点：</p><ol><li>当某个组件创建了上下文后，上下文中的数据，会被所有后代组件共享</li><li>如果某个组件依赖了上下文，会导致该组件不再纯粹（外部数据仅来源于属性props）</li><li>一般情况下，用于第三方组件（通用组件）</li></ol><h2 id="旧的api" tabindex="-1">旧的API <a class="header-anchor" href="#旧的api" aria-label="Permalink to &quot;旧的API&quot;">​</a></h2><p><strong>创建上下文</strong></p><p>只有类组件才可以创建上下文</p><ol><li><p>给类组件书写静态属性 childContextTypes，使用该属性对上下文中的数据类型进行约束</p></li><li><p>添加实例方法 getChildContext，该方法返回的对象，即为上下文中的数据，该数据必须满足类型约束，该方法会在每次render之后运行。</p><p>示例代码：</p><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import PropTypes from &#39;prop-types&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class OldContent extends Component {</span></span>
<span class="line"><span>  static childContextTypes = {</span></span>
<span class="line"><span>    a: PropTypes.number.isRequired,</span></span>
<span class="line"><span>    b: PropTypes.string.isRequired,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  getChildContext() {</span></span>
<span class="line"><span>    console.log(&#39;🐤 ≂ getChildContext:&#39;)</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      a: 123,</span></span>
<span class="line"><span>      b: &#39;123&#39;,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return &lt;div&gt;&lt;/div&gt;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div></li></ol><p><strong>使用上下文中的数据</strong></p><p>要求：如果要使用上下文中的数据，组件必须有一个静态属性 contextTypes，该属性描述了需要获取的上下文中的数据类型</p><ol><li>可以在组件的构造函数中，通过第二个参数，获取上下文数据</li><li><strong>从组件的context属性中获取</strong></li><li>在函数组件中，通过第二个参数，获取上下文数据</li></ol><p><strong>上下文的数据变化</strong></p><p>上下文中的数据不可以直接变化，最终都是通过状态改变</p><p>在上下文中加入一个处理函数，可以用于后代组件更改上下文的数据</p><p>示例代码：</p><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import PropTypes from &#39;prop-types&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const types = {</span></span>
<span class="line"><span>  a: PropTypes.number.isRequired,</span></span>
<span class="line"><span>  b: PropTypes.string.isRequired,</span></span>
<span class="line"><span>  onChangeA:PropTypes.func</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>function ChildA(props, context) {</span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;h1&gt;</span></span>
<span class="line"><span>        a:{context.a},b:{context.b}</span></span>
<span class="line"><span>      &lt;/h1&gt;</span></span>
<span class="line"><span>      &lt;ChildB /&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>ChildA.contextTypes = types</span></span>
<span class="line"><span></span></span>
<span class="line"><span>class ChildB extends Component {</span></span>
<span class="line"><span>  static contextTypes = types</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor(props, context) {</span></span>
<span class="line"><span>    console.log(&#39;🐤 ≂ context:&#39;, context)</span></span>
<span class="line"><span>    super(props)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;p&gt;</span></span>
<span class="line"><span>        ChildB 来自上下文 a:{this.context.a},b:{this.context.b}</span></span>
<span class="line"><span>        &lt;button onClick={() =&gt; {</span></span>
<span class="line"><span>          this.context.onChangeA(100)</span></span>
<span class="line"><span>        }}&gt;通过子组件改变上下文&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/p&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class OldContent extends Component {</span></span>
<span class="line"><span>  static childContextTypes = types</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  state = {</span></span>
<span class="line"><span>    a: 2,</span></span>
<span class="line"><span>    b: &#39;2&#39;,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  getChildContext() {</span></span>
<span class="line"><span>    console.log(&#39;🐤 ≂ getChildContext:&#39;)</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      a: this.state.a,</span></span>
<span class="line"><span>      b: this.state.b,</span></span>
<span class="line"><span>      onChangeA: (newA) =&gt; {</span></span>
<span class="line"><span>        this.setState({</span></span>
<span class="line"><span>          a: newA,</span></span>
<span class="line"><span>        })</span></span>
<span class="line"><span>      },</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;ChildA /&gt;</span></span>
<span class="line"><span>        &lt;button</span></span>
<span class="line"><span>          onClick={() =&gt; {</span></span>
<span class="line"><span>            this.setState({</span></span>
<span class="line"><span>              a: this.state.a + 1,</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>          }}</span></span>
<span class="line"><span>        &gt;A++++&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br></div></div><h2 id="新版api" tabindex="-1">新版API <a class="header-anchor" href="#新版api" aria-label="Permalink to &quot;新版API&quot;">​</a></h2><p>旧版API存在严重的效率问题，并且容易导致滥用</p><p><strong>创建上下文</strong></p><p>上下文是一个独立于组件的对象，该对象通过React.createContext(默认值)创建</p><p>返回的是一个包含两个属性的对象</p><ol><li>Provider属性：生产者。一个组件，该组件会创建一个上下文，该组件有一个value属性，通过该属性，可以为其数据赋值 <ol><li>同一个Provider，不要用到多个组件中，如果需要在其他组件中使用该数据，应该考虑将数据提升到更高的层次</li></ol></li><li>Consumer属性：后续讲解</li></ol><p><strong>使用上下文中的数据</strong></p><ol><li>在类组件中，直接使用this.context获取上下文数据 <ol><li>要求：必须拥有静态属性 contextType , 应赋值为创建的上下文对象</li></ol></li><li>在函数组件中，需要使用Consumer来获取上下文数据 <ol><li>Consumer是一个组件</li><li>它的子节点，是一个函数（它的props.children需要传递一个函数）</li></ol></li></ol><p><strong>注意细节</strong></p><p>如果，上下文提供者（Context.Provider）中的value属性发生变化(Object.is比较)，会导致该上下文提供的所有后代元素全部重新渲染，无论该子元素是否有优化（无论shouldComponentUpdate函数返回什么结果）</p><p><strong>旧版生命周期</strong></p><p><img src="https://s2.loli.net/2024/07/15/RKX2cVvNdf9Ea5n.png" alt="image-20240715170908264"></p><p><strong>新版生命周期</strong></p><p><img src="https://s2.loli.net/2024/07/15/mXjfJxhvTt8qCwG.png" alt="image-20240715170732478"></p>`,30)])])}const d=s(e,[["render",i]]);export{m as __pageData,d as default};
