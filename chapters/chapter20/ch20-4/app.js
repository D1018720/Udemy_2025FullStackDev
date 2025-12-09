const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

// 加入簽章密鑰
app.use(cookieParser("熊貓很可愛"));

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

app.listen(3000, () => {
    console.log("伺服器已啟動，監聽埠號 3000");
});