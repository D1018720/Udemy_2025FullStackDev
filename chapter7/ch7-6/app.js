// function expression主要用途:
// 1. 創建一個未命名的function，之後在把這個function放置到其他變數內
// 2. 當作higher order function的callback function使用。例如:forEach或addEventListener等方法
// 3. 當作立即執行函式（IIFE）使用，


// 1

// function declaration
function sayHello() {
    console.log("Hello, World!");
}

// function expression
let addition = function(a, b) {
    return a + b;
}

console.log(addition(2, 3)); // returns 5
console.log("===================");

let Wilson = {
    name: "Wilson",
    greet() {
        console.log(this.name + "打招呼");
    },
    // function expression
    walk: function() {
        console.log(this.name + "走路");
    }
}

Wilson.greet(); // returns "Wilson打招呼"
Wilson.walk(); // returns "Wilson走路"

console.log("===================");
// 2

// 事件發生後，要執行的function?
// function react() {
//     alert("有人正在點擊畫面");
// }直接貼去addEventListener裡原本放react的地方

// addEventListener本身是一個higher order function
// react是一個callback function
window.addEventListener("click", function () {
    alert("有人正在點擊畫面");
}); // 當使用者點擊畫面時，執行react函式

// 1. 如果程式碼中有許多callback function都採用function declaration，命名變數時，都需要避開function declaration
// 2. callback function名稱其實沒有意義
// 3. 程式碼變乾淨

console.log("===================");

// 3
// 立即執行函式（IIFE）
(function (a, b) {
    console.log(a + b);
})(10, 5);