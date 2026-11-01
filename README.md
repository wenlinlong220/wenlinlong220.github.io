# 温麟陇 · 个人主页

清爽的中英双语学术主页，部署于 GitHub Pages。无需安装依赖。

## 如何更新

在 GitHub 打开 `content.js`，点击编辑，修改 `zh`（中文）与 `en`（英文）中对应的文字，再提交即可。支持个人简介、研究方向、项目、荣誉经历、教育背景。请同时维护两种语言。

- 邮箱与社交链接：修改 `index.html`。
- 头像：目前沿用 GitHub 头像；可上传自己的照片并修改 `index.html` 的图片地址。
- 配色与布局：修改 `style.css`。
- 语言切换：`main.js`，默认中文，记住访客选择。

个人信息来自此前主页，发布前请核对时效性。未添加未经确认的论文、学位起止年份或其他履历。

## 部署

推送 main 分支后，GitHub Actions 自动发布。GitHub 仓库 Settings → Pages → Source 应选择 GitHub Actions。

本地预览：在文件夹内运行 `python -m http.server 8000`，访问 http://localhost:8000。

## 设计参考

参考 https://grasplab2022.github.io/ 的学术信息层级与侧栏布局；页面代码与文案为本主页重新编写，未使用参考站点的人物资料或图片。
