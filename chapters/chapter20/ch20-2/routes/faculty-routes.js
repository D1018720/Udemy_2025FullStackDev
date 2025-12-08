const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {    
    return res.send("歡迎來到教職員頁面");
});

router.get('/new', (req, res) => {    
    return res.send("這是新增教職員頁面");
});

module.exports = router;