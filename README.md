# 🧙‍♂️ 大一跑團平台 DnD v0.1.33

此專案為大一時期所開發的線上 D&D（龍與地下城）跑團工具原型，旨在簡化桌面角色扮演遊戲的流程，並實作前後端即時互動與地圖編輯功能。

---

## 功能特色

- **地圖編輯**：前端可即時編輯並渲染地圖格子、地形與圖示。
- **角色管理**：支援角色屬性（血量、護甲、移動力等）與狀態更新。
- **即時同步**：後端透過 Socket.IO，實現多位玩家與 GM 間的即時資料同步。
- **擲骰模擬**：內建常見骰種（d4、d6、d8、d10、d12、d20），並顯示擲骰結果。
- **JSON 資料儲存**：角色、道具、地圖等資料皆以 JSON 格式管理，可匯入匯出。

> ⚠️ 本專案為學習作品，程式碼與架構尚在優化階段，歡迎提出建議或協助改進。

---

## 安裝與使用

1. **安裝 Node.js** (v16+)
2. **下載專案並安裝相依套件**
   ```bash
   git clone https://github.com/<你的帳號>/dnd-platform-college.git
   cd dnd-platform-college
   npm install
   ```
3. **啟動伺服器**
   ```bash
   npm start
   ```
4. **存取專案**
   打開瀏覽器，前往 `http://localhost:3000`。

---

## 專案結構

```
├─ package.json        # 相依套件與啟動指令
├─ .gitignore          # Git 忽略清單
├─ server/
│   └─ server.js       # Express + Socket.IO 伺服器入口
└─ public/
    ├─ index.html      # 前端主頁面
    ├─ css/            # 樣式檔
    └─ js/             # 前端邏輯與模組
```
