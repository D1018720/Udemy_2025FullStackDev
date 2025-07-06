// 編寫一個名為isUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的第一個字母是否為大寫。
function isUpperCase(str) {
    // 檢查字串是否為空
    if (str.length === 0) {
        return false; // 空字串沒有大寫字母
    }
    // if (str[0] === str[0].toUpperCase()) {
    //     return true; 
    // } else {
    //     return false; 
    // }
    return str[0] === str[0].toUpperCase(); // 上面註解的功能跟這行一樣
}

console.log(isUpperCase("ABCD")); 
console.log(isUpperCase("")); 
console.log(isUpperCase("aBCD")); 