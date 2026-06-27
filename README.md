 # 何德欢 - 机械设计作品集
 
 面向机器人/消费电子/新能源等科技制造企业的个人作品集网站。
 
 ## 网站结构
 
 | 区域 | 说明 |
 |------|------|
 | Hero | 标题 + 一句话定位 |
 | 核心能力 | 4 项工程能力卡片 |
 | 项目作品 | 3 个竞赛/毕业项目，可点击查看详情 |
 | 关于我 | 教育背景、获奖、技能 |
 | 联系方式 | 邮箱 + 简历下载 |
 
 ## 部署方式
 
 ### GitHub Pages 部署（推荐）
 
 1. 在 GitHub 上新建一个仓库
 2. 将 `F:\work\codex\` 下所有文件 push 到仓库的 `main` 分支
 3. 进入仓库 Settings → Pages → 选择 `main` 分支 `/` 根目录
 4. 等待几分钟，访问 `https://<你的用户名>.github.io/<仓库名>/`
 
 ### 本地预览
 
 ```bash
 cd F:\work\codex
 python -m http.server 3000
 # 浏览器访问 http://localhost:3000
 ```
 
 ## 如何添加项目图片
 
 将你的渲染图 / 实物照片放入对应文件夹：
 
 ```
 F:\work\codex\projects\
 ├── project-1-flying-dart\
 │   ├── cover.jpg       ← 项目封面图（建议 1200×800px）
 │   └── gallery\        ← 多张展示图
 ├── project-2-engineering\
 │   ├── cover.jpg
 │   └── gallery\
 └── project-3-wall-robot\
     ├── cover.jpg
     └── gallery\
 ```
 
 放置好图片后，更新 `index.html` 中对应项目封面图的引用路径。
 
 ## 技术栈
 
 - 纯原生 HTML + CSS + JavaScript
 - Lucide 图标库（CDN 引入）
 - 无框架依赖，可部署在任何静态托管平台
 
 ## 联系方式
 
 - 邮箱：3528034865@qq.com
 面向机器人/消费电子/新能源等科技制造企业的个人作品集网站。
 
 ## 网站结构
 
 | 区域 | 说明 |
 |------|------|
 | Hero | 标题 + 一句话定位 |
 | 核心能力 | 4 项工程能力卡片 |
 | 项目作品 | 3 个竞赛/毕业项目，可点击查看详情 |
 | 关于我 | 教育背景、获奖、技能、实习经历 |
 | 联系方式 | 邮箱 + 电话 + 简历下载 |
 
 ## 如何部署到 GitHub Pages
 
 ### 第一步：创建 GitHub 仓库
 
 1. 打开 https://github.com ，登录你的账号
 2. 点击右上角 "+" → "New repository"
 3. 仓库名填写：`portfolio`（或你喜欢的名字）
 4. 设为 **Public**（公开仓库才能免费启用 Pages）
 5. 不要勾选 "Add a README"（我们已经有 README 了）
 6. 点击 "Create repository"
 
 ### 第二步：上传文件（二选一）
 
 **方式 A：直接用 GitHub 网页上传（推荐，无需装 Git）**
 
 1. 在刚创建的空仓库页面，点击 **"uploading an existing file"** 链接
 2. 打开文件管理器窗口，进入 `F:\work\codex\`
 3. **全选**所有文件和文件夹（包括 `index.html`、`css/`、`js/`、`projects/`、`assets/`、`README.md`）
 4. 直接拖拽到 GitHub 的上传区域
 5. 滚动到底部，点击 **"Commit changes"**
 
 **方式 B：用 Git 命令上传（更专业）**
 
 ```bash
 # 安装 Git：https://git-scm.com/downloads
 
 cd F:\work\codex
 git init
 git add .
 git commit -m "初始化作品集"
 git branch -M main
 git remote add origin https://github.com/<你的用户名>/portfolio.git
 git push -u origin main
 ```
 
 ### 第三步：开启 GitHub Pages
 
 1. 在仓库页面点击 **Settings**（设置）
 2. 左侧菜单找到 **Pages**（"Code and automation" 分类下）
 3. **Branch** 选择 `main`，文件夹选择 `/ (root)`
 4. 点击 **Save**
 5. 等待 1-2 分钟，刷新页面
 6. 页面顶部会出现一行提示：`Your site is live at https://<你的用户名>.github.io/portfolio/`
 
 部署完成后，这个链接就可以直接发给面试官了。
 
 ### 后续更新
 
 如果要修改内容：
 
 1. 在本地修改 `F:\work\codex\` 里的文件
 2. 重新上传整个文件夹到 GitHub 仓库（覆盖旧文件）
 3. GitHub Pages 会在几分钟内自动更新
 
 ## 本地预览
 
 ```bash
 cd F:\work\codex
 python -m http.server 3000
 # 浏览器访问 http://localhost:3000
 ```
 
 ## 注意事项
 
 ### 图片过大怎么办
 
 目前项目图片是 SolidWorks 导出的 PNG 原图，体积较大（27MB~124MB）。部署后首次加载会较慢。建议：
 - 用 Windows 自带的"画图"打开 PNG 文件
 - 另存为 **JPEG** 格式（文件会缩小 10-20 倍）
 - 或者把图片宽度缩到 1920px 以内再上传
 
 ### 自定义域名
 
 如果有自己的域名，可以在 Pages 设置里绑定。
 
 ## 技术栈
 
 - 纯原生 HTML + CSS + JavaScript
 - Lucide 图标库（CDN 引入）
 - 无框架依赖，可部署在任何静态托管平台
 
 ## 联系方式
 
 - 邮箱：3528034865@qq.com
 - 电话：19232327977
