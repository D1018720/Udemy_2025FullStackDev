const router = require('express').Router();

const authCheck = (req, res, next) => {
    if (req.isAuthenticated()) {
        // 如果使用者已通過驗證，繼續處理請求
        next();
    } else {
        // 如果使用者未通過驗證，重定向到登入頁面
        res.redirect('/auth/login');
    }
};

router.get('/', authCheck, (req, res) => {
    return res.render('profile', { user: req.user }); //deSerializeUser會把使用者資料放在req.user
});

module.exports = router;