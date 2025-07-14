// JS中的函數是first-class objects。
// 1. 將function分配給變數。例如：let hello = function() { console.log("Hello!"); };
// 2. 將function當作argument傳給其他function。higher order function的argument被稱為callback function。

// 若要把function當作argument傳給其他function，那麼對此函數命名就沒意義。因此，選用function expression會是好選項。
// arrow function也是function expression的一種，語法更簡潔。
let hello = () => {
    console.log("Hello!");
};

let Wilson = {
    name: "Wilson",
    walk: () => {
        console.log("Wilson is walking...");
    }
};

// 1. 若arrow function expression只有一個參數，可以省略括號。
// 2. 若有零個或兩個以上的參數，則一定要加上括號。
// 3. arrow function expression的主體若不加上curly brackets(大括號)，則return expression的值。
// 4. 若主體有多個計算式，則一定加上curly brackets。
// 5. 若arrow function expression有加上curly brackets，則一定需加return關鍵字才會回傳一個值。
// 6. arrow function expression沒有this關鍵字綁定，不應用作objects的methods。

window.addEventListener("click", () => {
    alert("有人正在點擊畫面");
});

// 若arrow function expression只有一個參數，可以省略括號
let addition = a => {
    return a + 5;
}

console.log(addition(10)); // returns 15

// 若arrow function expression有加上curly brackets，則一定需加return關鍵字才會回傳一個值。
// let num = () => {
//     return 15;
// };
// 
// arrow function expression的主體若不加上curly brackets，則return expression的值。
let num = () => 15;

console.log(num()); // returns 15