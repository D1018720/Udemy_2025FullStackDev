let answer = Math.floor(Math.random() * 100); // 0-100之間的隨機數字(不包含100)
let n1 = 0;
let n2 = 99;

while (true) {
    let guess = prompt("請輸入你的猜測 (" + n1 + " ~ " + n2 + ")");

    if (guess < n1 || guess > n2) {
        alert("無效猜測。請重新猜測一個數字");
        continue;
    }

    if (guess == answer) {
        alert("恭喜你猜對了！答案是 " + answer);
        break;
    } else if (guess < answer) {
        n1 = guess;
    } else if (guess > answer) {
        n2 = guess;
    }
}