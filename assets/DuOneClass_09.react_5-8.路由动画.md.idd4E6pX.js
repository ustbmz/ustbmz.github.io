import{_ as s,o as a,c as p,a2 as l}from"./chunks/framework.CAKCj7G0.js";const o=JSON.parse('{"title":"常见应用 - 路由切换动画","description":"","frontmatter":{},"headers":[],"relativePath":"DuOneClass/09.react/5-8.路由动画.md","filePath":"DuOneClass/09.react/5-8.路由动画.md"}'),e={name:"DuOneClass/09.react/5-8.路由动画.md"};function r(t,n,i,c,b,u){return a(),p("div",null,[...n[0]||(n[0]=[l(`<h1 id="常见应用-路由切换动画" tabindex="-1">常见应用 - 路由切换动画 <a class="header-anchor" href="#常见应用-路由切换动画" aria-label="Permalink to &quot;常见应用 - 路由切换动画&quot;">​</a></h1><p>第三方动画库：react-transition-group</p><p>CSSTransition：用于为内部的DOM元素添加类样式，通过in属性决定内部的DOM处于退出还是进入阶段。</p><p>react-transition-group 加扩展 Route 功能，通过histroy Math属性判断是否匹配，实现路由动画</p><p><em>教程使用版本太旧，需要适应最新 react-transition-group API</em></p><div class="language-react vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">react</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import React from &quot;react&quot;;</span></span>
<span class="line"><span>import {NavLink, Route} from &quot;react-router-dom&quot;;</span></span>
<span class="line"><span>import RouteGuard from &quot;../../router/RouteGuard&quot;;</span></span>
<span class="line"><span>import {CSSTransition} from &quot;react-transition-group&quot;;</span></span>
<span class="line"><span>import &#39;./index.css&#39;</span></span>
<span class="line"><span>import &#39;animate.css&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function AnimateRoute() {</span></span>
<span class="line"><span>    return &lt;div className={&#39;main&#39;}&gt;</span></span>
<span class="line"><span>        &lt;RouteGuard&gt;</span></span>
<span class="line"><span>            &lt;div className={&#39;header&#39;}&gt;</span></span>
<span class="line"><span>                &lt;NavLink to=&#39;/home&#39; exact&gt;首页&lt;/NavLink&gt;</span></span>
<span class="line"><span>                &lt;NavLink to=&#39;/news&#39; exact&gt;新闻&lt;/NavLink&gt;</span></span>
<span class="line"><span>                &lt;NavLink to=&#39;/personal&#39; exact&gt;个人信息&lt;/NavLink&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>            &lt;div className={&#39;page&#39;}&gt;</span></span>
<span class="line"><span>                &lt;Route path={&#39;/home&#39;} exact&gt;</span></span>
<span class="line"><span>                    {({match}) =&gt; {</span></span>
<span class="line"><span>                        console.log(&#39;home match:&#39;, match ? true : false)</span></span>
<span class="line"><span>                        const flag = match ? true : false</span></span>
<span class="line"><span>                        return &lt;CSSTransition in={flag}</span></span>
<span class="line"><span>                                              timeout={5000}</span></span>
<span class="line"><span>                                              mountedOnEnter={true}</span></span>
<span class="line"><span>                                              unMountOnExit={true}</span></span>
<span class="line"><span>                                              classNames=&quot;my-node&quot;</span></span>
<span class="line"><span>                        &gt;</span></span>
<span class="line"><span>                            &lt;Home/&gt;</span></span>
<span class="line"><span>                        &lt;/CSSTransition&gt;</span></span>
<span class="line"><span>                    }}</span></span>
<span class="line"><span>                &lt;/Route&gt;</span></span>
<span class="line"><span>                &lt;Route path={&#39;/news&#39;} exact&gt;</span></span>
<span class="line"><span>                    {({match}) =&gt; {</span></span>
<span class="line"><span>                        const flag = match ? true : false</span></span>
<span class="line"><span>                        console.log(&#39;news match:&#39;, match ? true : false)</span></span>
<span class="line"><span>                        return &lt;CSSTransition in={flag}</span></span>
<span class="line"><span>                                              timeout={5000}</span></span>
<span class="line"><span>                                              mountedOnEnter={false}</span></span>
<span class="line"><span>                                              unMountOnExit={true}</span></span>
<span class="line"><span>                                             classNames=&quot;my-node&quot;</span></span>
<span class="line"><span>                        &gt;</span></span>
<span class="line"><span>                            &lt;News/&gt;</span></span>
<span class="line"><span>                        &lt;/CSSTransition&gt;</span></span>
<span class="line"><span>                    }}</span></span>
<span class="line"><span>                &lt;/Route&gt;</span></span>
<span class="line"><span>                &lt;Route path={&#39;/personal&#39;} exact&gt;</span></span>
<span class="line"><span>                    {({match}) =&gt; {</span></span>
<span class="line"><span>                        const flag = match ? true : false</span></span>
<span class="line"><span>                        console.log(&#39;personal match:&#39;, match ? true : false)</span></span>
<span class="line"><span>                        return &lt;CSSTransition in={flag}</span></span>
<span class="line"><span>                                              timeout={5000}</span></span>
<span class="line"><span>                                              mountedOnEnter={false}</span></span>
<span class="line"><span>                                              unMountOnExit={true}</span></span>
<span class="line"><span>                                              classNames=&quot;my-node&quot;</span></span>
<span class="line"><span>                        &gt;</span></span>
<span class="line"><span>                            &lt;Personal/&gt;</span></span>
<span class="line"><span>                        &lt;/CSSTransition&gt;</span></span>
<span class="line"><span>                    }}</span></span>
<span class="line"><span>                &lt;/Route&gt;</span></span>
<span class="line"><span>            &lt;/div&gt;</span></span>
<span class="line"><span>        &lt;/RouteGuard&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Home() {</span></span>
<span class="line"><span>    return &lt;div className={&#39;home&#39;}&gt;</span></span>
<span class="line"><span>        &lt;h1&gt;首页&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function News() {</span></span>
<span class="line"><span>    return &lt;div className={&#39;news&#39;}&gt;</span></span>
<span class="line"><span>        &lt;h1&gt;新闻页&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>function Personal() {</span></span>
<span class="line"><span>    return &lt;div className={&#39;personal&#39;}&gt;</span></span>
<span class="line"><span>        &lt;h1&gt;个人页面&lt;/h1&gt;</span></span>
<span class="line"><span>    &lt;/div&gt;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default AnimateRoute</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br></div></div>`,6)])])}const g=s(e,[["render",r]]);export{o as __pageData,g as default};
