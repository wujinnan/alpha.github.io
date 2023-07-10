import{_ as s,c as a,o as l,V as o}from"./chunks/framework.8e4fecd6.js";const D=JSON.parse('{"title":"命令行常用代码","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"tool/docs-terminal.md","lastUpdated":1688958821000}'),n={name:"tool/docs-terminal.md"},e=o('<h1 id="命令行常用代码" tabindex="-1">命令行常用代码 <a class="header-anchor" href="#命令行常用代码" aria-label="Permalink to &quot;命令行常用代码&quot;">​</a></h1><h2 id="代理" tabindex="-1">代理 <a class="header-anchor" href="#代理" aria-label="Permalink to &quot;代理&quot;">​</a></h2><h3 id="设置代理" tabindex="-1">设置代理 <a class="header-anchor" href="#设置代理" aria-label="Permalink to &quot;设置代理&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> ALL_PROXY</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">socks5://127.0.0.1:</span><span style="color:#F78C6C;">1086</span><span style="color:#A6ACCD;"> // 设置所有代理</span></span>\n<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> http_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://127.0.0.1:</span><span style="color:#F78C6C;">1087</span><span style="color:#A6ACCD;"> // 设置http代理</span></span>\n<span class="line"><span style="color:#C792EA;">export</span><span style="color:#A6ACCD;"> https_proxy</span><span style="color:#89DDFF;">=</span><span style="color:#C3E88D;">http://127.0.0.1:</span><span style="color:#F78C6C;">1087</span><span style="color:#A6ACCD;"> // 设置https代理</span></span></code></pre></div><h3 id="取消代理" tabindex="-1">取消代理 <a class="header-anchor" href="#取消代理" aria-label="Permalink to &quot;取消代理&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">unset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ALL_PROXY=socks5://127.0.0.1:</span><span style="color:#F78C6C;">1086</span></span>\n<span class="line"><span style="color:#82AAFF;">unset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">http_proxy=http://127.0.0.1:</span><span style="color:#F78C6C;">1087</span></span>\n<span class="line"><span style="color:#82AAFF;">unset</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https_proxy=http://127.0.0.1:</span><span style="color:#F78C6C;">1087</span></span></code></pre></div><h3 id="设置命令行快速启动-取消" tabindex="-1">设置命令行快速启动/取消 <a class="header-anchor" href="#设置命令行快速启动-取消" aria-label="Permalink to &quot;设置命令行快速启动/取消&quot;">​</a></h3><ol><li><p>在<code>~/.zshrc</code>文件添加以下代码</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> proxy</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">export all_proxy=socks5://127.0.0.1:1086</span><span style="color:#89DDFF;">&#39;</span></span>\n<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> unproxy</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unset all_proxy</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div></li><li><p>执行<code>source ~/.zshrc</code></p></li><li><p>开启代理<code>proxy</code></p></li><li><p>取消代理<code>unproxy</code></p></li></ol><h3 id="ssh代理" tabindex="-1">ssh代理 <a class="header-anchor" href="#ssh代理" aria-label="Permalink to &quot;ssh代理&quot;">​</a></h3><p>添加以下代码到<code>~/.ssh/config</code>文件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">Host</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span>\n<span class="line"><span style="color:#FFCB6B;">ProxyCommand</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">nc</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">5</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-x</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">127.0.0.1:</span><span style="color:#F78C6C;">1086</span><span style="color:#A6ACCD;"> %h %p</span></span></code></pre></div><h4 id="参数说明" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明" aria-label="Permalink to &quot;参数说明&quot;">​</a></h4><ul><li><strong><code>-X</code></strong>: 代理协议<code>5</code>是socks5协议</li><li><strong><code>-v</code></strong>: 运行时命令行链接提示</li><li><strong><code>-x</code></strong>: 指定代理服务器和端口</li></ul><h2 id="查看域名信息" tabindex="-1">查看域名信息 <a class="header-anchor" href="#查看域名信息" aria-label="Permalink to &quot;查看域名信息&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">ip.gs</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 或</span></span>\n<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">cip.cc</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 或 添加命令行快捷方式</span></span>\n<span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> ip</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">curl cip.cc</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div><h2 id="浏览器相关" tabindex="-1">浏览器相关 <a class="header-anchor" href="#浏览器相关" aria-label="Permalink to &quot;浏览器相关&quot;">​</a></h2><h3 id="启动跨域浏览器" tabindex="-1">启动跨域浏览器 <a class="header-anchor" href="#启动跨域浏览器" aria-label="Permalink to &quot;启动跨域浏览器&quot;">​</a></h3><ol><li><p>桌面新建文件夹<code>chromeData</code>，添加以下代码到<code>~/.zshrc</code>文件</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">alias</span><span style="color:#A6ACCD;"> devChrome</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">open -n /Applications/Google\\ Chrome.app --args --disable-web-security --user-data-dir={chromeData路径}</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div></li><li><p>执行<code>source ~/.zshrc</code></p></li><li><p>打开浏览器<code>devChrome</code></p></li></ol><h2 id="find命令" tabindex="-1">find命令 <a class="header-anchor" href="#find命令" aria-label="Permalink to &quot;find命令&quot;">​</a></h2><p>语法: <code>find [path] [expression]</code></p><h3 id="参数说明-1" tabindex="-1">参数说明 <a class="header-anchor" href="#参数说明-1" aria-label="Permalink to &quot;参数说明&quot;">​</a></h3><ul><li><strong><code>path</code></strong>: 目录或文件名，多个路径之间用空格分隔，如果未指定路径，则默认为当前目录。</li><li><strong><code>expression</code></strong>: 可以是文件名、文件类型、文件大小等。 <ul><li><strong>-<code>name</code></strong>: 按文件名查找，支持使用通配符 * 和 ?。</li><li><strong>-<code>type</code></strong>: 按文件类型查找，可以是 f（普通文件）、d（目录）、l（符号链接）等。</li><li><strong>-<code>size [+-]size[cwbkMG]</code></strong>：按文件大小查找，支持使用 + 或 - 表示大于或小于指定大小，单位可以是 c（字节）、w（字数）、b（块数）、k（KB）、M（MB）或 G（GB）。</li></ul></li></ul><h3 id="用法" tabindex="-1">用法 <a class="header-anchor" href="#用法" aria-label="Permalink to &quot;用法&quot;">​</a></h3><table><thead><tr><th>用法</th><th>功能描述</th></tr></thead><tbody><tr><td><code>find . -name file.txt</code></td><td>查找当前目录下名为<code>file.text</code>的文件</td></tr><tr><td><code>find . -name &#39;*.txt&#39;</code></td><td>查找当前目录及其子目录下所有文件后缀为<code>txt</code>的文件</td></tr><tr><td><code>find /home -size +1M</code></td><td>查找 /home 目录下大于 1MB 的文件</td></tr><tr><td><code>find . -type d</code></td><td>查找当前目录下所有的文件夹</td></tr><tr><td><code>find . -name &#39;*.txt&#39; | grep -r &#39;abc&#39;</code></td><td>查找当前目录下包含<code>abc</code>字符串的所有<code>txt</code>文件</td></tr></tbody></table><h2 id="which命令" tabindex="-1">which命令 <a class="header-anchor" href="#which命令" aria-label="Permalink to &quot;which命令&quot;">​</a></h2><p>在PATH变量指定的路径中，搜索某个系统命令的位置，并且返回第一个搜索结果。</p><h3 id="用法-1" tabindex="-1">用法 <a class="header-anchor" href="#用法-1" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">which</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">node</span></span></code></pre></div><h2 id="grep命令" tabindex="-1">grep命令 <a class="header-anchor" href="#grep命令" aria-label="Permalink to &quot;grep命令&quot;">​</a></h2><p>查找文件里符合条件的字符串或正则表达式。</p><h3 id="用法-2" tabindex="-1">用法 <a class="header-anchor" href="#用法-2" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">options</span><span style="color:#89DDFF;">]</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">pattern</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">[</span><span style="color:#A6ACCD;">files</span><span style="color:#89DDFF;">]</span></span></code></pre></div><ol><li><p>在<code>file.txt</code>文件中查找<code>test</code>字符串。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">file.txt</span></span></code></pre></div></li><li><p>文件夹<code>dir</code>中递归查找所有文件中匹配正则表达式<code>test</code>的行，并打印匹配行所在的文件名和行号。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-rn</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">test</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">dir/</span></span></code></pre></div></li><li><p>查找当前目录下所有包含<code>grep</code>字符串以<code>.md</code>结尾的文件。</p><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">find</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-name</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">*.md</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">xargs</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">grep</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-n</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">grep</span><span style="color:#89DDFF;">&#39;</span></span></code></pre></div></li></ol><h3 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h3><ul><li><strong>options</strong>: <ul><li><strong><code>-i</code></strong>: 忽略大小写进行匹配。</li><li><strong><code>-v</code></strong>: 反向查找，只打印不匹配的行。</li><li><strong><code>-n</code></strong>: 显示匹配行的行号。</li><li><strong><code>-r</code></strong>: 递归查找子目录中的文件。</li><li><strong><code>-l</code></strong>: 只打印匹配的文件名。</li><li><strong><code>-c</code></strong>: 只打印匹配的行数</li><li><strong><code>-E</code></strong>: 正则表达式匹配</li></ul></li></ul><h2 id="curl命令" tabindex="-1">curl命令 <a class="header-anchor" href="#curl命令" aria-label="Permalink to &quot;curl命令&quot;">​</a></h2><p>curl使用文档：<a href="https://catonmat.net/cookbooks/curl" target="_blank" rel="noreferrer">cookbooks</a></p><h3 id="用法-3" tabindex="-1">用法 <a class="header-anchor" href="#用法-3" aria-label="Permalink to &quot;用法&quot;">​</a></h3><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span></code></pre></div><h4 id="g-构造-url-的查询字符串" tabindex="-1"><code>-G</code> 构造 URL 的查询字符串 <a class="header-anchor" href="#g-构造-url-的查询字符串" aria-label="Permalink to &quot;`-G` 构造 URL 的查询字符串&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-G</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login=emma＆password=123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/login</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 或 使用 --data-urlencode 编码 URL</span></span>\n<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-G</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">--data-urlencode</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login=em ma＆password=123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/login</span></span></code></pre></div><h4 id="d-发送-post-请求的数据体" tabindex="-1"><code>-d</code> 发送 POST 请求的数据体 <a class="header-anchor" href="#d-发送-post-请求的数据体" aria-label="Permalink to &quot;`-d` 发送 POST 请求的数据体&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">{&quot;login&quot;: &quot;emma&quot;, &quot;pass&quot;: &quot;123&quot;}</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Content-Type: application/json</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://google.com/login</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 或</span></span>\n<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login=emma＆password=123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/login</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 或</span></span>\n<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login=emma＆password=123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://github.com/login</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 或</span></span>\n<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">login=emma</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-d</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">password=123</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;">  </span><span style="color:#C3E88D;">https://github.com/login</span></span></code></pre></div><h4 id="v-参数输出通信的整个过程-用于调试" tabindex="-1"><code>-v</code> 参数输出通信的整个过程，用于调试 <a class="header-anchor" href="#v-参数输出通信的整个过程-用于调试" aria-label="Permalink to &quot;`-v` 参数输出通信的整个过程，用于调试&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-v</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span></code></pre></div><h4 id="h-设置请求头" tabindex="-1"><code>-H</code> 设置请求头 <a class="header-anchor" href="#h-设置请求头" aria-label="Permalink to &quot;`-H` 设置请求头&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;"># 设置 User-Agent</span></span>\n<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">User-Agent: abc/test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 设置 Referer</span></span>\n<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-H</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">Referer: https://google.com?a=1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span></code></pre></div><h4 id="i打印服务器回应的-http-标头" tabindex="-1"><code>-i</code>打印服务器回应的 HTTP 标头 <a class="header-anchor" href="#i打印服务器回应的-http-标头" aria-label="Permalink to &quot;`-i`打印服务器回应的 HTTP 标头&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-i</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span>\n<span class="line"><span style="color:#676E95;font-style:italic;"># 或 只打印相应头</span></span>\n<span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-I</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span></code></pre></div><h4 id="a-设置请求user-agent" tabindex="-1"><code>-A</code> 设置请求<code>User-Agent</code> <a class="header-anchor" href="#a-设置请求user-agent" aria-label="Permalink to &quot;`-A` 设置请求`User-Agent`&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-A</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">abc/test</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span></code></pre></div><h4 id="b-发送cookie" tabindex="-1"><code>-b</code> 发送<code>Cookie</code> <a class="header-anchor" href="#b-发送cookie" aria-label="Permalink to &quot;`-b` 发送`Cookie`&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-b</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">a=1&amp;b=2</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span></code></pre></div><h4 id="e-设置-http-的标头referer" tabindex="-1"><code>-e</code> 设置 HTTP 的标头<code>Referer</code> <a class="header-anchor" href="#e-设置-http-的标头referer" aria-label="Permalink to &quot;`-e` 设置 HTTP 的标头`Referer`&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-e</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">https://google.com?a=1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span></code></pre></div><h4 id="f-上传二进制文件" tabindex="-1"><code>-F</code> 上传二进制文件 <a class="header-anchor" href="#f-上传二进制文件" aria-label="Permalink to &quot;`-F` 上传二进制文件&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-F</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">file=@photo.png</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://google.com/profile</span></span></code></pre></div><h4 id="l-参数会让-http-请求跟随服务器的重定向。curl-默认不跟随重定向" tabindex="-1"><code>-L</code> 参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向 <a class="header-anchor" href="#l-参数会让-http-请求跟随服务器的重定向。curl-默认不跟随重定向" aria-label="Permalink to &quot;`-L` 参数会让 HTTP 请求跟随服务器的重定向。curl 默认不跟随重定向&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-L</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">github.com</span></span></code></pre></div><h4 id="x-参数指定-http-请求的方法" tabindex="-1"><code>-X</code> 参数指定 HTTP 请求的方法 <a class="header-anchor" href="#x-参数指定-http-请求的方法" aria-label="Permalink to &quot;`-X` 参数指定 HTTP 请求的方法&quot;">​</a></h4><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">curl</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-X</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">POST</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">https://www.baidu.com/login</span></span></code></pre></div>',61),p=[e];function t(c,r,i,d,C,y){return l(),a("div",null,p)}const A=s(n,[["render",t]]);export{D as __pageData,A as default};
