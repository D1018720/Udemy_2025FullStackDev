// 每個JS物件都有properties以及method。屬於物件的function被稱為method。
// 物件的屬性與相對應的值是key-value pair。
// 獲得物件屬性的值可以使用點記法(dot notation)或方括號記法[]。

let Wilson = {
    first_name: "Wilson",
    last_name: "Ren",
    age: 26,
    is_married: true,
    spouse: "Grace",

    // this關鍵字指的是調用該方法的物件。若某funtion沒有調用該function的物件，則this指向windwo物件。
    sayHi() {
        console.log(this.first_name + " says hi!");
    },

    walk() {
        console.log("Wilson is walking!");
    },

    speak() {
        console.log("Wilson says" + words);
    }
};

console.log(Wilson.first_name); // Wilson
console.log(Wilson["last_name"]); // Ren

Wilson.speak("happy"); // Wilson says happy

// function跟array都是特殊的objects。