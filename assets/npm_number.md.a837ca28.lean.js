import{d as E,a6 as b,w as h,o as p,c as t,C as o,F as d,R as x,n as v,t as D,a as e,a7 as r,a8 as y,_ as g,J as _,V as m}from"./chunks/framework.1bf78886.js";import{p as q,a as k,l as U,w as N,c as P,f as S,g as T,b as V,x as $,D as B,s as u,F as C,m as F,N as A}from"./chunks/index.574a0076.js";const j={class:"flex flex-wrap !list-none gap-4px"},w=["onClick"],I={style:{display:"flex"}},K={key:0},z={class:"result"},Q=E({__name:"Number",setup(f){const s=b({active:"plus",v1:"",v2:"",dp:"",rm:"",result:"",methods:["plus","minus","times","div","idiv","eq","gt","gte","lt","lte","toFixed","sd","toFormat","toFormatUnit"]}),c={clear(){s.v1="",s.v2="",s.dp="",s.rm=""},plus(){s.result=q(s.v1,s.v2)},minus(){s.result=k(s.v1,s.v2)},times(){s.result=U(s.v1,s.v2)},div(){s.result=N(s.v1,s.v2)},idiv(){s.result=P(s.v1,s.v2)},eq(){s.result=S(s.v1,s.v2)},gt(){s.result=T(s.v1,s.v2)},gte(){s.result=V(s.v1,s.v2)},lt(){s.result=$(s.v1,s.v2)},lte(){s.result=B(s.v1,s.v2)},toFixed(){const l=String(s.dp)===""||Number.isNaN(Number(s.dp))?void 0:Number(s.dp);s.rm!==""&&[0,1,7].includes(Number(s.rm))?s.result=u(s.v1,l,Number(s.rm)):s.result=u(s.v1,l)},sd(){const l=Number(s.dp),n=Number(s.rm);s.dp.replace(/\D/g,"")!==""&&l>=0?s.rm.replace(/\D/g,"")!==""&&[0,1,7].includes(n)?s.result=C(s.v1,l,n):s.result=C(s.v1,l):s.result=C(s.v1)},toFormat(){const l=Number(s.dp),n=Number(s.rm);s.dp.replace(/\D/g,"")!==""&&l>=0?s.rm.replace(/\D/g,"")!==""&&[0,1,7].includes(n)?s.result=F(s.v1,l,n):s.result=F(s.v1,l):s.result=F(s.v1)},toFormatUnit(){const l=Number(s.dp),n=Number(s.rm);s.dp.replace(/\D/g,"")!==""&&l>=0?s.rm.replace(/\D/g,"")!==""&&[0,1,7].includes(n)?s.result=A(s.v1,l,n):s.result=A(s.v1,l):s.result=A(s.v1)}};return h([()=>s.active,()=>s.v1,()=>s.v2,()=>s.dp,()=>s.rm],()=>{c[s.active]()}),(l,n)=>(p(),t("section",null,[o("ul",j,[(p(!0),t(d,null,x(s.methods,a=>(p(),t("li",{key:a,class:v({"is-active":a===s.active}),onClick:i=>s.active=a},D(a),11,w))),128)),o("li",{style:{"background-color":"red"},onClick:n[0]||(n[0]=(...a)=>c.clear&&c.clear(...a))}," clear ")]),o("div",I,[e(" n1: "),r(o("input",{"onUpdate:modelValue":n[1]||(n[1]=a=>s.v1=a),type:"text"},null,512),[[y,s.v1]]),["toFixed","toFormat","sd","toFormatUnit"].includes(s.active)?(p(),t("div",K,[e(" dp: "),r(o("input",{"onUpdate:modelValue":n[2]||(n[2]=a=>s.dp=a),maxLength:"2",type:"text"},null,512),[[y,s.dp]]),e(" rm: "),r(o("input",{"onUpdate:modelValue":n[3]||(n[3]=a=>s.rm=a),maxLength:"1",type:"text"},null,512),[[y,s.rm]])])):(p(),t(d,{key:1},[e(" n2: "),r(o("input",{"onUpdate:modelValue":n[4]||(n[4]=a=>s.v2=a),type:"text"},null,512),[[y,s.v2]])],64))]),o("div",z,[o("span",null,D(s.active),1),e(" 的结果： '"+D(s.result)+"' ",1)])]))}});const G=g(Q,[["__scopeId","data-v-2d197728"]]),W=JSON.parse('{"title":"Number","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/number.md","lastUpdated":1683528362000}'),L={name:"npm/number.md"},M=m("",3),O=m("",55);function R(f,s,c,l,n,a){const i=G;return p(),t("div",null,[M,_(i),O])}const X=g(L,[["render",R]]);export{W as __pageData,X as default};
