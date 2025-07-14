// function methods
// 在JS中，function是一種特別的物件，所有的function都有繼承Object prototype。
// 因此function也是object的一種。

// 1. function.bind(obj) - 將function的this關鍵字綁定(bind)為obj。
let Grace = {
    name: 'Grace',
    age: 25,
};

function getAge() {
    return this.age;
}

let newFunction = getAge.bind(Grace); // 返回一個新的function，當調用時this會指向Grace物件
console.log(newFunction()); // 25，因為this被綁定到Grace物件

// 2. function.call(obj, arg1, arg2, ...) - 使用給定的obj當作this值來調用函數。
let Jack = {
    name: 'Jack',
    age: 22,
};

function getAge(country, height) {
    console.log(this.name + "來自" + country + "，身高是" + height + "公分。");
    return this.age;
}

getAge.call(Jack, '台灣', 170); // 'Jack來自台灣，身高是170公分。'，因為this被設置為Jack物件

// 3. function.apply(obj, argsArray) - 與call相同，但arguments是使用arguments array。
getAge.apply(Jack, ['台灣', 170]);