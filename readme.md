
### Deploying to GitHub Pages
```bash
git commit --allow-empty -m "trigger deploy"
git push origin main
```

Vite の dev サーバーを 一度停止して再起動：
```
npm run dev
```
### 状態管理用ライブラリ
```
npm install pinia pinia-plugin-persistedstate
```