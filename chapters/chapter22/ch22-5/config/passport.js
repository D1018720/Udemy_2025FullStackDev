const passport = require("passport");
const GoogleStrategy = require("passport-google-oauth20").Strategy;

// 設定Google Strategy登入方式需要兩個參數，第一個是物件，內含有client id, client secret以及一個callback URL。
// 第二個是function。
// 用戶端在Google登入頁面按下登入後，Passport會自動完成OAuth的步驟，取得用戶資料。
// 取得資料後，Passport會調用Googl Strategy第二個參數內的function，
// 此function參數為accessToken,refreshToken,profile,done。
// profile參數即為Google回傳的用戶資料。
// 可透過此function內部判斷此用戶為第一次登入系統，將從Google取得的用戶資料存入系統的資料庫內。
passport.use(
    new GoogleStrategy({
        clientID: process.env.GOOGLE_CLIENT_ID,
        clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        callbackURL: "/auth/google/redirect"
    }
  )
);