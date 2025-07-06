// 編寫一個名為position的函式，唯一的參數是一個String，其功能為找到參數String當中的第一個大寫字母，並且回傳大寫字母的值以及其index位置。
function position(str) {
    for (let i = 0; i < str.length; i++) {
        if (str[i] === str[i].toUpperCase()) {
            return str[i] + " " + i; 
        }
    }
    return -1; // 如果沒有找到大寫字母，則回傳 -1
}


console.log(position("abcd")); // prints -1
console.log(position("AbcD")); // prints A 0
console.log(position("abCD")); // prints C 2