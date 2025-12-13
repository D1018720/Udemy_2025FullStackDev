// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const passport = require('passport');

router.get('/login', (req, res) => {
    return res.render('login');
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