const express = require('express');
const app = express();
const mongoose = require('mongoose');
const studentRoutes = require('./routes/student-routes');
const facultyRoutes = require('./routes/faculty-routes');

// 引入 cors middleware 解決資安跨域問題
// const cors = require('cors');
const methodOverride = require('method-override');

mongoose.connect('mongodb://root:root@mongo:27017/app?authSource=admin')
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch(e => {
    console.error("MongoDB connection error:", e);
  });

app.set('view engine', 'ejs');
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// 引入 cors middleware 解決資安跨域問題
// app.use(cors());
app.use(methodOverride('_method'));

// 使用student相關的routes
app.use('/students', studentRoutes);
// 使用faculty相關的routes
app.use('/faculty', facultyRoutes);

// 錯誤處理的middleware，放在所有route的後面
app.use((err, req, res, next) => {
    return res.status(400).render('error');
});

app.listen(3000, () => {
  console.log('伺服器正在聆聽port 3000');
});