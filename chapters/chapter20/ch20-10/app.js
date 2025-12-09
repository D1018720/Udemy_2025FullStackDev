require('dotenv').config();
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const session = require('express-session');

// 加入簽章密鑰
// 用process.env來取得環境變數
app.use(cookieParser(process.env.MYCOOKIESECRETKEY));

app.use(session({
    secret: process.env.MYSESSIONSECRET,
    resave: false,
    saveUninitialized: false,
    cookie: { secure: false } // 注意：在非 HTTPS 環境下，secure 必須設為 false
}));

const checkUser = (req, res, next) => {
    if (!req.session.isVerified) {
        return res.send("請先登入系統，才能進入這個區域。");
    }
    next();
};

app.get('/', (req, res) => {    
    return res.send("歡迎來到首頁");
});

app.get('/setCookie', (req, res) => {    
    // res.cookie('yourCookie', 'Oreo');
    res.cookie('yourCookie', 'Oreo', { signed: true });
    return res.send("Cookie 已設定");
});

app.get('/seeCookie', (req, res) => {    
    console.log(req.signedCookies);
    return res.send("看一下設定好的Cookie。。。" + req.signedCookies.yourCookie);
});

// express-sessions給客戶端設定的cookie名稱是connect.sid，而value是簽名過的session id。
app.get('/setSessionData', (req, res) => {    
    req.session.example = 'something not important';
    return res.send("在伺服器設定session資料，在瀏覽器設定簽名後的session id");
});

app.get('/seeSessionData', (req, res) => {    
    console.log(req.session);
    return res.send("看看存在伺服器端的session資料");
});

app.get('/verifyUser', (req, res) => {    
    req.session.isVerified = true;
    return res.send("你已經登入系統，可以看秘密了");
});

// 如果isVerified這個屬性從未被定義過，JavaScript 會返回 undefined，
// 而 undefined 在條件判斷中被視為 false。
// 透過checkUser中介軟體，我們可以確保只有在登入後才能進入秘密區域。
// 當有多個要登入才能進入的路由時，可以重複使用這個中介軟體。
app.get('/secret', checkUser, (req, res) => {    
    return res.send("秘密是，沒秘密!");
});

app.get('/secret2', checkUser, (req, res) => {    
    return res.send("秘密2是，也是沒秘密!");
});

app.listen(3000, () => {
    console.log("伺服器已啟動，監聽埠號 3000");
});