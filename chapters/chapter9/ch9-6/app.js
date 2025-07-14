// 在函式執行環境的creation phase中，每個function都有創建this關鍵字這個步驟。
// this關鍵字指的是正在執行當前method的object。
// 在JS中，若function被調用時使用了new關鍵字，則function會被當成constructor function來使用。


// 在JS，constructor function以大寫開頭
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

let wilson = new Person('Wilson', 27);
let mike = new Person('Mike', 30);
let grace = new Person('Grace', 25);
console.log(wilson); 

// 透過constructor function，可以大量製造attributes和methods，這樣可以減少重複的程式碼。
// constructor function製作出的每個物件是獨立的，會單獨佔據記憶體位置。