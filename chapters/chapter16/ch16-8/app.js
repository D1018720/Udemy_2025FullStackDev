console.log("start"); // 因為是sync所以第一個執行。

process.nextTick(function () {
  console.log("nextTick1");
});

// setTimeout會放在timers裡面。
setTimeout(function () {
  console.log("setTimeout");
}, 0);

// call the constructor 是一個sync操作，所以會馬上執行。
// .then()會放在microtasks裡面。
new Promise(function (resolve, reject) {
  console.log("promise");
  resolve("resolve");
}).then(function (result) {
  console.log("promise then");
});

// IIFE(立即調用函式)，這裡會return一個promise constructor，跟第14行的一樣是sync操作。
(async function () {
  console.log("async");
})();

// 放到check。
setImmediate(function () {
  console.log("setImmediate");
});

process.nextTick(function () {
  console.log("nextTick2");
});

console.log("end");
