import{_ as n,o as a,c as p,a2 as e}from"./chunks/framework.CAKCj7G0.js";const u=JSON.parse('{"title":"敏捷流程","description":"","frontmatter":{},"headers":[],"relativePath":"大前端笔记/敏捷流程.md","filePath":"大前端笔记/敏捷流程.md"}'),l={name:"大前端笔记/敏捷流程.md"};function i(r,s,c,t,b,o){return a(),p("div",null,[...s[0]||(s[0]=[e(`<h1 id="敏捷流程" tabindex="-1">敏捷流程 <a class="header-anchor" href="#敏捷流程" aria-label="Permalink to &quot;敏捷流程&quot;">​</a></h1><p>**api文档工具 **</p><ul><li>ShowDoc</li></ul><p>**接口测试 **</p><ul><li>DOClever</li></ul><p>**技术文档 **</p><ul><li>Hexo</li></ul><h1 id="文档管理" tabindex="-1">文档管理 <a class="header-anchor" href="#文档管理" aria-label="Permalink to &quot;文档管理&quot;">​</a></h1><h2 id="showdoc" tabindex="-1">ShowDoc <a class="header-anchor" href="#showdoc" aria-label="Permalink to &quot;ShowDoc&quot;">​</a></h2><blockquote><p>一个非常适合IT团队的在线API文档、技术文档工具. 可本地化部署</p></blockquote><h3 id="docker方式安装" tabindex="-1">Docker方式安装 <a class="header-anchor" href="#docker方式安装" aria-label="Permalink to &quot;Docker方式安装&quot;">​</a></h3><p>安装前请确保你的环境已经装好了docker 。docker的安装教程在网上比较多，可以搜索了解下。这里重点介绍showdoc.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span># 原版官方镜像安装命令(中国大陆用户不建议直接使用原版镜像，可以用后面的加速镜像)</span></span>
<span class="line"><span>docker pull star7th/showdoc</span></span>
<span class="line"><span># 中国大陆镜像安装命令（安装后记得执行docker tag命令以进行重命名）</span></span>
<span class="line"><span>docker pull registry.cn-shenzhen.aliyuncs.com/star7th/showdoc</span></span>
<span class="line"><span>docker tag registry.cn-shenzhen.aliyuncs.com/star7th/showdoc:latest star7th/showdoc:latest</span></span>
<span class="line"><span>##后续命令无论使用官方镜像还是加速镜像都需要执行</span></span>
<span class="line"><span>#新建存放showdoc数据的目录</span></span>
<span class="line"><span>mkdir -p /showdoc_data/html</span></span>
<span class="line"><span>chmod  -R 777 /showdoc_data</span></span>
<span class="line"><span>#启动showdoc容器</span></span>
<span class="line"><span>docker run -d --name showdoc --user=root --privileged=true -p 20011:80 \\</span></span>
<span class="line"><span>-v /showdoc_data/html:/var/www/html/ star7th/showdoc</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div><p>根据以上命令操作的话，往后showdoc的数据都会存放在 /showdoc_data/html 目录下。 你可以打开 <a href="http://localhost:4999/" target="_blank" rel="noreferrer">http://localhost:4999</a> 来访问showdoc (localhost可改为你的服务器域名或者IP)。账户密码是showdoc/123456，登录后你便可以看到右上方的管理后台入口。建议登录后修改密码。 对showdoc的问题或建议请至<a href="https://github.com/star7th/showdoc" target="_blank" rel="noreferrer">https://github.com/star7th/showdoc</a> 出提issue。若觉得showdoc好用，不妨点个star。</p><h2 id="配置镜像加速器" tabindex="-1">配置镜像加速器 <a class="header-anchor" href="#配置镜像加速器" aria-label="Permalink to &quot;配置镜像加速器&quot;">​</a></h2><p>针对Docker客户端版本大于 1.10.0 的用户</p><p>您可以通过修改daemon配置文件/etc/docker/daemon.json来使用加速器</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>sudo mkdir -p /etc/docker</span></span>
<span class="line"><span>sudo tee /etc/docker/daemon.json &lt;&lt;-&#39;EOF&#39;</span></span>
<span class="line"><span>{</span></span>
<span class="line"><span>  &quot;registry-mirrors&quot;: [&quot;https://m11p8yub.mirror.aliyuncs.com&quot;]</span></span>
<span class="line"><span>}</span></span>
<span class="line"><span>EOF</span></span>
<span class="line"><span>sudo systemctl daemon-reload</span></span>
<span class="line"><span>sudo systemctl restart docker</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="如何升级" tabindex="-1">如何升级 <a class="header-anchor" href="#如何升级" aria-label="Permalink to &quot;如何升级&quot;">​</a></h3><p>这里的升级是针对上面docker安装方式的升级。如果你原来是采用非docker安装方式（如php安装方式）的话，请跳过本部分文字，直接去看下部分。</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#停止容器</span></span>
<span class="line"><span>docker stop showdoc</span></span>
<span class="line"><span>#下载最新代码包</span></span>
<span class="line"><span>wget https://github.com/star7th/showdoc/archive/master.tar.gz</span></span>
<span class="line"><span>#解压</span></span>
<span class="line"><span>tar -zxvf master.tar.gz -C /showdoc_data/</span></span>
<span class="line"><span>rm -rf  /showdoc_data/html_bak</span></span>
<span class="line"><span>#备份。如果可以的话，命令中的html_bak还可以加上日期后缀，以便保留不同日期的多个备份</span></span>
<span class="line"><span>mv /showdoc_data/html  /showdoc_data/html_bak</span></span>
<span class="line"><span>mv /showdoc_data/showdoc-master /showdoc_data/html  ##// */</span></span>
<span class="line"><span>#赋予权限</span></span>
<span class="line"><span>chmod -R 777  /showdoc_data/html</span></span>
<span class="line"><span>#启动容器</span></span>
<span class="line"><span>docker start showdoc</span></span>
<span class="line"><span>#执行安装。默认安装中文版。如果想安装英文版，将下面参数中的zh改为en</span></span>
<span class="line"><span>curl http://localhost:4999/install/non_interactive.php?lang=zh</span></span>
<span class="line"><span>#转移旧数据库</span></span>
<span class="line"><span>\\cp  -f  /showdoc_data/html_bak/Sqlite/showdoc.db.php /showdoc_data/html/Sqlite/showdoc.db.php</span></span>
<span class="line"><span>#转移旧附件数据</span></span>
<span class="line"><span>\\cp -r -f /showdoc_data/html_bak/Public/Uploads /showdoc_data/html/Public/Uploads</span></span>
<span class="line"><span># 执行数据库升级，看到OK字样便证明成功</span></span>
<span class="line"><span>curl http://localhost:4999?s=/home/update/db</span></span>
<span class="line"><span>#如果中途出错，请重命名原来的/showdoc_data/html_bak文件为/showdoc_data/html ，然后重启容器便可恢复。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><h3 id="非docker安装方式如何升级到docker安装方式" tabindex="-1">非docker安装方式如何升级到docker安装方式 <a class="header-anchor" href="#非docker安装方式如何升级到docker安装方式" aria-label="Permalink to &quot;非docker安装方式如何升级到docker安装方式&quot;">​</a></h3><p>先参考前文，用docker方式全新安装一个showdoc，并且做好数据持久化。 接下来，假设你原来安装的旧showdoc已上传到服务器的 /tmp/showdoc 目录，那么</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>#转移旧数据库</span></span>
<span class="line"><span>\\cp -r -f /tmp/showdoc/Sqlite/showdoc.db.php /showdoc_data/html/Sqlite/showdoc.db.php</span></span>
<span class="line"><span>#转移旧附件数据</span></span>
<span class="line"><span>\\cp -r -f /tmp/showdoc/Public/Uploads /showdoc_data/html/Public/Uploads</span></span>
<span class="line"><span># 执行数据库升级，看到OK字样便证明成功</span></span>
<span class="line"><span>curl http://localhost:4999?s=/home/update/db</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="数据备份" tabindex="-1">数据备份 <a class="header-anchor" href="#数据备份" aria-label="Permalink to &quot;数据备份&quot;">​</a></h3><p>备份/showdoc_data/html 目录即可。比如执行下面命令压缩存放</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>zip -r /showdoc_data/showdoc_bak.zip  /showdoc_data/html</span></span>
<span class="line"><span># 其中showdoc_bak.zip可以用日期后缀命名，以便多个备份。你也可以用定时任务来实现定时备份。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="其他参考命令" tabindex="-1">其他参考命令 <a class="header-anchor" href="#其他参考命令" aria-label="Permalink to &quot;其他参考命令&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> docker stop showdoc # 停止容器</span></span>
<span class="line"><span> docker restart showdoc #重启showdoc容器</span></span>
<span class="line"><span> docker rm showdoc #删除showdoc容器</span></span>
<span class="line"><span> docker rmi star7th/showdoc #删除showdoc镜像</span></span>
<span class="line"><span> docker stop $(docker ps -a -q) ;docker rm $(docker ps -a -q) ; #停止并删除所有容器。危险命令，不懂勿用。</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h2 id="hexo" tabindex="-1">Hexo <a class="header-anchor" href="#hexo" aria-label="Permalink to &quot;Hexo&quot;">​</a></h2><blockquote><p>github文档管理工具</p></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>初始化hexo</span></span>
<span class="line"><span></span></span>
<span class="line"><span>&gt; npm install hexo-cli -g</span></span>
<span class="line"><span>&gt; hexo init blog</span></span>
<span class="line"><span>&gt; cd blog</span></span>
<span class="line"><span>&gt; npm install</span></span>
<span class="line"><span>&gt; hexo server</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="安装-hexo-deployer-git" tabindex="-1">安装 hexo-deployer-git <a class="header-anchor" href="#安装-hexo-deployer-git" aria-label="Permalink to &quot;安装  hexo-deployer-git&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> npm install hexo-deployer-git --save</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h3 id="github-io-配置-config-yml" tabindex="-1">Github.io 配置 _config.yml <a class="header-anchor" href="#github-io-配置-config-yml" aria-label="Permalink to &quot;Github.io 配置 _config.yml&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>deploy:</span></span>
<span class="line"><span>  type: git</span></span>
<span class="line"><span>  repo: git@github.com:ustbmz/ustbmz.github.io.git</span></span>
<span class="line"><span>  branch: master</span></span>
<span class="line"><span>  name: ustbmz</span></span>
<span class="line"><span>  email: ustbmz@163.com</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="新增文章" tabindex="-1">新增文章 <a class="header-anchor" href="#新增文章" aria-label="Permalink to &quot;新增文章&quot;">​</a></h3><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&gt; hexo new &#39;md_filename&#39;</span></span>
<span class="line"><span>生成静态文件</span></span>
<span class="line"><span>&gt; hexo g</span></span>
<span class="line"><span>提交更新,同步至github.io</span></span>
<span class="line"><span>&gt; hexo d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h1 id="版本控制" tabindex="-1">版本控制 <a class="header-anchor" href="#版本控制" aria-label="Permalink to &quot;版本控制&quot;">​</a></h1><p><img src="https://img2020.cnblogs.com/blog/528269/202006/528269-20200604223228981-231252314.png" alt="版本控制"></p><h2 id="语义化版本" tabindex="-1">语义化版本 <a class="header-anchor" href="#语义化版本" aria-label="Permalink to &quot;语义化版本&quot;">​</a></h2><blockquote><p>本格式：主版本号.次版本号.修订号，版本号递增规则如下：</p><ol><li>主版本号：当你做了不兼容的 API 修改，</li><li>次版本号：当你做了向下兼容的功能性新增，</li><li>修订号：当你做了向下兼容的问题修正。</li></ol><p>先行版本号及版本编译元数据可以加到“主版本号.次版本号.修订号”的后面，作为延伸。</p></blockquote><ul><li><strong>版本格式</strong></li></ul><p><img src="https://img2020.cnblogs.com/blog/528269/202006/528269-20200604223308481-1311483571.png" alt="img"></p><ul><li><strong>版本名称释义</strong></li></ul><p><img src="https://img2020.cnblogs.com/blog/528269/202006/528269-20200604223330262-357227076.png" alt="img"></p><h2 id="搭建云服务git仓库" tabindex="-1">搭建云服务Git仓库 <a class="header-anchor" href="#搭建云服务git仓库" aria-label="Permalink to &quot;搭建云服务Git仓库&quot;">​</a></h2><h3 id="docker-compse-gitlab" tabindex="-1">Docker-compse Gitlab <a class="header-anchor" href="#docker-compse-gitlab" aria-label="Permalink to &quot;Docker-compse Gitlab&quot;">​</a></h3><p>use docker-compose.gitlab.yml</p><blockquote><h3 id="sameersbn-docker-gitlab" tabindex="-1"><a href="https://github.com/sameersbn" target="_blank" rel="noreferrer">sameersbn</a>/<strong><a href="https://github.com/sameersbn/docker-gitlab" target="_blank" rel="noreferrer">docker-gitlab</a></strong> <a class="header-anchor" href="#sameersbn-docker-gitlab" aria-label="Permalink to &quot;[sameersbn](https://github.com/sameersbn)/**[docker-gitlab](https://github.com/sameersbn/docker-gitlab)**&quot;">​</a></h3></blockquote><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>version: &#39;2.3&#39;</span></span>
<span class="line"><span></span></span>
<span class="line"><span>services:</span></span>
<span class="line"><span>  redis:</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    image: redis:5.0.9</span></span>
<span class="line"><span>    command:</span></span>
<span class="line"><span>    - --loglevel warning</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>    - redis-data:/var/lib/redis:Z</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  postgresql:</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    image: sameersbn/postgresql:11-20200524</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>    - postgresql-data:/var/lib/postgresql:Z</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>    - DB_USER=gitlab</span></span>
<span class="line"><span>    - DB_PASS=password</span></span>
<span class="line"><span>    - DB_NAME=gitlabhq_production</span></span>
<span class="line"><span>    - DB_EXTENSION=pg_trgm</span></span>
<span class="line"><span></span></span>
<span class="line"><span>  gitlab:</span></span>
<span class="line"><span>    restart: always</span></span>
<span class="line"><span>    image: sameersbn/gitlab:13.0.3</span></span>
<span class="line"><span>    depends_on:</span></span>
<span class="line"><span>    - redis</span></span>
<span class="line"><span>    - postgresql</span></span>
<span class="line"><span>    ports:</span></span>
<span class="line"><span>    - &quot;13800:80&quot;</span></span>
<span class="line"><span>    - &quot;13822:22&quot;</span></span>
<span class="line"><span>    volumes:</span></span>
<span class="line"><span>    - gitlab-data:/home/git/data:Z</span></span>
<span class="line"><span>    healthcheck:</span></span>
<span class="line"><span>      test: [&quot;CMD&quot;, &quot;/usr/local/sbin/healthcheck&quot;]</span></span>
<span class="line"><span>      interval: 5m</span></span>
<span class="line"><span>      timeout: 10s</span></span>
<span class="line"><span>      retries: 3</span></span>
<span class="line"><span>      start_period: 5m</span></span>
<span class="line"><span>    environment:</span></span>
<span class="line"><span>    - DEBUG=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - DB_ADAPTER=postgresql</span></span>
<span class="line"><span>    - DB_HOST=postgresql</span></span>
<span class="line"><span>    - DB_PORT=5432</span></span>
<span class="line"><span>    - DB_USER=gitlab</span></span>
<span class="line"><span>    - DB_PASS=password</span></span>
<span class="line"><span>    - DB_NAME=gitlabhq_production</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - REDIS_HOST=redis</span></span>
<span class="line"><span>    - REDIS_PORT=6379</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - TZ=Asia/Kolkata</span></span>
<span class="line"><span>    - GITLAB_TIMEZONE=Kolkata</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - GITLAB_HTTPS=false</span></span>
<span class="line"><span>    - SSL_SELF_SIGNED=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - GITLAB_HOST=118.25.150.195</span></span>
<span class="line"><span>    - GITLAB_PORT=13800</span></span>
<span class="line"><span>    - GITLAB_SSH_PORT=13822</span></span>
<span class="line"><span>    - GITLAB_RELATIVE_URL_ROOT=</span></span>
<span class="line"><span>    - GITLAB_SECRETS_DB_KEY_BASE=long-and-random-alphanumeric-string</span></span>
<span class="line"><span>    - GITLAB_SECRETS_SECRET_KEY_BASE=long-and-random-alphanumeric-string</span></span>
<span class="line"><span>    - GITLAB_SECRETS_OTP_KEY_BASE=long-and-random-alphanumeric-string</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - GITLAB_ROOT_PASSWORD=12345678</span></span>
<span class="line"><span>    - GITLAB_ROOT_EMAIL=ustbmz@163.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - GITLAB_NOTIFY_ON_BROKEN_BUILDS=true</span></span>
<span class="line"><span>    - GITLAB_NOTIFY_PUSHER=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - GITLAB_EMAIL=notifications@example.com</span></span>
<span class="line"><span>    - GITLAB_EMAIL_REPLY_TO=noreply@example.com</span></span>
<span class="line"><span>    - GITLAB_INCOMING_EMAIL_ADDRESS=reply@example.com</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - GITLAB_BACKUP_SCHEDULE=daily</span></span>
<span class="line"><span>    - GITLAB_BACKUP_TIME=01:00</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - SMTP_ENABLED=false</span></span>
<span class="line"><span>    - SMTP_DOMAIN=www.example.com</span></span>
<span class="line"><span>    - SMTP_HOST=smtp.gmail.com</span></span>
<span class="line"><span>    - SMTP_PORT=587</span></span>
<span class="line"><span>    - SMTP_USER=mailer@example.com</span></span>
<span class="line"><span>    - SMTP_PASS=password</span></span>
<span class="line"><span>    - SMTP_STARTTLS=true</span></span>
<span class="line"><span>    - SMTP_AUTHENTICATION=login</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - IMAP_ENABLED=false</span></span>
<span class="line"><span>    - IMAP_HOST=imap.gmail.com</span></span>
<span class="line"><span>    - IMAP_PORT=993</span></span>
<span class="line"><span>    - IMAP_USER=mailer@example.com</span></span>
<span class="line"><span>    - IMAP_PASS=password</span></span>
<span class="line"><span>    - IMAP_SSL=true</span></span>
<span class="line"><span>    - IMAP_STARTTLS=false</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_ENABLED=false</span></span>
<span class="line"><span>    - OAUTH_AUTO_SIGN_IN_WITH_PROVIDER=</span></span>
<span class="line"><span>    - OAUTH_ALLOW_SSO=</span></span>
<span class="line"><span>    - OAUTH_BLOCK_AUTO_CREATED_USERS=true</span></span>
<span class="line"><span>    - OAUTH_AUTO_LINK_LDAP_USER=false</span></span>
<span class="line"><span>    - OAUTH_AUTO_LINK_SAML_USER=false</span></span>
<span class="line"><span>    - OAUTH_EXTERNAL_PROVIDERS=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_CAS3_LABEL=cas3</span></span>
<span class="line"><span>    - OAUTH_CAS3_SERVER=</span></span>
<span class="line"><span>    - OAUTH_CAS3_DISABLE_SSL_VERIFICATION=false</span></span>
<span class="line"><span>    - OAUTH_CAS3_LOGIN_URL=/cas/login</span></span>
<span class="line"><span>    - OAUTH_CAS3_VALIDATE_URL=/cas/p3/serviceValidate</span></span>
<span class="line"><span>    - OAUTH_CAS3_LOGOUT_URL=/cas/logout</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_GOOGLE_API_KEY=</span></span>
<span class="line"><span>    - OAUTH_GOOGLE_APP_SECRET=</span></span>
<span class="line"><span>    - OAUTH_GOOGLE_RESTRICT_DOMAIN=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_FACEBOOK_API_KEY=</span></span>
<span class="line"><span>    - OAUTH_FACEBOOK_APP_SECRET=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_TWITTER_API_KEY=</span></span>
<span class="line"><span>    - OAUTH_TWITTER_APP_SECRET=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_GITHUB_API_KEY=</span></span>
<span class="line"><span>    - OAUTH_GITHUB_APP_SECRET=</span></span>
<span class="line"><span>    - OAUTH_GITHUB_URL=</span></span>
<span class="line"><span>    - OAUTH_GITHUB_VERIFY_SSL=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_GITLAB_API_KEY=</span></span>
<span class="line"><span>    - OAUTH_GITLAB_APP_SECRET=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_BITBUCKET_API_KEY=</span></span>
<span class="line"><span>    - OAUTH_BITBUCKET_APP_SECRET=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_SAML_ASSERTION_CONSUMER_SERVICE_URL=</span></span>
<span class="line"><span>    - OAUTH_SAML_IDP_CERT_FINGERPRINT=</span></span>
<span class="line"><span>    - OAUTH_SAML_IDP_SSO_TARGET_URL=</span></span>
<span class="line"><span>    - OAUTH_SAML_ISSUER=</span></span>
<span class="line"><span>    - OAUTH_SAML_LABEL=&quot;Our SAML Provider&quot;</span></span>
<span class="line"><span>    - OAUTH_SAML_NAME_IDENTIFIER_FORMAT=urn:oasis:names:tc:SAML:2.0:nameid-format:transient</span></span>
<span class="line"><span>    - OAUTH_SAML_GROUPS_ATTRIBUTE=</span></span>
<span class="line"><span>    - OAUTH_SAML_EXTERNAL_GROUPS=</span></span>
<span class="line"><span>    - OAUTH_SAML_ATTRIBUTE_STATEMENTS_EMAIL=</span></span>
<span class="line"><span>    - OAUTH_SAML_ATTRIBUTE_STATEMENTS_NAME=</span></span>
<span class="line"><span>    - OAUTH_SAML_ATTRIBUTE_STATEMENTS_USERNAME=</span></span>
<span class="line"><span>    - OAUTH_SAML_ATTRIBUTE_STATEMENTS_FIRST_NAME=</span></span>
<span class="line"><span>    - OAUTH_SAML_ATTRIBUTE_STATEMENTS_LAST_NAME=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_CROWD_SERVER_URL=</span></span>
<span class="line"><span>    - OAUTH_CROWD_APP_NAME=</span></span>
<span class="line"><span>    - OAUTH_CROWD_APP_PASSWORD=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_AUTH0_CLIENT_ID=</span></span>
<span class="line"><span>    - OAUTH_AUTH0_CLIENT_SECRET=</span></span>
<span class="line"><span>    - OAUTH_AUTH0_DOMAIN=</span></span>
<span class="line"><span>    - OAUTH_AUTH0_SCOPE=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>    - OAUTH_AZURE_API_KEY=</span></span>
<span class="line"><span>    - OAUTH_AZURE_API_SECRET=</span></span>
<span class="line"><span>    - OAUTH_AZURE_TENANT_ID=</span></span>
<span class="line"><span></span></span>
<span class="line"><span>volumes:</span></span>
<span class="line"><span>  redis-data:</span></span>
<span class="line"><span>  postgresql-data:</span></span>
<span class="line"><span>  gitlab-data:</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br><span class="line-number">64</span><br><span class="line-number">65</span><br><span class="line-number">66</span><br><span class="line-number">67</span><br><span class="line-number">68</span><br><span class="line-number">69</span><br><span class="line-number">70</span><br><span class="line-number">71</span><br><span class="line-number">72</span><br><span class="line-number">73</span><br><span class="line-number">74</span><br><span class="line-number">75</span><br><span class="line-number">76</span><br><span class="line-number">77</span><br><span class="line-number">78</span><br><span class="line-number">79</span><br><span class="line-number">80</span><br><span class="line-number">81</span><br><span class="line-number">82</span><br><span class="line-number">83</span><br><span class="line-number">84</span><br><span class="line-number">85</span><br><span class="line-number">86</span><br><span class="line-number">87</span><br><span class="line-number">88</span><br><span class="line-number">89</span><br><span class="line-number">90</span><br><span class="line-number">91</span><br><span class="line-number">92</span><br><span class="line-number">93</span><br><span class="line-number">94</span><br><span class="line-number">95</span><br><span class="line-number">96</span><br><span class="line-number">97</span><br><span class="line-number">98</span><br><span class="line-number">99</span><br><span class="line-number">100</span><br><span class="line-number">101</span><br><span class="line-number">102</span><br><span class="line-number">103</span><br><span class="line-number">104</span><br><span class="line-number">105</span><br><span class="line-number">106</span><br><span class="line-number">107</span><br><span class="line-number">108</span><br><span class="line-number">109</span><br><span class="line-number">110</span><br><span class="line-number">111</span><br><span class="line-number">112</span><br><span class="line-number">113</span><br><span class="line-number">114</span><br><span class="line-number">115</span><br><span class="line-number">116</span><br><span class="line-number">117</span><br><span class="line-number">118</span><br><span class="line-number">119</span><br><span class="line-number">120</span><br><span class="line-number">121</span><br><span class="line-number">122</span><br><span class="line-number">123</span><br><span class="line-number">124</span><br><span class="line-number">125</span><br><span class="line-number">126</span><br><span class="line-number">127</span><br><span class="line-number">128</span><br><span class="line-number">129</span><br><span class="line-number">130</span><br><span class="line-number">131</span><br><span class="line-number">132</span><br><span class="line-number">133</span><br><span class="line-number">134</span><br><span class="line-number">135</span><br><span class="line-number">136</span><br><span class="line-number">137</span><br><span class="line-number">138</span><br><span class="line-number">139</span><br><span class="line-number">140</span><br><span class="line-number">141</span><br><span class="line-number">142</span><br><span class="line-number">143</span><br><span class="line-number">144</span><br><span class="line-number">145</span><br><span class="line-number">146</span><br><span class="line-number">147</span><br><span class="line-number">148</span><br><span class="line-number">149</span><br><span class="line-number">150</span><br><span class="line-number">151</span><br><span class="line-number">152</span><br><span class="line-number">153</span><br><span class="line-number">154</span><br><span class="line-number">155</span><br><span class="line-number">156</span><br><span class="line-number">157</span><br><span class="line-number">158</span><br><span class="line-number">159</span><br><span class="line-number">160</span><br><span class="line-number">161</span><br><span class="line-number">162</span><br><span class="line-number">163</span><br></div></div><h3 id="备份gitlab数据" tabindex="-1">备份Gitlab数据 <a class="header-anchor" href="#备份gitlab数据" aria-label="Permalink to &quot;备份Gitlab数据&quot;">​</a></h3><p>GitLab defines a rake task to take a backup of your gitlab installation. The backup consists of all git repositories, uploaded files and as you might expect, the sql database.</p><p>Before taking a backup make sure the container is stopped and removed to avoid container name conflicts.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker stop gitlab &amp;&amp; docker rm gitlab</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>Execute the rake task to create a backup.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run --name gitlab -it --rm [OPTIONS] \\</span></span>
<span class="line"><span>    sameersbn/gitlab:13.0.3 app:rake gitlab:backup:create</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>A backup will be created in the backups folder of the <a href="https://github.com/sameersbn/docker-gitlab#data-store" target="_blank" rel="noreferrer">Data Store</a>. You can change the location of the backups using the <code>GITLAB_BACKUP_DIR</code> configuration parameter.</p><p><em>P.S. Backups can also be generated on a running instance using <code>docker exec</code> as described in the <a href="https://github.com/sameersbn/docker-gitlab#rake-tasks" target="_blank" rel="noreferrer">Rake Tasks</a> section. However, to avoid undesired side-effects, I advice against running backup and restore operations on a running instance.</em></p><p>When using <code>docker-compose</code> you may use the following command to execute the backup.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker-compose rm -sf gitlab</span></span>
<span class="line"><span>docker-compose run --rm gitlab app:rake gitlab:backup:create</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Afterwards you can bring your Instance back with the following command:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker-compose up -d</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li><p>设置备份时间过期时间 7天</p><p>GITLAB_BACKUP_EXPIRY=604800</p></li></ul><h3 id="恢复指定备份版本" tabindex="-1">恢复指定备份版本 <a class="header-anchor" href="#恢复指定备份版本" aria-label="Permalink to &quot;恢复指定备份版本&quot;">​</a></h3><p>GitLab also defines a rake task to restore a backup.</p><p>Before performing a restore make sure the container is stopped and removed to avoid container name conflicts.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker stop gitlab &amp;&amp; docker rm gitlab</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>If this is a fresh database that you&#39;re doing the restore on, first you need to prepare the database:</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run --name gitlab -it --rm [OPTIONS] \\</span></span>
<span class="line"><span>    sameersbn/gitlab:13.0.3 app:rake db:setup</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>Execute the rake task to restore a backup. Make sure you run the container in interactive mode <code>-it</code>.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run --name gitlab -it --rm [OPTIONS] \\</span></span>
<span class="line"><span>    sameersbn/gitlab:13.0.3 app:rake gitlab:backup:restore</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>The list of all available backups will be displayed in reverse chronological order. Select the backup you want to restore and continue.</p><p>To avoid user interaction in the restore operation, specify the timestamp, date and version of the backup using the <code>BACKUP</code> argument to the rake task.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker run --name gitlab -it --rm [OPTIONS] \\</span></span>
<span class="line"><span>    sameersbn/gitlab:13.0.3 app:rake gitlab:backup:restore BACKUP=1515629493_2018_01_11_10.3.6</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><p>When using <code>docker-compose</code> you may use the following command to execute the restore.</p><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>docker-compose run --rm gitlab app:rake gitlab:backup:restore # List available backups</span></span>
<span class="line"><span>docker-compose run --rm gitlab app:rake gitlab:backup:restore BACKUP=1515629493_2018_01_11_10.3.6 # Choose to restore from 1515629493</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,77)])])}const m=n(l,[["render",i]]);export{u as __pageData,m as default};
