// arr.map(callbackFn) - 返回一個新陣列，該陣列包含對原陣列中每個元素應用callbackFn後的結果。
let languages2 = ["Java", "C++", "Python", "JavaScript"];

// let result = languages.map(function (lang) {
//     return lang.toUpperCase();
// });

let result2 = languages2.map(lang => lang.toUpperCase());

console.log(result2);

console.log("===========================================");

const languages = [
    { name: "Python", rating: 9.5, popularity: 9.7, trending: "super hot" },
    { name: "Java", rating: 9.4, popularity: 8.5, trending: "hot" },
    { name: "C++", rating: 9.2, popularity: 7.7, trending: "hot" },
    { name: "PHP", rating: 9.0, popularity: 5.7, trending: "decreasing" },
    { name: "JS", rating: 8.5, popularity: 8.7, trending: "hot" },
];

let result = languages.map(lang => {
    return lang.name.toUpperCase();
});

console.log(result);

console.log("===========================================");

// arr.find(callbackFn) - 返回arr中第一個使callbackFn返回true的元素。如果沒有找到，則返回undefined。
let result3 = languages.find(lang => lang.popularity > 9.5); 
console.log(result3);

console.log("===========================================");

// arr.filter(callbackFn) - 返回一個新陣列，該陣列包含所有使callbackFn返回true的元素。
let result4 = languages.filter(lang => lang.rating >= 9.2);
console.log(result4);

console.log("===========================================");

// arr.some(callbackFn) - 如果arr中至少有一個元素使callbackFn返回true，則返回true；否則返回false。
// arr.every(callbackFn) - 如果arr中所有元素都使callbackFn返回true，則返回true；否則返回false。
let result5 = languages.some(lang => lang.popularity <= 6);
console.log(result5);