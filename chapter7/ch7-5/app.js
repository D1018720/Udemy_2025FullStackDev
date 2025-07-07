let body = document.querySelector("body"); //element object

console.log(body.childNodes);

// 不論是使用childNodes還是children屬性，所獲得的DOM Tree元素集合，都只會是本身元素在DOM Tree下一層的元素。如果希望獲得下下一層的元素，需要使用，像是element.children[i].children的語法，才能夠取得元素。
// Element objects這種node可以同時使用childNodes以及children屬性，但其他兩種node卻只能使用childNodes屬性。

// Methods -> Return Type
// getElementById(id) -> Element object
// getElementsByClassName(className) -> HTMLCollection
// querySelector(selector) -> Element object
// querySelectorAll(selector) -> NodeList