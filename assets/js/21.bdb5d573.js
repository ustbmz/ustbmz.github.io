(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{459:function(s,e,t){"use strict";t.r(e);var a=t(31),r=Object(a.a)({},(function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h1",{attrs:{id:"centos7安装redis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#centos7安装redis"}},[s._v("#")]),s._v(" Centos7安装Redis")]),s._v(" "),t("p",[s._v("一、安装gcc依赖")]),s._v(" "),t("p",[s._v("由于 redis 是用 C 语言开发，安装之前必先确认是否安装 gcc 环境（gcc -v），如果没有安装，执行以下命令进行安装")]),s._v(" "),t("p",[s._v("二、下载并解压安装包")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" http://download.redis.io/releases/redis-6.2.6.tar.gz\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -zxvf redis-5.0.3.tar.gz**\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cd切换到redis解压目录下，执行编译")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" redis-5.0.3\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装并指定安装目录")]),s._v("\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("PREFIX")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/usr/local/redis\n")])])]),t("p",[s._v("五、启动服务")]),s._v(" "),t("p",[s._v("5.1前台启动")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" opt/redis/bin/\n$ ./redis-server\n")])])]),t("p",[s._v("5.2后台启动")]),s._v(" "),t("p",[s._v("从 redis 的源码目录中复制 redis.conf 到 redis 的安装目录")]),s._v(" "),t("p",[s._v("修改 redis.conf 文件，把 daemonize no 改为 daemonize yes")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" /opt/redis-6.2.6/redis.conf /opt/redis/bin/\n$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" redis.conf\n")])])]),t("p",[t("img",{attrs:{src:"https://gitee.com/cnmz/images/raw/master/mdpic/202111131721768.png",alt:"img"}})]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置redis 后台启动")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" daemonize "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("yes")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 配置redis 访问密码")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" requirepass password\n")])])]),t("p",[s._v("后台启动")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ ./redis-server redis.conf\n")])])]),t("p",[t("img",{attrs:{src:"https://gitee.com/cnmz/images/raw/master/mdpic/202111131752950.png",alt:"img"}})]),s._v(" "),t("p",[s._v("六、设置开机启动")]),s._v(" "),t("p",[s._v("添加开机启动服务")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("vi")]),s._v(" /etc/systemd/system/redis.service\n")])])]),t("p",[s._v("复制粘贴以下内容：")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("[Unit]\nDescription=redis-server\nAfter=network.target\n\n[Service]\nType=forking\nExecStart=/opt/redis/bin/redis-server /opt/redis/bin/redis.conf\nPrivateTmp=true\n\n[Install]\nWantedBy=multi-user.target\n")])])]),t("p",[s._v("注意：ExecStart配置成自己的路径")]),s._v(" "),t("p",[s._v("设置开机启动")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ systemctl daemon-reload\n$ systemctl start redis.service\n$ systemctl "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("enable")]),s._v(" redis.service\n")])])]),t("p",[s._v("创建 redis 命令软链接")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("ln")]),s._v(" -s /opt/redis/bin/redis-cli /usr/bin/redis\n")])])]),t("p",[s._v("测试 redis")]),s._v(" "),t("p",[t("img",{attrs:{src:"https://gitee.com/cnmz/images/raw/master/mdpic/202111131721791.png",alt:"img"}})]),s._v(" "),t("p",[s._v("服务操作命令")]),s._v(" "),t("p",[s._v("systemctl start redis.service  #启动redis服务")]),s._v(" "),t("p",[s._v("systemctl stop redis.service  #停止redis服务")]),s._v(" "),t("p",[s._v("systemctl restart redis.service  #重新启动服务")]),s._v(" "),t("p",[s._v("systemctl status redis.service  #查看服务当前状态")]),s._v(" "),t("p",[s._v("systemctl enable redis.service  #设置开机自启动")]),s._v(" "),t("p",[s._v("systemctl disable redis.service  #停止开机自启动")])])}),[],!1,null,null,null);e.default=r.exports}}]);