import{_,d as f,r as w,o as u,c as t,a as e,F as a,b as o,n as c,e as p,t as n,f as B,p as k,g as v,h as F,i as r}from"./app.8bbbb3df.js";const y=d=>(k("data-v-6507bcca"),d=d(),v(),d),g=y(()=>e("h3",null,"Demo",-1)),m={key:0,class:"demo"},b={class:"fz14 flex-row items-center"},z=["onClick"],$={class:"desc ml6"},S={key:1,class:"demo"},N={class:"fz14 flex-row items-center"},I=["onClick"],V={class:"desc ml6"},L={key:2,class:"demo"},j={class:"fz14 flex-row items-center"},J=["onClick"],O={class:"desc ml6"},P={class:"flex-row"},U=y(()=>e("p",null,[e("code",null,"flex-row-center")],-1)),q={class:"ml40"},G=y(()=>e("p",null,[e("code",null,"flex-col-center")],-1)),H={key:3,class:"demo"},K={class:"fz14 flex-row items-center"},M=["onClick"],Q={class:"desc ml6"},R={class:"flex-row"},T=y(()=>e("p",null,[e("code",null,"flex-row-center")],-1)),W={class:"demo-view radius6 flex-row-center"},X={class:"ml40"},Y=y(()=>e("p",null,[e("code",null,"flex-col-center")],-1)),Z={class:"demo-view radius6 flex-col-center"},ss={key:4,class:"demo"},es={class:"fz14 flex-row items-center"},us=["onClick"],ts={class:"desc ml6"},ls={key:5,class:"demo"},ns={class:"fz14 flex-row items-center"},as=["onClick"],os={class:"desc ml6"},cs=f({__name:"Layout",props:{type:{type:String,default:""}},setup(d){const A=[{key:"flex-row",desc:"\u4E0D\u6362\u884C"},{key:"flex-row-flex-start",desc:"\u5DE6\u5BF9\u9F50"},{key:"flex-row-flex-end",desc:"\u53F3\u5BF9\u9F50"},{key:"flex-row-center",desc:"\u5C45\u4E2D"},{key:"flex-row-space-between",desc:"\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u90FD\u76F8\u7B49"},{key:"flex-row-space-around",desc:"\u6BCF\u4E2A\u9879\u76EE\u4E24\u4FA7\u7684\u95F4\u9694\u76F8\u7B49"}],h=[{key:"flex-col",desc:"\u4E0D\u6362\u884C"},{key:"flex-col-flex-start",desc:"\u9760\u4E0A"},{key:"flex-col-flex-end",desc:"\u9760\u4E0B"},{key:"flex-col-center",desc:"\u5C45\u4E2D"},{key:"flex-col-space-between",desc:"\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u9879\u76EE\u4E4B\u95F4\u7684\u95F4\u9694\u90FD\u76F8\u7B49"},{key:"flex-col-space-around",desc:"\u6BCF\u4E2A\u9879\u76EE\u4E24\u4FA7\u7684\u95F4\u9694\u76F8\u7B49"}],E=[{key:"flex-start",desc:"\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50"},{key:"flex-end",desc:"\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50"},{key:"center",desc:"\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50"},{key:"baseline",desc:"\u9879\u76EE\u7684\u7B2C\u4E00\u884C\u6587\u5B57\u7684\u57FA\u7EBF\u5BF9\u9F50"},{key:"stretch",desc:"\u5982\u679C\u9879\u76EE\u672A\u8BBE\u7F6E\u9AD8\u5EA6\u6216\u8BBE\u4E3Aauto\uFF0C\u5C06\u5360\u6EE1\u6574\u4E2A\u5BB9\u5668\u7684\u9AD8\u5EA6"}],D=[{key:"flex-nowrap",desc:"\u9ED8\u8BA4\uFF0C\u4E0D\u6362\u884C"},{key:"flex-wrap",desc:"\u6362\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0A\u65B9"},{key:"flex-wrap-reverse",desc:"\u6362\u884C\uFF0C\u7B2C\u4E00\u884C\u5728\u4E0B\u65B9"}],x=[{key:"stretch",desc:"(\u9ED8\u8BA4\u503C)\u8F74\u7EBF\u5360\u6EE1\u6574\u4E2A\u4EA4\u53C9\u8F74"},{key:"content-flex-start",desc:"\u4EA4\u53C9\u8F74\u7684\u8D77\u70B9\u5BF9\u9F50"},{key:"content-flex-end",desc:"\u4EA4\u53C9\u8F74\u7684\u7EC8\u70B9\u5BF9\u9F50"},{key:"content-center",desc:"\u4E0E\u4EA4\u53C9\u8F74\u7684\u4E2D\u70B9\u5BF9\u9F50"},{key:"content-space-between",desc:"\u4E0E\u4EA4\u53C9\u8F74\u4E24\u7AEF\u5BF9\u9F50\uFF0C\u8F74\u7EBF\u4E4B\u95F4\u7684\u95F4\u9694\u5E73\u5747\u5206\u5E03"},{key:"content-space-around",desc:"\u6BCF\u6839\u8F74\u7EBF\u4E24\u4FA7\u7684\u95F4\u9694\u90FD\u76F8\u7B49"}],l=w({row:"flex-row",col:"flex-col",items:"stretch",self:"stretch",wrap:"flex-nowrap",content:"stretch"});return(As,hs)=>(u(),t("section",null,[g,d.type==="row"?(u(),t("div",m,[e("ul",null,[(u(),t(a,null,o(A,s=>e("li",{key:s.key},[e("div",b,[e("span",{class:c(["btn cursor-pointer radius6 p4 pl6 pr6 lh16",{active:s.key===l.row}]),onClick:C=>l.row=s.key},n(s.key),11,z),e("span",$,n(s.desc),1)])])),64))]),e("div",{class:c(["demo-view radius6",l.row])},[(u(),t(a,null,o(3,s=>e("span",{key:s,class:"fz14 flex-row-center items-center",style:{height:"20px",width:"20px"}},n(s),1)),64))],2)])):p("",!0),d.type==="col"?(u(),t("div",S,[e("ul",null,[(u(),t(a,null,o(h,s=>e("li",{key:s.key},[e("div",N,[e("span",{class:c(["btn cursor-pointer radius6 p4 pl6 pr6 lh16",{active:s.key===l.col}]),onClick:C=>l.col=s.key},n(s.key),11,I),e("span",V,n(s.desc),1)])])),64))]),e("div",{class:c(["demo-view radius6",l.col])},[(u(),t(a,null,o(3,s=>e("span",{key:s,class:"fz14 flex-row-center items-center",style:{height:"20px",width:"20px"}},n(s),1)),64))],2)])):p("",!0),d.type==="items"?(u(),t("div",L,[e("ul",null,[(u(),t(a,null,o(E,s=>e("li",{key:s.key},[e("div",j,[e("span",{class:c(["btn cursor-pointer radius6 p4 pl6 pr6 lh16",{active:s.key===l.items}]),onClick:C=>l.items=s.key}," items-"+n(s.key),11,J),e("span",O,n(s.desc),1)])])),64))]),e("div",P,[e("div",null,[U,e("div",{class:c(["demo-view radius6 flex-row-center",`items-${l.items}`])},[(u(),t(a,null,o(3,s=>e("span",{key:s,class:"fz14 flex-row-center items-center",style:B({"min-height":s===2?"50px":"20px",width:"20px"})},n(s),5)),64))],2)]),e("div",q,[G,e("div",{class:c(["demo-view radius6 flex-col-center",`items-${l.items}`])},[(u(),t(a,null,o(3,s=>e("span",{key:s,class:"fz14 flex-row-center items-center",style:B({"min-width":s===2?"50px":"20px",height:"20px"})},n(s),5)),64))],2)])])])):p("",!0),d.type==="self"?(u(),t("div",H,[e("ul",null,[(u(),t(a,null,o(E,s=>e("li",{key:s.key},[e("div",K,[e("span",{class:c(["btn cursor-pointer radius6 p4 pl6 pr6 lh16",{active:s.key===l.self}]),onClick:C=>l.self=s.key}," self-"+n(s.key),11,M),e("span",Q,n(s.desc),1)])])),64))]),e("div",R,[e("div",null,[T,e("div",W,[(u(),t(a,null,o(3,s=>e("span",{key:s,class:c(["fz14 flex-row-center items-center",[s===2?`self-${l.self} highlight`:""]]),style:B([s===2?"min-height: 30px;":"height: 20px",{width:"20px"}])},n(s),7)),64))])]),e("div",X,[Y,e("div",Z,[(u(),t(a,null,o(3,s=>e("span",{key:s,class:c(["fz14 flex-row-center items-center",[s===2?`self-${l.self} highlight`:""]]),style:B([s===2?"min-width: 30px":"width: 20px",{height:"20px"}])},n(s),7)),64))])])])])):p("",!0),d.type==="wrap"?(u(),t("div",ss,[e("ul",null,[(u(),t(a,null,o(D,s=>e("li",{key:s.key},[e("div",es,[e("span",{class:c(["btn cursor-pointer radius6 p4 pl6 pr6 lh16",{active:s.key===l.wrap}]),onClick:C=>l.wrap=s.key},n(s.key),11,us),e("span",ts,n(s.desc),1)])])),64))]),e("div",{class:c(["demo-view radius6 flex-row",l.wrap])},[(u(),t(a,null,o(11,s=>e("span",{key:s,class:"fz14 flex-row-center items-center shrink0",style:{height:"20px",width:"20px"}},n(s),1)),64))],2)])):p("",!0),d.type==="content"?(u(),t("div",ls,[e("ul",null,[(u(),t(a,null,o(x,s=>e("li",{key:s.key},[e("div",ns,[e("span",{class:c(["btn cursor-pointer radius6 p4 pl6 pr6 lh16",{active:s.key===l.content}]),onClick:C=>l.content=s.key},n(s.key),11,as),e("span",os,n(s.desc),1)])])),64))]),e("div",{class:c(["demo-view radius6 flex-row flex-wrap",l.content])},[(u(),t(a,null,o(11,s=>e("span",{key:s,class:"fz14 flex-row-center items-center shrink0",style:{height:"20px",width:"20px"}},n(s),1)),64))],2)])):p("",!0)]))}});var i=_(cs,[["__scopeId","data-v-6507bcca"]]);const ds=r(`<h1 id="\u5E03\u5C40layout-scss\u4F7F\u7528\u6587\u6863" tabindex="-1">\u5E03\u5C40layout.scss\u4F7F\u7528\u6587\u6863 <a class="header-anchor" href="#\u5E03\u5C40layout-scss\u4F7F\u7528\u6587\u6863" aria-hidden="true">#</a></h1><h2 id="\u6A2A\u5411\u5E03\u5C40-flex-row" tabindex="-1">\u6A2A\u5411\u5E03\u5C40: flex-row <a class="header-anchor" href="#\u6A2A\u5411\u5E03\u5C40-flex-row" aria-hidden="true">#</a></h2><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">display: flex;</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-flow</span><span style="color:#A6ACCD;">: row nowrap;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* \u4E3B\u8F74\u5BF9\u5176\u65B9\u5F0F */</span></span>
<span class="line"><span style="color:#FFCB6B;">justify-content</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">flex-start</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">flex-end</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">space-between</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">space-around</span></span>
<span class="line"></span></code></pre></div>`,3),rs=r(`<h2 id="\u7EB5\u5411\u5E03\u5C40-flex-col" tabindex="-1">\u7EB5\u5411\u5E03\u5C40: flex-col <a class="header-anchor" href="#\u7EB5\u5411\u5E03\u5C40-flex-col" aria-hidden="true">#</a></h2><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">display: flex;</span></span>
<span class="line"><span style="color:#FFCB6B;">flex-flow</span><span style="color:#A6ACCD;">: column nowrap;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/* \u4E3B\u8F74\u5BF9\u5176\u65B9\u5F0F */</span></span>
<span class="line"><span style="color:#FFCB6B;">justify-content</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">flex-start</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">flex-end</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">space-between</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">space-around</span></span>
<span class="line"></span></code></pre></div>`,2),ps=r(`<h2 id="\u9879\u76EE\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F-items" tabindex="-1">\u9879\u76EE\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F: items- <a class="header-anchor" href="#\u9879\u76EE\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F-items" aria-hidden="true">#</a></h2><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">align-items</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">flex-start</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">flex-end</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> baseline </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> stretch</span></span>
<span class="line"></span></code></pre></div>`,2),Fs=r(`<h2 id="\u5355\u4E2A\u9879\u76EE\u5BF9\u9F50\u65B9\u5F0F-self" tabindex="-1">\u5355\u4E2A\u9879\u76EE\u5BF9\u9F50\u65B9\u5F0F: self- <a class="header-anchor" href="#\u5355\u4E2A\u9879\u76EE\u5BF9\u9F50\u65B9\u5F0F-self" aria-hidden="true">#</a></h2><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">align-self</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">flex-start</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">flex-end</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> baseline </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> stretch</span></span>
<span class="line"></span></code></pre></div>`,2),is=r(`<h2 id="\u8F74\u7EBF\u6362\u884C" tabindex="-1">\u8F74\u7EBF\u6362\u884C <a class="header-anchor" href="#\u8F74\u7EBF\u6362\u884C" aria-hidden="true">#</a></h2><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">flex-wrap</span><span style="color:#A6ACCD;">: nowrap </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> wrap </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">wrap-reverse</span></span>
<span class="line"></span></code></pre></div>`,2),Cs=r(`<h2 id="\u591A\u6839\u8F74\u7EBF\u7684\u5BF9\u9F50\u65B9\u5F0F-content" tabindex="-1">\u591A\u6839\u8F74\u7EBF\u7684\u5BF9\u9F50\u65B9\u5F0F: content=- <a class="header-anchor" href="#\u591A\u6839\u8F74\u7EBF\u7684\u5BF9\u9F50\u65B9\u5F0F-content" aria-hidden="true">#</a></h2><p>\u5982\u679C\u9879\u76EE\u53EA\u6709\u4E00\u6839\u8F74\u7EBF\uFF0C\u8BE5\u5C5E\u6027\u4E0D\u8D77\u4F5C\u7528</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">align-content</span><span style="color:#A6ACCD;">: </span><span style="color:#FFCB6B;">flex-start</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">flex-end</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">center</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">space-between</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">space-around</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">|</span><span style="color:#A6ACCD;"> stretch</span></span>
<span class="line"></span></code></pre></div>`,3),ys=r(`<h2 id="flex\u5176\u4ED6class" tabindex="-1">flex\u5176\u4ED6class <a class="header-anchor" href="#flex\u5176\u4ED6class" aria-hidden="true">#</a></h2><ol><li><p><code>flex1</code>: \u9879\u76EE\u53EF\u653E\u5927</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#A6ACCD;">flex: 1; // flex:&lt;number</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> 1 0</span></span>
<span class="line"></span></code></pre></div></li><li><p><code>shrink0</code>: \u7981\u6B62\u7F29\u653E</p><div class="language-css"><span class="copy"></span><pre><code><span class="line"><span style="color:#FFCB6B;">flex-shrink</span><span style="color:#A6ACCD;">: 0;</span></span>
<span class="line"></span></code></pre></div></li></ol><h2 id="class\u5217\u8868" tabindex="-1">class\u5217\u8868 <a class="header-anchor" href="#class\u5217\u8868" aria-hidden="true">#</a></h2><p>\u751F\u6210\u7684class\u5217\u8868\u53EF\u81EA\u884C\u6269\u5145</p><table><thead><tr><th>class</th><th>\u503C(n)</th><th>\u5BF9\u5E94\u5C5E\u6027</th><th>\u63CF\u8FF0</th></tr></thead><tbody><tr><td><code>align-[n]</code></td><td>top\u3001middle\u3001bottom</td><td><code>vertical-align</code></td><td>\u5782\u76F4\u5BF9\u9F50</td></tr><tr><td><code>text-align-[n]</code></td><td>left\u3001center\u3001right</td><td><code>text-align</code></td><td>\u6587\u5B57\u5BF9\u9F50</td></tr><tr><td><code>cursor-[n]</code></td><td>default\u3001pointer\u3001not-allowed\u3001progress</td><td><code>cursor</code></td><td>\u9F20\u6807\u6837\u5F0F</td></tr><tr><td><code>weight-[n]</code></td><td>normal\u3001bold\u3001400\u3001500\u3001600</td><td><code>font-weight</code></td><td>\u5B57\u4F53\u7C97\u7EC6</td></tr><tr><td><code>color-[n]</code></td><td>main</td><td><code>color</code></td><td>\u6587\u5B57\u989C\u8272</td></tr><tr><td><code>bg-[n]</code></td><td>main</td><td><code>background-color</code></td><td>\u80CC\u666F\u989C\u8272</td></tr><tr><td><code>radius[n]</code></td><td>4\u30016\u30018\u300112</td><td><code>border-radius</code></td><td>\u5706\u89D2</td></tr><tr><td><code>ellipsis</code></td><td>-</td><td>-</td><td>\u8D85\u51FA1\u884C\u663E\u793A...</td></tr><tr><td><code>ellipsis[n]</code></td><td>1\u30012\u30013</td><td>-</td><td>\u8D85\u51FA\u591A\u5C11\u884C\u663E\u793A...</td></tr><tr><td><code>m[n]</code></td><td>2\u30014\u30016\u30018\u300110\u300112\u300114\u300116\u300118\u300120\u300122\u300124\u300126\u300128\u300130\u300132\u300134\u300136\u300138\u300140</td><td><code>margin</code></td><td>4\u8FB9margin</td></tr><tr><td><code>p[n]</code></td><td>2\u30014\u30016\u30018\u300110\u300112\u300114\u300116\u300118\u300120\u300122\u300124\u300126\u300128\u300130\u300132\u300134\u300136\u300138\u300140</td><td><code>padding</code></td><td>4\u8FB9padding</td></tr><tr><td><code>mt[n]\u3001mr[n]\u3001mb[n]\u3001ml[n]</code></td><td>2\u30014\u30016\u30018\u300110\u300112\u300114\u300116\u300118\u300120\u300122\u300124\u300126\u300128\u300130\u300132\u300134\u300136\u300138\u300140</td><td><code>margin-[top\u3001right\u3001bottom\u3001left]</code></td><td>-</td></tr><tr><td><code>pt[n]\u3001pr[n]\u3001pb[n]\u3001pl[n]</code></td><td>2\u30014\u30016\u30018\u300110\u300112\u300114\u300116\u300118\u300120\u300122\u300124\u300126\u300128\u300130\u300132\u300134\u300136\u300138\u300140</td><td><code>padding-[top\u3001right\u3001bottom\u3001left]</code></td><td>-</td></tr><tr><td><code>fz[n]</code></td><td>2\u30014\u30016\u30018\u300110\u300112\u300114\u300116\u300118\u300120\u300122\u300124\u300126\u300128\u300130\u300132\u300134\u300136\u300138\u300140</td><td><code>font-size</code></td><td>\u5B57\u4F53</td></tr><tr><td><code>text-[n]</code></td><td>capitalize\u3001uppercase\u3001lowercase\u3001none</td><td><code>text-transform</code></td><td>\u6587\u5B57\u5927\u5C0F\u5199</td></tr><tr><td><code>break-word</code></td><td>-</td><td><code>word-break: break-word;</code></td><td>\u5355\u8BCD\u5185\u65AD\u53E5</td></tr></tbody></table>`,5),fs=JSON.parse('{"title":"\u5E03\u5C40layout.scss\u4F7F\u7528\u6587\u6863","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u6A2A\u5411\u5E03\u5C40: flex-row","slug":"\u6A2A\u5411\u5E03\u5C40-flex-row"},{"level":2,"title":"\u7EB5\u5411\u5E03\u5C40: flex-col","slug":"\u7EB5\u5411\u5E03\u5C40-flex-col"},{"level":2,"title":"\u9879\u76EE\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F: items-","slug":"\u9879\u76EE\u4EA4\u53C9\u8F74\u5BF9\u9F50\u65B9\u5F0F-items"},{"level":2,"title":"\u5355\u4E2A\u9879\u76EE\u5BF9\u9F50\u65B9\u5F0F: self-","slug":"\u5355\u4E2A\u9879\u76EE\u5BF9\u9F50\u65B9\u5F0F-self"},{"level":2,"title":"\u8F74\u7EBF\u6362\u884C","slug":"\u8F74\u7EBF\u6362\u884C"},{"level":2,"title":"\u591A\u6839\u8F74\u7EBF\u7684\u5BF9\u9F50\u65B9\u5F0F: content=-","slug":"\u591A\u6839\u8F74\u7EBF\u7684\u5BF9\u9F50\u65B9\u5F0F-content"},{"level":2,"title":"flex\u5176\u4ED6class","slug":"flex\u5176\u4ED6class"},{"level":2,"title":"class\u5217\u8868","slug":"class\u5217\u8868"}],"relativePath":"guide/class.md","lastUpdated":1665716039000}'),Bs={name:"guide/class.md"},Ds=f({...Bs,setup(d){return(A,h)=>(u(),t("div",null,[ds,F(i,{type:"row"}),rs,F(i,{type:"col"}),ps,F(i,{type:"items"}),Fs,F(i,{type:"self"}),is,F(i,{type:"wrap"}),Cs,F(i,{type:"content"}),ys]))}});export{fs as __pageData,Ds as default};
