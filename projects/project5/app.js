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
function createSnake() {
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
}

class Fruit {
    constructor() {
        this.x = Math.floor(Math.random() * col) * unit; // 隨機產生一個x座標
        this.y = Math.floor(Math.random() * row) * unit; // 隨機產生一個y座標
    }

    drawFruit() {
        ctx.fillStyle = "yellow"; // 設定果實顏色
        ctx.fillRect(this.x, this.y, unit, unit); // 畫出果實
    }

    pickALocation() {
        let overlapping = false; // 用來檢查果實是否與蛇身重疊
        let new_x;
        let new_y;

        function checkOverlap(new_x, new_y) {
            for (let i = 0; i < snake.length; i++) {
                if (snake[i].x === new_x && snake[i].y === new_y) {
                    overlapping = true; // 如果果實與蛇身重疊，則設定overlapping為true
                    return; // 找到重疊就可以跳出迴圈了
                } else {
                    overlapping = false; // 如果沒有重疊，則設定overlapping為false
                }
            }
        }

        do {
            new_x = Math.floor(Math.random() * col) * unit; // 隨機產生一個新的x座標
            new_y = Math.floor(Math.random() * row) * unit; // 隨機產生一個新的y座標
            
            checkOverlap(new_x, new_y); // 檢查新的果實位置是否與蛇身重疊
        } while (overlapping); // 如果果實與蛇身重疊，則重新產生一個果實位置\

        this.x = new_x; // 更新果實的x座標
        this.y = new_y; // 更新果實的y座標
    }
}    

// 初始設定
createSnake()
let myfruit = new Fruit(); // 建立一個新的果實物件

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

    // 每次按下方向鍵後，在下一幀被畫出來前
    // 不接受任何keydown事件
    // 這樣可以防止連續按鍵導致蛇自殺
    window.removeEventListener("keydown", changeDirection);
}

let highestScore;
loadHighestScore(); // 載入最高分數
let score = 0; // 設定初始分數
document.getElementById("myScore").innerHTML = "遊戲分數：" + score; // 顯示初始分數
document.getElementById("myScore2").innerHTML = "最高分數：" + highestScore; // 顯示最高分數

function draw() {
    // 每次畫圖前，確認蛇有沒有咬到自己
    for (let i = 1; i < snake.length; i++) {
        if (snake[0].x === snake[i].x && snake[0].y === snake[i].y) {
            clearInterval(myGame); // 如果蛇頭與蛇身重疊，則停止遊戲
            alert("Game Over!"); // 顯示遊戲結束的提示
            return; // 結束draw函式
        }
    }

    ctx.fillStyle = "black"; // 設定背景顏色
    ctx.fillRect(0, 0, canvas.width, canvas.height); // 畫一個黑色的背景
    
    myfruit.drawFruit(); // 畫出果實

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
    if (snake[0].x == myfruit.x && snake[0].y == myfruit.y) {
        myfruit.pickALocation(); // 如果吃到果實，則重新產生一個果實位置
        score++;
        setHighestScore(score); // 更新最高分數
        document.getElementById("myScore").innerHTML = "遊戲分數：" + score;
        document.getElementById("myScore2").innerHTML = "最高分數：" + highestScore; // 更新顯示的最高分數
    } else {
        snake.pop(); // 如果沒有吃到果實，則移除蛇尾
    }
    
    snake.unshift(newHead); // 在蛇頭前面加入新的蛇頭
    window.addEventListener("keydown", changeDirection); // 重新設定keydown事件，防止連續按鍵導致蛇自殺
}

let myGame = setInterval(draw, 100); // 每100毫秒執行一次draw函式

function loadHighestScore() {
    if (localStorage.getItem("highestScore") === null) {
        highestScore = 0; // 如果沒有最高分數，則設定為0
    } else {
        highestScore = Number(localStorage.getItem("highestScore")); // 從localStorage載入最高分數
    }
} 

function setHighestScore(score) {
    if (score > highestScore) {
        localStorage.setItem("highestScore", score); // 儲存到localStorage
        highestScore = score; // 如果目前分數高於最高分數，則更新最高分數
    }
}
