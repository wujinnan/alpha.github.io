import{l as u,u as L}from"./chunks/index.ce378cf5.js";import"./chunks/el-button.4ed993c7.js";import{_ as B,a as T}from"./chunks/el-tag.ea072e11.js";import"./chunks/el-option.4ed993c7.js";import{_ as x,d as q,o as v,D as P,E as C,c as k,F as I,R as K,J as c,u as N,a5 as M,l as _,k as z,a6 as V,C as p,a as i,b as J,S as O,U as R,V as U}from"./chunks/framework.009e57ad.js";import{_ as G}from"./chunks/Kline.vue_vue_type_style_index_0_scoped_1f26131b_lang.e8857780.js";import"./chunks/index.f954909e.js";import"./chunks/index.4da49ac9.js";import"./chunks/index.0bdd1095.js";import"./chunks/index.7e71f9e5.js";const H=x(G,[["__scopeId","data-v-1f26131b"]]);const j=q({__name:"Exchange",props:{exchange:{type:String,default:"meex"}},emits:["change"],setup(D,{emit:g}){const d=g,n=["meex"];return(m,h)=>{const y=u.ElOption,s=u.ElSelect;return v(),P(s,{class:"w-100%","model-value":D.exchange,size:"small",onChange:h[0]||(h[0]=r=>d("change",r))},{default:C(()=>[(v(),k(I,null,K(n,r=>c(y,{key:r,label:r,value:r},null,8,["label","value"])),64))]),_:1},8,["model-value"])}}}),f=D=>(O("data-v-5c45651e"),D=D(),R(),D),Q={class:"options pb-8px! text-12px border-b-solid border-b border-amber mb-8px!"},X=f(()=>p("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 交易所 ",-1)),Y=f(()=>p("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 交易对 ",-1)),Z=f(()=>p("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 语言 ",-1)),W={class:""},ss=f(()=>p("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," Kline类型 ",-1)),ts=q({__name:"Kline",setup(D){const{isDark:g}=N(),d=new L("wss://ws.meex.com/kline-api/ws",{name:"kline-ws-meex",retry:100,connect:!1});let n=null,m=null;const h={interval_map:{1:"1min",5:"5min",15:"15min",30:"30min",60:"60min",240:"4h","1D":"1day","1W":"1week","1M":"1month"}},y={interval_map:{1:"1m",3:"3m",5:"5m",15:"15m",30:"30m",60:"1h",120:"2h",240:"4h",360:"6h",720:"12h","1D":"1d","1W":"1w","1M":"1M"}},s=M({exchange:"meex",symbols:{},lang:"zh-CN",type:"simple",types:["simple","tv"],theme:"light",loading:!0,interval:"",list:[],sub_list:[],latest_data:null,page_size:300,library_path:"/blog/charting_library/"}),r=_(()=>{var t;return`market_${(t=s.symbols.symbol)==null?void 0:t.toLowerCase()}_kline_${h.interval_map[s.interval]}`}),A=_(()=>`symbol=${s.symbols.symbol}&interval=${y.interval_map[s.interval]}&limit=${s.page_size}`),b=_(()=>({topic:`kline_${y.interval_map[s.interval]}`,id:`kline_301${s.symbols.symbol}${y.interval_map[s.interval]}`,params:{binary:!1,limit:1},symbol:s.symbols.symbol,event:"sub"})),w=_(()=>["1","5","15","30","60","240","1D","1W","1M"]),e={getKline(){if(s.loading=!0,s.sub_list=[],s.latest_data=null,e.subKline(),s.exchange==="meex")d.send({event:"req",params:{channel:r.value}},t=>{var a,o;if(s.loading=!1,s.list=[],t.success&&t.channel===r.value){const l=e.formatMeexList(t.data);if(s.sub_list.length){const F=(a=l.slice(-1)[0])==null?void 0:a.timestamp;((o=s.sub_list[0])==null?void 0:o.timestamp)>F&&l.push(...s.sub_list),s.sub_list=[]}s.list=l}});else{const t=A.value;fetch(`https://api.bybit.com/spot/api/quote/v2/klines?${t}`).then(a=>a.json()).then(a=>{s.loading=!1,a.ret_code===0&&t===A.value&&(s.list=e.formatBybitList(a.result))})}},subKline(){if(s.exchange==="meex")d.init(),d.send({event:"sub",params:{channel:r.value}},t=>{if(t.success&&t.channel===r.value){const a=e.formatMeexList([t.tick]);s.loading?s.sub_list=a:([s.latest_data]=a,e.updateListLastData())}});else{n=n||new WebSocket("wss://ws2.bybit.com/spot/ws/quote/v1");const t=()=>{m=setTimeout(()=>{n==null||n.send(JSON.stringify({ping:Date.now()}))},5e3)};n.readyState===1&&(n==null||n.send(JSON.stringify(b.value)),t()),n.onopen=()=>{n==null||n.send(JSON.stringify(b.value)),t()},n.onmessage=a=>{const o=JSON.parse(a.data);if(o.id===b.value.id){const l=e.formatBybitList(o.data);s.loading?s.sub_list=l:([s.latest_data]=l,e.updateListLastData())}else o.pong&&t()}}},loadMore(t,a){if(!t){a([]);return}if(s.exchange==="meex")d.send({event:"req",params:{channel:r.value,endIdx:t/1e3-1,pageSize:s.page_size}},o=>{if(o.success&&o.channel===r.value){const l=e.formatMeexList(o.data);a(l),s.list.unshift(...l)}});else{const o=A.value;fetch(`https://api.bybit.com/spot/api/quote/v2/klines?${o}&to=${t-1e3}`).then(l=>l.json()).then(l=>{if(l.ret_code===0&&o===A.value){const F=e.formatBybitList(l.result);a(F),s.list.unshift(...F)}})}},updateListLastData(){var t;if(s.latest_data){const a=s.latest_data.time,o=(t=s.list.slice(-1)[0])==null?void 0:t.time;a===o?s.list.splice(-1,1,s.latest_data):a&&(!o||a>o)&&s.list.push(s.latest_data)}},unsub(t){s.exchange==="meex"?d.send({event:"unsub",params:{channel:r.value}},t):(m&&clearTimeout(m),(n==null?void 0:n.readyState)===1&&(n==null||n.send(JSON.stringify({...b.value,event:"cancel"}))))},changeExchange(t){e.unsub(()=>{}),s.exchange=t,s.latest_data=null,s.loading=!0},changeSymbol(t){e.unsub(()=>{}),s.symbols=t,s.interval&&e.getKline()},changeLang(t){s.lang=t},selectType(t){s.type=t},selectInterval(t){e.unsub(()=>{}),s.interval=t,s.symbols.symbol&&e.getKline()},formatMeexList(t){return t.map(a=>({id:`${s.symbols.symbol}_${s.interval}`,timestamp:a.id*1e3,time:a.id*1e3,open:a.open,close:a.close,high:a.high,low:a.low,volume:a.vol}))},formatBybitList(t){return t.map(a=>({id:`${s.symbols.symbol}_${s.interval}`,timestamp:a.t,time:a.t,open:Number(a.o),close:Number(a.c),high:Number(a.h),low:Number(a.l),volume:Number(a.v)}))}};return z(()=>{s.theme=g.value?"dark":"light"}),V(()=>{e.unsub(()=>{}),d.close()}),(t,a)=>{const o=j,l=B,F=T,E=u.ElButton,$=u.ElButtonGroup;return v(),k("section",null,[p("ul",Q,[p("li",null,[X,c(o,{exchange:s.exchange,onChange:e.changeExchange},null,8,["exchange","onChange"])]),p("li",null,[Y,c(l,{exchange:s.exchange,onChange:e.changeSymbol},null,8,["exchange","onChange"])]),p("li",null,[Z,c(F,{lang:s.lang,onChange:e.changeLang},null,8,["lang","onChange"])]),p("li",W,[ss,c($,null,{default:C(()=>[c(E,{size:"small",plain:s.type!=="simple",type:s.type==="simple"?"danger":"primary",onClick:a[0]||(a[0]=S=>e.selectType("simple"))},{default:C(()=>[i(" 基础版 ")]),_:1},8,["plain","type"]),c(E,{size:"small",plain:s.type!=="tv",type:s.type==="tv"?"danger":"primary",onClick:a[1]||(a[1]=S=>e.selectType("tv"))},{default:C(()=>[i(" TradingView ")]),_:1},8,["plain","type"])]),_:1})])]),c(J(H),{class:"h-400px",types:s.types,loading:s.loading,theme:s.theme,lang:s.lang,type:s.type,symbol:s.symbols.symbol,"price-precision":s.symbols.pricePrecision,"quantity-precision":s.symbols.quantityPrecision,exchange:s.exchange,intervals:w.value,list:s.list,"latest-data":s.latest_data,"load-more":e.loadMore,"library-path":s.library_path,"limit-size":s.page_size,watermark:"水印",onSelectInterval:e.selectInterval},null,8,["types","loading","theme","lang","type","symbol","price-precision","quantity-precision","exchange","intervals","list","latest-data","load-more","library-path","limit-size","onSelectInterval"])])}}});const as=x(ts,[["__scopeId","data-v-5c45651e"]]),As=JSON.parse('{"title":"带菜单合并版本","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/kline.md","lastUpdated":1701140045000}'),ns={name:"npm/kline.md"},es=p("h1",{id:"带菜单合并版本",tabindex:"-1"},[i("带菜单合并版本 "),p("a",{class:"header-anchor",href:"#带菜单合并版本","aria-label":'Permalink to "带菜单合并版本"'},"​")],-1),os=p("a",{href:"https://cn.tradingview.com/widget/advanced-chart/",target:"_blank",rel:"noreferrer"},"Tradingview",-1),ls=p("a",{href:"https://www.tradingview.com/charting-library-docs/",target:"_blank",rel:"noreferrer"},"官方文档",-1),ps=p("h2",{id:"demo",tabindex:"-1"},[i("Demo "),p("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "Demo"'},"​")],-1),rs=U("",20);function cs(D,g,d,n,m,h){const y=u.ElTag,s=as;return v(),k("div",null,[es,p("p",null,[i("基于 "),os,i(),c(y,{round:"",small:""},{default:C(()=>[i("26.003")]),_:1}),i(" 开发，"),ls,i("。")]),ps,c(s),rs])}const bs=x(ns,[["render",cs]]);export{As as __pageData,bs as default};
