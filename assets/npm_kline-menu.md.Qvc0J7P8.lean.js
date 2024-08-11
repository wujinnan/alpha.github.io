import{_ as B}from"./chunks/Select.eafu8-XS.js";import{u as v,M as D}from"./chunks/kline.D_mXtW50.js";import{i as A}from"./chunks/index.DWkN9pYn.js";import{d as m,a6 as _,o,c,j as g,I as p,k as a,a7 as q,F as b,_ as f,a5 as C}from"./chunks/framework.VWMa53FW.js";import"./chunks/index.BbVwo5FL.js";import"./chunks/config.C3IDp1Hm.js";const I={class:"flex"},H={class:"mt-10px"},S=m({__name:"KlineMenuTv",setup(u){const{lang:t,theme:k,langList:E,intervals:r,showIntervals:e,graph:h,fullscreen:n}=v("tv"),l=_({interval:"60",loading:!1}),s={toast(i){A.info(i,{autoClose:2e3,theme:k.value==="dark"?"light":"dark"})},selectIntervalHandle(i){l.interval=i,s.toast(`切换时间间隔事件: ${i}`)},editIntervalHandle(i){e.value=i,s.toast(`编辑时间间隔事件: ${JSON.stringify(i)}`)},showIndicatorHandle(){s.toast("点击指标事件")},setHandle(){s.toast("设置事件")},screenshotHandle(){s.toast("截图事件")},fullScreenHandle(){n.value=!n.value,s.toast("全屏事件")},selectGraphHandle(i){h.value=i,s.toast(`切换图表类型事件: 类型（${i}）`)}};return(i,d)=>{const F=B;return o(),c(b,null,[g("div",I,[p(F,{modelValue:a(t),"onUpdate:modelValue":d[0]||(d[0]=y=>q(t)?t.value=y:null),options:a(E),label:"多语言"},null,8,["modelValue","options"])]),g("div",H,[p(a(D),{type:"tv",theme:a(k),lang:a(t),interval:l.interval,intervals:a(r),"selected-intervals":a(e),graph:a(h),fullscreen:a(n),loading:l.loading,onSelectInterval:s.selectIntervalHandle,onEditInterval:s.editIntervalHandle,onShowIndicator:s.showIndicatorHandle,onSet:s.setHandle,onScreenshot:s.screenshotHandle,onFullScreen:s.fullScreenHandle,onSelectGraph:s.selectGraphHandle},null,8,["theme","lang","interval","intervals","selected-intervals","graph","fullscreen","loading","onSelectInterval","onEditInterval","onShowIndicator","onSet","onScreenshot","onFullScreen","onSelectGraph"])])],64)}}}),w={class:"flex"},x={class:"mt-10px"},T=m({__name:"KlineMenuSimple",setup(u){const{lang:t,theme:k,langList:E,intervals:r,showIntervals:e,graph:h,fullscreen:n}=v("simple"),l=_({interval:"60",loading:!1}),s={toast(i){A.info(i,{autoClose:2e3,theme:k.value==="dark"?"light":"dark"})},selectIntervalHandle(i){l.interval=i,s.toast(`切换时间间隔事件: ${i}`)},editIntervalHandle(i){e.value=i,s.toast(`编辑时间间隔事件: ${JSON.stringify(i)}`)},screenshotHandle(){s.toast("截图事件")},fullScreenHandle(){n.value=!n.value,s.toast("全屏事件")},selectGraphHandle(i){h.value=i,s.toast(`切换图表类型事件: 类型（${i}）`)}};return(i,d)=>{const F=B;return o(),c(b,null,[g("div",w,[p(F,{modelValue:a(t),"onUpdate:modelValue":d[0]||(d[0]=y=>q(t)?t.value=y:null),options:a(E),label:"多语言"},null,8,["modelValue","options"])]),g("div",x,[p(a(D),{type:"simple",theme:a(k),lang:a(t),interval:l.interval,intervals:a(r),"selected-intervals":a(e),graph:a(h),fullscreen:a(n),loading:l.loading,onSelectInterval:s.selectIntervalHandle,onEditInterval:s.editIntervalHandle,onScreenshot:s.screenshotHandle,onFullScreen:s.fullScreenHandle,onSelectGraph:s.selectGraphHandle},null,8,["theme","lang","interval","intervals","selected-intervals","graph","fullscreen","loading","onSelectInterval","onEditInterval","onScreenshot","onFullScreen","onSelectGraph"])])],64)}}}),j=JSON.parse('{"title":"Kline 菜单","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"npm/kline-menu.md","filePath":"npm/kline-menu.md","lastUpdated":1723287419000}'),P={name:"npm/kline-menu.md"},V=C("",5),M=C("",4),$=C("",13);function G(u,t,k,E,r,e){const h=T,n=S;return o(),c("div",null,[V,p(h),M,p(n),$])}const U=f(P,[["render",G]]);export{j as __pageData,U as default};
