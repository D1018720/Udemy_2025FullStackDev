// Prototype Inheritance in Constructors
// 一個constructor function A可以透過兩個設定來繼承另一個constructor function B的prototype物件：
// 1. 在constructor function A的內部執行B.call(this, args1, ..., argsN)。
// 可以透過這段程式碼直接將B所設定的屬性套用給A做使用。
function Person(name, age) {
    this.name = name;
    this.age = age;
}

Person.prototype.sayHi = function() {
    console.log(this.name + " says hi!");
};

function Student(name, age, major, grade) {
    Person.call(this, name, age); // 繼承Person的屬性
    this.major = major;
    this.grade = grade;
}

// let mike = new Student('Mike', 20, 'Computer Science', 'A');
// console.log(mike.name); // 'Mike'
// console.log(mike.age); // 20
// console.log(mike.major); // 'Computer Science'
// console.log(mike.grade); // 'A'

// 2. 設定A.prototype = Object.create(B.prototype)。
// Object.create()可以創建一個全新的物件，這樣所有在B.prototype上定義的屬性和方法都會被A.prototype繼承。
// 所有A.prototype所設定的額外methods都需要寫在A.prototype = Object.create(B.prototype)之後。
Student.prototype = Object.create(Person.prototype);
Student.prototype.study = function() {
    console.log(this.name + " is studying " + this.major);
};

let mike = new Student('Mike', 20, 'Computer Science', 'A');
mike.sayHi(); // 'Mike says hi!'
mike.study(); // 'Mike is studying Computer Science'

let wilson = new Person('Wilson', 27);
wilson.study(); // TypeError: wilson.study is not a function

// 不能寫A.prototype = B.prototype，因為constructor.prototype是reference data type，這樣會覆蓋掉A.prototype的原有屬性和方法。