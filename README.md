# personal-calendar-oauth
# 個人日曆同步工具｜OAuth 公開說明網站

這是可直接部署至 GitHub Pages 的靜態網站，包含 Google OAuth 所需的三個公開頁面：

- `index.html`：應用程式首頁
- `privacy.html`：隱私權政策
- `terms.html`：服務條款

網站不使用建置工具或第三方 JavaScript，直接上傳即可。

## 部署到 GitHub Pages

1. 在 GitHub 建立一個 **Public** repository，例如 `personal-calendar-oauth`。
2. 將此目錄中的全部檔案上傳到 repository 根目錄。
3. 開啟 repository 的 **Settings → Pages**。
4. 在 **Build and deployment** 選擇：
   - Source：`Deploy from a branch`
   - Branch：`main`
   - Folder：`/(root)`
5. 儲存並等待 GitHub Pages 顯示公開網址。

若 GitHub 帳號是 `USERNAME`、repository 是 `personal-calendar-oauth`，三個欄位填入：

```text
應用程式首頁
https://USERNAME.github.io/personal-calendar-oauth/

應用程式隱私權政策連結
https://USERNAME.github.io/personal-calendar-oauth/privacy.html

應用程式服務條款連結
https://USERNAME.github.io/personal-calendar-oauth/terms.html
```

若 repository 名稱就是 `USERNAME.github.io`，網址不包含 repository 子路徑：

```text
https://USERNAME.github.io/
https://USERNAME.github.io/privacy.html
https://USERNAME.github.io/terms.html
```

## Google Auth Platform

部署後，將上述三個 URL 填入 **Google Auth Platform → Branding → App domain**。若頁面另要求 Authorized domains，GitHub Pages 的網域應填部署後實際使用的主機名稱，例如：

```text
USERNAME.github.io
```

不要填 `https://`，也不要附加 `/repository` 路徑。

## 聯絡連結

部署在 GitHub Pages 後，頁尾及政策頁會自動依網址產生該 repository 的 GitHub Issues 連結，因此不需要把電子郵件寫入公開網頁。若不希望開啟 Issues，可在 GitHub repository 的 Settings → General → Features 關閉 Issues，並自行改寫三個 HTML 的聯絡方式。

## 上線前檢查

- GitHub Pages repository 與 Issues 是否適合公開。
- Google OAuth 應用程式顯示名稱是否與網站名稱一致；若不同，請統一替換三個 HTML 內的 `個人日曆同步工具`。
- 公開網站只描述個人日程同步與資料處理方式，不含任何組織名稱、帳號、Calendar ID、OAuth Client ID、Client Secret、權杖或實際來源內容。
- 上線前請自行確認公開隱私權與服務條款內容；本範本不是法律意見。
