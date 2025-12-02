// 假設balance為銀行餘額
let balance = 0; // shared resource
let mutex = Promise.resolve(); // return fulfilled Promise object

const randomDelay = () => {
  // return value is a Promise
  // and the time for this promise changing from pending to fulfilled
  // is random (0s-0.1s)
  return new Promise((resolve) => setTimeout(resolve, Math.random() * 100));
};

// 告訴我們銀行餘額
async function loadBalance() {
  await randomDelay(); // 等個隨機的0s~0.1s
  return balance;
}

// 存錢進銀行
async function saveBalance(value) {
  await randomDelay();
  balance = value;
}

// 賣葡萄的收入
async function sellGrapes() {
  mutex = mutex
    .then(async () => {
      const balance = await loadBalance();
      console.log(`賣葡萄前，帳戶金額為: ${balance}`);
      const newBalance = balance + 50;
      await saveBalance(newBalance);
      console.log(`賣葡萄後，帳戶金額為: ${newBalance}`);
    })
    .catch((e) => {
      console.log(e);
    });
  return mutex;
}
// mutex = mutex.then(...) 會return一個pending promise。當promise.all()
// 執行多次sellGrapes()或sellOlives()時，每次mutex.then(...)內的callback能否被執行，
// 取決於前一次的mutex.then(...)回傳的promise是否已經從pending變成fulfilled。
// 這樣就能確保每次存取balance時，都是在前一次存取完成之後，避免race condition的發生。
// 賣橄欖的收入
async function sellOlives() {
  mutex = mutex
    .then(async () => {
      const balance = await loadBalance();
      console.log(`賣橄欖前，帳戶金額為: ${balance}`);
      const newBalance = balance + 50;
      await saveBalance(newBalance);
      console.log(`賣橄欖後，帳戶金額為: ${newBalance}`);
    })
    .catch((e) => {
      console.log(e);
    });
  return mutex;
}

async function main() {
  await Promise.all([
    sellGrapes(),
    sellOlives(),
    sellOlives(),
    sellOlives(),
    sellGrapes(),
    sellGrapes(),
    sellGrapes(),
  ]);
  const balance = await loadBalance();
  console.log(`賣葡萄與橄欖後的帳戶金額是$${balance}`);
}

main();
