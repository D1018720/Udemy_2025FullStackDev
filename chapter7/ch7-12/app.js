// Inheritance繼承
// 1. subclass子類 - 從另一個class繼承他的class。也被稱做child class。
// 2. superclass父類 - 繼承自的class。也被稱做parent class。
let button = document.querySelector("button");

button.addEventListener("click", () => {
    let form = document.querySelector("form");
    form.reset(); // reset()方法會重置表單元素的值為預設值
});