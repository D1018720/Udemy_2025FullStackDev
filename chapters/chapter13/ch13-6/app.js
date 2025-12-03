const express = require('express')
const app = express()
const port = 3000

// middlewares
app.use((req, res, next) => {
  console.log("正在經過middleware...")
  next() // 呼叫 next() 以繼續處理後續的中介軟體或路由處理程序
})

app.use((req, res, next) => {
  console.log("正在經過第二個middleware...")
  next() // 呼叫 next() 以繼續處理後續的中介軟體或路由處理程序
})
app.use(express.json()) // 解析 application/json 格式的請求主體
app.use(express.urlencoded({ extended: true })) // 解析 application/x-www-form-urlencoded 格式的請求主體，extended: true 允許解析String以外的資料類型

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/anotherPage', (req, res) => {
  res.send('歡迎來到另一個頁面')
})

// res.send() 示範
app.get('/example', (req, res) => {
  res.send('<h1>這是一個h1標籤的示範</h1>')
  // http response 會有header跟content兩個部分，header會自動做好，
  // content就是res.send()裡面的東西
  res.send('<p>這是一個段落</p>') // 這行不會被執行到，因為等於在設定一次header
})

// res.sendFile() 示範
app.get('/myFile', (req, res) => {
  res.sendFile(__dirname + '/myFile.html')
  // __dirname 是 node.js 裡面的一個全域變數，代表目前這個檔案所在的資料夾路徑
  // 所以這邊的意思是把 myFile.html 的完整路徑傳給 res.sendFile()
})  

// res.json() 示範
app.get('/myJson', (req, res) => {
  let obj = {
    title: 'My JSON Example',
    website: 'udemy',
  }
  res.json(obj)
})

// res.redirect() 示範
// 伺服器發送302的http response給瀏覽器，告訴瀏覽器重新發送請求到新的網址
app.get('/myRedirect', (req, res) => {
  res.redirect('/myFile')
})


// req.params 示範
app.get("/fruit", (req, res) => {
  res.send("歡迎來到水果頁面")
})

// 在fruit/後面的都是someFruit參數
// 內部屬性為name route parameters
app.get("/fruit/:someFruit", (req, res) => {
  // console.log(req.params)
  res.send("歡迎來到" + req.params.someFruit + "的頁面")
  // req.params.someFruit 可取得route當中的someFruit參數
})

// req.query 示範
// 包含在route中:"?"後面的key-value-pair。
// 例如: /formHandling?name=John&age=30，則req.query.name為"John"，req.query.age為"30"
app.get("/formHandling", (req, res) => {
  res.send("伺服器已經收到表單，你所提交的資料為，名稱:" + req.query.name + "，以及年齡:" + req.query.age)
})


// req.body 示範
// express.json()會去檢查requests的header有沒有Content-Type: application/json，如果有的話，就把text-base JSON換成JavaScript能夠存取的JSON物件
app.post("/formHandling2", (req, res) => {
  // console.log(req.body) // 需要搭配 express.json() middleware 使用
  let { email, password } = req.body
  res.send("伺服器已經收到表單，你所提交的資料為，email:" + email)
})

// express.urlencoded()會去檢查requests的header有沒有Content-Type: application/x-www-form-urlencoded(也就是檢查是不是帶有資料的POST request')，如果有的話，就把text-base JSON換成JavaScript能夠存取的JSON物件

// express.json()和express.urlencoded()兩者轉換完成的JSON物件會被放入req.body當中，在使用這兩個功能之前要先使用對應的middleware

// 404 頁面示範
// 不能放到其他 route 的前面，因為會被優先匹配到
app.get(/(.*)/, (req, res) => {
  res.send("你所找的頁面不存在")
})

app.listen(port, '0.0.0.0', () => {
  console.log(`Example app listening on port ${port}`)
})
