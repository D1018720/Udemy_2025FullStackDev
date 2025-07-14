// storage只能儲存string，
// 想要把object，array等資料類型存放在storage內部，需要用到JSON Object
// JSON Object提供了兩個方法：
// 1. JSON.stringify(value) - 將value轉換為JSON格式的string
// 2. JSON.parse(text) - 解析JSON String，製作出JSON String描述的JS值或Object

// let myLuckyNumbers = [1, 2, 3, 4, 5, 6];

// localStorage.setItem("myNumbers", JSON.stringify(myLuckyNumbers));
let myArr = JSON.parse(localStorage.getItem("myNumbers"));
myArr.forEach((n) => {
    console.log(n);
});

// 將資料先做JSON.stringify()轉換為string，然後再做setItem()儲存到storage中，
// 接著在用getItem()從storage中拿出資料，再將拿出來的資料做JSON.parse()轉換為JS值或Object，
// 最後這個資料就可以使用forEach，push，pop等等methods。