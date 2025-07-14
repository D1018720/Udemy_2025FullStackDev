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

window.addEventListener("keydown", changeDirection);
let d = "Right";
function changeDirection(e) {
    if (e.key == "ArrowLeft" && d != "Right") {
        d = "Left";
    } else if (e.key == "ArrowRight" && d != "Left") {
        d = "Right";
    } else if (e.key == "ArrowUp" && d != "Down") {
        d = "Up";
    } else if (e.key == "ArrowDown" && d != "Up") {
        d = "Down";
    }
}

function draw() {
    ctx.fillStyle = "black"; // 設定背景顏色
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 畫一個黑色的背景
    
    // 畫蛇
    for (let i = 0; i < snake.length; i++) {
        if (i === 0) {
            // 畫蛇頭
            ctx.fillStyle = "lightgreen";
        } else {
            // 畫蛇身
            ctx.fillStyle = "lightblue";
        }
        ctx.strokeStyle = "white"; // 邊框顏色

        if (snake[i].x < 0) {
            snake[i].x = canvas.width - unit; // 如果蛇頭超出左邊界，則從右邊出現
        } 

        if (snake[i].x >= canvas.width) {
            snake[i].x = 0; // 如果蛇頭超出右邊界, 則從左邊出現
        }

        if (snake[i].y < 0) {
            snake[i].y = canvas.height - unit; // 如果蛇頭超出上邊界，則從下邊出現
        }   

        if (snake[i].y >= canvas.height) {
            snake[i].y = 0; // 如果蛇頭超出下邊界, 則從上邊出現
        }

        // x, y, width, height
        ctx.fillRect(snake[i].x, snake[i].y, unit, unit);
        ctx.strokeRect(snake[i].x, snake[i].y, unit, unit);
    }

    // 以目前的d變數方向，來決定蛇的下一幀要放在哪個座標
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;
    if (d === "Right") {
        snakeX += unit;
    } else if (d === "Left") {
        snakeX -= unit;
    } else if (d === "Up") {
        snakeY -= unit;
    } else if (d === "Down") {
        snakeY += unit;
    }

    let newHead = {
        x: snakeX,  
        y: snakeY,
    };
    
    // 確認蛇是否有吃到果實
    snake.pop(); // 移除蛇尾
    snake.unshift(newHead); // 在蛇頭前面加入新的蛇頭
}

let myGame = setInterval(draw, 100); // 每100毫秒執行一次draw函式