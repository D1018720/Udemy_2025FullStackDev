// 當JS引擎執行程式碼時，會創建execution contexts(執行環境)。
// 1. 全域執行環境
// 2. 函式執行環境
// 每個執行環境都包含兩個階段:創造階段creation phase和執行階段exection phase。
// creation phase:
// 1. 創建一個全域物件(global object)，在瀏覽器中是window物件，在Node.js中是global物件。
// 2. 建立scope。
// 3. 處理this關鍵字，this指向全域物件。
// 4. 將variables、class和function分配至記憶體。

let a = 3;

let result = area(a);
console.log(result);

function area(s) {
    // 1 creation phase
    // s = 3
    // scope, this
    return s * s;
}

// 1 cration phase
// 1.1 global object製作完成
// 1.2 不管
// 1.3 this keyword
// 1.4 a undefined, result undefined, area is a function

// 2 execution phase
// a = 3
// result = 9