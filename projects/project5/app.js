const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
// getContext() 會回傳一個canvas的drawing context。
// drawing context 可以用來在canvas內畫圖。

// 設定每單位距離是多少像素
// 這裡設定為20像素，這樣每個方塊的大小就是20x20像素
const unit = 20;
const row = canvas.height / unit; 
const col = canvas.width / unit; 

let snake = []; // array中每個元素，都是一個物件，用來儲存蛇的身體x, y座標
snake[0] = {
    x: 80,
    y: 0,
};

snake[1] = {
    x: 60,
    y: 0,
};

snake[2] = {
    x: 40,
    y: 0,
};

snake[3] = {
    x: 20,
    y: 0,
};

for (let i = 0; i < snake.length; i++) {
    if (i === 0) {
        // 畫蛇頭
        ctx.fillStyle = "lightgreen";
    } else {
        // 畫蛇身
        ctx.fillStyle = "lightblue";
    }
    ctx.strokeStyle = "white"; // 邊框顏色

    // x, y, width, height
    ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
    ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
}