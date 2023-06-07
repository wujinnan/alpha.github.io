import{l as O}from"./chunks/base.b4c1a5da.js";import{d as S,a9 as H,o as r,c as i,F as B,R as $,n as E,C as l,t as q,K as V,G as N,_ as w,a6 as U,l as y,aa as L,J as A,E as z,D as Q,b as v,S as J,U as R,a as I,V as G}from"./chunks/framework.1bf78886.js";import{o as K}from"./chunks/index.5cf6133c.js";import{p as b,w as k,m as u,s as M,g as j}from"./chunks/index.574a0076.js";import{E as W}from"./chunks/index.50e723de.js";import"./chunks/index.38cb1f8b.js";const X=["onClick"],Y=S({__name:"OrderBookTable",props:{side:{type:String,default:""},list:{type:Array,default:()=>[]},buyColor:{type:String,default:"#15bb7a"},sellColor:{type:String,default:"#d2334d"},lineHeight:{type:String,default:"16px"},newIndex:{type:Number,default:0}},emits:["click"],setup(D,{emit:t}){const s=D;H(c=>({f5d57880:s.lineHeight,"250d110c":s.sellColor,"3b925f42":s.buyColor}));const C={emitClick(c){/\d/.test(c.price)&&t("click",c.price.replace(/,/g,""))}};return(c,g)=>(r(),i("ul",{class:E(["list-wrap",[s.side?`is-${s.side}`:""]])},[(r(!0),i(B,null,$(s.list,(e,h)=>(r(),i("li",{key:h,class:E(["item",{new:h<s.newIndex}]),onClick:f=>C.emitClick(e)},[l("span",{class:E([e.side?`is-${e.side}`:""])},q(e.price),3),l("span",null,q(e.quantity),1),l("span",null,q(e.column3),1),e.scale?(r(),i("div",{key:0,class:"scale",style:V({transform:`scale3d(${e.scale}, 1, 1)`})},null,4)):N("",!0)],10,X))),128))],2))}});const x=w(Y,[["__scopeId","data-v-6533462b"]]),_=D=>(J("data-v-ef165671"),D=D(),R(),D),Z=_(()=>l("h4",{class:"mt-12px"}," 订单簿 ",-1)),ss=_(()=>l("ul",{class:"table-header grid grid-cols-3"},[l("li",{class:"text-left"}," 價格(USDT) "),l("li",null,"數量(BTC)"),l("li",null,"累計(BTC)")],-1)),as=_(()=>l("div",{class:"h-1px bg-yellow-500 my-4px"},null,-1)),ns=_(()=>l("h4",{class:"mt-20px"}," 最新成交 ",-1)),ls=_(()=>l("ul",{class:"table-header grid grid-cols-3"},[l("li",{class:"text-left"}," 價格(USDT) "),l("li",null,"數量(BTC)"),l("li",null,"時間")],-1)),os=S({__name:"OrderBook",setup(D){const t=new K("wss://ws.meex.com/kline-api/ws",{name:"ob-ws",retry:100}),s=U({limit:10,limit_options:[1,5,10,20,50,100,200],price_precision:2,quantity_precision:5,order_book:{sells:[],buys:[]},deal:[],deal_sub:[],deal_sub_timer:null}),C=y(()=>s.order_book.sells.slice(0,s.limit)),c=y(()=>s.order_book.buys.slice(0,s.limit)),g=y(()=>{const a=C.value.reduce((n,o)=>b(n,o[1]),"0");return k(a,s.limit)}),e=y(()=>{const a=c.value.reduce((n,o)=>b(n,o[1]),"0");return k(a,s.limit)}),h=y(()=>k(b(g.value,e.value),2)),f=y(()=>{const a=p.formatOrderBook(C.value).reverse(),n=p.formatOrderBook(c.value);return{sells:a,buys:n}}),P=y(()=>{const a=s.deal.slice(0,s.limit);let n=new Array(s.limit).fill({price:"--",quantity:"--",column3:"--"});return a.length&&(n=a.map(o=>({side:o.side.toLowerCase(),price:u(o.price,s.price_precision),quantity:u(o.vol,s.quantity_precision),column3:o.ds.split(" ")[1]||"--"}))),n}),p={init(){p.subOrderBook(),p.reqDeal(),p.subDeal()},subOrderBook(){t.send({event:"sub",params:{channel:"market_btcusdt_depth_step0"}},a=>{a.success&&(s.order_book={sells:a.tick.asks,buys:a.tick.buys})})},reqDeal(){t.send({event:"req",params:{channel:"market_btcusdt_trade_ticker",top:100}},a=>{if(a.success){const n=a.data;if(s.deal_sub.length){const o=n.slice(0,1)[0];s.deal_sub.forEach(F=>{F.id>o.id&&n.unshift(F)}),s.deal=n.slice(0,200),s.deal_sub=[]}s.deal=n}})},subDeal(){t.send({event:"sub",params:{channel:"market_btcusdt_trade_ticker",top:100}},a=>{if(a.success){const n=a.tick.data.reverse();s.deal.length?(s.deal.unshift(...n),s.deal=s.deal.slice(0,200),s.deal_sub=n,s.deal_sub_timer&&clearTimeout(s.deal_sub_timer),s.deal_sub_timer=setTimeout(()=>{s.deal_sub=[]},300)):s.deal_sub.push(...n)}})},clickHandle(a){W({title:"选择价格",message:a,type:"info"})},formatOrderBook(a){let n="0";const o=Math.max(s.limit-a.length,0),F=new Array(o).fill({price:"--",quantity:"--",column3:"--"});return[...a.map(m=>{n=b(n,m[1]);const T=M(k(m[1],h.value),4);return{price:u(m[0],s.price_precision),quantity:u(m[1],s.quantity_precision),column3:u(n,s.quantity_precision),scale:j(T,1)?1:T}}),...F]}};return p.init(),L(()=>{t.send({event:"unsub",params:{channel:"market_btcusdt_depth_step0"}},()=>{}),t.send({event:"unsub",params:{channel:"market_btcusdt_trade_ticker"}},()=>{}),t.close()}),(a,n)=>{const o=O.ElOption,F=O.ElSelect;return r(),i(B,null,[A(F,{modelValue:s.limit,"onUpdate:modelValue":n[0]||(n[0]=d=>s.limit=d),size:"small"},{default:z(()=>[(r(!0),i(B,null,$(s.limit_options,d=>(r(),Q(o,{key:d,label:`展示${d}条`,value:d},null,8,["label","value"]))),128))]),_:1},8,["modelValue"]),Z,ss,A(v(x),{list:f.value.sells,side:"sell",onClick:p.clickHandle},null,8,["list","onClick"]),as,A(v(x),{list:f.value.buys,side:"buy",onClick:p.clickHandle},null,8,["list","onClick"]),ns,ls,A(v(x),{list:P.value,"new-index":s.deal_sub.length,"line-height":"20px",onClick:p.clickHandle},null,8,["list","new-index","onClick"])],64)}}});const es=w(os,[["__scopeId","data-v-ef165671"]]),As=JSON.parse('{"title":"订单簿列表","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/vue-order-book.md","lastUpdated":1686107713000}'),ts={name:"npm/vue-order-book.md"},ps=l("h1",{id:"订单簿列表",tabindex:"-1"},[I("订单簿列表 "),l("a",{class:"header-anchor",href:"#订单簿列表","aria-label":'Permalink to "订单簿列表"'},"​")],-1),cs=l("h2",{id:"demo",tabindex:"-1"},[I("Demo "),l("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "Demo"'},"​")],-1),rs=G(`<h2 id="盘口" tabindex="-1">盘口 <a class="header-anchor" href="#盘口" aria-label="Permalink to &quot;盘口&quot;">​</a></h2><p>盘口会有颜色占比背景由<code>side</code>属性控制颜色</p><details class="details custom-block"><summary>查看代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 卖盘 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">OrderBookTable</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:list</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sells</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">side</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">sell</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">clickHandle</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;">&lt;!-- 买盘 --&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">OrderBookTable</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:list</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">buys</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">side</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">buy</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">clickHandle</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> sells </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">26,959.20</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">quantity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.00280</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">column3</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.03144</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">scale</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.8085</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> buys </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">26,959.20</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">quantity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.00280</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">column3</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.03144</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">scale</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.8085</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> clickHandle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// TODO::</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="实时成交" tabindex="-1">实时成交 <a class="header-anchor" href="#实时成交" aria-label="Permalink to &quot;实时成交&quot;">​</a></h2><p>盘口会新成交闪烁背景由<code>newIndex</code>属性控制</p><details class="details custom-block"><summary>查看代码</summary><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">OrderBookTable</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:list</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">deals</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">:new-index</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">new_deals.length</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">line-height</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">20px</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#C792EA;">@click</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">clickHandle</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">/&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">script</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">setup</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">lang</span><span style="color:#89DDFF;">=</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">ts</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> deals </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">26,959.20</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">quantity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.0010</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">column3</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11:11:12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">26,959.20</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">quantity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.00280</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">column3</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11:11:11</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> new_deals </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">26,959.20</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">quantity</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">0.0010</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">column3</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">11:11:12</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">]</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> clickHandle </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">(</span><span style="color:#A6ACCD;font-style:italic;">price</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">string</span><span style="color:#89DDFF;">)</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;font-style:italic;">// TODO::</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">script</span><span style="color:#89DDFF;">&gt;</span></span></code></pre></div></details><h2 id="api" tabindex="-1">API <a class="header-anchor" href="#api" aria-label="Permalink to &quot;API&quot;">​</a></h2><h3 id="属性" tabindex="-1">属性 <a class="header-anchor" href="#属性" aria-label="Permalink to &quot;属性&quot;">​</a></h3><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认</th></tr></thead><tbody><tr><td>side</td><td>订单簿控制价格颜色和占比颜色</td><td><code>&#39;buy&#39; | &#39;sell&#39; | &#39;&#39;</code></td><td>&#39;&#39;</td></tr><tr><td>list</td><td>展示列表</td><td><code>array</code></td><td>[]</td></tr><tr><td>buyColor</td><td>买色值</td><td><code>string</code></td><td><span style="color:#15bb7a;">#15bb7a</span></td></tr><tr><td>sellColor</td><td>卖色值</td><td><code>string</code></td><td><span style="color:#d2334d;">#d2334d</span></td></tr><tr><td>lineHeight</td><td>单元格行高</td><td><code>string</code></td><td><code>16px</code></td></tr><tr><td>newIndex</td><td>高亮背景索引(小于<code>newIndex</code>会有闪烁效果)</td><td><code>number</code></td><td>0</td></tr></tbody></table><h4 id="list列表属性" tabindex="-1">list列表属性 <a class="header-anchor" href="#list列表属性" aria-label="Permalink to &quot;list列表属性&quot;">​</a></h4><table><thead><tr><th>属性名</th><th>说明</th><th>类型</th><th>默认</th></tr></thead><tbody><tr><td>side</td><td>控制价格颜色</td><td><code>&#39;buy&#39; | &#39;sell&#39; | &#39;&#39;</code></td><td>&#39;&#39;</td></tr><tr><td>price</td><td>价格</td><td><code>string</code></td><td>&#39;&#39;</td></tr><tr><td>quantity</td><td>数量</td><td><code>string</code></td><td>&#39;&#39;</td></tr><tr><td>column3</td><td>第三列展示数据</td><td><code>string</code></td><td>&#39;&#39;</td></tr><tr><td>scale</td><td>控制背景宽度，需要小于1</td><td><code>string</code></td><td>&#39;&#39;</td></tr></tbody></table><h3 id="事件" tabindex="-1">事件 <a class="header-anchor" href="#事件" aria-label="Permalink to &quot;事件&quot;">​</a></h3><table><thead><tr><th>事件名</th><th>说明</th><th>Type</th></tr></thead><tbody><tr><td>click</td><td>点击每一条时触发</td><td><code>(price: string) =&gt; void</code></td></tr></tbody></table>`,13);function Ds(D,t,s,C,c,g){const e=es;return r(),i("div",null,[ps,cs,A(e),rs])}const _s=w(ts,[["render",Ds]]);export{As as __pageData,_s as default};
