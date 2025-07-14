// Inheritance and the Prototype Chain
// JS中，每個物件都有一個private attribute叫做__proto__，__proto__屬性存放的值是另一個物件。
// 若物件A的__proto__屬性指向物件B，則物件A就會繼承物件B的屬性和方法。

let wilson = {
    name: 'Wilson',
    age: 27,
    sayHi() {
        console.log("hi")
    }
};

let mike = {
    __proto__: wilson, // mike繼承自wilson
};

console.log(mike.name); // 'Wilson'，因為mike繼承了wilson的name屬性
mike.sayHi(); // 'hi'，因為mike繼承了wilson的sayHi方法

// 每個constructor function都可以設定prototype屬性(prototype屬性本質上來說，就是一個empty object)
// 所有從constructor function製作出來的物件，其__proto__屬性都會指向constructor function的prototype屬性。

function Person(name, age) {
    this.name = name;
    this.age = age;
    this.sayHi = function() {
        console.log(this.name + "Hi");
    };
}

Person.prototype.hello = function() {
    console.log(this.name + "Hello");
};

let jack = new Person('Jack', 22);
let jill = new Person('Jill', 24);
console.log(jack.hello === jill.hello); // true，因為兩者都指向同一個prototype方法