import{_ as n,o as a,c as p,a2 as e}from"./chunks/framework.CAKCj7G0.js";const k=JSON.parse('{"title":"属性默认值 和 类型检查","description":"","frontmatter":{},"headers":[],"relativePath":"DuOneClass/09.react/3-01.属性默认值和类型检查.md","filePath":"DuOneClass/09.react/3-01.属性默认值和类型检查.md"}'),i={name:"DuOneClass/09.react/3-01.属性默认值和类型检查.md"};function l(r,s,t,c,o,h){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="属性默认值-和-类型检查" tabindex="-1">属性默认值 和 类型检查 <a class="header-anchor" href="#属性默认值-和-类型检查" aria-label="Permalink to &quot;属性默认值 和 类型检查&quot;">​</a></h1><h2 id="属性默认值" tabindex="-1">属性默认值 <a class="header-anchor" href="#属性默认值" aria-label="Permalink to &quot;属性默认值&quot;">​</a></h2><p>通过一个静态属性<code>defaultProps</code>告知react属性默认值</p><h2 id="属性类型检查" tabindex="-1">属性类型检查 <a class="header-anchor" href="#属性类型检查" aria-label="Permalink to &quot;属性类型检查&quot;">​</a></h2><p>使用库：<code>prop-types</code></p><p>对组件使用静态属性<code>propTypes</code>告知react如何检查属性</p><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.any：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//任意类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.array：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//数组类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.bool：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//布尔类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.func：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//函数类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.number：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//数字类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.object：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//对象类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.string：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//字符串类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.symbol：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//符号类型</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.node：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//任何可以被渲染的内容，字符串、数字、React元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.element：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//react元素</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.elementType：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//react元素类型,必须是一个组件类型</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">instanceOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(构造函数)：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//必须是指定构造函数的实例</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oneOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([xxx, xxx])：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//枚举</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">oneOfType</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">([xxx, xxx]);  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//属性类型必须是数组中的其中一个</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">arrayOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PropTypes.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">XXX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//必须是某一类型组成的数组</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">objectOf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(PropTypes.</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">XXX</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//对象由某一类型的值组成</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">shape</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(对象): </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//属性必须是对象，并且满足指定的对象要求</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">PropTypes.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">({</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">})：</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//对象必须精确匹配传递的数据</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//自定义属性检查，如果有错误，返回错误对象即可</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">属性</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">props</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">propName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">componentName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   //...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><h2 id="示例代码" tabindex="-1">示例代码 <a class="header-anchor" href="#示例代码" aria-label="Permalink to &quot;示例代码&quot;">​</a></h2><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import PropTypes from &quot;prop-types&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export class A {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export class B extends A {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class ValidationComp extends Component {</span></span>
<span class="line"><span>    //先混合属性</span></span>
<span class="line"><span>    static defaultProps = {</span></span>
<span class="line"><span>        b: false</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    //再调用相应的函数进行验证</span></span>
<span class="line"><span>    static propTypes = {</span></span>
<span class="line"><span>        a: PropTypes.number.isRequired,  //a属性必须是一个数字类型,并且必填</span></span>
<span class="line"><span>        b: PropTypes.bool.isRequired, //b必须是一个bool属性,并且必填</span></span>
<span class="line"><span>        onClick: PropTypes.func, //onClick必须是一个函数</span></span>
<span class="line"><span>        c: PropTypes.any, //1. 可以设置必填   2. 阵型保持整齐（所有属性都在该对象中）</span></span>
<span class="line"><span>        d: PropTypes.node.isRequired, //d必填，而且必须是一个可以渲染的内容，字符串、数字、React元素</span></span>
<span class="line"><span>        e: PropTypes.element, //e必须是一个React元素</span></span>
<span class="line"><span>        F: PropTypes.elementType, //F必须是一个组件类型</span></span>
<span class="line"><span>        g: PropTypes.instanceOf(A), //g必须是A的实例</span></span>
<span class="line"><span>        sex: PropTypes.oneOf([&quot;男&quot;, &quot;女&quot;]), //属性必须是数组当中的一个</span></span>
<span class="line"><span>        h: PropTypes.arrayOf(PropTypes.number), //数组的每一项必须满足类型要求</span></span>
<span class="line"><span>        i: PropTypes.objectOf(PropTypes.number), //每一个属性必须满足类型要求</span></span>
<span class="line"><span>        j: PropTypes.shape({ //属性必须满足该对象的要求</span></span>
<span class="line"><span>            name: PropTypes.string.isRequired, //name必须是一个字符串，必填</span></span>
<span class="line"><span>            age: PropTypes.number, //age必须是一个数字</span></span>
<span class="line"><span>            address: PropTypes.shape({</span></span>
<span class="line"><span>                province: PropTypes.string,</span></span>
<span class="line"><span>                city: PropTypes.string</span></span>
<span class="line"><span>            })</span></span>
<span class="line"><span>        }),</span></span>
<span class="line"><span>        k: PropTypes.arrayOf(PropTypes.shape({</span></span>
<span class="line"><span>            name: PropTypes.string.isRequired,</span></span>
<span class="line"><span>            age: PropTypes.number.isRequired</span></span>
<span class="line"><span>        })),</span></span>
<span class="line"><span>        m: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),</span></span>
<span class="line"><span>        score: function (props, propName, componentName) {</span></span>
<span class="line"><span>            console.log(props, propName, componentName);</span></span>
<span class="line"><span>            const val = props[propName];</span></span>
<span class="line"><span>            //必填</span></span>
<span class="line"><span>            if (val === undefined || val === null) {</span></span>
<span class="line"><span>                return new Error(\`invalid prop \${propName} in \${componentName}，\${propName} is Required\`);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            //该属性必须是一个数字</span></span>
<span class="line"><span>            if (typeof val !== &quot;number&quot;) {</span></span>
<span class="line"><span>                return new Error(\`invalid prop \${propName} in \${componentName}，\${propName} is not a number\`);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            const err = PropTypes.number.isRequired(props, propName, componentName);</span></span>
<span class="line"><span>            if(err){</span></span>
<span class="line"><span>                return err;</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>            //并且取值范围是0~100</span></span>
<span class="line"><span>            if (val &lt; 0 || val &gt; 100) {</span></span>
<span class="line"><span>                return new Error(\`invalid prop \${propName} in \${componentName}，\${propName} must is between 0 and 100\`);</span></span>
<span class="line"><span>            }</span></span>
<span class="line"><span>        }</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    render() {</span></span>
<span class="line"><span>        const F = this.props.F;</span></span>
<span class="line"><span>        return (</span></span>
<span class="line"><span>            &lt;div&gt;</span></span>
<span class="line"><span>                {this.props.a}</span></span>
<span class="line"><span>                &lt;div&gt;</span></span>
<span class="line"><span>                    {this.props.d}</span></span>
<span class="line"><span>                    &lt;F /&gt;</span></span>
<span class="line"><span>                &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        )</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br></div></div><p>react 的 PropTypes 不就相当于ts嘛 为什么不直接用ts</p><blockquote><p>React 的 PropTypes 和 TypeScript 确实都有类型检查的功能，但它们在用途和实现上有一些重要区别。以下是详细解释为什么你可能会选择使用其中一种或两种：</p></blockquote><h3 id="proptypes-和-typescript-的比较" tabindex="-1">PropTypes 和 TypeScript 的比较 <a class="header-anchor" href="#proptypes-和-typescript-的比较" aria-label="Permalink to &quot;PropTypes 和 TypeScript 的比较&quot;">​</a></h3><h4 id="proptypes" tabindex="-1">PropTypes <a class="header-anchor" href="#proptypes" aria-label="Permalink to &quot;PropTypes&quot;">​</a></h4><ul><li><strong>运行时检查</strong>：PropTypes 在运行时对组件的 props 进行类型检查。如果类型不正确，会在控制台中显示警告。这对于捕获运行时错误很有帮助。</li><li><strong>轻量级</strong>：PropTypes 是一个相对简单和轻量的库，只需导入并添加到组件中即可使用。</li><li><strong>无构建步骤</strong>：PropTypes 不需要额外的构建步骤，可以直接在 JavaScript 项目中使用。</li></ul><h4 id="typescript" tabindex="-1">TypeScript <a class="header-anchor" href="#typescript" aria-label="Permalink to &quot;TypeScript&quot;">​</a></h4><ul><li><strong>编译时检查</strong>：TypeScript 提供静态类型检查，这意味着在代码运行之前（编译阶段）就可以发现类型错误。这有助于在开发过程中捕获更多错误，提升代码的健壮性。</li><li><strong>更强的类型系统</strong>：TypeScript 提供了更强大和灵活的类型系统，包括接口、泛型、枚举等，可以更精确地描述代码的意图。</li><li><strong>IDE 支持</strong>：TypeScript 与现代编辑器（如 VSCode）结合得很好，提供智能提示、自动补全和重构工具，大大提升了开发效率。</li><li><strong>社区和生态系统</strong>：TypeScript 的社区非常活跃，许多现代 JavaScript 库和框架（包括 React）都提供了官方的 TypeScript 类型定义。</li></ul><h3 id="为什么选择-proptypes" tabindex="-1">为什么选择 PropTypes <a class="header-anchor" href="#为什么选择-proptypes" aria-label="Permalink to &quot;为什么选择 PropTypes&quot;">​</a></h3><ol><li><strong>简单性</strong>：对于小型项目或对类型安全要求不高的项目，PropTypes 是一个更简单的解决方案。</li><li><strong>现有项目</strong>：在已有的 JavaScript 项目中引入 PropTypes 比转换整个项目到 TypeScript 更加容易和快速。</li><li><strong>快速原型开发</strong>：在快速原型开发或试验性质的项目中，PropTypes 可以快速提供基本的类型检查功能，而无需设置 TypeScript 工具链。</li></ol><h3 id="为什么选择-typescript" tabindex="-1">为什么选择 TypeScript <a class="header-anchor" href="#为什么选择-typescript" aria-label="Permalink to &quot;为什么选择 TypeScript&quot;">​</a></h3><ol><li><strong>大型项目</strong>：对于大型项目，TypeScript 提供的静态类型检查和 IDE 支持能显著提升代码质量和开发效率。</li><li><strong>长远维护</strong>：TypeScript 通过编译时的类型检查，可以帮助开发者在项目演进中保持类型安全，降低 bug 的引入。</li><li><strong>团队协作</strong>：在多人合作的项目中，TypeScript 的类型定义能让不同开发者更容易理解和使用代码。</li></ol><h3 id="结合使用" tabindex="-1">结合使用 <a class="header-anchor" href="#结合使用" aria-label="Permalink to &quot;结合使用&quot;">​</a></h3><p>实际上，PropTypes 和 TypeScript 也可以结合使用。在一个使用 TypeScript 的项目中，你仍然可以使用 PropTypes 进行运行时的类型检查，特别是在需要验证外部数据（如 API 响应）的时候。</p><h3 id="总结" tabindex="-1">总结 <a class="header-anchor" href="#总结" aria-label="Permalink to &quot;总结&quot;">​</a></h3><p>虽然 PropTypes 和 TypeScript 都提供类型检查，但它们在应用场景和实现方式上有显著不同。对于小型或现有项目，PropTypes 可能更为方便和直接。而对于大型、复杂和长期维护的项目，TypeScript 提供的静态类型系统和开发工具支持将会带来更大的优势。</p>`,24)])])}const u=n(i,[["render",l]]);export{k as __pageData,u as default};
