# xiaoyu.work 个人知识库

这是一个基于 Docusaurus 2 构建的个人静态内容站，主要用于沉淀技术笔记、博客文章、AI 日报、阅读记录和个人内容页。项目最终会构建为静态文件，产物输出到 `build/` 目录，可部署到任意静态站点托管服务。

## 技术栈

- Docusaurus 2.4.3
- React 17
- TypeScript 4
- MD / MDX 内容写作
- Algolia DocSearch

项目要求 Node.js 18.x。当前依赖由 `package-lock.json` 和 `yarn.lock` 同时记录，日常建议固定使用一种包管理器，避免锁文件产生不必要的差异。

## 项目结构

```text
.
├── blog/                  # 默认博客内容，访问路径为 /blog
├── dailyclaw/             # 独立的 Claw 日报博客，访问路径为 /dailyclaw
├── docs/                  # 文档知识库主体，访问路径为 /docs
├── src/
│   ├── components/        # React 组件
│   ├── css/               # 全局样式
│   └── pages/             # 自定义页面，例如首页
├── static/                # 静态资源，构建后按根路径访问
├── tools/                 # 本地辅助脚本
├── docusaurus.config.js   # Docusaurus 站点配置
├── sidebars.js            # 文档侧边栏配置
├── package.json           # 依赖和脚本命令
└── build/                 # 生产构建产物
```

## 内容分区

### `docs/`

主知识库目录，用于存放技术碎片、算法、网络、JavaScript、Vue、Java、面试、读书笔记和个人页面等内容。侧边栏由 `sidebars.js` 自动生成。

### `blog/`

Docusaurus classic preset 自带的默认博客目录，适合放更完整的主题文章。

### `dailyclaw/`

额外注册的博客实例，配置在 `docusaurus.config.js` 的 `plugins` 中。它独立于默认博客，主要承载 Claw 日报、AI 简报和 OpenClaw 相关文章。

### `static/`

静态资源目录。放在这里的文件会以站点根路径暴露，例如：

```text
static/img/example.png -> /img/example.png
static/video/demo.mp4  -> /video/demo.mp4
```

### `src/pages/`

自定义页面目录。当前首页在 `src/pages/index.tsx`，用于展示知识碎片、技术博客、Claw 日报和阅读笔记入口。

## 脚本命令

以下命令均来自 `package.json` 的 `scripts` 字段。

### `npm run start`

启动本地开发服务器。

```bash
npm run start
```

常用于本地写文章、改页面、调样式。Docusaurus 会启动开发服务并支持热更新，大多数内容修改不需要手动重启。

### `npm run build`

生成生产环境静态文件。

```bash
npm run build
```

构建成功后，静态产物会输出到 `build/` 目录。部署前建议先执行该命令，因为它会检查路由、链接、MDX 编译和服务端渲染问题。

### `npm run serve`

本地预览生产构建产物。

```bash
npm run serve
```

该命令不会重新构建项目，而是直接预览 `build/` 目录。适合在 `npm run build` 后确认生产产物是否正常。

### `npm run typecheck`

执行 TypeScript 类型检查。

```bash
npm run typecheck
```

该命令调用 `tsc`，用于发现自定义 React 页面、组件和配置中的类型问题。它不负责构建站点，也不会生成静态产物。

### `npm run docusaurus`

直接调用 Docusaurus CLI。

```bash
npm run docusaurus
```

这是 Docusaurus 命令入口，通常用于查看 CLI 帮助或手动执行 Docusaurus 子命令。日常开发更常用 `start`、`build` 和 `serve`。

### `npm run swizzle`

自定义 Docusaurus 主题组件。

```bash
npm run swizzle
```

用于将 Docusaurus 内置主题组件复制到项目中进行深度定制。该操作会改变项目结构，使用前应确认确实需要覆盖默认主题行为。

### `npm run deploy`

执行 Docusaurus 部署流程。

```bash
npm run deploy
```

该命令通常用于 GitHub Pages 部署，会构建站点并推送到部署分支。相关仓库信息来自 `docusaurus.config.js` 中的 `organizationName` 和 `projectName`。

如果使用 SSH 部署：

```bash
USE_SSH=true npm run deploy
```

如果使用 HTTPS，并需要指定 GitHub 用户：

```bash
GIT_USER=<你的 GitHub 用户名> npm run deploy
```

### `npm run clear`

清理 Docusaurus 缓存和生成文件。

```bash
npm run clear
```

当遇到路由、侧边栏、MDX 编译缓存或本地开发服务状态异常时，可以先执行该命令，再重新 `npm run start` 或 `npm run build`。

### `npm run write-translations`

生成翻译文件。

```bash
npm run write-translations
```

用于 Docusaurus 国际化流程，会根据当前站点内容生成可翻译文本。当前项目主语言为中文，只有 `zh-Hans` locale，通常不需要频繁执行。

### `npm run write-heading-ids`

为 Markdown 标题补充稳定 ID。

```bash
npm run write-heading-ids
```

该命令会为文档标题写入显式 heading id，避免标题文本变化导致锚点链接失效。适合在大量整理文档标题后执行。

## 常用工作流

### 本地写作

```bash
npm run start
```

然后在 `docs/`、`blog/` 或 `dailyclaw/` 中新增或修改 Markdown / MDX 文件。

### 构建检查

```bash
npm run build
```

提交或部署前建议执行。若出现 broken links，需要检查页面中的链接是否指向真实存在的路由。

### 生产预览

```bash
npm run build
npm run serve
```

先构建，再预览 `build/` 目录，能更接近线上效果。

## 维护提示

- 修改导航入口：编辑 `docusaurus.config.js` 的 `themeConfig.navbar.items`。
- 修改文档侧边栏：编辑 `sidebars.js`。
- 新增知识库文章：放入 `docs/`。
- 新增默认博客文章：放入 `blog/`。
- 新增 Claw 日报：放入 `dailyclaw/`。
- 引用图片、音频、视频等资源：优先放入 `static/`，再通过根路径引用。
- 修改首页：编辑 `src/pages/index.tsx` 和 `src/pages/index.module.css`。
