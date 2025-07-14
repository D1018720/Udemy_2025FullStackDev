// JS有7種基本數據類型，被稱為primitive data type。
// Number、String、Boolean、Null、Undefined、Symbol、BigInt。
// JS地8種數據類型叫做object，屬於non-primitive data type。可能是array、object或是function。

// 兩個Number用+連接，會將它們相加，這叫做addition。

// 兩個String可以用+連接起來，這叫做concatenation。
// String與Number之間，若用+連接，會將Number轉成String。
let x = 10;
let y = "10"

console.log(x + x); // 20
console.log(x + y); // 1010
console.log(y + y); // 1010

let n1 = 20;
let n2 = 30;
let name = "小明";
let n3 = 10;
let n4 = 15;

// 程式碼由上到下讀取。
console.log(n1 + n2 + name); // 50小明 -> String
console.log(n1 + n2 + name + n3 + n4); // 50小明1015

// \n可以換行