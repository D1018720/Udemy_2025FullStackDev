// sort() - 把array的元素進行就地排序。但array會被永久改變，所以要保留未被排序的array，要先複製一個。
let num = [5, 3, 8, 1, 2];
num.sort((a, b) => a - b); // 升序排序
console.log(num); // [1, 2, 3, 5, 8

let num2 = [5, 3, 8, 1, 2];
num2.sort((a, b) => b - a); // 降序排序
console.log(num2); // [8, 5, 3, 2, 1]

let fruits = ["banana", "apple", "cherry", "date"];
fruits.sort((a, b) => {
    if (a.length > b.length) {
        return 1;
    } else {
        return -1;
    }    
    console.log(fruits); // ["date", "apple", "banana", "cherry"]
});
// return 大於0，Sort a after b
// return 小於0，Sort b after a
// return 0，a和b順序不變
