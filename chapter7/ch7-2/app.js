// DOM這棵樹上的每個點稱為node，分為三種：
// 1. HTML元素節點（Element Node）：代表HTML標籤，如<div>、<p>等。
// 2. 文本節點（Text Node）：代表HTML元素中的文本內容。
// 3. 注釋節點（Comment Node）：代表HTML中的注釋
// DOM提供兩種節點集合:HTMLElementCollection和NodeList
// HTMLElementCollection是HTML元素節點的集合，NodeList則是所有類型節點的集合。

// window.document.getElementById() - return第一個id相符合的element object
let myHeading = document.getElementById("myHeading1");
console.log(myHeading);

// window.document.getElementsByClassName() - return一個動態的HTMLCollection，內部元素包含所有具有給定className的元素
let myParagraphs = document.getElementsByClassName("my-p");
console.log(myParagraphs);