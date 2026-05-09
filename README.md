# 个人主页

简约、学术风格的单页主页，基于 Next.js App Router + Tailwind CSS。

本项目 fork 自 [Reed2006.github.io](https://github.com/Reed2006/Reed2006.github.io)

## 本地运行

```bash
npm install
npm run dev
```

## 需要改哪里

- 个人信息与内容：`src/profile.ts`
- CV：放到 `public/cv.pdf`（页面按钮默认链接到 `/cv.pdf`）
- 照片：放到 `public/photo.jpg` 或 `public/photo.png`，并在 `src/profile.ts` 里把 `photo.src` 改成对应路径（默认会用 `public/photo.svg` 占位图）

## 构建

```bash
npm run build
npm run start
```
