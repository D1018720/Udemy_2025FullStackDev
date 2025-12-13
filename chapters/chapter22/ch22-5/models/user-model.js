const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        mixLength: 3,
        maxLength: 255,
    },
    googleID: {
        type: String,
    },
    date: {
        type: Date,
        default: Date.now,
    },
    // thumbnail 是圖片
    thumbnail: {
        type: String,
    },
    // local login
    email: {
        type: String,
    },
    password: {
        type: String,
        mixLength: 8,
        maxLength: 1024,
    },
});      

module.exports = mongoose.model('User', userSchema);