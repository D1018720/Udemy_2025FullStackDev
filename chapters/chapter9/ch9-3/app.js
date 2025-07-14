// Scope是指在當前的execution context之中變數的可訪問性為何?
// 1. Global Scope
// 2. Module Scope
// 3. Function Scope
// 4. Block Scope (let, const有block scope，var沒有)

// Closure(閉包)就是指這種將函數與其周圍的狀態或語詞環境結合在一起的組合。
// 1. 從Argument Object以及local variable去尋找
// 2. 若從1至找不到，則從記憶體被分配搞函數的位置開始尋找。
// 3. 若在目前的execution context找不到，就繼續往外層找。

let c = 100;

function add(x, y) { 
    let c = 10;
    return x + y + c; 
}

console.log(add(1, 2)); // 13，如果function內沒宣告c則會抓外面那個c的值100

console.log("===============================");

let myName = "John";

function sayHi() {
    let myName = "Jane";
    console.log("Hi, " + myName); // Hi, Jane，因為myName在function內有宣告，所以會抓function內的myName
    sayHi2();

    function sayHi2() {
        console.log("Hi, " + myName); // Hi, Jane，因為sayHi2在function內有宣告，所以會抓function內的myName
    }
}

// function sayHi2() {
//     console.log("Hi, " + myName); // Hi, John，因為sayHi2沒有宣告myName，所以會抓外面那個myName
// }