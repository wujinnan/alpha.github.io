import{_ as u,a as m}from"./chunks/el-tag.a2d2cde6.js";import{d as g,u as b,a5 as _,l as f,k as E,a6 as v,o as F,c as d,C as t,J as y,b as B,S as k,U as q,_ as C,a as c,E as x,V as P}from"./chunks/framework.810436bc.js";import{T}from"./chunks/Kline.vue_vue_type_style_index_0_scoped_913d5e6b_lang.37cd29b6.js";import{u as w,l as L}from"./chunks/index.88dc1bbd.js";import{E as K}from"./chunks/index.e286162c.js";import"./chunks/el-option.4ed993c7.js";import"./chunks/el-button.4ed993c7.js";import"./chunks/index.dc0a6508.js";import"./chunks/index.70f4c496.js";import"./chunks/index.b36400a7.js";const A=D=>(k("data-v-f252fcae"),D=D(),q(),D),S={class:"options pb-8px! text-12px border-b-solid border-b border-amber mb-8px!"},$=A(()=>t("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 交易对 ",-1)),I=A(()=>t("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 语言 ",-1)),z={class:"h-400px"},N=g({__name:"TvKline",setup(D){const{isDark:i}=b(),p=new w("wss://ws.meex.com/kline-api/ws",{name:"kline-ws-meex",retry:100,connect:!1}),s=_({symbols:{},lang:"zh-CN",theme:"light",loading:!0,interval:"60",list:[],sub_list:[],latest_data:null,page_size:1e3,library_path:"/blog/charting_library/"}),e=f(()=>{var a;return`market_${(a=s.symbols.symbol)==null?void 0:a.toLowerCase()}_kline_60min`}),l={getKline(){s.loading=!0,s.sub_list=[],s.latest_data=null,l.subKline(),p.send({event:"req",params:{channel:e.value}},a=>{var n,o;if(s.loading=!1,s.list=[],a.success&&a.channel===e.value){const r=l.formatList(a.data);if(s.sub_list.length){const h=(n=r.slice(-1)[0])==null?void 0:n.time;((o=s.sub_list[0])==null?void 0:o.timestamp)>h&&r.push(...s.sub_list),s.sub_list=[]}s.list=r}})},subKline(){p.init(),p.send({event:"sub",params:{channel:e.value}},a=>{if(a.success&&a.channel===e.value){const n=l.formatList([a.tick]);s.loading?s.sub_list=n:([s.latest_data]=n,l.updateListLastData())}})},loadMore(a,n){if(!a){n([]);return}p.send({event:"req",params:{channel:e.value,endIdx:a/1e3-1,pageSize:s.page_size}},o=>{if(o.success&&o.channel===e.value){const r=l.formatList(o.data);n(r),s.list.unshift(...r)}})},updateListLastData(){var a;if(s.latest_data){const n=s.latest_data.time,o=(a=s.list.slice(-1)[0])==null?void 0:a.time;n===o?s.list.splice(-1,1,s.latest_data):n&&(!o||n>o)&&s.list.push(s.latest_data)}},unsub(a){p.send({event:"unsub",params:{channel:e.value}},a)},changeSymbol(a){l.unsub(()=>{}),s.symbols=a,s.interval&&l.getKline()},changeLang(a){s.lang=a},formatList(a){return a.map(n=>({id:`${s.symbols.symbol}_${s.interval}`,time:n.id*1e3,open:n.open,close:n.close,high:n.high,low:n.low,volume:n.vol}))},onPlusClick(a){K({title:"点击加号返回数据",message:JSON.stringify(a,null,4),type:"info"})}};return E(()=>{s.theme=i.value?"dark":"light"}),v(()=>{l.unsub(()=>{}),p==null||p.close()}),(a,n)=>{const o=u,r=m;return F(),d("section",null,[t("ul",S,[t("li",null,[$,y(o,{onChange:l.changeSymbol},null,8,["onChange"])]),t("li",null,[I,y(r,{lang:s.lang,onChange:l.changeLang},null,8,["lang","onChange"])])]),t("div",z,[y(B(T),{interval:s.interval,loading:s.loading,theme:s.theme,lang:s.lang,symbol:s.symbols.symbol,"price-precision":s.symbols.pricePrecision,"quantity-precision":s.symbols.quantityPrecision,list:s.list,"latest-data":s.latest_data,"load-more":l.loadMore,"library-path":s.library_path,"limit-size":s.page_size,watermark:"Kline","on-plus-click":l.onPlusClick},null,8,["interval","loading","theme","lang","symbol","price-precision","quantity-precision","list","latest-data","load-more","library-path","limit-size","on-plus-click"])])])}}});const V=C(N,[["__scopeId","data-v-f252fcae"]]),os=JSON.parse('{"title":"专业版","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/kline-tv.md","lastUpdated":1703486231000}'),M={name:"npm/kline-tv.md"},U=t("h1",{id:"专业版",tabindex:"-1"},[c("专业版 "),t("a",{class:"header-anchor",href:"#专业版","aria-label":'Permalink to "专业版"'},"​")],-1),O=t("a",{href:"https://cn.tradingview.com/widget/advanced-chart/",target:"_blank",rel:"noreferrer"},"Tradingview",-1),R=t("a",{href:"https://www.tradingview.com/charting-library-docs/",target:"_blank",rel:"noreferrer"},"官方文档",-1),J=t("h2",{id:"demo",tabindex:"-1"},[c("Demo "),t("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "Demo"'},"​")],-1),W=P("",22);function H(D,i,p,s,e,l){const a=L.ElTag,n=V;return F(),d("div",null,[U,t("p",null,[c("基于 "),O,c(),y(a,{round:"",small:""},{default:x(()=>[c("26.003")]),_:1}),c(" 开发，"),R,c("。")]),J,y(n),W])}const ps=C(M,[["render",H]]);export{os as __pageData,ps as default};
