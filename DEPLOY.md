# 部署到另一個 GitHub 帳號的 GitHub Pages

網站網址會是：`https://soiree-hk.github.io/soiree/`

## 方法一：GitHub Actions（推薦）

### 步驟 1 — 在另一個帳號建立 repo

1. 登入您的**另一個** GitHub 帳號
2. 建立新 repository，名稱必須是 **`soiree`**
3. 設為 Public（GitHub Pages 免費版需要）

### 步驟 2 — 推送程式碼

在本機終端機執行（將 `OTHER_USERNAME` 換成另一個帳號的使用者名稱）：

```bash
cd "/Users/jeffreykam/Cursor projects/Temp/soiree-website"

git init
git add .
git commit -m "Initial SOIRÉE website replica"

git branch -M main
git remote add origin https://github.com/soiree-hk/soiree.git
git push -u origin main
```

推送時會要求登入——請使用**另一個帳號**的帳密或 Personal Access Token。

### 步驟 3 — 啟用 GitHub Pages

1. 到 `https://github.com/OTHER_USERNAME/soiree/settings/pages`
2. **Source** 選擇 **GitHub Actions**
3. 推送 `main` 後，Actions 會自動 build 並部署
4. 幾分鐘後網站上線

---

## 方法二：手動用 gh-pages 分支

```bash
npm install
# 編輯 package.json 的 deploy script，把 YOUR_USERNAME 改成另一個帳號
npm run deploy
```

然後到 repo Settings → Pages → Source 選 **Deploy from branch** → 分支選 `gh-pages` → `/ (root)`

---

## 切換 GitHub 帳號登入

若本機已登入自己的帳號，推送前可先切換：

```bash
# 使用 GitHub CLI
gh auth logout
gh auth login
# 選擇另一個帳號登入

# 或使用 HTTPS + Personal Access Token
git remote set-url origin https://OTHER_USERNAME@github.com/OTHER_USERNAME/soiree.git
```

在另一個帳號建立 Token：Settings → Developer settings → Personal access tokens → 勾選 `repo` 權限。

---

## 本機預覽（含 /soiree/ 路徑）

```bash
npm run build
npm run preview
```

開啟 `http://localhost:4173/soiree/`
