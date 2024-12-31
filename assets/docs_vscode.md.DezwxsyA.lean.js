import{_ as s,c as e,a3 as a,o as l}from"./chunks/framework.Ch6Llh6T.js";const k=JSON.parse('{"title":"VsCode","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"docs/vscode.md","filePath":"docs/vscode.md","lastUpdated":1735549586000}'),o={name:"docs/vscode.md"};function n(t,i,d,c,h,p){return l(),e("div",null,i[0]||(i[0]=[a(`<h1 id="vscode" tabindex="-1">VsCode <a class="header-anchor" href="#vscode" aria-label="Permalink to &quot;VsCode&quot;">​</a></h1><h2 id="项目配置" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置" aria-label="Permalink to &quot;项目配置&quot;">​</a></h2><p>根目录添加 <code>.vscode</code> 文件夹</p><h3 id="依赖扩展" tabindex="-1">依赖扩展 <a class="header-anchor" href="#依赖扩展" aria-label="Permalink to &quot;依赖扩展&quot;">​</a></h3><p>添加 <code>.vscode/extensions.json</code> 文件, 添加扩展 id，在扩展商店搜索<code>@recommended</code>安装推荐扩展。</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;recommendations&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">        &quot;dbaeumer.vscode-eslint&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="项目配置-1" tabindex="-1">项目配置 <a class="header-anchor" href="#项目配置-1" aria-label="Permalink to &quot;项目配置&quot;">​</a></h3><p>添加 <code>.vscode/settings.json</code> 文件</p><div class="language-json vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">json</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 展示字符长度标识线</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;editor.rulers&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: [</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        150</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    ],</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;scss.lint.unknownAtRules&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;ignore&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// scss @规则忽略</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 提示</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    &quot;editor.quickSuggestions&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: {</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;other&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;on&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;comments&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;on&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">,</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        &quot;strings&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">: </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;on&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h2 id="扩展" tabindex="-1">扩展 <a class="header-anchor" href="#扩展" aria-label="Permalink to &quot;扩展&quot;">​</a></h2><h3 id="提示" tabindex="-1">提示 <a class="header-anchor" href="#提示" aria-label="Permalink to &quot;提示&quot;">​</a></h3><ul><li><code>Better Comments</code>: 高亮注释 <code>*、!、TODO:、@param</code></li><li><code>Color Highlight</code>: 高亮颜色</li><li><code>Error Lens</code>: 突出显示代码错误</li><li><code>HTML CSS Support</code>: 适用于HTML的CSS 智能提示</li><li><code>CSS Variable Autocomplete</code>: 自动完成CSS变量支持CSS、SCSS、LESS、PostCSS、VueJS、ReactJS等</li><li><code>File Peek</code>: 跳转文件、查看定义</li><li><code>Image preview</code>: 展示使用图片预览</li><li><code>Import Cost</code>: 展示引入包大小</li><li><code>indent-rainbow</code>: 高亮缩进线颜色</li><li><code>IntelliSense for CSS class names in HTML</code>: 提示 class name</li><li><code>SVG</code>: svg 预览</li><li><code>Todo Tree</code>: 预览项目 TODO 生成的树</li><li><code>UnoCSS</code>: 样式自动提示</li><li><code>vscode-icons</code>: VSCode 图标</li></ul><h3 id="格式化" tabindex="-1">格式化 <a class="header-anchor" href="#格式化" aria-label="Permalink to &quot;格式化&quot;">​</a></h3><ul><li><code>Auto Rename Tag</code>: 自动补全重命名 html tag</li><li><code>ESLint</code>: 代码校验</li><li><code>EditorConfig for VS Code</code>: 使用项目里的<code>.editorconfig</code>文件规范编码风格</li><li><code>markdownlint</code>: 校验 markdwon 格式</li></ul><h3 id="功能" tabindex="-1">功能 <a class="header-anchor" href="#功能" aria-label="Permalink to &quot;功能&quot;">​</a></h3><ul><li><code>Bookmarks</code>: 添加书签</li><li><code>Code Runner</code>: 运行代码</li><li><code>Figma for VS Code</code>: Figma设计</li><li><code>Git Graph</code>: 查看存储库的Git图形，并从图形中执行Git操作。</li><li><code>Git History</code>: 查看git日志、文件历史记录、比较分支或提交</li><li><code>GitLens</code>: 在VS代码中增强Git</li><li><code>i18n Ally</code>: 翻译</li><li><code>open in browser</code>: 支持浏览器打开</li><li><code>Paste JSON as Code</code>: 生成 ts 类型</li><li><code>Remote-SSH</code>: 服务器管理</li><li><code>REST Client</code>: 接口请求</li><li><code>Vitest</code>: vitest支持</li><li><code>Draw.io Integration</code>: 流程图绘制</li></ul><h3 id="vue" tabindex="-1">vue <a class="header-anchor" href="#vue" aria-label="Permalink to &quot;vue&quot;">​</a></h3><ol><li><code>element-plus-vue</code>: Element Ui组件自动提示参数</li><li><code>Nuxtr</code>: Nuxt的扩展提供命令和工具</li><li><code>Vue-Official</code>: Vue的语言支持</li><li><code>Goto definition alias</code>: <code>Nuxt3</code>或<code>Vitesse</code>项目中，<code>cmd + 鼠标左键</code>或<code>转到定义</code>时重定向到定义源</li></ol>`,18)]))}const u=s(o,[["render",n]]);export{k as __pageData,u as default};
