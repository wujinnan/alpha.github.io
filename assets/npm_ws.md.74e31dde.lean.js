import{d as D,o as c,c as r,_ as y,J as F,V as i}from"./chunks/framework.a9774312.js";var C=(l=>(l.req="req",l.sub="sub",l.unsub="unsub",l.ping="ping",l.pong="pong",l))(C||{});const p=l=>{let s=`${l.action}@${l.params.channel}`;return l.params.id&&(s+=`@${l.params.id}`),s};class A{constructor(s,n){this.callback={},this.queue=[],this.retry=0,this.url=s,this.options={name:"ws",connect:!0,retry:4,retryTime:2e3,heart:!1,heartTime:5e3,listenOnLine:!0,protocols:"",...n},this.options.connect&&this.init()}init(s){if(s&&(this.url=s),!this.url)throw new Error("socket链接地址不能为空");if(this.ws&&[0,1].includes(this.ws.readyState))return;const{protocols:n}=this.options;this.log(`${this.options.name}-开始连接`),this.ws=n?new WebSocket(this.url,n):new WebSocket(this.url),this.initEvent(),this.listenOnLine()}send(s,n){var o,e;if(((o=this.ws)==null?void 0:o.readyState)!==1){s.action!=="unsub"&&this.queue.push({data:s,callback:n});return}if(s.action==="unsub"){const t=p({...s,action:"sub"});if(!((e=this.callback[t])!=null&&e.length)){n({...s,success:!0});return}}const a=p(s);this.callback[a]||(this.callback[a]=[]),this.callback[a].push({data:s,callback:n}),this.callback[a].length===1&&(this.log(`发送数据
${JSON.stringify(s,null,2)}`),this.ws.send(JSON.stringify(s)))}close(){this.ws&&([2,3].includes(this.ws.readyState)||(this.ws.close(4e3),this.resetQueue()))}initEvent(){this.ws&&(this.ws.onopen=()=>{this.queue.length&&(this.queue.forEach(({data:s,callback:n})=>{this.send(s,n)}),this.queue=[]),this.options.heart&&this.heart({action:"pong",params:{channel:"pong"}})},this.ws.onmessage=s=>{let n={};try{n=JSON.parse(s.data)}catch(a){return this.log(`返回数据解析出错
${JSON.stringify(a,null,2)}`,"error")}this.heart(n),this.message(n)},this.ws.onclose=s=>{s.code!==4e3&&(this.resetQueue(),this.reconnect())})}heart(s){var n;if(this.options.heart)s.action==="pong"&&(this.heartTimer&&clearTimeout(this.heartTimer),this.heartTimer=setTimeout(()=>{var o;const a={data:Date.now,action:"ping"};(o=this.ws)==null||o.send(JSON.stringify(a)),this.checkHeart()},this.options.heartTime));else if(s.action==="ping"){const a={data:Date.now(),action:"pong"};(n=this.ws)==null||n.send(JSON.stringify(a))}}checkHeart(){this.checkHeartTimer&&clearTimeout(this.checkHeartTimer),this.checkHeartTimer=setTimeout(()=>{var s,n;((s=this.ws)==null?void 0:s.readyState)===1&&((n=this.ws)==null||n.close())},this.options.heartTime-1e3)}message(s){if(!s.action)return;const n=p(s),a=this.callback[n];if(this.log(`返回数据
${JSON.stringify(s,null,2)}`),!(!a||!a.length)){if(s.action==="unsub"){const o=p({...s,action:"sub"});delete this.callback[o]}a.forEach(o=>{typeof o.callback=="function"&&o.callback({...s,success:s.code===200})}),(s.action==="req"||s.action==="unsub")&&delete this.callback[n]}}resetQueue(){Object.keys(this.callback).forEach(s=>{this.callback[s].forEach(n=>this.queue.push(n))}),this.callback={}}reconnect(){navigator.onLine&&(this.retry+=1,this.log(`重试连接，第${this.retry}次`,"error"),this.retry<this.options.retry?setTimeout(()=>this.init(),this.options.retryTime):this.retry=0)}listenOnLine(){this.options.listenOnLine&&(window.addEventListener("online",()=>{this.log("断线重连"),this.init()},!1),window.addEventListener("offline",()=>{var s;((s=this.ws)==null?void 0:s.readyState)===1&&(this.log("断线断连","error"),this.close()),this.retry=0},!1))}log(s,n){if(sessionStorage.getItem("ws-debug")){const a={title:"background-color: #2c3e50; color: #fff; padding: 2px 6px; border-radius: 4px 0 0 4px;",info:"background-color: #3eaf7c; color: #fff; padding: 2px 6px; border-radius: 0 4px 4px 0;",error:"background-color: #f56c6c; color: #fff; padding: 2px 6px; border-radius: 0 4px 4px 0;"};console.info(`%c${this.options.name}-debug%c${s}`,a.title,a[n||"info"])}}}const d=D({__name:"Ws",setup(l){const s=new A("ws://s");return console.log(s),(n,a)=>(c(),r("div",null,"d"))}}),f=JSON.parse('{"title":"Socket","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/ws.md","lastUpdated":1683967463000}'),u={name:"npm/ws.md"},h=i("",6),m=i("",32);function b(l,s,n,a,o,e){const t=d;return c(),r("div",null,[h,F(t),m])}const k=y(u,[["render",b]]);export{f as __pageData,k as default};
