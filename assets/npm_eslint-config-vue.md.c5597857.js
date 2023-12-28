import{_ as s,o as n,c as a,V as l}from"./chunks/framework.810436bc.js";const F=JSON.parse('{"title":"@fe/eslint-config-vue","description":"","frontmatter":{},"headers":[],"relativePath":"npm/eslint-config-vue.md","lastUpdated":1703755254000}'),e={name:"npm/eslint-config-vue.md"},o=l(`<h1 id="fe-eslint-config-vue" tabindex="-1">@fe/eslint-config-vue <a class="header-anchor" href="#fe-eslint-config-vue" aria-label="Permalink to &quot;@fe/eslint-config-vue&quot;">​</a></h1><p><a href="https://zh-hans.eslint.org/" target="_blank" rel="noreferrer">eslint</a> 格式化扩展</p><h2 id="install" tabindex="-1">Install <a class="header-anchor" href="#install" aria-label="Permalink to &quot;Install&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">eslint</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@fe/eslint-config-vue</span></span></code></pre></div><h2 id="添加配置-eslint-config-js" tabindex="-1">添加配置 <code>eslint.config.js</code> <a class="header-anchor" href="#添加配置-eslint-config-js" aria-label="Permalink to &quot;添加配置 \`eslint.config.js\`&quot;">​</a></h2><div class="language-js"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> eslint </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">require</span><span style="color:#A6ACCD;">(</span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">@fe/eslint-config-vue</span><span style="color:#89DDFF;">&#39;</span><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">module.exports</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">eslint</span><span style="color:#A6ACCD;">(</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F07178;">ignores</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> [</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">**/charting_library.js</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">            </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">**/charting_library/*</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">        ]</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">},</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;font-style:italic;">// flat configs</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#A6ACCD;">)</span><span style="color:#89DDFF;">;</span></span></code></pre></div>`,6),p=[o];function t(c,r,i,D,y,C){return n(),a("div",null,p)}const d=s(e,[["render",t]]);export{F as __pageData,d as default};
