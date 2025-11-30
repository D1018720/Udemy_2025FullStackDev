const express = require('express')
const app = express()
const port = 3000

// Express.js當中，預設情況是不允許我們提供Static Files
// 當Express找public資料夾內部文件時，使用相對路徑，且public資料夾名稱不是URL一部份
app.use(express.static('public')) // 設定 public 資料夾為靜態檔案資料夾

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/index.html")
})

app.get(/(.+)/, (req, res) => {
//   res.status(404) // 設定 HTTP 狀態碼為 404
//   res.send("錯誤頁面...")
    res.status(404).send("錯誤頁面...")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})