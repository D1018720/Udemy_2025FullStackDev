// const express = require('express');
// const router = express.Router();
const router = require('express').Router();
const passport = require('passport');
const User = require('../models/user-model');
const bcrypt = require('bcrypt');

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

router.get('/signup', (req, res) => {
    return res.render('signup', { user: req.user });
});

// Passport.js適用於Node.js中，用來做身分驗證的middleware。
// 可以將OAuth身分驗證功能輕鬆集成到任何基於Node和Express應用程序中。
router.get('/google', 
    passport.authenticate('google', {
        scope: ['profile', 'email'],
        prompt: 'select_account'
    })
);

// 如果不是用網頁post出password，而是用postman，這樣在原本設定在signup.ejs的前端驗證就會失效
// 因為Node.js 自 v4.0.0 之後就將 util.isArray() 標記為 deprecated，建議改用標準的 Array.isArray()
router.post('/signup', async (req, res) => {
    let {name, email, password} = req.body;
    if (password.length < 8) {
        req.flash("error_msg", "密碼長度過短，至少需要8個字元。");
        return res.redirect('/auth/signup');
    }

    // 確認信箱是否被註冊過
    const foundEmail = await User.findOne({ email }).exec();
    if (foundEmail) {
        req.flash("error_msg", "信箱已被註冊。請使用另一個信箱，或者嘗試用此信箱登入系統");
        return res.redirect('/auth/signup');
    }

    let hashedPassword = await bcrypt.hash(password, 12);
    const newUser = new User({
        name,
        email,
        password: hashedPassword
    });

    await newUser.save();
    req.flash("success_msg", "註冊成功！請使用剛剛註冊的帳號密碼登入系統。");
    return res.redirect('/auth/login');
});

// failureFlash的值會套在req.flash("error")內
router.post('/login', 
    passport.authenticate('local', {
        failureRedirect: '/auth/login',
        failureFlash: "登入失敗，帳號或密碼不正確。",
    }),
    (req, res) => {
        // 登入成功後會執行此function
        return res.redirect('/profile');
    }
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