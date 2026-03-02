# 学术主页（PhD 申请用）

简约、学术风格的单页主页，基于 Next.js App Router + Tailwind CSS。

> 说明：本仓库用于 `Reed2006.github.io` 用户主页，历史内容已合并保留。

## 本地运行

```bash
npm install
npm run dev
```

## 你需要改哪里

- 个人信息与内容：`src/profile.ts`
- 你的 CV：放到 `public/cv.pdf`（页面按钮默认链接到 `/cv.pdf`）
- 你的照片：放到 `public/photo.jpg` 或 `public/photo.png`，并在 `src/profile.ts` 里把 `photo.src` 改成对应路径（默认会用 `public/photo.svg` 占位图）

## 构建

```bash
npm run build
npm run start
```
