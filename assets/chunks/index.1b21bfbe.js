import{d as G,i as J,l as g,q as R,o as m,D as T,E as N,a7 as P,C,n as v,b as a,K as x,O as Q,G as _,t as z,r as X,c as D,F as Y,ab as $,a3 as ee,J as K,T as te,ak as B,ar as oe,aR as O}from"./framework.009e57ad.js";import{c as L}from"./index.f954909e.js";import{k as ne,x as se,f as w,K as ie,T as V,n as A,_ as ae,F as le,E as I,y as q,L as re}from"./index.0bdd1095.js";const Z=["success","info","warning","error"],ce=ne({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:se},id:{type:String,default:""},message:{type:w([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:w(Function),default:()=>{}},onClose:{type:w(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...Z,""],default:""},zIndex:{type:Number,default:0}}),ue={destroy:()=>!0},fe=["id"],de=["textContent"],pe={key:0},me=["innerHTML"],ve=G({name:"ElNotification"}),ye=G({...ve,props:ce,emits:ue,setup(e,{expose:s}){const o=e,{ns:n,zIndex:r}=ie("notification"),{nextZIndex:f,currentZIndex:d}=r,{Close:c}=le,l=J(!1);let i;const u=g(()=>{const t=o.type;return t&&V[o.type]?n.m(t):""}),p=g(()=>o.type&&V[o.type]||o.icon),E=g(()=>o.position.endsWith("right")?"right":"left"),j=g(()=>o.position.startsWith("top")?"top":"bottom"),U=g(()=>({[j.value]:`${o.offset}px`,zIndex:d.value}));function S(){o.duration>0&&({stop:i}=L.useTimeoutFn(()=>{l.value&&h()},o.duration))}function F(){i==null||i()}function h(){l.value=!1}function W({code:t}){t===I.delete||t===I.backspace?F():t===I.esc?l.value&&h():S()}return R(()=>{S(),f(),l.value=!0}),L.useEventListener(document,"keydown",W),s({visible:l,close:h}),(t,b)=>(m(),T(te,{name:a(n).b("fade"),onBeforeLeave:t.onClose,onAfterLeave:b[1]||(b[1]=H=>t.$emit("destroy")),persisted:""},{default:N(()=>[P(C("div",{id:t.id,class:v([a(n).b(),t.customClass,a(E)]),style:x(a(U)),role:"alert",onMouseenter:F,onMouseleave:S,onClick:b[0]||(b[0]=(...H)=>t.onClick&&t.onClick(...H))},[a(p)?(m(),T(a(A),{key:0,class:v([a(n).e("icon"),a(u)])},{default:N(()=>[(m(),T(Q(a(p))))]),_:1},8,["class"])):_("v-if",!0),C("div",{class:v(a(n).e("group"))},[C("h2",{class:v(a(n).e("title")),textContent:z(t.title)},null,10,de),P(C("div",{class:v(a(n).e("content")),style:x(t.title?void 0:{margin:0})},[X(t.$slots,"default",{},()=>[t.dangerouslyUseHTMLString?(m(),D(Y,{key:1},[_(" Caution here, message could've been compromised, never use user's input as message "),C("p",{innerHTML:t.message},null,8,me)],2112)):(m(),D("p",pe,z(t.message),1))])],6),[[$,t.message]]),t.showClose?(m(),T(a(A),{key:0,class:v(a(n).e("closeBtn")),onClick:ee(h,["stop"])},{default:N(()=>[K(a(c))]),_:1},8,["class","onClick"])):_("v-if",!0)],2)],46,fe),[[$,l.value]])]),_:3},8,["name","onBeforeLeave"]))}});var ge=ae(ye,[["__file","/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);const k={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},M=16;let Ce=1;const y=function(e={},s=null){if(!L.isClient)return{close:()=>{}};(typeof e=="string"||B(e))&&(e={message:e});const o=e.position||"top-right";let n=e.offset||0;k[o].forEach(({vm:u})=>{var p;n+=(((p=u.el)==null?void 0:p.offsetHeight)||0)+M}),n+=M;const r=`notification_${Ce++}`,f=e.onClose,d={...e,offset:n,id:r,onClose:()=>{he(r,o,f)}};let c=document.body;q(e.appendTo)?c=e.appendTo:oe(e.appendTo)&&(c=document.querySelector(e.appendTo)),q(c)||(c=document.body);const l=document.createElement("div"),i=K(ge,d,B(d.message)?{default:()=>d.message}:null);return i.appContext=s??y._context,i.props.onDestroy=()=>{O(null,l)},O(i,l),k[o].push({vm:i}),c.appendChild(l.firstElementChild),{close:()=>{i.component.exposed.visible.value=!1}}};Z.forEach(e=>{y[e]=(s={})=>((typeof s=="string"||B(s))&&(s={message:s}),y({...s,type:e}))});function he(e,s,o){const n=k[s],r=n.findIndex(({vm:i})=>{var u;return((u=i.component)==null?void 0:u.props.id)===e});if(r===-1)return;const{vm:f}=n[r];if(!f)return;o==null||o(f);const d=f.el.offsetHeight,c=s.split("-")[0];n.splice(r,1);const l=n.length;if(!(l<1))for(let i=r;i<l;i++){const{el:u,component:p}=n[i].vm,E=Number.parseInt(u.style[c],10)-d-M;p.props.offset=E}}function be(){for(const e of Object.values(k))e.forEach(({vm:s})=>{s.component.exposed.visible.value=!1})}y.closeAll=be;y._context=null;const Se=re(y,"$notify");export{Se as E};
