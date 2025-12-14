const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const authRoutes = require('./routes/auth-routes');
const profileRoutes = require('./routes/profile-routes');
require('./config/passport');
const session = require('express-session');
const passport = require('passport');

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

// secret - 用於簽署 session ID 的秘密字串。這個字串應該保密，並且用於防止 session 被篡改。
// resave - 如果為 true，則每次請求都會重新儲存 session，即使 session 沒有被修改。
// 設為 false 可以提升效能，建議根據需求設定。
// saveUninitialized - 如果為 true，則未初始化的 session 也會被儲存到儲存區。
// 未初始化的 session 是指那些新建但尚未修改的 session。
// cookie.secure - 如果為 true，則只有在 HTTPS 連線時才會發送 cookie。在開發環境中通常設為 false。
app.use(session({
    secret: process.env.SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }
}));
// 初始化Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// 設定routes
app.use("/auth", authRoutes);
app.use("/profile", profileRoutes);

// 如果沒有req.user，表示使用者尚未登入
// user參數會傳給EJS樣板引擎nav.ejs使用
app.get("/", (req, res) => {
    return res.render("index", { user: req.user });
});

app.listen(8080, () => {
    console.log("伺服器已啟動，監聽埠號 8080");
});