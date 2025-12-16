const router = require('express').Router();
const Post = require('../models/post-model');

const authCheck = (req, res, next) => {
    if (req.isAuthenticated()) {
        // 如果使用者已通過驗證，繼續處理請求
        next();
    } else {
        // 如果使用者未通過驗證，重定向到登入頁面
        res.redirect('/auth/login');
    }
};

router.get('/', authCheck, async (req, res) => {
    let postFound = await Post.find({ author: req.user._id }).exec();
    return res.render('profile', { user: req.user, posts: postFound }); //deSerializeUser會把使用者資料放在req.user
});

router.get('/post', authCheck, (req, res) => {
    return res.render('post', { user: req.user });
});

router.post('/post', authCheck, async (req, res) => {
    let { title, content } = req.body;
    let newPost = new Post({
        title,
        content,
        author: req.user._id,
    });
    try {
        await newPost.save();
        return res.redirect('/profile');
    } catch (e) {
        req.flash("error_msg", "標題與內容都需要填寫。");
        return res.redirect('/profile/post');
    }
    
});

module.exports = router;