// querySelector(selector) - returns 第一個符合特定選擇器群組的element object。採用深度優先搜尋演算法
let first_found = document.querySelector(".my-p"); 
console.log(first_found);

// querySelectorAll(selector) - returns 一個靜態的NodeList，表示與指定選擇器組匹配的元素列表。

// HTMLCollection 跟 NodeList 是 array-like object，但不是陣列，不能使用陣列的方法，如forEach()、map()等。
// HTMLCollection 是動態的，當DOM結構改變時，它會自動更新
// NodeList是靜態的，除非使用querySelectorAll()方法重新獲取。
let hellos = document.getElementsByClassName("hello");
let helloss = document.querySelectorAll(".hello");
console.log(hellos.length);
console.log(helloss.length);

let body = document.querySelector("body");
let p = document.createElement("p"); // 創建一個新的<p>元素
p.innerText = "this is a new p"; // 設置<p>元素的文本內容
p.classList.add("hello"); // 為<p>元素添加一個class
body.appendChild(p); // 將新的<p>元素添加到<body>中

console.log("改變DOM後...")
console.log(hellos.length); // 3
console.log(helloss.length); // 2