import{l as g}from"./chunks/base.6c74be14.js";import"./chunks/el-option.4ed993c7.js";import{d as v,u as E,a5 as B,l as k,a6 as q,k as x,o as e,c as y,C as t,J as r,b as T,E as A,F,R as u,D as m,S,U as w,_ as b,V as f}from"./chunks/framework.009e57ad.js";import{u as P}from"./chunks/index.6749d2a8.js";import{S as K}from"./chunks/Kline.vue_vue_type_style_index_0_scoped_1f26131b_lang.e8857780.js";import"./chunks/index.f954909e.js";import"./chunks/index.7e71f9e5.js";const C=d=>(S("data-v-401cf2f3"),d=d(),w(),d),I={class:"chart"},$={class:"mt-10px bg-amber/10 rd-10px p-20px"},L=C(()=>t("h4",null," 修改配置 ",-1)),z={class:"flex flex-row flex-wrap mb-12px gap-10px mt-6px"},N={class:"w-120px"},V=C(()=>t("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 时间间隔 ",-1)),R={class:"w-120px"},U=C(()=>t("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 语言 ",-1)),M={class:"w-120px"},O=C(()=>t("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 交易对 ",-1)),H={class:"w-120px"},J=C(()=>t("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 价格精度 ",-1)),G={class:"w-120px"},j=C(()=>t("p",{class:"m-0! text-12px lh-12px! mb-4px!"}," 数量精度 ",-1)),W=v({__name:"SimpleKline",setup(d){const h=[0,2,3,4],i=new P("wss://ws.meex.com/kline-api/ws",{name:"kline-ws",retry:100}),{isDark:_}=E(),s=B({loading:!1,theme:"dark",lang:"zh-CN",symbol:"BTCUSDT",list:[],sub_list:[],latest_data:null,interval:"60min",price_precision:2,quantity_precision:4,interval_options:["1min","5min","15min","30min","60min","4h","1day","1week","1month"],lang_options:["en-US","zh-CN","zh-TW","ja-JP","vi-VN","es-ES","ru-RU","tr-TR","pt-BR","fr-FR","th-TH","id-ID"],symbol_options:["BTCUSDT","ETHUSDT"]}),D=k(()=>`market_${s.symbol.toLowerCase()}_kline_${s.interval}`),o={init(){o.reqKline(),o.subKline()},reqKline(){s.loading=!0,s.sub_list=[],i.send({event:"req",params:{channel:D.value}},l=>{var n,p;if(s.loading=!1,l.success&&l.channel===D.value){const c=o.formatList(l.data);if(s.list.length){const a=(n=c.slice(-1)[0])==null?void 0:n.timestamp;((p=s.list[0])==null?void 0:p.timestamp)>a&&c.push(s.sub_list[0])}s.list=c}})},loadMore(l,n){l&&i.send({event:"req",params:{channel:D.value,endIdx:l/1e3,pageSize:100}},p=>{p.success&&n(o.formatList(p.data))})},subKline(){i.send({event:"sub",params:{channel:D.value}},l=>{if(l.success&&l.channel===D.value){const n=o.formatList([l.tick]);s.loading?s.sub_list=n:[s.latest_data]=n}})},unsub(l){i.send({event:"unsub",params:{channel:D.value}},l)},selectInterval(l){o.unsub(()=>{s.interval=l,o.init()})},changeSymbol(l){s.sub_list=[],o.unsub(()=>{s.symbol=l,o.init()})},formatList(l){return l.map(n=>({timestamp:n.id*1e3,open:n.open,close:n.close,high:n.high,low:n.low,volume:n.vol}))}};return o.init(),q(()=>{o.unsub(()=>{}),i.close()}),x(()=>{s.theme=_.value?"dark":"light"}),(l,n)=>{const p=g.ElOption,c=g.ElSelect;return e(),y(F,null,[t("div",I,[r(T(K),{loading:s.loading,theme:s.theme,lang:s.lang,list:s.list,"latest-data":s.latest_data,"load-more":o.loadMore,"price-precision":s.price_precision,"quantity-precision":s.quantity_precision,watermark:"Kline"},null,8,["loading","theme","lang","list","latest-data","load-more","price-precision","quantity-precision"])]),t("div",$,[L,t("div",z,[t("div",N,[V,r(c,{"model-value":s.interval,size:"small",onChange:o.selectInterval},{default:A(()=>[(e(!0),y(F,null,u(s.interval_options,a=>(e(),m(p,{key:a,label:`获取${a}数据`,value:a},null,8,["label","value"]))),128))]),_:1},8,["model-value","onChange"])]),t("div",R,[U,r(c,{"model-value":s.lang,size:"small",onChange:n[0]||(n[0]=a=>s.lang=a)},{default:A(()=>[(e(!0),y(F,null,u(s.lang_options,a=>(e(),m(p,{key:a,label:a,value:a},null,8,["label","value"]))),128))]),_:1},8,["model-value"])]),t("div",M,[O,r(c,{"model-value":s.symbol,size:"small",onChange:o.changeSymbol},{default:A(()=>[(e(!0),y(F,null,u(s.symbol_options,a=>(e(),m(p,{key:a,label:a,value:a},null,8,["label","value"]))),128))]),_:1},8,["model-value","onChange"])]),t("div",H,[J,r(c,{"model-value":s.price_precision,size:"small",onChange:n[1]||(n[1]=a=>s.price_precision=a)},{default:A(()=>[(e(),y(F,null,u(h,a=>r(p,{key:a,label:a,value:a},null,8,["label","value"])),64))]),_:1},8,["model-value"])]),t("div",G,[j,r(c,{"model-value":s.quantity_precision,size:"small",onChange:n[2]||(n[2]=a=>s.quantity_precision=a)},{default:A(()=>[(e(),y(F,null,u(h,a=>r(p,{key:a,label:a,value:a},null,8,["label","value"])),64))]),_:1},8,["model-value"])])])])],64)}}});const Q=b(W,[["__scopeId","data-v-401cf2f3"]]),rs=JSON.parse('{"title":"基础版vue组件","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/kline-simple.md","lastUpdated":1701080813000}'),X={name:"npm/kline-simple.md"},Y=f("",4),Z=f("",19);function ss(d,h,i,_,s,D){const o=Q;return e(),y("div",null,[Y,r(o),Z])}const Ds=b(X,[["render",ss]]);export{rs as __pageData,Ds as default};
