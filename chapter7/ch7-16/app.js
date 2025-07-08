// storage是在瀏覽器中一個存儲數據的地方。在storage內部儲存的數值都是key-value pair，
// 且不論是key還是value，資料型態都必須是string。
// localStorage和sessionStorage都是storage的一種，兩者的差異在於localStorage的資料會永久儲存，除非使用者手動清除，
// 而sessionStorage的資料只會在當前瀏覽器窗口或分頁關閉時被清除。
// localStorage和sessionStorage都提供了以下方法來操作儲存的數據：

// setItem(key, value) - 當傳遞一個key和value時，會將該key-value pair添加到給定的storage，
// 如果key已經存在，則會更新其對應的value。
localStorage.setItem("name", "Charlie");

// getItem(key) - 從給定的storage中獲取指定key的value，如果key不存在，則返回null。
let myName = localStorage.getItem("name");
console.log(myName); 

// removeItem(key) - 從給定的storage中刪除指定key的key-value pair。
localStorage.removeItem("name");

// clear() - 清除給定的storage中的所有key-value pair。
localStorage.clear();