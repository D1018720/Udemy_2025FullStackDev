async function fetchProduct() {
  try {
    // 在asynchronous function中，您可以在調用會return promise的函數之前使用await關鍵字，
    // 使代碼在該點等待直到Promise被fulfilled或rejected。
    // await只能在asynchronous function內使用。
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json"
    );

    // console.log(response);
    // response.json()也是一個會return Promise的非同步函數
    const data = await response.json();
    console.log(data);
  } catch (e) {
    console.log(e);
  }
}

fetchProduct();

// 所有async function都一定會return一個Promise物件，不論我們在async function內return什麼值，
// 在async function內部return的任何值，在async function所return的Promise變成fulfilled時，
// 執行.then()的callback func內部自動變成參數。
// EX:
async function example() {
  return 42;
}

// 這時promise還不是42，而是fulfilled的promise，裡面包著42
let promise = example();
// .then()的callback func內部的value參數會是42
promise.then((value) => {
  console.log(value); 
});

// async function fetchSomething() {
//   const response = await fetch(URL);
// }
// 調用await fetch()，response不會是一個Promise!，會得到URL回應的完整Response Object，
// 就像fetch()是一個同步函數一樣(fetch本身是非同步函數)。