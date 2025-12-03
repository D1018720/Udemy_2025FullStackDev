const name = document.querySelector("#name");
const delay = document.querySelector("#delay");
const button = document.querySelector("#set-alarm");
const output = document.querySelector("#output");

// return Promise object
// pending的delay秒 => fulfilled
// 若delay < 0 => rejected
function alarm(person, delay) {
  return new Promise((resolve, reject) => {
    if (delay < 0) {
      reject("delay不能小於0");
    } else {
      setTimeout(() => {
        resolve(person + "起床!!");
      }, delay);
    }
  });
}

// button.addEventListener("click", async () => {
//   let promiseObject = alarm(name.value, delay.value);
//   promiseObject
//     .then((result) => {
//       output.innerHTML = result;
//     })
//     .catch((e) => {
//       output.innerHTML = e;
//     });
// });

// .then()與.catch()可以改成async寫法
button.addEventListener("click", async () => {
  try {
    let result = await alarm(name.value, delay.value); // 這裡放await後 return的是resolve或reject的值
    output.innerHTML = result;
  } catch (e) {
    output.innerHTML = e;
  }
});


