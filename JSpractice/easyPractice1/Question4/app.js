// 編寫一個名為isAllUpperCase的函式，唯一的參數是一個String，其功能為來檢查參數中String的所有字母是否為大寫。
function isAllUpperCase(str) {
    // 檢查字串是否為空
    if (str.length === 0) {
        return false; // 空字串沒有大寫字母
    }
    
    // for (let i = 0; i < str.length; i++) {
    //     if (str[i] !== str[i].toUpperCase()) {
    //         return false; 
    //     }
    // }
    // return true; 
    return str === str.toUpperCase(); // 使用字串比較來檢查是否全為大寫，這行跟上面註解的功能一樣
}
console.log(isAllUpperCase("ABCD")); // returns true
console.log(isAllUpperCase("")); // returns false
console.log(isAllUpperCase("ABCDEFGHIJKLm")); // returns false