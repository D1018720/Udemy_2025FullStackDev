const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/anotherPage', (req, res) => {
  res.send('歡迎來到另一個頁面')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})