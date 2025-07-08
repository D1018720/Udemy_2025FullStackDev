// Element Objects
// 1. addEventListener(event, callbackFn)

// let myButton = document.getElementById("myButton");
// myButton.addEventListener("click", () => {
//     alert("按鈕被點擊了!");
// });

// 2. appendChild(element)，append是附加的意思

// let body = document.querySelector("body");
// let myH1 = document.createElement("h1");
// body.appendChild(myH1);

// 3. children -> HTMLCollection
// 4. childNodes -> NodeList

let body = document.querySelector("body");
// console.log(body.children);
// console.log(body.children.children); // 這樣寫會報錯，因為children是HTMLCollection，沒有children屬性
console.log(body.children[0].children[0]); // 這樣寫可以取得第一個子元素的第一個子元素

// 5. parentElement 

let firstP = document.querySelector("p");
console.log(firstP.parentElement); // 取得第一個p元素的父元素div

// 6. classList(此物件可用的method有add(),remove(),toggle(),contains())
firstP.classList.add("blue"); // 新增blue class
firstP.classList.remove("red"); // 移除red class
// toggle()有某個屬性就削掉，沒有某個屬性就加上去
// 可以用在網頁上做燈的開關
firstP.addEventListener("click", () => {
    firstP.classList.toggle("green"); // 點擊時切換green class
});

// contains()就是有沒有包含

// 7. getAttribute(attributeName)
let a = document.querySelector("a");
console.log(a.getAttribute("title")); // 取得a元素的title屬性值

// 8. innerHTML
// let body = document.querySelector("body");
// let myH1 = document.createElement("h1");
// myH1.innerHTML = "這是我的h1";
// body.appendChild(myH1);

// 9. innerText
// let body = document.querySelector("body");
// let myH1 = document.createElement("h1");
// myH1.innerText = "這是我的h1";
// body.appendChild(myH1);

// innerHTML裡面可以有程式碼，且會被當作程式碼，例如: myH1.innerText = "<a>這是我的h1</a>";
// 如果上面那個a tag用innerText寫，會被當作純文字處裡

// 10. querySelector(selector)
// 11. querySelectorAll(selector)

// 12. remove()
let button = document.querySelector("button");
button.addEventListener("click", () => {
    let a = document.querySelector("a");
    a.remove(); // 移除a元素
});

// 13. style - 可以用來改變element object的inline styling。因為JS中不允許使用hyphen(-)，因此
// JS中的CSS屬性都備感為camelCase(background-color要改用backgroundColor)。
// button.style.backgroundColor = "red"; 
// button.style.color = "white"; 
button.style = "background-color: red; color: white;"; // 這樣寫也可以