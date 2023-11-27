import{l as d}from"./chunks/base.6c74be14.js";import"./chunks/el-button.4ed993c7.js";import{u as E}from"./chunks/index.6749d2a8.js";import{d as v,a5 as w,a6 as S,o as r,c as u,C as o,J as C,E as p,a as t,t as c,F as h,R as x,D as b,G as q,n as T,S as P,U as N,_,V as g}from"./chunks/framework.009e57ad.js";import"./chunks/index.f954909e.js";const f=e=>(P("data-v-4c191370"),e=e(),N(),e),W={class:"flex mb-10px"},I=f(()=>o("span",{class:"text-red-600"}," ws状态: ",-1)),O=f(()=>o("span",{class:"ml-24px text-green-600"}," 连接耗时: ",-1)),U={class:"flex justify-between items-center"},V={class:"text-purple-700 font-bold"},$={class:"flex"},L={class:"text-green-700 text-14px !m-0px"},R="wss://ws.meex.com/kline-api/ws",z=v({__name:"Ws",setup(e){let F=0;const a=w({status:"关闭",connect_time:"--",sends:{overview:{title:"获取行情数据",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"req",params:{channel:"review"}}},ticker:{title:"获取最新行情数据",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",params:{channel:"market_btcusdt_ticker"}}},order_book:{title:"盘口挂单",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",params:{channel:"market_btcusdt_depth_step0"}}},deal_req:{title:"成交-req",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"req",params:{channel:"market_btcusdt_trade_ticker",top:100}}},deal_sub:{title:"成交-订阅",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",params:{channel:"market_btcusdt_trade_ticker",top:100}}},kline_req:{title:"kline-req",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"req",params:{channel:"market_btcusdt_kline_60min"}}},kline_sub:{title:"kline-sub",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",params:{channel:"market_btcusdt_kline_60min"}}}}}),D=new E(R,{retry:100,onCreate:n=>{a.connect_time="--",a.status=n===0?"连接中":"重连中",F=Date.now()},onOpen:()=>{a.status="已连接",a.connect_time=String(Date.now()-F)},onClose:()=>{a.status="关闭"}}),y={send(n){const s=a.sends[n];s.loading=!0,s.send.event==="sub"&&(s.subing=!0),D.send(s.send,i=>{s.data=i,s.loading=!1,this.setUpdateStyle(s)})},unSub(n){const s=a.sends[n];s.send.event==="sub"&&(s.subing=!1),D.send({...s.send,event:"unsub"},()=>{s.data=null})},setUpdateStyle(n){n.data&&(n.update=!0,n.timer&&clearTimeout(n.timer),setTimeout(()=>{n.update=!1},300))}};return S(()=>{["ticker","order_book","deal_sub","kline_sub"].forEach(y.unSub),D.close()}),(n,s)=>{const i=d.ElText,m=d.ElButton,k=d.ElCard;return r(),u(h,null,[o("div",W,[I,C(i,{class:"!ml-10px font-bold",type:"primary"},{default:p(()=>[t(c(a.status),1)]),_:1}),O,C(i,{class:"!ml-10px font-bold",type:"primary"},{default:p(()=>[t(c(a.connect_time)+" ms ",1)]),_:1})]),(r(!0),u(h,null,x(Object.entries(a.sends),([A,l])=>(r(),b(k,{key:A,class:T(["box-card mt-8px",{"has-update":l.update}])},{header:p(()=>[o("div",U,[o("span",V,c(l.title),1),o("div",$,[l.send.event==="sub"&&l.subing?(r(),b(m,{key:0,type:"danger",onClick:B=>y.unSub(A)},{default:p(()=>[t(" 取消 ")]),_:2},1032,["onClick"])):q("",!0),C(m,{disabled:l.subing,loading:l.loading,type:"primary",onClick:B=>y.send(A)},{default:p(()=>[t(" 发送 ")]),_:2},1032,["disabled","loading","onClick"])])]),o("p",L," 发送数据: "+c(l.send),1)]),default:p(()=>[t(" "+c(l.data),1)]),_:2},1032,["class"]))),128))],64)}}});const M=_(z,[["__scopeId","data-v-4c191370"]]),ss=JSON.parse('{"title":"Socket","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/ws.md","lastUpdated":1698298881000}'),j={name:"npm/ws.md"},J=g('<h1 id="socket" tabindex="-1">Socket <a class="header-anchor" href="#socket" aria-label="Permalink to &quot;Socket&quot;">​</a></h1><p>通用的Scoket，主要功能:</p><ol><li>默认自动创建ws建连。</li><li>支持手动初始化<code>options.connect = false</code>, 初始化时执行 <code>init()</code>。</li><li>支持ws不可用时缓存订阅队列，ws建连之后自动发送缓存的订阅。</li><li>支持多个同样订阅只发送一次，成功之后同步执行回调。</li><li>支持自动/主动心跳功能。</li><li>支持断线自动重连功能。</li><li>解析<code>pako</code>压缩数据流。</li></ol><h2 id="demo" tabindex="-1">Demo <a class="header-anchor" href="#demo" aria-label="Permalink to &quot;Demo&quot;">​</a></h2>',4),K=g(`<h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/socket</span></span></code></pre></div><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Socket </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fe/socket</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Ws </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Socket</span><span style="color:#A6ACCD;">(url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;"># 或者使用</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">useSocket</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fe/socket</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> init</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> send</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> close </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">useSocket</span><span style="color:#A6ACCD;">(url</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> options)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h3 id="查看log" tabindex="-1">查看log <a class="header-anchor" href="#查看log" aria-label="Permalink to &quot;查看log&quot;">​</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#A6ACCD;">sessionStorage</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">setItem</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ws-debug</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div><h2 id="参数" tabindex="-1">参数 <a class="header-anchor" href="#参数" aria-label="Permalink to &quot;参数&quot;">​</a></h2><h3 id="url" tabindex="-1">url <a class="header-anchor" href="#url" aria-label="Permalink to &quot;url&quot;">​</a></h3><p>链接 WebSocket 服务器将响应的 URL：<code>ws://ws.abc.com</code> 或 <code>wss://ws.abc.com</code>。</p><ul><li><p>类型 <code>string | URL</code></p></li><li><p>示例</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">wss://ws.abc.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 或者</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> url </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">URL</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">/kline</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ws://ws.abc.com/</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// ws://ws.abc.com/kline</span></span></code></pre></div></li></ul><h3 id="options" tabindex="-1">options <a class="header-anchor" href="#options" aria-label="Permalink to &quot;options&quot;">​</a></h3><p>初始化Socket时使用的配置选项。</p><ul><li><p>类型</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Options</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">name</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">connect</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">protocols</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">[] </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">undefined</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">retry</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">retryTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">heart</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">heartTime</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">listenOnLine</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">onCreate</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">retryNumber</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">onOpen</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">retryNumber</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">number</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">onClose</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">isManual</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">boolean</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div></li><li><p>详细说明</p><table><thead><tr><th>参数</th><th>默认值</th><th>描述</th></tr></thead><tbody><tr><td><strong>name</strong></td><td>ws</td><td>ws链接名称，主要用来查看区分多个ws的debug信息</td></tr><tr><td><strong>connect</strong></td><td>true</td><td>创建Socket时是否自动初始化，如果设置为 <code>false</code> 时需要手动调用 <code>init</code> 方式初始化</td></tr><tr><td><strong>protocols</strong></td><td></td><td>一个协议字符串或者一个包含协议字符串的数组, 具体查看 <a href="https://developer.mozilla.org/zh-CN/docs/Web/API/WebSocket/WebSocket" target="_blank" rel="noreferrer">WebSocket</a></td></tr><tr><td><strong>retry</strong></td><td>4</td><td>自动重连次数，非手动关闭ws时执行</td></tr><tr><td><strong>retryTime</strong></td><td>2000</td><td>自动重连间隔时间，以<code>秒</code>为单位</td></tr><tr><td><strong>heart</strong></td><td>false</td><td>是否主动探测心跳，如果需要主动探测心跳需要设置为 \`true</td></tr><tr><td><strong>heartTime</strong></td><td>5000</td><td>主动探测心跳间隔，以<code>秒</code>为单位</td></tr><tr><td><strong>listenOnLine</strong></td><td>true</td><td>是否监听网络状态，监听<code>online 或 offline</code>事件</td></tr><tr><td><strong>onCreate</strong></td><td>retryNumber</td><td>创建Socket事件,<code>retryNumber</code>: 重试次数</td></tr><tr><td><strong>onOpen</strong></td><td>retryNumber</td><td>创建成功事件,<code>retryNumber</code>: 重试次数</td></tr><tr><td><strong>onClose</strong></td><td>isManual</td><td>关闭事件,<code>isManual</code>: 是否手动关闭</td></tr></tbody></table></li></ul><h2 id="实例函数" tabindex="-1">实例函数 <a class="header-anchor" href="#实例函数" aria-label="Permalink to &quot;实例函数&quot;">​</a></h2><h3 id="init" tabindex="-1">init() <a class="header-anchor" href="#init" aria-label="Permalink to &quot;init()&quot;">​</a></h3><p>手动初始化ws。</p><ul><li><p>类型</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">init</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">url</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Url</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span></code></pre></div></li><li><p>示例</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Socket </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fe/socket</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Ws </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Socket</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ws://ws.api.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#A6ACCD;"> </span><span style="color:#F07178;">connect</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FF9CAC;">false</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">// 手动初始化并添加token</span></span>
<span class="line"><span style="color:#A6ACCD;">Ws</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">init</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ws://ws.api.com?token=asdf</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div></li></ul><h3 id="send" tabindex="-1">send() <a class="header-anchor" href="#send" aria-label="Permalink to &quot;send()&quot;">​</a></h3><p>订阅发送数据。</p><ul><li><p>类型</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ActionKey</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    action </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">event</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">enum</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">Action</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    req </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">req</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    sub </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    unsub </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">unsub</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    ping </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ping</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    pong </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">pong</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SendData</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    [ActionKey</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">action]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`\${</span><span style="color:#FFCB6B;">Action</span><span style="color:#89DDFF;">}\`</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 订阅动作</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">channel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">id</span><span style="color:#89DDFF;">?:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;"> </span><span style="color:#676E95;font-style:italic;">// 特殊字段用来区分订阅</span></span>
<span class="line"><span style="color:#A6ACCD;">        [</span><span style="color:#A6ACCD;font-style:italic;">propName</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SendCb</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">any</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">send</span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">data</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SendData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> </span><span style="color:#A6ACCD;font-style:italic;">callback</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">SendCb</span><span style="color:#89DDFF;">):</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span></code></pre></div></li><li><p>示例</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;font-style:italic;">import</span><span style="color:#A6ACCD;"> Socket </span><span style="color:#89DDFF;font-style:italic;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fe/socket</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Ws </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">new</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">Socket</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ws://ws.api.com</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sendData </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">event</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">sub</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#F07178;">params</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">channel</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">kline_5min_btcusdt</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">        id: </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">market</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">};</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> Ws.send(sendData</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> (data) </span><span style="color:#89DDFF;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// TODO::</span></span>
<span class="line"><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div></li></ul><h3 id="close" tabindex="-1">close() <a class="header-anchor" href="#close" aria-label="Permalink to &quot;close()&quot;">​</a></h3><p>手动关闭ws。</p><ul><li><p>类型</p><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">close</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span></span></code></pre></div></li></ul>`,23);function G(e,F,a,D,y,n){const s=M;return r(),u("div",null,[J,C(s),K])}const ns=_(j,[["render",G]]);export{ss as __pageData,ns as default};
