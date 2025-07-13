class Circle {
    static allCircles = [];

    constructor(radius) {
        this.radius = radius;
        Circle.allCircles.push(this);
        // 將每個Circle物件都加入到allCircles陣列中
    }

    getArea() {
        return Math.PI * this.radius * this.radius;
    }

    getPerimeter() {
        return 2 * Math.PI * this.radius;
    }

    // static
    static getAreaFormula() {
        return "Area = π * r^2";
    }

    // static method
    static getAllCirclesAreaTotal() {
        let total = 0;
        Circle.allCircles.forEach((circle) => {
            total += circle.getArea();
        });
        return total;
    }
}

let c1 = new Circle(10);
let c2 = new Circle(10);
let c3 = new Circle(10);
console.log(c1.getArea()); // 314.1592653589793
console.log(Circle.getAreaFormula()); 
console.log(Circle.getAllCirclesAreaTotal()); 