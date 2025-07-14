// length - return String的長度。
let str = "Hello, World!";
console.log(str.length); // 13
// [n] - return String的第n個字元(index從0開始算)。
console.log(str[0]); // "H"
console.log(str[7]); // "W"
console.log(str[14]); // undefined (因為index 14不存在)
// slice(indexStart[, indexEnd]) - 提取字符串的一部份並將其作為新String返回。
// indexStart是必需的，indexEnd是可選的。如果indexEnd省略，則提取到字符串的結尾。
// indexStart包含，indexEnd不包含。
console.log(str.slice(1, 4)); // "ell"

// indexOf(substring) - 返回子字符串在String中第一次出現的index位置，如果沒有找到，則返回-1。
console.log(str.indexOf("W")); // 7
console.log(str.indexOf("k")); // -1

// toUpperCase() - 將String轉換為大寫。
// toLowerCase() - 將String轉換為小寫。
// split(pattern) - 將String分割成一個字符串數組，pattern可以是字符串或正則表達式。
let sentencse = "Hello, World! How are you?";
let words = sentencse.split(" "); // 以空格分割
console.log(words); // ["Hello,", "World!", "How", "are", "you?"]

// startsWith(s) - 確定String是否以指定的子字符串s開頭。
console.log(str.startsWith("Hello")); // true
console.log(str.startsWith("World")); // false
// endsWith(s) - 確定String是否以指定的子字符串s結尾。
console.log(str.endsWith("!")); // true 
console.log(str.endsWith("World")); // false

// includes(str) - 確定String是否包含指定的子字符串str。
console.log(str.includes("World")); // true
console.log(str.includes("world")); // false (大小寫敏感)

// charCodeAt(n) - 返回一個介於0和65535之間的整數，表示String中第n個字元的UTF-16 code unit。