import{_ as n,o as a,c as p,a2 as e}from"./chunks/framework.CAKCj7G0.js";const m=JSON.parse('{"title":"render props","description":"","frontmatter":{},"headers":[],"relativePath":"DuOneClass/09.react/3-11.Render props.md","filePath":"DuOneClass/09.react/3-11.Render props.md"}'),l={name:"DuOneClass/09.react/3-11.Render props.md"};function r(i,s,c,b,t,o){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="render-props" tabindex="-1">render props <a class="header-anchor" href="#render-props" aria-label="Permalink to &quot;render props&quot;">​</a></h1><p>有时候，某些组件的各种功能及其处理逻辑几乎完全相同，只是显示的界面不一样，建议下面的方式认选其一来解决重复代码的问题（横切关注点）</p><ol><li>render props <ol><li>某个组件，需要某个属性</li><li>该属性是一个函数，函数的返回值用于渲染</li><li>函数的参数会传递为需要的数据</li><li>注意纯组件的属性（尽量避免每次传递的render props的地址不一致）</li><li>通常该属性的名字叫做render</li></ol></li><li>HOC</li></ol><blockquote><p>RenderProps 实例代码</p></blockquote><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React, { PureComponent } from &#39;react&#39;</span></span>
<span class="line"><span>import MovablePanel from &#39;.&#39;</span></span>
<span class="line"><span>export default class Test extends PureComponent {</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div&gt;</span></span>
<span class="line"><span>        {/* &lt;MovablePanel&gt;</span></span>
<span class="line"><span>          {(mouse) =&gt; (</span></span>
<span class="line"><span>            &lt;&gt;</span></span>
<span class="line"><span>              &lt;h2&gt;</span></span>
<span class="line"><span>                {&#39; &#39;}</span></span>
<span class="line"><span>                x: {mouse.x}, y:{mouse.y}</span></span>
<span class="line"><span>              &lt;/h2&gt;</span></span>
<span class="line"><span>            &lt;/&gt;</span></span>
<span class="line"><span>          )}</span></span>
<span class="line"><span>        &lt;/MovablePanel&gt; */}</span></span>
<span class="line"><span>        {/* Reader Props */}          </span></span>
<span class="line"><span>        &lt;MovablePanel&gt;</span></span>
<span class="line"><span>          {(mouse) =&gt; (</span></span>
<span class="line"><span>            &lt;div</span></span>
<span class="line"><span>              style={{</span></span>
<span class="line"><span>                width: &#39;100px&#39;,</span></span>
<span class="line"><span>                height: &#39;100px&#39;,</span></span>
<span class="line"><span>                borderRadius:&quot;50%&quot;,</span></span>
<span class="line"><span>                position: &#39;absolute&#39;,</span></span>
<span class="line"><span>                left: mouse.x-50,</span></span>
<span class="line"><span>                top: mouse.y-50,</span></span>
<span class="line"><span>                backgroundColor: &#39;red&#39;,</span></span>
<span class="line"><span>              }}</span></span>
<span class="line"><span>            &gt;&lt;/div&gt;</span></span>
<span class="line"><span>          )}</span></span>
<span class="line"><span>        &lt;/MovablePanel&gt;</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br></div></div><p><strong>MovablePanel.js</strong></p><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React, { Component } from &#39;react&#39;</span></span>
<span class="line"><span>import &#39;./index.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class MovablePanel extends Component {</span></span>
<span class="line"><span>  state = {</span></span>
<span class="line"><span>    x: 0,</span></span>
<span class="line"><span>    y: 0,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  ContainerRef = React.forwardRef()</span></span>
<span class="line"><span>  handleMove = (e) =&gt; {</span></span>
<span class="line"><span>    const { left, top } = this.ContainerRef.current.getBoundingClientRect()</span></span>
<span class="line"><span>    this.setState({</span></span>
<span class="line"><span>      x: e.pageX - left,</span></span>
<span class="line"><span>      y: e.pageY - top,</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    return (</span></span>
<span class="line"><span>      &lt;div</span></span>
<span class="line"><span>        ref={this.ContainerRef}</span></span>
<span class="line"><span>        className=&quot;main&quot;</span></span>
<span class="line"><span>        onMouseMove={this.handleMove}</span></span>
<span class="line"><span>      &gt;</span></span>
<span class="line"><span>        {this.props.children(this.state)}</span></span>
<span class="line"><span>      &lt;/div&gt;</span></span>
<span class="line"><span>    )</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div>`,7)])])}const d=n(l,[["render",r]]);export{m as __pageData,d as default};
