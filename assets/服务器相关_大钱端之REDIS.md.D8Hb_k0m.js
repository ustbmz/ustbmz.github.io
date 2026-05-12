import{_ as n,o as a,c as p,a2 as e}from"./chunks/framework.CAKCj7G0.js";const m=JSON.parse('{"title":"大钱端之REDIS","description":"","frontmatter":{},"headers":[],"relativePath":"服务器相关/大钱端之REDIS.md","filePath":"服务器相关/大钱端之REDIS.md"}'),l={name:"服务器相关/大钱端之REDIS.md"};function i(r,s,c,b,t,u){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="大钱端之redis" tabindex="-1">大钱端之REDIS <a class="header-anchor" href="#大钱端之redis" aria-label="Permalink to &quot;大钱端之REDIS&quot;">​</a></h1><ul><li>缓存 （读写性能优异）</li><li>计数 &amp; 消息系统 （ 高并发、发布 &amp; 订阅阻塞队列功能 ）</li><li>分布式会话 session &amp; 分布式锁 （秒杀）</li></ul><h2 id="安装方式" tabindex="-1">安装方式 <a class="header-anchor" href="#安装方式" aria-label="Permalink to &quot;安装方式&quot;">​</a></h2><blockquote><p>使用docker-compose 安装redis</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &quot;3.1&quot;</span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  redis:</span></span>
<span class="line"><span>    image: &quot;redis&quot;</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    container_name: &quot;redis&quot;</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>      - 15001:6379</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>      - /home/redis:/data</span></span>
<span class="line"><span>    command: [&quot;redis-server&quot;, &quot;--requirepass&quot;, &quot;123456&quot;]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><blockquote><p>使用docker run 命令启动redis</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; docker run -itd --restart=always --name redis -p 15001:6379 -v - /home/redis:/data redis redis-server --requirepass 123456</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="redis-cli" tabindex="-1">Redis CLi <a class="header-anchor" href="#redis-cli" aria-label="Permalink to &quot;Redis CLi&quot;">​</a></h2><blockquote><p>进入容器终端 <a href="http://doc.redisfans.com/" target="_blank" rel="noreferrer">RedisFans Doc</a></p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; docker exec -it redis /bin/bash</span></span>
<span class="line"><span>[root@706a75fbbc20:/data#] &gt; redis-cli</span></span>
<span class="line"><span>or can use</span></span>
<span class="line"><span>&gt; docker exec -it redis redis-cli</span></span>
<span class="line"><span>&gt; auth 123456</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="配置-redis-server-信息" tabindex="-1">配置 redis Server 信息 <a class="header-anchor" href="#配置-redis-server-信息" aria-label="Permalink to &quot;配置 redis Server 信息&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>const DB_URL = &quot;mongodb://admin:admin123@118.25.150.195:27017/testdb&quot;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const Redis = {</span></span>
<span class="line"><span>  host: &#39;118.25.150.195&#39;,</span></span>
<span class="line"><span>  port: &#39;150001&#39;,</span></span>
<span class="line"><span>  password: &#39;123456&#39;</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  DB_URL,</span></span>
<span class="line"><span>  Redis</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><h4 id="配置-redisconfig-js-实现增删改查" tabindex="-1">配置 redisConfig.js 实现增删改查 <a class="header-anchor" href="#配置-redisconfig-js-实现增删改查" aria-label="Permalink to &quot;配置 redisConfig.js   实现增删改查&quot;">​</a></h4><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>import redis from &#39;redis&#39;</span></span>
<span class="line"><span>import {</span></span>
<span class="line"><span>  promisifyAll</span></span>
<span class="line"><span>} from &#39;bluebird&#39;</span></span>
<span class="line"><span>import config from &#39;./index&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const options = {</span></span>
<span class="line"><span>  host: config.redis.host,</span></span>
<span class="line"><span>  port: config.redis.port,</span></span>
<span class="line"><span>  password: config.redis.password,</span></span>
<span class="line"><span>  retry_strategy: function (options) {</span></span>
<span class="line"><span>    if (options.error &amp;&amp; options.error.code === &quot;ECONNREFUSED&quot;) {</span></span>
<span class="line"><span>      // End reconnecting on a specific error and flush all commands with</span></span>
<span class="line"><span>      // a individual error</span></span>
<span class="line"><span>      return new Error(&quot;The server refused the connection&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (options.total_retry_time &gt; 1000 * 60 * 60) {</span></span>
<span class="line"><span>      // End reconnecting after a specific timeout and flush all commands</span></span>
<span class="line"><span>      // with a individual error</span></span>
<span class="line"><span>      return new Error(&quot;Retry time exhausted&quot;);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    if (options.attempt &gt; 10) {</span></span>
<span class="line"><span>      // End reconnecting with built in error</span></span>
<span class="line"><span>      return undefined;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>    // reconnect after</span></span>
<span class="line"><span>    return Math.min(options.attempt * 100, 3000);</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const client = promisifyAll(redis.createClient(options))</span></span>
<span class="line"><span></span></span>
<span class="line"><span>client.on(&#39;error&#39;, (err) =&gt; {</span></span>
<span class="line"><span>  console.log(&#39;redis connect errinfo :&#39; + err)</span></span>
<span class="line"><span>})</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const setValue = (key, value) =&gt; {</span></span>
<span class="line"><span>  if (typeof value === &#39;undefined&#39; || value === null || value === &#39;&#39;) {</span></span>
<span class="line"><span>    return</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (typeof value === &#39;string&#39;) {</span></span>
<span class="line"><span>    return client.set(key, value)</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>  if (typeof value === &#39;object&#39;) {</span></span>
<span class="line"><span>    Object.keys(value).forEach((item) =&gt; {</span></span>
<span class="line"><span>      client.hset(key, item, value[item], redis.print)</span></span>
<span class="line"><span>    })</span></span>
<span class="line"><span>  }</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getValue = (key) =&gt; {</span></span>
<span class="line"><span>  return client.getAsync(key)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span></span></span>
<span class="line"><span>const getHValue = (key) =&gt; {</span></span>
<span class="line"><span>  // use bluebird</span></span>
<span class="line"><span>  return client.hgetAsync(key)</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>const delValue = (key) =&gt; {</span></span>
<span class="line"><span>  // use bluebird</span></span>
<span class="line"><span>  return client.del(key, (err, res) =&gt; {</span></span>
<span class="line"><span>    if (res === 1) {</span></span>
<span class="line"><span>      console.log(&#39;delete successful&#39;);</span></span>
<span class="line"><span>    } else {</span></span>
<span class="line"><span>      console.log(&#39;delete fail info:&#39; + err);</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  })</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span></span></span>
<span class="line"><span>export default {</span></span>
<span class="line"><span>  setValue,</span></span>
<span class="line"><span>  getValue,</span></span>
<span class="line"><span>  getHValue,</span></span>
<span class="line"><span>  delValue</span></span>
<span class="line"><span>}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br></div></div>`,14)])])}const d=n(l,[["render",i]]);export{m as __pageData,d as default};
