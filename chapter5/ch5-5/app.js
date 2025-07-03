// toString - return一個數字的String。
let age = 27;
console.log(age.toString() + age); // "2727"
// typeof age.toString() // "string"

// toFixed - return被轉換後的數字，到小數點後第n位數。
const pi = 3.14159;
console.log(pi.toFixed(2)); // "3.14"
// typeof pi.toFixed(2) // "string"

// 二進制不能精確表示所有小數。可能導致意外結果，例如0.1+0.2===0.3會return false。
