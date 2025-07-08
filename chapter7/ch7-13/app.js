// Event表示在DOM物件上所發生的事件，一個事件的發生通常是由使用者的操作行為所產生。
// addEventListener()方法可以讓我們在DOM物件上註冊一個事件監聽器，當指定的事件發生時，會執行指定的函式。
// addEventListener(type, listener);
// type: 事件類型，例如click、keydown、keyup等。
// listener: 當事件發生時要執行的函式。

let button = document.querySelector("button");

// button.addEventListener("click", (e) => {
//     // e是事件物件，包含了事件的相關資訊
//     console.log(e);
// });   

window.addEventListener("keydown", (e) => {
    console.log(e);
    // e.key是按下的鍵
});    


// 所有的Event Object中，最常用到的幾個屬性與方法是:
// 1. target: 指向最初觸發事件的DOM物件
// button.addEventListener("click", (e) => {
//     // e是事件物件，包含了事件的相關資訊
//     console.log(e.target);
// }); 

// 2. preventDefault(): 取消事件的預設行為，但不會影響事件的傳遞，事件仍會繼續傳遞
let form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault(); // 取消表單的預設提交行為
    console.log("表單已被提交，但沒有實際提交到伺服器");
});

// 3. stopPropagation(): 可防止再event bubbling進一步傳播當前事件

// Event Bubbling是指事件從最深層的元素開始觸發，然後逐層向上傳播到父元素，直到達到document物件。

let a = document.querySelector(".a");
let b = document.querySelector(".b");

a.addEventListener("click", () => {
    alert("紅色框的事件監聽器正在被執行");
});    

b.addEventListener("click", (e) => {
    e.stopPropagation(); // 停止事件的傳播
    alert("藍色框的事件監聽器正在被執行");
});    
