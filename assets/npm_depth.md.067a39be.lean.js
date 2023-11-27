import{l as Z}from"./chunks/base.6c74be14.js";import"./chunks/el-button.4ed993c7.js";import{d as rs,u as is,a5 as ys,q as Ds,a6 as Fs,w as Cs,o as os,c as ps,C as B,J as h,E as m,a as C,a7 as As,_ as es,V as hs}from"./chunks/framework.009e57ad.js";import{p as q,l as g,y as ss,N as as,w as P,a as F,m as M,f as _,s as T,S as ls}from"./chunks/index.7e71f9e5.js";import{u as ds}from"./chunks/index.6749d2a8.js";import"./chunks/index.f954909e.js";const ns=(c="dark")=>{const l=c==="light";return{grid:{top:0,bottom:50,gap:4,poition:"left"},buy:"#20b26c",sell:"#ef454a",lineWidth:2,buyGradient:["rgba(32, 178, 108, 0)","rgba(32, 178, 108, 0.2)"],sellGradient:["rgba(239, 69, 74, 0)","rgba(239, 69, 74, 0.2)"],tooltip:{padding:10,size:20,color:l?"black":"white",bg:l?"#fff":"#16171A",maskColor:"rgba(0, 0, 0, 0.02)"},separator:{size:2,color:l?"black":"white"},axis:{size:20,color:l?"black":"white",lineColor:l?"black":"white"}}},ts=c=>{const l=[];return c.forEach((a,s)=>{let n=a[1];s>0&&(n=F(n,l[s-1].total)),l.push({price:String(a[0]),quantity:String(a[1]),total:String(n)})}),l},W=(c,l,a,s,n,t=!1)=>{c.beginPath(),c.lineWidth=l,c.strokeStyle=a,t&&c.setLineDash([6,6]),c.moveTo(s[0],s[1]),c.lineTo(n[0],n[1]),c.stroke(),c.closePath()},E=(c,l,a,s,n=8)=>{c.beginPath(),c.fillStyle=s,c.arc(l,a,n,0,2*Math.PI,!0),c.fill(),c.closePath()},$=(c,l,a,s,n,t,p=20,e=8)=>{c.beginPath(),c.fillStyle=l,p&&(c.shadowBlur=p,c.shadowColor="rgba(0, 0, 0, 0.2)"),c.roundRect(a,s,n,t,e),c.fill(),c.closePath()},L=(c,l)=>c.measureText(l).width||0;class us{constructor(l,a){if(this.ready=!1,this.canvas=null,this.tooltip=null,this.ratio=2,this.ctx=null,this.tooltipCtx=null,this.pricePrecision=2,this.quantityPrecision=4,this.style=ns(),this.middle=0,this.max="",this.cW=0,this.cH=0,this.xTickWidth=120,this.left=120,this.buyList=[],this.sellList=[],this.lastPrice="0",this.requestAnimation=0,this.showTooltip=!1,this.tooltipAnimation=0,this.clientX=0,this.clientY=0,this.texts={buy:"Buy",sell:"Sell"},typeof l=="string"?this.el=document.querySelector(l):this.el=l,!this.el)throw new Error("el 获取出错~!~");a!=null&&a.theme&&this.setTheme(a.theme,!1),a!=null&&a.style&&this.setStyle(a.style,!1),this.init()}init(){const l=this.el.querySelectorAll("canvas");l!=null&&l.length&&l.forEach(a=>{this.el.removeChild(a)}),this.el.style.position="relative",this.canvas=document.createElement("canvas"),this.el.appendChild(this.canvas),this.ctx=this.canvas.getContext("2d"),this.tooltip=document.createElement("canvas"),this.el.appendChild(this.tooltip),this.tooltipCtx=this.tooltip.getContext("2d"),this.tooltip.style.position="absolute",this.tooltip.style.left="0",this.tooltip.style.top="0",this.resizeObserver(),this.listenMove()}resizeObserver(){new ResizeObserver(()=>{this.resize()}).observe(this.el)}setData(l,a){this.requestAnimation&&cancelAnimationFrame(this.requestAnimation),this.requestAnimation=requestAnimationFrame(()=>{const s=Math.min(l.length,a.length),n=l.slice(0,s).sort((p,e)=>Number(q(e[0],p[0]))),t=a.slice(0,s).sort((p,e)=>Number(q(p[0],e[0])));this.buyList=ts(n).reverse(),this.sellList=ts(t),this.ready&&this.updateDraw()})}draw(){if(!this.canvas||!this.ctx)return;const{ctx:l,style:a}=this;if(l.clearRect(0,0,this.canvas.width,this.canvas.height),!this.buyList.length)return;l.font=`${a.axis.size}px Verdana, Arial, Helvetica, sans-serif`,this.max=g(ss(this.buyList[0].total,this.sellList.slice(-1)[0].total),1.35);const s=this.getTickPrecision();this.xTickWidth=L(l,`${as(this.max,s)} -`)+18,this.left=this.style.grid.poition==="right"?0:this.xTickWidth,this.cW=this.canvas.width-this.xTickWidth-a.grid.gap*2-a.separator.size,this.middle=(this.canvas.width-this.xTickWidth)/2;const n=P(this.cW,2*this.buyList.length);this.drawBuy(n),this.drawSell(n),this.drawGrid(),this.drawXTick(s),this.drawYTick()}drawBuy(l){const{ctx:a,style:s}=this,n=this.left+s.lineWidth/2;a&&(a.beginPath(),a.moveTo(n,this.cH),a.strokeStyle=s.buy,a.lineWidth=s.lineWidth,this.buyList.forEach((t,p)=>{const e=F(n,g(l,p)),o=Number(F(e,l)),r=this.matchX(this.buyList[p].total);a.lineTo(Number(e),r),a.lineTo(o,r),p===this.buyList.length-1&&a.lineTo(o,this.cH)}),a.stroke(),this.drawArea(n,n,s.buyGradient),a.closePath())}drawSell(l){const{ctx:a,style:s}=this,n=F(this.middle,this.left),t=Number(F(n,s.grid.gap));a&&(a.beginPath(),a.moveTo(t,this.cH),a.strokeStyle=s.sell,a.lineWidth=s.lineWidth,this.sellList.forEach((p,e)=>{const o=F(t,g(l,e)),r=Number(F(o,l)),i=this.matchX(this.sellList[e].total);a.lineTo(Number(o),i),a.lineTo(r,i),e===this.sellList.length-1&&a.lineTo(r,this.cH)}),a.stroke(),this.drawArea(t,t,s.sellGradient),a.closePath())}drawGrid(){const{ctx:l,style:a}=this,{top:s}=a.grid;if(!l||!this.canvas)return;const n=this.left+a.lineWidth/2;let t=n;const p=a.grid.poition==="right";p&&(t=this.canvas.width-this.xTickWidth),[{color:a.axis.lineColor,width:a.lineWidth,from:[t,this.cH],to:[t,s]},{color:a.separator.color,width:a.separator.size,from:[this.middle+this.left,this.cH],to:[this.middle+this.left,s]},{color:a.axis.lineColor,width:a.lineWidth,from:[n,this.cH],to:[p?t:this.canvas.width,this.cH]}].forEach(e=>{W(l,e.width,e.color,e.from,e.to)})}drawXTick(l){const{ctx:a,canvas:s,style:n,xTickWidth:t}=this;if(!a||!s)return;const p=M(P(this.max,6),l+2,0),e=n.grid.poition==="right",o=e?s.width-t:t;let r=1;for(a.fillStyle=n.axis.color,a.textAlign=e?"left":"right";r<6;){const i=g(p,r),y=this.matchX(i),A=as(i,l),d=e?`- ${A}`:`${A} -`;a.fillText(d,o,y),r+=1}}drawYTick(l=!1){const{ctx:a,canvas:s,style:n,left:t}=this;if(!a||!s||!this.buyList.length)return;const p=this.middle/2,e=n.lineWidth/2;let o=[{x:t+e,side:"buy",align:"left"},{x:p+t,side:"buy",align:"center"},{x:this.middle+t,price:_(this.lastPrice,0)?this.lastPrice:this.buyList.slice(-1)[0].price,side:"buy",align:"center"},{x:p*3+t,side:"sell",align:"center"},{x:s.width-(n.grid.poition==="right"?this.xTickWidth:e),side:"sell",align:"right"}];a.fillStyle=n.axis.color;const r=L(a,T(this.sellList[0].price,this.pricePrecision));l?(o=o.filter((i,y)=>y===2),a.clearRect(this.middle+t-r/2,this.cH+12,r,n.axis.size)):(r*1.7>this.cW/4||this.buyList.length<2)&&(o=o.filter((i,y)=>![1,3].includes(y))),o.forEach(i=>{var d,x;const y=this.matchY(i.x,i.side);let A=i.price||"0.00";a.textAlign=i.align,!i.price&&y>=0&&(A=i.side==="buy"?(d=this.buyList[y])==null?void 0:d.price:(x=this.sellList[y])==null?void 0:x.price),a.fillText(`${T(A||"0.00",this.pricePrecision)}`,i.x,this.cH+10+n.axis.size),W(a,2,n.axis.lineColor,[i.x,this.cH+2],[i.x,this.cH+10])})}drawArea(l,a,s){if(this.ctx){const n=this.ctx.createLinearGradient(l,this.cH,a,170);n.addColorStop(1,s[1]),n.addColorStop(0,s[0]),this.ctx.fillStyle=n,this.ctx.fill()}}drawTooltip(){const{tooltip:l,tooltipAnimation:a,tooltipCtx:s,showTooltip:n,clientX:t,clientY:p,middle:e,style:o,left:r,buyList:i,sellList:y,quantityPrecision:A,texts:d,xTickWidth:x}=this;a&&cancelAnimationFrame(a),this.tooltipAnimation=requestAnimationFrame(()=>{if(!s||!l||(s.clearRect(0,0,l.width,l.height),!n))return;const D=t<e+r-o.grid.gap,v=t>e+r+o.grid.gap,w=this.matchY(t,D?"buy":"sell");if(!D&&!v||!i[w])return;s.font=`${o.tooltip.size}px Verdana, Arial, Helvetica, sans-serif`;const u=8,S=D?i[w]:i[i.length-w-1],z=v?y[w]:y[i.length-w-1];let H="0.00";const R=`${d.buy}: ${T(S.total,A)}`,X=`${d.sell}: ${T(z.total,A)}`,cs=ss(L(s,R),L(s,X)),Y=Number(F(F(cs,o.tooltip.padding*2),u*2+10)),N=o.tooltip.padding*2+o.tooltip.size*3+24,V=D?this.clientX+20:this.clientX-Y-20,I=p>this.cH-N-o.lineWidth?this.cH-N-o.lineWidth:p,O=o.grid.poition==="left"?x:-x,f=D?t:l.width-t+O,b=v?t:l.width-t+O,J=this.matchX(S.total),U=this.matchX(z.total);D&&(H=M(g(P(ls(q(S.price,this.lastPrice)),this.lastPrice),100),2)),v&&(H=M(g(P(ls(q(z.price,this.lastPrice)),this.lastPrice),100),2)),E(s,f,J,o.buyGradient[1],12),E(s,f,J,o.buy),W(s,o.lineWidth,o.buy,[f,o.grid.top],[f,this.cH+10],!0),$(s,o.tooltip.maskColor,r,o.grid.top,f-r,this.cH,0,0),this.drawPriceRect(f,S.price),E(s,b,U,o.sellGradient[1],12),E(s,b,U,o.sell),W(s,o.lineWidth,o.sell,[b,o.grid.top],[b,this.cH+10],!0),$(s,o.tooltip.maskColor,b,o.grid.top,f-r,this.cH,0,0),this.drawPriceRect(b,z.price),$(s,o.tooltip.bg,V,I,Y,N);const j=I+o.tooltip.padding+o.tooltip.size/2,G=j+o.tooltip.size+12,K=G+o.tooltip.size+12,k=V+o.tooltip.padding,Q=D?o.buy:o.sell;s.textAlign="left",s.textBaseline="middle",s.fillStyle=Q,s.fillText(`${H}%`,k,j),E(s,k+u,G-1,Q,u),s.fillStyle=o.tooltip.color,s.fillText(D?R:X,k+u*2+10,G),E(s,k+u,K-1,v?o.buy:o.sell,u),s.fillStyle=o.tooltip.color,s.fillText(D?X:R,k+u*2+10,K)})}drawPriceRect(l,a){if(!this.tooltipCtx||!this.tooltip)return;const s=T(a,this.pricePrecision),n=L(this.tooltipCtx,s)+10;let t=l-n/2;const p=this.style.axis.size+8,e=this.tooltip.width-n/2,o=this.style.grid.poition==="right";t<this.left?t=this.left:l>(o?e-this.xTickWidth:e)&&(t=this.tooltip.width-n,o&&(t-=this.xTickWidth)),$(this.tooltipCtx,"rgb(76, 82, 94)",t,this.cH+10,n,p,0,4),this.tooltipCtx.fillStyle="#fff",this.tooltipCtx.fillText(s,t+5,this.cH+10+p/2)}matchY(l,a){const{gap:s}=this.style.grid,n=this.left+this.middle+s+this.style.separator.size,t=a==="sell"?n:this.left;return Math.floor((l-t)*this.buyList.length/(this.cW/2))}matchX(l){const a=g(P(l,this.max),this.cH);return Math.round(Number(q(this.cH,a)))}updateDraw(){this.draw(),this.showTooltip&&this.drawTooltip()}getTickPrecision(){let l=this.quantityPrecision;return _(this.max,1e3)?l=2:_(this.max,10)?l=0:_(this.max,1)?l=1:_(this.max,.1)&&(l=2),l}listenMove(){this.tooltip&&(this.tooltip.addEventListener("mousemove",this.mousemove.bind(this),!1),this.tooltip.addEventListener("mouseout",this.mouseout.bind(this),!1))}mousemove(l){if(!this.tooltip)return;this.clientX=l.offsetX*this.ratio,this.clientY=l.offsetY*this.ratio;const a=this.style.grid.poition==="right"?this.tooltip.width-this.xTickWidth:this.tooltip.width;this.showTooltip=this.clientX>this.left&&this.clientX<a,this.drawTooltip()}mouseout(){this.showTooltip=!1,this.clientX=0,this.clientY=0,this.drawTooltip()}updateLastPrice(l){this.lastPrice=l,this.drawYTick(!0)}setPrecision(l=2,a=4){this.pricePrecision=l,this.quantityPrecision=a,this.buyList.length&&this.updateDraw()}setTheme(l,a=!0){this.style=ns(l||"dark"),a&&this.updateDraw()}getStyle(){return this.style}setStyle(l,a=!0){this.style={...this.style,...l},a&&this.updateDraw()}resize(){if(this.ready=!0,this.canvas){const{width:l,height:a}=this.el.getBoundingClientRect();[this.canvas,this.tooltip].forEach(s=>{s&&(s.style.width=`${l}px`,s.style.height=`${a}px`,s.width=l*this.ratio,s.height=a*this.ratio)}),this.cH=this.canvas.height-this.style.grid.bottom}this.buyList.length&&this.updateDraw()}setLang(l){this.texts=l,this.drawTooltip()}}const fs={class:"flex flex-row flex-wrap mb-12px gap-10px"},ms=rs({__name:"Depth",setup(c){const{isDark:l}=is(),a=new ds("wss://ws.meex.com/kline-api/ws"),s=ys({el:null,chart:null,loading:!1,active:0,buys:[],sells:[],change_style:!1,modified:!1}),n={init(){s.change_style=!1,s.active=0,s.modified=!1,s.chart=new us(s.el,{theme:l.value?"dark":"light"}),n.send()},send(){s.loading=!0,a.send({event:"sub",params:{channel:"market_btcusdt_depth_step0"}},t=>{s.loading=!1,t.success&&(s.sells=t.tick.asks,s.buys=t.tick.buys,n.updateData())})},unSend(t){a==null||a.send({event:"unsub",params:{channel:"market_btcusdt_depth_step0"}},p=>{p.success&&(t==null||t())})},updateData(){var t;n.updateLastPrice(),(t=s.chart)==null||t.setData(s.buys,s.sells)},setBig(){s.modified=!0,s.active=1,n.unSend(()=>{s.buys=[[200000.69,1000.0004],[300000.72,2000.0006],[400000.3,60.999]],s.sells=[[200001.6329,1000.0005],[300001.72,200.0006],[400001.3,60.999]],n.updateData()})},onSend(){s.active=0,n.send()},changeStyle(){var t;s.change_style=!0,s.modified=!0,(t=s.chart)==null||t.setStyle({buy:"#713f12",sell:"#701a75",buyGradient:["#fef08a","#a16207"],sellGradient:["#f5d0fe","#a21caf"],grid:{poition:"right",top:0,bottom:50,gap:4},separator:{size:2,color:"#15803d"},axis:{size:20,color:"#15803d",lineColor:"#15803d"}})},updateLastPrice(){var t;(t=s.chart)==null||t.updateLastPrice(String(Math.random()*1e4))}};return Ds(()=>{n.init()}),Fs(()=>{n.unSend()}),Cs(()=>l.value,t=>{var p;(p=s.chart)==null||p.setTheme(t?"dark":"light")},{immediate:!0}),(t,p)=>{const e=Z.ElButton,o=Z.ElLoadingDirective;return os(),ps("section",null,[B("div",fs,[h(e,{size:"small",type:"info",class:"bg-yellow! border-color-yellow! hover-bg-yellow/70! hover-border-color-yellow/70! disabled:bg-yellow/70!",disabled:!s.modified,onClick:n.init},{default:m(()=>[C(" 初始化 ")]),_:1},8,["disabled","onClick"]),h(e,{size:"small",type:"primary",disabled:s.active===0,onClick:n.onSend},{default:m(()=>[C(" 获取ws数据 ")]),_:1},8,["disabled","onClick"]),h(e,{size:"small",type:"success",disabled:s.active===1,onClick:n.setBig},{default:m(()=>[C(" 测试大数 ")]),_:1},8,["disabled","onClick"]),h(e,{size:"small",type:"warning",disabled:s.change_style,onClick:n.changeStyle},{default:m(()=>[C(" 修改主题 ")]),_:1},8,["disabled","onClick"]),h(e,{size:"small",type:"danger",onClick:p[0]||(p[0]=()=>{s.modified=!0,n.updateLastPrice()})},{default:m(()=>[C(" 更新成交价 ")]),_:1}),h(e,{size:"small",type:"info",onClick:p[1]||(p[1]=()=>{var r;(r=s.chart)==null||r.setPrecision(8,8),s.modified=!0})},{default:m(()=>[C(" 设置精度 ")]),_:1}),h(e,{size:"small",type:"info",class:"bg-fuchsia! border-color-fuchsia!",onClick:p[2]||(p[2]=()=>{var r;(r=s.chart)==null||r.setLang({buy:"买",sell:"卖"}),s.modified=!0})},{default:m(()=>[C(" 更新tooltip买/卖文本 ")]),_:1})]),As(B("div",{ref:r=>s.el=r,class:"bg-gray-400/10 h-300px rd-10px"},null,512),[[o,s.loading]])])}}});const gs=es(ms,[["__scopeId","data-v-0836b500"]]),Ls=JSON.parse('{"title":"深度图","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/depth.md","lastUpdated":1698303025000}'),bs={name:"npm/depth.md"},Es=B("h1",{id:"深度图",tabindex:"-1"},[C("深度图 "),B("a",{class:"header-anchor",href:"#深度图","aria-label":'Permalink to "深度图"'},"​")],-1),Bs=B("h2",{id:"demo",tabindex:"-1"},[C("Demo "),B("a",{class:"header-anchor",href:"#demo","aria-label":'Permalink to "Demo"'},"​")],-1),xs=hs("",52);function vs(c,l,a,s,n,t){const p=gs;return os(),ps("div",null,[Es,Bs,h(p),xs])}const Ss=es(bs,[["render",vs]]);export{Ls as __pageData,Ss as default};
