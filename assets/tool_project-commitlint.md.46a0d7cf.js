import{_ as s,c as a,o,V as n}from"./chunks/framework.a9774312.js";const y=JSON.parse('{"title":"代码提交规范 commitlint","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"tool/project-commitlint.md","lastUpdated":1683528362000}'),t={name:"tool/project-commitlint.md"},l=n(`<h1 id="代码提交规范-commitlint" tabindex="-1">代码提交规范 commitlint <a class="header-anchor" href="#代码提交规范-commitlint" aria-label="Permalink to &quot;代码提交规范 commitlint&quot;">​</a></h1><p>文档 <a href="https://commitlint.js.org/#/" target="_blank" rel="noreferrer">commitlint</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">pnpm</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">-D</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@commitlint/cli</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">@commitlint/config-conventional</span></span></code></pre></div><h2 id="添加配置文件" tabindex="-1">添加配置文件 <a class="header-anchor" href="#添加配置文件" aria-label="Permalink to &quot;添加配置文件&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#82AAFF;">echo</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">module.exports = {</span></span>
<span class="line"><span style="color:#C3E88D;">    extends: [&#39;@commitlint/config-conventional&#39;]</span></span>
<span class="line"><span style="color:#C3E88D;">}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">commitlint.config.js</span></span></code></pre></div><h2 id="给husky添加commit-msg钩子" tabindex="-1">给husky添加commit-msg钩子 <a class="header-anchor" href="#给husky添加commit-msg钩子" aria-label="Permalink to &quot;给husky添加commit-msg钩子&quot;">​</a></h2><div class="language-bash"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">npx</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">husky</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">add</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">.husky/commit-msg</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">pnpm commitlint --edit </span><span style="color:#A6ACCD;">\\$</span><span style="color:#C3E88D;">1</span><span style="color:#89DDFF;">&quot;</span></span></code></pre></div>`,8),e=[l];function p(c,i,r,m,d,h){return o(),a("div",null,e)}const D=s(t,[["render",p]]);export{y as __pageData,D as default};
