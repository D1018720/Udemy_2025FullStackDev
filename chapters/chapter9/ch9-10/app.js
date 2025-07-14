// Class語法是JS基於現有的prototype inheritance的語法糖。
// constructor function
// function Student(name, age, major) {
//     this.name = name;
//     this.age = age;
//     this.major = major;
// }

// Student.prototype.sayHi = function() { 
//     console.log(this.name + " says hi!");
// };

// class語法
// class Student {
//     constructor(name, age, major) {
//         this.name = name;
//         this.age = age;
//         this.major = major;
//     }

//     sayHi() {
//         console.log(this.name + " says hi!");
//     }
// }

// 若一個constructor要繼承另一個constructor的prototype物件，則可以使用extends關鍵字。
// 這樣可以讓子類別自動繼承父類別的屬性和方法，並且可以在子類別中定義自己的屬性和方法。
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }

//     sayHi() {
//         console.log(this.name + " says hi!");
//     }
// }

// class Student extends Person {
//     constructor(name, age, major, grade) {
//         super(name, age); // 呼叫父類別的constructor
//         this.major = major;
//         this.grade = grade;
//     }

//     study() {
//         console.log(this.name + " is studying " + this.major);
//     }
// }

// let mike = new Student('Mike', 20, 'Computer Science', 'A');
// mike.sayHi(); // 'Mike says hi!'
// mike.study(); // 'Mike is studying Computer Science'

// Static關鍵字在class上定義attribute或method。
// 另外可以透過class本身來訪問static variable或執行static method。
// Static關鍵字所設定的attribute和method屬於class本身，不屬於每個由class所製作出的物件。
// 用constructor function
// function Student(name, age, major) {
//     this.name = name;
//     this.age = age;
//     this.major = major;
// }

// Student.exampleProperty = 10; 

// Student.exampleFunciton = function() { 
//     console.log("這是一個沒有特別功能的function");
// };

// Student.prototype.sayHi = function() {
//     console.log(this.name + " says hi!");
// };

// let mike = new Student('Mike', 20, 'Computer Science');
// mike.sayHi(); // 'Mike says hi!'
// mike.exampleFunction(); // 因為exampleFunction是設定在Student上而已

// 用class語法
class Student {
    static exampleProperty = 10; // static property

    constructor(name, age, major) {
        this.name = name; // instance property
        this.age = age; // instance property
        this.major = major; // instance property
    }

    // instance method
    sayHi() {
        console.log(this.name + " says hi!");
    }
    
    // static method
    static exampleFunction() { // 靜態方法
        console.log("這是一個沒有特別功能的function");
    }
}

let mike = new Student('Mike', 20, 'Computer Science');
mike.sayHi(); // 'Mike says hi!'
Student.exampleFunction(); // '這是一個沒有特別功能的function'，可以透過class本身來呼叫static method
mike.exampleFunction(); // 因為exampleFunction是設定在Student上而已

// Array的Array.isArray()就是Array Class的static method，可用來確認某個資料是不是Array。
