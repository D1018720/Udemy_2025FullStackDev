// Ternary Operator是JS唯一用到三個運算元的運算子。
// 它的語法是：條件 ? 真值 : 假值
// 如果條件為真，則返回真值，否則返回假值。
// 這個運算子可以用來簡化if-else語句。

let age = 20;
let price = age < 18 ? 50 : 150;

console.log(price); // 如果age小於18，則price為50，否則為150

// if (age < 18) {
//     price = 50;
// } else if (age < 60) {
//     price = 150;
// } else {
//     price = 75;
// }

// 上面那個等於下面這個
price = age < 18 ? 50 : age < 60 ? 150 : 75;

// default parameters:當調用了function但沒有給定足夠數量的arguments時，parameter會被賦予undefined。

// backtick ``
let age2 = 26;
let address = "Taipei";
let myName = `john的年齡是${age2}，住在${address}。`;