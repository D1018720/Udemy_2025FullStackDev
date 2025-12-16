const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;
const User = require("../models/user-model");
const LocalStrategy = require("passport-local").Strategy;
const bcrypt = require("bcrypt");

// 設定Google Strategy登入方式需要兩個參數，第一個是物件，內含有client id, client secret以及一個callback URL。
// 第二個是function。
// 用戶端在Google登入頁面按下登入後，Passport會自動完成OAuth的步驟，取得用戶資料。
// 取得資料後，Passport會調用Googl Strategy第二個參數內的function，
// 此function參數為accessToken,refreshToken,profile,done。
// profile參數即為Google回傳的用戶資料。
// 可透過此function內部判斷此用戶為第一次登入系統，將從Google取得的用戶資料存入系統的資料庫內。
// done是一個function，可以將使用者資訊放入done的第二個參數內，並執行done()。

// 在程式開發中，Serialization是將數據或物件傳輸或儲存之前，將其轉為bytes的過程。
// 而Deserialization則是將bytes轉回原始數據或物件的過程。
// 在Passport將這部分實作留給開發者自己決定怎麼實踐Serialization與Deserialization的功能。
// Serialization作法是將用戶端的id存入session。
// Deserialization作法是從session取出用戶端的id，並從資料庫中找到對應的用戶資料。
// 在Passport當中，Serialization與Deserialization的實作是透過passport.serializeUser()與passport.deserializeUser()兩個function來完成的。
// 在實作這兩個功能前要先使用express-session這個套件，幫session做簽名。
// 上面功能都設定好後，done被執行時，passport會透過express-session套件去自動執行passport.serializeUser()。
// serializeUser()參數為user與done。
// user會被自動帶入Google Strategy的done()第二個參數內的值。
// passport.serializeUser()會自動帶入以下兩個功能:
// 1. 內部的done()執行時，將參數的值放入session內，並在用戶端設置cookie。
// 2. 設定req.isAuthenticated()這個function，並回傳true。
passport.serializeUser((user, done) => {
   console.log("SerializeUser使用者。。。");
  //  console.log(user);
   done(null, user._id); // 將mongoDB的id存入session
  //  並且將id簽名後，以cookie的形式給使用者。。。
  //  之後會進入redirect區域
});
// Passport在deserializeUser()額外附加的一個功能，就是當deserializeUser()內部的done()被執行時，
// Passport會自動將done()第二個參數的值放入req.user內，方便後續使用。
// 例如在後續的路由中，可以透過req.user取得當前登入使用者的資料。
// 這樣的設計讓開發者可以輕鬆地在應用程式中存取當前使用者的資訊，而不需要每次都從資料庫重新查詢。
passport.deserializeUser(async (_id, done) => {
   console.log("DeserializeUser使用者。。。使用SerializeUser儲存的id，去找到資料庫內的資料");
  //  console.log(id);
   let foundUser = await User.findOne({ _id }).exec();
   done(null, foundUser); // req.user 這個屬性設定為 foundUser
  // 之後會進去/profile路由
});

passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "https://eac29174a8e8.ngrok-free.app/auth/google/redirect"
    }, 
    async (accessToken, refreshToken, profile, done) => {
        console.log("進入Google Strategy的區域");
        // console.log(profile);
        //console.log("==============================");
        let foundUser = await User.findOne({ googleID: profile.id }).exec();
        if (foundUser) {
            console.log("使用者已註冊過，無須存入資料庫內");
            done(null, foundUser); // 傳foundUser到serializeUser的user參數內
        } else {
            console.log("偵測到新用戶，須存入資料庫內");
            let newUser = new User({
                name: profile.displayName,
                googleID: profile.id,
                thumbnail: profile.photos[0].value,
                email: profile.emails[0].value,
            });
            let saveUser = await newUser.save();
            console.log("成功創建新用戶");
            done(null, saveUser); // 傳saveUser到serializeUser的user參數內
        }
    })
);

// 在passport.js post到/login時，在login.ejs內的name要設為username與password
// 這樣才會自動套在這邊的LocalStrategy內
passport.use(new LocalStrategy(async (username, password, done) => {
    let foundUser = await User.findOne({ email: username }).exec();
    if (foundUser) {
        let result = await bcrypt.compare(password, foundUser.password);
        // done(null, user)`：表示操作成功，並將 `user` 資料傳遞到下一步。
        // done(error)`：表示操作失敗，並將 `error` 傳遞到下一步。
        if (result) {
            return done(null, foundUser);
        } else {
            return done(null, false);
        }
    } else {
        return done(null, false);
    }   
}));