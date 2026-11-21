# 个人网站 · 实训10 HTML 网页上传与测试

本站点是《网页设计专业 · 形考9/实训10》待部署的静态网站，包含登录页与个人介绍页，
以及此前实训完成的三个作品页面（登录表单、CSS 新闻列表、轮播图定时器）。

## 目录结构

```
site/
├─ index.html            个人介绍页（站点首页）
├─ login.html            登录页（登录后跳转到 index.html）
├─ app.css               自定义样式
├─ bootstrap/            Bootstrap 5.3.3 样式与脚本（本地引入）
│   ├─ bootstrap.min.css
│   └─ bootstrap.bundle.min.js
├─ images/               轮播图片与作品截图
├─ mywebside.html        作品：HTML 表单登录与验证
├─ news2.html / news2.css       作品：CSS 新闻列表
├─ slideshow.html / .css / .js  作品：轮播图定时器
├─ .nojekyll             关闭 Jekyll 处理，保证以纯静态站点发布
└─ README.md
```

## 上传到 GitHub Pages（Web 界面方式）

1. 登录 GitHub，新建仓库（Repository），仓库名建议 `personal-site`，可见性设为 Public。
2. 在仓库首页点击 **Add file → Upload files**，把 site 目录下的**全部文件与文件夹**拖入上传框，
   注意保持目录层级（`bootstrap/`、`images/` 需一并上传）。
3. 在下方填写提交说明（如 `上传个人网站`），点击 **Commit changes**。
4. 进入仓库 **Settings → Pages**：
   - Source 选择 `Deploy from a branch`；
   - Branch 选择 `main`（或 `master`），目录选择 `/ (root)`；
   - 点击 **Save**。
5. 等待 1—3 分钟，Pages 页面顶部会出现访问地址：
   `https://<用户名>.github.io/<仓库名>/`
6. 打开该地址检查首页、登录页与作品页是否都能正常访问。

## 上传到 GitHub Pages（Git 命令方式，需先安装 Git）

```bash
cd site
git init
git add .
git commit -m "上传个人网站"
git branch -M main
git remote add origin https://github.com/<用户名>/<仓库名>.git
git push -u origin main
```

推送完成后同样在 **Settings → Pages** 中选择 `main` 分支的 `/ (root)` 目录并保存。

## 自定义域名（可选）

1. 在域名服务商处添加 CNAME 记录，指向 `<用户名>.github.io`；
2. 在仓库 Settings → Pages 的 **Custom domain** 中填入域名并保存；
3. 仓库根目录会自动生成 CNAME 文件，也可手动添加。

## 测试清单

- [ ] 首页正常打开，导航栏、轮播图、卡片显示完整
- [ ] 登录页校验生效（用户名 3—16 位、密码不少于 6 位）
- [ ] 登录成功后跳转到 index.html
- [ ] 作品页链接可打开，图片与样式加载正常
- [ ] Chrome、Edge 显示一致
- [ ] 窗口宽度 1440 / 1024 / 768 / 540 像素下无横向滚动条
