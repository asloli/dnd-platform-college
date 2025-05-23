const path = require('path');
const express = require('express');
const http = require('http');
const socketIO = require('socket.io');

const app = express();
// 將 public 資料夾設定為靜態檔案目錄
app.use(express.static(path.join(__dirname, '../public')));

// 根路由回傳 public/index.html
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

const server = http.createServer(app);
const io = socketIO(server);

io.on('connection', socket => {
  console.log('A user connected');
  // 在此處加入你的 socket 事件處理
  socket.on('disconnect', () => {
    console.log('User disconnected');
  });
});

const PORT = process.env.PORT || 3000;
server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
