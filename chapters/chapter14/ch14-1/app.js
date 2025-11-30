const express = require('express')
const app = express()
const port = 3000

// Express.js當中，預設情況是不允許我們提供Static Files
// 當Express找public資料夾內部文件時，使用相對路徑，且public資料夾名稱不是URL一部份
app.use(express.static('public')) // 設定 public 資料夾為靜態檔案資料夾
// 若有使用這個，則使用res.render()就不需要指定文件類別，如res.render("index.ejs")，改成res.render("index")
app.set("view engine", "ejs") // 設定EJS為模板引擎


// EJS文件要放在views資料夾內
// 頁面渲染(rendering)就是瀏覽器將HTML變成人眼看到的圖像的過程
// app.get("/", (req, res) => {
//   res.render("index.ejs")
// })

// res.render(view, [locals]) 將view模板套用locals文字後，將view送到客戶端
app.get("/:name", (req, res) => {
  let { name } = req.params
  // JS中，出現object屬性與variable相同的狀況，可以只寫一個名稱，{ name }等同於{ name: name }
  res.render("index", { name }) // 將name變數傳給index.ejs模板
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})