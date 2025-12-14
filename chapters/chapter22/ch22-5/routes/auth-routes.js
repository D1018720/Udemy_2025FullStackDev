// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const passport = require('passport');

// 如果沒有req.user，表示使用者尚未登入
// user參數會傳給EJS樣板引擎nav.ejs使用
router.get('/login', (req, res) => {
    return res.render('login', { user: req.user });
});

// 登出使用者。Passport會自動刪除session。
router.get('/logout', (req, res) => {
    req.logout((err) => {
        if (err) {
            return res.send(err);
        }
        return res.redirect('/');
    });
});

// Passport.js適用於Node.js中，用來做身分驗證的middleware。
// 可以將OAuth身分驗證功能輕鬆集成到任何基於Node和Express應用程序中。
router.get('/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account'
    })
);

// 設定Google登入成功後的redirect路由
router.get('/google/redirect', 
    passport.authenticate('google'), 
    (req, res) => {
        // 登入成功後會執行此function
        return res.redirect('/profile');
    }
);

module.exports = router;