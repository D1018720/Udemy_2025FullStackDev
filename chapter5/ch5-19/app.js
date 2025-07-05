let friends = ["Alice", "Bob", "Charlie"];
// array的值被稱為元素。

let anotherFriends = friends;
anotherFriends[0] = "Grace"; // 修改第一個元素

console.log(friends); // ["Grace", "Bob", "Charlie"]
console.log(anotherFriends); // ["Grace", "Bob", "Charlie"]
// JS array是reference type，當你將一個array賦值給另一個變數時，兩個變數都指向同一個array的記憶體位置。

// primitive data type的值是直接存儲在變數中，而reference type的值是存儲在記憶體中的位置，變數只存儲這個位置的引用。