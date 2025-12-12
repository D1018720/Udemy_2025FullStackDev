const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');

mongoose
    .connect('mongodb://root:root@mongo:27017/app?authSource=admin')
    .then(() => {
        console.log("MongoDB 連線成功");
    })
    .catch(e => {
        console.log(e);
    });

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// 設定routes
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    return res.render("index");
});

app.listen(8080, () => {
    console.log("伺服器已啟動，監聽埠號 8080");
});