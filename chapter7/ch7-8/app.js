// forEach()為每個陣列元素執行一次提供的函式。
// 與arrow function協作:
// forEach(element => ...)
// forEach((element, index) => ...)

let numbers = [1, 2, 3, 4, 5];

// function plus3(n) {
//     console.log(n + 3);
// }

// numbers.forEach(plus3);
// numbers.forEach(function(n) {
//     console.log(n + 3);
// })    
numbers.forEach((n) => {
    console.log(n + 3);
});    
