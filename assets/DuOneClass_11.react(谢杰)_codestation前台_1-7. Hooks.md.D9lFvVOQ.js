import{_ as n,o as a,c as p,a2 as e}from"./chunks/framework.CAKCj7G0.js";const m=JSON.parse('{"title":"1-7. Hooks","description":"","frontmatter":{},"headers":[],"relativePath":"DuOneClass/11.react(谢杰)/codestation前台/1-7. Hooks.md","filePath":"DuOneClass/11.react(谢杰)/codestation前台/1-7. Hooks.md"}'),l={name:"DuOneClass/11.react(谢杰)/codestation前台/1-7. Hooks.md"};function i(t,s,c,r,u,b){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="_1-7-hooks" tabindex="-1">1-7. Hooks <a class="header-anchor" href="#_1-7-hooks" aria-label="Permalink to &quot;1-7. Hooks&quot;">​</a></h1><h1 id="hooks" tabindex="-1"><em>Hooks</em> <a class="header-anchor" href="#hooks" aria-label="Permalink to &quot;*Hooks*&quot;">​</a></h1><p>本章主要包含以下内容：</p><ul><li><em>Hooks</em> 基本介绍</li><li><em>useState</em> 和 <em>useEffect</em></li><li>自定义 <em>Hook</em></li></ul><h2 id="hooks-基本介绍" tabindex="-1"><em>Hooks</em> 基本介绍 <a class="header-anchor" href="#hooks-基本介绍" aria-label="Permalink to &quot;*Hooks* 基本介绍&quot;">​</a></h2><blockquote><p><em>Hook</em> 是 <em>React 16.8</em> 的新增特性。它可以让你在不编写 <em>class</em> 的情况下使用 <em>state</em> 以及其他的 <em>React</em> 特性。</p></blockquote><p><em>Hooks</em> 的出现，首先能解决如下的一些问题：</p><ul><li>告别令人疑惑的生命周期 <ul><li>例如下面的例子，相同的代码在不同的生命周期中存在了两份</li></ul></li></ul><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React from &quot;react&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>// 类组件</span></span>
<span class="line"><span>class App extends React.Component {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  constructor() {</span></span>
<span class="line"><span>    super();</span></span>
<span class="line"><span>    this.state = {</span></span>
<span class="line"><span>      count : 0</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  componentDidMount(){</span></span>
<span class="line"><span>    document.title = \`你点击了\${this.state.count}次\`;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  componentDidUpdate(){</span></span>
<span class="line"><span>    document.title = \`你点击了\${this.state.count}次\`;</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        &lt;p&gt;You clicked {this.state.count} times&lt;/p&gt;</span></span>
<span class="line"><span>        &lt;button onClick={() =&gt; this.setState({ count: this.state.count + 1 })}&gt;</span></span>
<span class="line"><span>          Click me</span></span>
<span class="line"><span>        &lt;/button&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br></div></div><ul><li>告别类组件中烦人的 <em>this</em><ul><li>在类组件中，会存在 <em>this</em> 的指向问题，例如在事件处理函数中，不能直接通过 <em>this</em> 获取组件实例，需要修改 <em>this</em> 指向</li></ul></li><li>告别繁重的类组件，回归前端程序员更加熟悉的函数</li></ul><p>另外，<em>Hooks</em> 的出现，还有更加重要的一个信号，那就是整个 <em>React</em> 思想上面的转变，从“面向对象”的思想开始转为“函数式编程”的思想。这是编程范式上面的转变。</p><p>编程范式：</p><ul><li>命令式编程：告诉计算机怎么做（<em>How</em>），我们需要给计算机指明每一个步骤 <ul><li>面向过程</li><li>面向对象</li></ul></li><li><strong>声明</strong>式编程：告诉计算机我要什么（<em>What</em>） <ul><li>函数式编程</li><li><em>DSL</em>（领域专用语言，<em>HTML、CSS、SQL</em>）</li></ul></li></ul><p>声明式编程并不是新的产物，它是和命令式编程同期出现的。但是，早期更加流行命令式编程。不过随着近几年整个项目工程越来越复杂，以前的命令式编程就有点力不从心，所以现在慢慢开始流行声明式编程。</p><p>因此当你学习 <em>Hooks</em> 的时候，会发现突然多了一些以前不熟悉的概念，例如：纯函数、副作用、柯里化、高阶函数等概念。</p><p>当然，你可能好奇“面向对象”和“函数式编程”有什么区别，这里推荐一篇文章：</p><p><em><a href="https://www.imaginarycloud.com/blog/functional-programming-vs-oop/" target="_blank" rel="noreferrer">https://www.imaginarycloud.com/blog/functional-programming-vs-oop/</a></em></p><p><em>Hook</em> 就是 <em>JavaScript</em> 函数，但是使用它们会有两个额外的规则：</p><ul><li>只能在<strong>函数最外层</strong>调用 <em>Hook</em>。不要在循环、条件判断或者子函数中调用。</li><li>只能在 <strong><em>React</em> 的函数组件</strong>中调用 <em>Hook</em>。不要在其他 <em>JavaScript</em> 函数中调用。</li></ul><h2 id="usestate-和-useeffect" tabindex="-1"><em>useState</em> 和 <em>useEffect</em> <a class="header-anchor" href="#usestate-和-useeffect" aria-label="Permalink to &quot;*useState* 和 *useEffect*&quot;">​</a></h2><p><em>React</em> 内置了一些实用的 <em>Hook</em>，并且随着 <em>React</em> 版本的更新，<em>Hook</em> 的数量还在持续增加当中。</p><p>入门阶段，我们掌握两个最常用的 <em>Hook</em>，一个是为函数组件添加状态的 <em>useState</em>，另一个是处理函数副作用的 <em>useEffect</em>。</p><p><em>useState</em> 包含以下的知识点：</p><ul><li>基本使用</li></ul><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function App(props) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let [count, setCount] = useState(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function clickhandle(){</span></span>
<span class="line"><span>    setCount(++count);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;{count}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;button onClick={clickhandle}&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><ul><li>声明多个 <em>state</em> 状态</li></ul><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function App(props) {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let [age, setAge] = useState(18);</span></span>
<span class="line"><span>  const [fruit, setFruit] = useState(&#39;banana&#39;);</span></span>
<span class="line"><span>  const [todos, setTodos] = useState([{ text: &#39;学习 Hook&#39; }]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function clickhandle(){</span></span>
<span class="line"><span>    setAge(++age);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;年龄：{age}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;水果：{fruit}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;待办事项：{todos[0].text}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;button onClick={clickhandle}&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br></div></div><p><em>useEffect</em> 包含以下知识点：</p><ul><li><p>副作用的概念</p><ul><li>纯函数：一个确切的参数在你的函数中运行后，一定能得到一个确切的值，例如下面的例子：</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> test</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">){</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  return</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> x </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 2</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 4</span></span>
<span class="line"><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">x</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 3</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> ===&gt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><ul><li>如果一个函数中，存在副作用，那么我们就称该函数不是一个纯函数，所谓副作用，就是指函数的结果是不可控，不可预期。</li><li>常见的副作用有发送网络请求、添加一些监听的注册和取消注册，手动修改 <em>DOM</em>，以前我们是将这些副作用写在生命周期钩子函数里面，现在就可以书写在 <em>useEffect</em> 这个 <em>Hook</em> 里面</li></ul></li><li><p>基本使用</p></li></ul><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useState, useEffect } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function App() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let [count, setCount] = useState(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(()=&gt;{</span></span>
<span class="line"><span>    // 书写你要执行的副作用，会在组件渲染完成后执行</span></span>
<span class="line"><span>    document.title = \`你点击了\${count}次\`;</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function clickhandle() {</span></span>
<span class="line"><span>    setCount(++count);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;你点击了{count}次&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;button onClick={clickhandle}&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ul><li>执行清理工作</li></ul><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useState, useEffect } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function App() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let [count, setCount] = useState(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(()=&gt;{</span></span>
<span class="line"><span>    // 书写你要执行的副作用，会在组件渲染完成后执行</span></span>
<span class="line"><span>    const stopTimer = setInterval(()=&gt;{</span></span>
<span class="line"><span>      console.log(&quot;Hello&quot;);</span></span>
<span class="line"><span>    },1000)   </span></span>
<span class="line"><span></span></span>
<span class="line"><span>    // console.log(&quot;副作用函数执行了&quot;);</span></span>
<span class="line"><span>    // 在 useEffect 中，可以返回一个函数，该函数我们称之为清理函数（一般就是做一些清理操作）</span></span>
<span class="line"><span>    // 该函数会在下一次渲染之后，但是在执行副作用操作之前执行</span></span>
<span class="line"><span>    return ()=&gt;{</span></span>
<span class="line"><span>      // console.log(&quot;清理函数执行了&quot;);</span></span>
<span class="line"><span>      clearInterval(stopTimer);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  });</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function clickhandle() {</span></span>
<span class="line"><span>    setCount(++count);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;你点击了{count}次&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;button onClick={clickhandle}&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><ul><li><p>副作用的依赖</p><ul><li>目前，我们的副作用函数，每次重新渲染后，都会重新执行，有些时候我们是需要设置依赖项，传递第二个参数，第二个参数为一个依赖数组</li></ul><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useState, useEffect } from &#39;react&#39;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function App() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  let [count1, setCount1] = useState(0);</span></span>
<span class="line"><span>  let [count2, setCount2] = useState(0);</span></span>
<span class="line"><span>  let [count3, setCount3] = useState(0);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  useEffect(()=&gt;{</span></span>
<span class="line"><span>    console.log(&quot;执行副作用函数&quot;);</span></span>
<span class="line"><span>  },[count1]);</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;count1:{count1}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;count2:{count2}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;count3:{count3}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;button onClick={()=&gt;setCount1(++count1)}&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button onClick={()=&gt;setCount2(++count2)}&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>      &lt;button onClick={()=&gt;setCount3(++count3)}&gt;+1&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  );</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><ul><li>如果想要副作用只执行一次，传递第二个参数为一个空数组</li></ul><div class="language-js vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">useEffect</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(()</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;执行副作用函数&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">},[]);</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div></li></ul><h2 id="自定义-hook" tabindex="-1">自定义 <em>Hook</em> <a class="header-anchor" href="#自定义-hook" aria-label="Permalink to &quot;自定义 *Hook*&quot;">​</a></h2><p>除了使用官方内置的 <em>Hook</em>，我们还可以自定义 <em>Hook</em>，自定义 <em>Hook</em> 的本质其实就是函数，但是和普通函数还是有一些区别，主要体现在以下两个点：</p><ul><li>自定义 <em>Hook</em> 能够调用诸如 <em>useState</em>、<em>useRef</em> 等，普通函数则不能。由此可以通过内置的 <em>Hooks</em> 获得 <em>Fiber</em> 的访问方式，可以实现在组件级别存储数据的方案等。</li><li>自定义 <em>Hooks</em> 需要以 <em>use</em> 开头，普通函数则没有这个限制。使用 <em>use</em> 开头并不是一个语法或者一个强制性的方案，更像是一个约定。</li></ul><p><em>App.jsx</em></p><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useState } from &#39;react&#39;;</span></span>
<span class="line"><span>import useMyBook from &quot;./useMyBook&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function App() {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  const {bookName, setBookName} = useMyBook();</span></span>
<span class="line"><span>  const [value, setValue] = useState(&quot;&quot;);</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function changeHandle(e){</span></span>
<span class="line"><span>    setValue(e.target.value);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  function clickHandle(){</span></span>
<span class="line"><span>    setBookName(value);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  return (</span></span>
<span class="line"><span>    &lt;div&gt;</span></span>
<span class="line"><span>      &lt;div&gt;{bookName}&lt;/div&gt;</span></span>
<span class="line"><span>      &lt;input type=&quot;text&quot; value={value} onChange={changeHandle}/&gt;</span></span>
<span class="line"><span>      &lt;button onClick={clickHandle}&gt;确定&lt;/button&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>  )</span></span>
<span class="line"><span>  </span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default App;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><p><em>useMyBook</em></p><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { useState } from &quot;react&quot;;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function useMyBook(){</span></span>
<span class="line"><span>    const [bookName, setBookName] = useState(&quot;React 学习&quot;);</span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>        bookName, setBookName</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default useMyBook;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div>`,40)])])}const d=n(l,[["render",i]]);export{m as __pageData,d as default};
