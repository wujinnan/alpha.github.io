import{u as E,l as d}from"./chunks/index.79f11430.js";import"./chunks/el-button.4ed993c7.js";import{d as v,a5 as w,a6 as S,o as r,c as u,C as o,J as C,E as p,a as t,t as c,F as h,R as x,D as b,G as q,n as T,S as P,U as N,_,V as g}from"./chunks/framework.7a17cef1.js";import"./chunks/index.4b8145e4.js";const f=e=>(P("data-v-4c191370"),e=e(),N(),e),W={class:"flex mb-10px"},I=f(()=>o("span",{class:"text-red-600"}," ws状态: ",-1)),O=f(()=>o("span",{class:"ml-24px text-green-600"}," 连接耗时: ",-1)),U={class:"flex justify-between items-center"},V={class:"text-purple-700 font-bold"},$={class:"flex"},L={class:"text-green-700 text-14px !m-0px"},R="wss://ws.meex.com/kline-api/ws",z=v({__name:"Ws",setup(e){let F=0;const a=w({status:"关闭",connect_time:"--",sends:{overview:{title:"获取行情数据",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"req",params:{channel:"review"}}},ticker:{title:"获取最新行情数据",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",params:{channel:"market_btcusdt_ticker"}}},order_book:{title:"盘口挂单",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",params:{channel:"market_btcusdt_depth_step0"}}},deal_req:{title:"成交-req",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"req",params:{channel:"market_btcusdt_trade_ticker",top:100}}},deal_sub:{title:"成交-订阅",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",params:{channel:"market_btcusdt_trade_ticker",top:100}}},kline_req:{title:"kline-req",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"req",params:{channel:"market_btcusdt_kline_60min"}}},kline_sub:{title:"kline-sub",loading:!1,subing:!1,data:null,update:!1,timer:null,send:{event:"sub",params:{channel:"market_btcusdt_kline_60min"}}}}}),D=new E(R,{retry:100,onCreate:n=>{a.connect_time="--",a.status=n===0?"连接中":"重连中",F=Date.now()},onOpen:()=>{a.status="已连接",a.connect_time=String(Date.now()-F)},onClose:()=>{a.status="关闭"}}),y={send(n){const s=a.sends[n];s.loading=!0,s.send.event==="sub"&&(s.subing=!0),D.send(s.send,i=>{s.data=i,s.loading=!1,this.setUpdateStyle(s)})},unSub(n){const s=a.sends[n];s.send.event==="sub"&&(s.subing=!1),D.send({...s.send,event:"unsub"},()=>{s.data=null})},setUpdateStyle(n){n.data&&(n.update=!0,n.timer&&clearTimeout(n.timer),setTimeout(()=>{n.update=!1},300))}};return S(()=>{["ticker","order_book","deal_sub","kline_sub"].forEach(y.unSub),D.close()}),(n,s)=>{const i=d.ElText,m=d.ElButton,k=d.ElCard;return r(),u(h,null,[o("div",W,[I,C(i,{class:"!ml-10px font-bold",type:"primary"},{default:p(()=>[t(c(a.status),1)]),_:1}),O,C(i,{class:"!ml-10px font-bold",type:"primary"},{default:p(()=>[t(c(a.connect_time)+" ms ",1)]),_:1})]),(r(!0),u(h,null,x(Object.entries(a.sends),([A,l])=>(r(),b(k,{key:A,class:T(["box-card mt-8px",{"has-update":l.update}])},{header:p(()=>[o("div",U,[o("span",V,c(l.title),1),o("div",$,[l.send.event==="sub"&&l.subing?(r(),b(m,{key:0,type:"danger",onClick:B=>y.unSub(A)},{default:p(()=>[t(" 取消 ")]),_:2},1032,["onClick"])):q("",!0),C(m,{disabled:l.subing,loading:l.loading,type:"primary",onClick:B=>y.send(A)},{default:p(()=>[t(" 发送 ")]),_:2},1032,["disabled","loading","onClick"])])]),o("p",L," 发送数据: "+c(l.send),1)]),default:p(()=>[t(" "+c(l.data),1)]),_:2},1032,["class"]))),128))],64)}}});const M=_(z,[["__scopeId","data-v-4c191370"]]),Z=JSON.parse('{"title":"Socket","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/ws.md","lastUpdated":1698298881000}'),j={name:"npm/ws.md"},J=g("",4),K=g("",23);function G(e,F,a,D,y,n){const s=M;return r(),u("div",null,[J,C(s),K])}const ss=_(j,[["render",G]]);export{Z as __pageData,ss as default};
