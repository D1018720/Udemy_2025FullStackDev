// Spread Syntax and Rest Parameters
// Spread Syntax 允許在需要零個或多個參數或元素的地方去'擴展'array內部的元素。
// myFunction(a, ...iterableObj, b)
// [1, ...iterableObj, '4','five', 6]

const parts = ["肩膀", ":膝蓋"];
const otherParts = ["頭", ...parts, "身體", "腳"];

console.log(otherParts); // [ '頭', '肩膀', ':膝蓋', '身體', '腳' ]

console.log("===========================================");

// 複製array
// 用 arr = arr2 會形成copy by reference
const arr = [1, 2, 3];
const arr2 = [...arr];
arr2.push(4);
console.log(arr);
console.log(arr2); 

console.log("===========================================");

// array concat
let arr3 = [1, 2, 3];
let arr4 = [4, 5, 6];

console.log([...arr3, ...arr4]); // [1, 2, 3, 4, 5, 6]

console.log("===========================================");

function sum(x, y, z){
    return x + y + z;
}

let arr5 = [1, 2, 3];
console.log(sum(arr5[0], arr5[1], arr5[2])); // 6
console.log(sum(...arr5)); // 6

console.log("===========================================");

function sum2(a, b, c, d, e){
    return a + b + c + d + e;
}

let arr6 = [1, 2, 3];
console.log(sum2(10, ...arr6, 5)); // 21

console.log("===========================================");

// Rest Parameters 是在function definition中定義用，是收集多個元素並將他們 '壓縮' 成一個array
function sum3(...theArgs) {
    console.log(theArgs); // [ 1, 2, 3, 4, 5 ]
    let total = 0;
    for (let i = 0; i < theArgs.length; i++) {
        total += theArgs[i];
    }
    return total;
}

console.log(sum3(1, 2, 3, 4, 5)); 


