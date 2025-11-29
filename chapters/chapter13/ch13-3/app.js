const express = require('express')
const app = express()
const port = 3000

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

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})