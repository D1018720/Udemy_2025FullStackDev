const express = require('express')
const app = express()
const port = 3000

// Express.js當中，預設情況是不允許我們提供Static Files
// 當Express找public資料夾內部文件時，使用相對路徑，且public資料夾名稱不是URL一部份
app.use(express.static('public')) // 設定 public 資料夾為靜態檔案資料夾
// 若有使用這個，則使用res.render()就不需要指定文件類別，如res.render("index.ejs")，改成res.render("index")
app.set("view engine", "ejs") // 設定EJS為模板引擎

app.get("/", (req, res) => {
  let myString = "<h1>Hello EJS</h1>"
  res.render("index", { myString })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})