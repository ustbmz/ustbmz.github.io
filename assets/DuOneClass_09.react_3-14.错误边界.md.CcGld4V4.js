import{_ as s,o as a,c as p,a2 as e}from"./chunks/framework.CAKCj7G0.js";const m=JSON.parse('{"title":"错误边界","description":"","frontmatter":{},"headers":[],"relativePath":"DuOneClass/09.react/3-14.错误边界.md","filePath":"DuOneClass/09.react/3-14.错误边界.md"}'),l={name:"DuOneClass/09.react/3-14.错误边界.md"};function r(i,n,c,t,o,b){return a(),p("div",null,[...n[0]||(n[0]=[e(`<h1 id="错误边界" tabindex="-1">错误边界 <a class="header-anchor" href="#错误边界" aria-label="Permalink to &quot;错误边界&quot;">​</a></h1><p>默认情况下，若一个组件在<strong>渲染期间</strong>（render）发生错误，会导致整个组件树全部被卸载</p><p>错误边界：是一个组件，该组件会捕获到渲染期间（render）子组件发生的错误，并有能力阻止错误继续传播</p><p><strong>让某个组件捕获错误</strong></p><ol><li>编写生命周期函数 getDerivedStateFromError <ol><li>静态函数</li><li>运行时间点：渲染子组件的过程中，发生错误之后，在更新页面之前</li><li><strong>注意：只有子组件发生错误，才会运行该函数</strong></li><li>该函数返回一个对象，React会将该对象的属性覆盖掉当前组件的state</li><li>参数：错误对象</li><li>通常，该函数用于改变状态</li></ol></li><li>编写生命周期函数 componentDidCatch <ol><li>实例方法</li><li>运行时间点：渲染子组件的过程中，发生错误，更新页面之后，由于其运行时间点比较靠后，因此不太会在该函数中改变状态</li><li>通常，该函数用于记录错误消息</li></ol></li></ol><p><strong>细节</strong></p><p>某些错误，错误边界组件无法捕获</p><ol><li>自身的错误</li><li>异步的错误</li><li>事件中的错误</li></ol><p>总结：仅处理渲染子组件期间的同步错误</p><blockquote><p>ErrorBound.js</p></blockquote><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import { PureComponent } from &#39;react&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default class index extends PureComponent {</span></span>
<span class="line"><span>  // 运行时间点：渲染子组件的过程中，发生错误之后，在更新页面之前</span></span>
<span class="line"><span>  static getDerivedStateFromError(error, info) {</span></span>
<span class="line"><span>    console.log(error)</span></span>
<span class="line"><span>    console.dir(info)</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    return {</span></span>
<span class="line"><span>      hasError: true,</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  state = {</span></span>
<span class="line"><span>    hasError: false,</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  // 运行时间点：渲染子组件的过程中，发生错误，更新页面之后，</span></span>
<span class="line"><span>  componentDidCatch(error, info) {</span></span>
<span class="line"><span>    console.log(error)</span></span>
<span class="line"><span>    console.dir(info)</span></span>
<span class="line"><span>    // 通常用来记录错误信息</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  render() {</span></span>
<span class="line"><span>    if (this.state.hasError) {</span></span>
<span class="line"><span>      return &lt;h1&gt;Something went wrong.&lt;/h1&gt;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    return this.props.children</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div>`,11)])])}const d=s(l,[["render",r]]);export{m as __pageData,d as default};
