// NodeList
let hellos = document.querySelectorAll(".hello");

hellos.forEach((hello) => { 
    console.log(hello);
});

// HTMLCollection
let helloss = document.getElementsByClassName("hello");
helloss.forEach((hello) => {
    console.log(hello);
});
// 不能這樣寫!