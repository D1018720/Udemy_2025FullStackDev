let fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
);

console.log(fetchPromise); 

// 串接很多.then()，這就是callback hell
fetchPromise.then((response) => {
    // 用response.json()換成物件
    response.json().then(data => {
        console.log(data);
    })
});

fetchPromise
    // 簡化寫法 arrow function expression 不寫大括號就可以不用寫return
    // .then((response) => {
    //     return response.json();
    // })
    .then((response) => response.json())
    .then(data => {
        console.log(data);
    });
    // 當串聯多個.then()，後一個.then()內部的callback func 被執行時，所用的參數是前一個.then()中的callback func return的值