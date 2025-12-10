require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');
const flash = require('connect-flash');
const mongoose = require('mongoose');
const Student = require('./models/student');
const bcrypt = require('bcrypt');
const saltRounds = 12;

mongoose
    .connect('mongodb://root:root@mongo:27017/app?authSource=admin')
    .then(() => {
        console.log("MongoDB 連線成功");
    })
    .catch(e => {
        console.log(e);
    });

app.use(session({
    secret: process.env.MYSESSIONSECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // 注意：在非 HTTPS 環境下，secure 必須設為 false
}));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const verifyUser = (req, res, next) => {    
    if (req.session.isVerified) {
        next();
    } else {   
        return res.send("未經授權的存取，請先登入");
    }
}

app.get('/students', async (req, res) => {    
    let foundStudent = await Student.find({}).exec();
    return res.send(foundStudent);
});

app.post('/students', async (req, res) => {    
    try {
        let { username, password } = req.body;
        let hashValue = await bcrypt.hash(password, saltRounds);
        let newStudent = new Student({ username, password: hashValue });
        let savedStudent = await newStudent.save();
        return res.send({ message: "學生新增成功", savedStudent});
    } catch (e) {
        return res.status(400).send(e);
    }
});    

app.post('/students/login', async (req, res) => {
    try {
        let { username, password } = req.body;
        let foundStudent = await Student.findOne({ username }).exec();
        // 若有找到使用者，就不會是null
        if (!foundStudent) {
            return res.send("信箱錯誤，查無使用者");
        } else {
            let result = await bcrypt.compare(password, foundStudent.password);
            if (result) {
                req.session.isVerified = true;
                return res.send("登入成功。。。");
            } else {
                return res.send("登入失敗。。。");
            }
        }
    } catch (e) {
        return res.status(400).send(e);
    }
});

app.post('/students/logout', (req, res) => {    
    req.session.isVerified = false;
    return res.send("已登出");
});

app.get('/secret', verifyUser, (req, res) => {
    return res.send("這是秘密資料，只有登入後才能看到喔！");
});

app.listen(3000, () => {
    console.log("伺服器已啟動，監聽埠號 3000");
});