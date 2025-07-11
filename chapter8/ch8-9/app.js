// for...of Loop創建一個迴圈，去循環可迭代對象內的每個元素。
// for (...of...) {}
let numbers = [10, 20, 30];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

numbers.forEach(num => {
    console.log(num);
});

for (n of numbers) {
    console.log(n);
}   

console.log("===========================================");

let myString = "Grace";
for (let char of myString) {
    console.log(char);
}

console.log("===========================================");

// for...in Loop創建一個迴圈，去循環對象內的每個屬性。
let Wilson = {
    name: "Wilson",
    age: 26,
};

for (let prop in Wilson) {
    console.log(Wilson[prop]);
    // 不能用Wilson.prop，因為這樣會把prop當成一個屬性名稱，而不是變數。
}

console.log("===========================================");

let num = [100, 44, 22];
for (let i in num) {
    console.log(num[i]);
}
