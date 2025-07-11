// Primitive Coercion
// JS的Primitive Data Type代表著他們不是Objects，每個Primitive Data Types都沒有自己的attributes和methods。
// 當Primitive Data Type使用attributes和methods時，JS將值自動把數值裝到wrapper object中，並改為訪問該wrapper object上的屬性。
// 可以在創建String的時候，就使用wrapper object來製作。但這樣會造成RAM的非必要耗損。
const { performance } = require("perf_hooks"); // node.js

let startTime = performance.now();

for (let i = 0; i < 10000000; i++) {
    let a = new String("jakdsfjlkajlskdfjaksljfakls;dfja;ls");
}

let endTime = performance.now();
let timeDiff = endTime - startTime;
console.log("一千萬次的String wrapper object製作需要" + timeDiff);

startTime = performance.now();
for (let i = 0; i < 10000000; i++) {
    let a = "jakdsfjlkajlskdfjaksljfakls;dfja;ls";
}
endTime = performance.now();
timeDiff = endTime - startTime;
console.log("一千萬次的String宣告需要" + timeDiff);