const express = require('express')
const app = express()
const port = 3000

// Express.js當中，預設情況是不允許我們提供Static Files
// 當Express找public資料夾內部文件時，使用相對路徑，且public資料夾名稱不是URL一部份
app.use(express.static('public')) // 設定 public 資料夾為靜態檔案資料夾
// 若有使用這個，則使用res.render()就不需要指定文件類別，如res.render("index.ejs")，改成res.render("index")
app.set("view engine", "ejs") // 設定EJS為模板引擎

app.get("/", (req, res) => {
  // 假設資料庫傳遞的樣子
  const languages = [
    {name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot"},
    {name: "JavaScript", rating: 9.0, popularity: 9.8, trending: "hot"},
    {name: "C++", rating: 8.5, popularity: 8.0, trending: "stable"},
    {name: "Java", rating: 8.0, popularity: 8.5, trending: "cold"},
    {name: "Ruby", rating: 7.5, popularity: 7.0, trending: "super cold"},
  ]
  res.render("index", { languages })
})

app.get("/example", (req, res) => {
  let { name, age } = req.query
  res.render("response", { name, age })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})