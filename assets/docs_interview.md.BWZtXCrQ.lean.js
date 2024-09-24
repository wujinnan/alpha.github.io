import{_ as i,c as a,a3 as l,o as t}from"./chunks/framework.3EWjcNId.js";const n="/blog/assets/async-defer.RTHvivQ0.jpg",h="/blog/assets/client-server.C4Ib69_M.png",e="/blog/assets/client-parse.C-A8xWrs.svg",p="/blog/assets/event-loop.DCo5bW6s.png",k="/blog/assets/http-frame.CsEWnvju.png",u=JSON.parse('{"title":"精华","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/interview.md","filePath":"docs/interview.md","lastUpdated":1720699564000}'),r={name:"docs/interview.md"};function E(d,s,o,g,c,y){return t(),a("div",null,s[0]||(s[0]=[l(`<h1 id="精华" tabindex="-1">精华 <a class="header-anchor" href="#精华" aria-label="Permalink to &quot;精华&quot;">​</a></h1><p><a href="https://developer.mozilla.org/zh-CN/docs/Web" target="_blank" rel="noreferrer">Web 开发技术</a></p><h2 id="html" tabindex="-1">HTML <a class="header-anchor" href="#html" aria-label="Permalink to &quot;HTML&quot;">​</a></h2><p>超文本标记语言（英语：HyperText Markup Language，简称：HTML）是一种用于定义 Web 网页内容结构的标记语言。</p><div class="language-html vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">html</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;!</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">doctype</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> lang</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;en-US&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> charset</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;utf-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">meta</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> name</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;viewport&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> content</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;width=device-width&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;stylesheet&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;styles.css&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;preload&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;styles.css&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;style&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        &lt;!-- 预加载 JavaScript 文件 --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">link</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> rel</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;preload&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> href</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;important-js.js&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> as</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;script&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;My test page&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">title</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> src</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;...&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> defer</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> type</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;module&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">            import</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> js </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">from</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;js/script.js&#39;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">script</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">head</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;test&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">div</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    &lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">body</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">html</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre></div><ol><li><code>&lt;!doctype html&gt;</code> 文档类型，保证文档正常读取。</li><li><code>&lt;html lang=&quot;en-US&quot;&gt;</code> 根元素。</li><li><code>&lt;head&gt;&lt;/head&gt;</code> 它的作用是保存页面的一些元数据。</li><li><code>&lt;meta&gt;&lt;/meta&gt;</code> <a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/meta" target="_blank" rel="noreferrer">&lt;meta&gt;</a> 元素。 <ol><li><code>&lt;meta charset=&quot;utf-8&quot;&gt;</code> 文档使用 <code>UTF-8</code> 编码。</li><li><code>&lt;meta name=&quot;viewport&quot; content=&quot;width=device-width&quot;&gt;</code> 视口元素。</li></ol></li><li><code>&lt;link&gt;&lt;/link&gt;</code> 加载css文档</li><li><code>&lt;title&gt;&lt;/title&gt;</code> 页面标题，收藏网页描述文字。</li><li><code>&lt;script&gt;&lt;/script&gt;</code> js脚本标签 <ol><li><code>&lt;script src=&quot;js/script.js&quot;&gt;</code> 加载外部脚本,会阻止 html 解析</li><li><code>defer</code> 异步加载脚本,多个脚本按顺序加载和运行，html 解析完成之后并且所有脚本加载完毕后才执行脚本</li><li><code>type=&quot;module&quot;</code> 异步加载脚本，html 解析完成之后执行脚本</li><li><code>async</code> 异步加载脚本，多个脚本按加载完顺序运行，脚本加载完立即执行脚本会阻塞页面渲染</li></ol></li><li><code>&lt;body&gt;&lt;/body&gt;</code> 用户看到的全部内容。</li></ol><h3 id="元素-element" tabindex="-1">元素（Element） <a class="header-anchor" href="#元素-element" aria-label="Permalink to &quot;元素（Element）&quot;">​</a></h3><p>开始标签、结束标签与内容相结合，便是一个完整的元素。</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element" target="_blank" rel="noreferrer">HTML 元素参考</a></li></ul><h2 id="css" tabindex="-1">CSS <a class="header-anchor" href="#css" aria-label="Permalink to &quot;CSS&quot;">​</a></h2><p>CSS（Cascading Style Sheets，层叠样式表）是为 web 内容添加样式的代码。</p><ul><li><a href="https://developer.mozilla.org/zh-CN/docs/Web/CSS/Reference" target="_blank" rel="noreferrer">CSS 参考</a></li></ul><h2 id="javascript" tabindex="-1">JavaScript <a class="header-anchor" href="#javascript" aria-label="Permalink to &quot;JavaScript&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/JavaScript" target="_blank" rel="noreferrer">JavaScript</a>（缩写：JS）是一门完备的动态编程语言，可为网站添加交互功能。</p><p><code>&lt;script&gt;</code> 标签加载示意图</p><p><img src="`+n+'" alt="script async defer"></p><h3 id="null" tabindex="-1">null <a class="header-anchor" href="#null" aria-label="Permalink to &quot;null&quot;">​</a></h3><p>这是 JavaScript 中的一个特殊值，表示引用不存在。</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">localStorage.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getItem</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&#39;local&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// null</span></span></code></pre></div><h2 id="网络工作" tabindex="-1">网络工作 <a class="header-anchor" href="#网络工作" aria-label="Permalink to &quot;网络工作&quot;">​</a></h2><p><a href="https://developer.mozilla.org/zh-CN/docs/Learn/Getting_started_with_the_web/How_the_Web_works" target="_blank" rel="noreferrer">详细文档</a></p><p><img src="'+h+'" alt="client server"></p><ul><li><strong>网络连接</strong>: 允许你在互联网上发送和接收数据。基本上和你家到商店的街道差不多。</li><li><strong>TCP/IP</strong>: 传输控制协议和因特网互连协议是定义数据如何传输的通信协议。这就像你去商店购物所使用的交通方式，比如汽车或自行车（或是你能想到的其他可能）。</li><li><strong>DNS</strong>: 域名系统服务器像是一本网站通讯录。当你在浏览器内输入一个网址时，浏览器获取网页之前将会查看域名系统。浏览器需要找到存放你想要的网页的服务器，才能发送 HTTP 请求到正确的地方。就像你要知道商店的地址才能到达那。</li><li><strong>HTTP</strong>: 超文本传输协议是一个定义客户端和服务器间交流的语言的协议（protocol ）。就像你下订单时所说的话一样。</li><li><strong>组成文件</strong>: 一个网页由许多文件组成，就像商店里不同的商品一样。这些文件有两种类型： <ul><li><strong>代码</strong> : 网页大体由 HTML、CSS、JavaScript 组成，不过你会在后面看到不同的技术。</li><li><strong>资源</strong> : 这是其他组成网页的东西的集合，比如图像、音乐、视频、Word 文档、PDF 文件。</li></ul></li></ul><h3 id="当你在浏览器里输入一个网址时" tabindex="-1">当你在浏览器里输入一个网址时 <a class="header-anchor" href="#当你在浏览器里输入一个网址时" aria-label="Permalink to &quot;当你在浏览器里输入一个网址时&quot;">​</a></h3><ol><li>浏览器在域名系统（DNS）服务器上找出存放网页的服务器的实际地址（找出商店的位置）。</li><li>浏览器发送 HTTP 请求信息到服务器请求拷贝一份网页到客户端（你走到商店并下订单）。这条消息，包括其他所有在客户端和服务器之间传递的数据都是通过互联网使用 TCP/IP 协议传输的。</li><li>服务器同意客户端的请求后，会返回一个“200 OK”信息，意味着“你可以查看这个网页，然后开始将网页的文件以数据包的形式传输到浏览器（商店给你商品，你将商品带回家）。</li><li>浏览器将数据包聚集成完整的网页然后将网页呈现给你（商品到了你的门口 —— 新东西，好棒！）。</li></ol><h3 id="浏览器渲染工作原理" tabindex="-1">浏览器渲染工作原理 <a class="header-anchor" href="#浏览器渲染工作原理" aria-label="Permalink to &quot;浏览器渲染工作原理&quot;">​</a></h3><p><a href="https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work#%E8%A7%A3%E6%9E%90" target="_blank" rel="noreferrer">详细文档</a></p><p><img src="'+e+'" alt="client parse"></p><ul><li>浏览器首先解析 HTML 文件，并从中识别出所有的 <code>&lt;link&gt;</code> 和 <code>&lt;script&gt;</code> 元素，获取它们指向的外部文件的链接。</li><li>继续解析 HTML 文件的同时，浏览器根据外部文件的链接向服务器发送请求，获取并解析 CSS 文件和 JavaScript 脚本文件。</li><li>接着浏览器会给解析后的 HTML 文件生成一个 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model" target="_blank" rel="noreferrer">DOM</a> 树（在内存中），会给解析后的 CSS 文件生成一个 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/CSSOM" target="_blank" rel="noreferrer">CSSOM</a> 树（在内存中），并且会<a href="https://developer.mozilla.org/zh-CN/docs/Web/Performance/How_browsers_work#%E5%85%B6%E4%BB%96%E8%BF%87%E7%A8%8B" target="_blank" rel="noreferrer">编译和执行</a>解析后的 JavaScript 脚本文件。</li><li>伴随着构建 DOM 树、应用 CSSOM 树的样式、以及执行 JavaScript 脚本文件，浏览器会在屏幕上绘制出网页的界面；用户看到网页界面也就可以跟网页进行交互了。</li></ul><h4 id="dns-解析" tabindex="-1">DNS 解析 <a class="header-anchor" href="#dns-解析" aria-label="Permalink to &quot;DNS 解析&quot;">​</a></h4><p>域名地址与实际 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/IP_Address" target="_blank" rel="noreferrer">IP</a> 地址相匹配的服务器。</p><p>网页可以通过 IP 地址直接访问。可以通过在 <a href="https://www.nslookup.io/website-to-ip-lookup/" target="_blank" rel="noreferrer">DNS 查询工具</a> 等工具中输入域名来查找网站的 IP 地址。</p><h4 id="tcp-握手" tabindex="-1">TCP 握手 <a class="header-anchor" href="#tcp-握手" aria-label="Permalink to &quot;TCP 握手&quot;">​</a></h4><p>一旦获取到服务器 IP 地址，浏览器就会通过 TCP“三次握手” (en-US)与服务器建立连接。这个机制是用来让两端尝试进行通信——在浏览器和服务器通过上层协议 HTTPS 发送数据之前，可以协商网络 TCP 套接字连接的一些参数。</p><h4 id="tls-协商" tabindex="-1">TLS 协商 <a class="header-anchor" href="#tls-协商" aria-label="Permalink to &quot;TLS 协商&quot;">​</a></h4><p>对于通过 HTTPS 建立的安全连接，还需要另一次 &quot;握手&quot;。这种握手，或者说 TLS 协商，决定使用哪种密码对通信进行加密，验证服务器，并在开始实际数据传输前建立安全连接。</p><p>传输层安全性协议 (Transport Layer Security，缩写作 TLS)，它的前身是安全套接层 (Secure Sockets Layer，缩写作 SSL)，是一个被应用程序用来在网络中安全通信的 protocol （通讯协议），防止电子邮件、网页、消息以及其他协议被篡改或是窃听。</p><p>所有现代浏览器都支持 TLS 协议，它们都要求服务器提供一个有效的 <a href="https://developer.mozilla.org/zh-CN/docs/Glossary/Digital_certificate" target="_blank" rel="noreferrer">digital certificate</a>（数字证书）来确认身份以建立安全连接。如果客户端和服务器都能提供自己的数字证书，则它们可以互相认证。</p><h4 id="响应" tabindex="-1">响应 <a class="header-anchor" href="#响应" aria-label="Permalink to &quot;响应&quot;">​</a></h4><p>一旦我们建立了到 web 服务器的连接，浏览器就代表用户发送一个初始的 HTTP GET 请求，对于网站来说，这个请求通常是一个 HTML 文件。一旦服务器收到请求，它将使用相关的响应头和 HTML 的内容进行回复。</p><h2 id="面试经" tabindex="-1">面试经 <a class="header-anchor" href="#面试经" aria-label="Permalink to &quot;面试经&quot;">​</a></h2><h3 id="浏览器" tabindex="-1">浏览器 <a class="header-anchor" href="#浏览器" aria-label="Permalink to &quot;浏览器&quot;">​</a></h3><ol><li><strong>渲染主线程是如何工作的</strong><ul><li>解析 HTML -&gt; 生成 DOM 树 【同时】 预加载（CSS、JavaScript 和 web 字体）</li><li>解析 CSS -&gt; 生成 CSSOM 树 【同时】 Javascript 编译</li><li>计算样式（将 DOM 和 CSSOM 组合成渲染树）</li><li>布局（渲染树上运行布局以计算每个节点的几何体），第一次确定节点的大小和位置称为布局 <ul><li>回流(reflow)：布局之后对节点大小和位置的重新计算</li></ul></li><li>绘制：绘制可以将布局树中的元素分解为多个层，将内容提升到 GPU 上的层（而不是 CPU 上的主线程）可以提高绘制和重新绘制(repaint)性能 <ul><li>分层：可以提高性能，但是它以内存管理为代价，因此不应作为 web 性能优化策略的一部分过度使用</li></ul></li></ul></li><li><strong>主流浏览器及内核</strong><table tabindex="0"><thead><tr><th>浏览器</th><th>内核</th></tr></thead><tbody><tr><td>Chrome</td><td>Blink（以前是<code>Webkit</code>）</td></tr><tr><td>Edge</td><td>Blink</td></tr><tr><td>IE</td><td>Trident</td></tr><tr><td>Firefox</td><td>Gecko(壁虎)</td></tr><tr><td>Opera</td><td>Persto</td></tr><tr><td>Safari</td><td>Webkit</td></tr></tbody></table></li></ol><h3 id="html-1" tabindex="-1">html <a class="header-anchor" href="#html-1" aria-label="Permalink to &quot;html&quot;">​</a></h3><ol><li>dom解析过程</li></ol><h3 id="css-1" tabindex="-1">css <a class="header-anchor" href="#css-1" aria-label="Permalink to &quot;css&quot;">​</a></h3><ol><li>盒模型，怎么改变盒模型</li><li>弹性盒模型</li><li>实现 10px 字体 <ol><li><code>em</code></li></ol></li></ol><h3 id="js" tabindex="-1">js <a class="header-anchor" href="#js" aria-label="Permalink to &quot;js&quot;">​</a></h3><ol><li><p><strong>异步？</strong></p><ol><li>JS 是一门单线程语言，这是因为它运行在浏览器的渲染主线程中，而渲染主线程只有一个</li><li>渲染主线程承担很多工作，渲染页面、执行 JS 等，如果是用同步方式，就有可能导致主线程产生阻塞，从而导致消息队列中的很多任务无法执行，页面无法及时更新给用户造成卡死现象。</li><li>浏览器为了杜绝渲染主线程阻塞现象，采用异步方式来避免。比如当遇到<strong>计时器</strong>、<strong>网络</strong>、<strong>事件监听</strong>主线程将任务交给其他线程去处理，自身立即结束任务执行，继续执行后续代码。当其他线程任务完成时将事先传递的回调函数包装成任务加入到消息队列末尾等待主线程执行，这样就保证了单线程的流畅运行</li></ol></li><li><p><strong>事件循环？</strong></p><ol><li>事件循环也叫消息循环，是浏览器渲染主线程的工作方式</li><li>在 Chrome 源码中，会开启一个不会停止的 for 循环，每次循环从消息队列中取出第一个任务执行，其他线程在合适的时候将任务添加到队列末尾</li><li>过去消息队列会有<strong>宏任务队列</strong>和<strong>微任务队列</strong>，最新 W3C 解释每个任务有不同的类型，同类型任务必须在同一队列，不同任务可以属于不同的队列。浏览器必须有一个<strong>微队列</strong>，微队列有最高执行优先级</li><li><img src="'+p+`" alt="http1和http2的请求示意图"></li></ol></li><li><p><code>script</code> 标签有哪些属性，作用是什么</p><ul><li><code>defer</code>、<code>async</code>、<code>type=&quot;module&quot;</code></li></ul></li><li><p>原型链 <code>ptototype</code></p></li><li><p><code>http</code> 请求状态码</p></li><li><p><code>worker</code> 了解么，用来解决什么问题</p></li><li><p>浏览器缓存（强缓存、协商缓存）</p></li><li><p>相对路径和绝对路径</p></li><li><p>js 的 false 值有哪些</p><ul><li><code>undefined</code> <code>null</code> <code>NaN</code> <code>&#39;&#39;</code> <code>0</code> <code>false</code></li></ul></li><li><p><code>typeof typeof a</code> 返回啥</p><ul><li><code>string</code></li></ul></li><li><p>预编译测试，执行结果</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(a);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// var a = 1;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 执行结果是啥</span></span></code></pre></div></li><li><p>闭包：函数内部的函数被保存到外部。</p><ul><li>优点：实现缓存，比如: 节流(<code>throttle</code>)、防抖(<code>debounce</code>)</li><li>缺点：闭包会导致作用域链不释放占用内存导致内存泄露</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 节流</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> throttle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lastTime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> now</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> Date.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">now</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        if</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (now </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> lastTime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> delay) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            func.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arg);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            lastTime </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> now;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 防抖</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> debounce</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">func</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">delay</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> timer;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    return</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">arg</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        const</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> context</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        clearTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(timer);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        timer </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            func.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">apply</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(context, </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">arg);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        }, delay);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div></li><li><p>节流(<code>throttle</code>): n 秒内只运行一次，若在 n 秒内重复触发，只有一次生效</p></li><li><p>防抖(<code>debounce</code>): n 秒后在执行该事件，若在 n 秒内被重复触发，则重新计时</p></li><li><p>立即执行函数是啥, 可以解决什么问题</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eslint-disable-next-line no-var, vars-on-top</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; i</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(i);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 由于闭包和变量提升问题会导致输出 5 个 5</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 使用立即执行函数解决以上问题</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// eslint-disable-next-line no-var, vars-on-top</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">var</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">function</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">k</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">            console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(k);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }(j));</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 0、 1 、 2 、 3 、 4</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//  使用 let 解决</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">let</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 5</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; j</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">++</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) {</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    setTimeout</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(() </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        console.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">log</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(j);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    });</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 输出 0、 1 、 2 、 3 、 4</span></span></code></pre></div></li></ol><h3 id="http" tabindex="-1">http <a class="header-anchor" href="#http" aria-label="Permalink to &quot;http&quot;">​</a></h3><p><img src="`+k+'" alt="http1和http2的请求示意图"></p><ul><li><strong>HTTP/0.9</strong>: 只支持GET方法，只能发送HTML格式字符串。</li><li><strong>HTTP/1.0</strong>: 支持多种数据格式，增加POST、HEAD等方法，增加头信息，每次只能发送一个请求(tcp)（无持久连接）</li><li><strong>HTTP/1.1</strong>: 默认持久连接、请求管道化(响应会等待上一个完成在执行下一个)、增加缓存处理、增加Host字段、支持断点传输分块传输等。</li><li><strong>HTTP/2.0</strong>: 二进制分帧(<code>frame</code>)、多路复用、头部压缩、服务器推送(例如服务端可以主动把JS和CSS文件推送给客户端，而不需要客户端解析HTML时再发送这些请求) <ul><li><strong>缺点1</strong> 当出现丢包时，整个 TCP 都要开始等待重传，那么就会阻塞该 TCP连接中的所有请求。</li><li><strong>缺点2</strong> 在接收端进行帧组装时，依旧要求同一 stream id 的数据是有序的。无法做到真正的乱序传输。</li></ul></li><li><strong>HTTP/3.0</strong>: HTTP3.0的核心是QUIC协议, <code>TCP</code> 和 <code>UDP</code> 对比 <ol><li>基于TCP开发的设备和协议非常多，兼容困难</li><li>TCP协议栈是Linux内部的重要部分，修改和升级成本很大</li><li>UDP本身是无连接的、没有建链和拆链成本</li><li>UDP的数据包无队头阻塞问题</li><li>UDP改造成本小</li></ol></li></ul>',52)]))}const C=i(r,[["render",E]]);export{u as __pageData,C as default};
