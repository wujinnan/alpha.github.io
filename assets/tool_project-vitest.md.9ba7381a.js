import{_ as s,o as a,c as o,V as n}from"./chunks/framework.810436bc.js";const d=JSON.parse('{"title":"配置测试","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"tool/project-vitest.md","lastUpdated":1683528362000}'),e={name:"tool/project-vitest.md"},t=n(`<h1 id="配置测试" tabindex="-1">配置测试 <a class="header-anchor" href="#配置测试" aria-label="Permalink to &quot;配置测试&quot;">​</a></h1><p>文档 <a href="https://cn.vitest.dev/guide/" target="_blank" rel="noreferrer">vitest</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">vitest</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vitest/ui</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@vitest/coverage-c8</span></span></code></pre></div><h2 id="添加运行命令到-package-json" tabindex="-1">添加运行命令到 package.json <a class="header-anchor" href="#添加运行命令到-package-json" aria-label="Permalink to &quot;添加运行命令到 package.json&quot;">​</a></h2><div class="language-json"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">test</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitest run -r packages</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">test:ui</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitest --ui --open</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C792EA;">coverage</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">vitest run -r packages --coverage</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span></code></pre></div>`,6),l=[t];function p(c,r,i,D,y,C){return a(),o("div",null,l)}const u=s(e,[["render",p]]);export{d as __pageData,u as default};
