// Destructuring Assignment
// 可以將array中的值或object中的屬性unpack到不同變量中。
// const [a, b] = array;
// const [a, b, ...rest] = array;
// const {a, b} = obj;
let arr = [1, 2, 3, 4, 5, 6, 7]

let [a1, a2, a3, a4, a5, a6, a7] = arr;

console.log("a5 is" + a5);

let arr2 = [100, 200, 300, 400, 500];
let [aa1, aa2, ...everything] = arr2;

console.log(a1, a2, everything);

let Wilson = {
    name: "Wilson",
    age: 26,
    address: "Hawaii",
    height: 179,
    weight: 75,
};

let { address } = Wilson // 將Wilson這個object內的address放到一個用address來當變數的地方

console.log(address); // "Hawaii"