const c = document.getElementById("myCanvas");
const canvasHeight = c.height;
const canvasWidth = c.width;
const ctx = c.getContext("2d");
let circle_x = 160;
let circle_y = 60;
let radius = 20;
let xSpeed = 15;
let ySpeed = 15;
let ground_x = 100;
let ground_y = 500;
let ground_height = 5;
let brickArray = [];

function getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Brick {
    constructor(x,y) {
        this.x = x;
        this.y = y;
        this.width = 50;
        this.height = 50;
        brickArray.push(this);
    }

    drawBrick() {   
        ctx.fillStyle = "lightgreen";
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

// 製作所有磚塊
for (let i = 0; i < 10; i++) {
    new  Brick(getRandomArbitrary(0, 950), getRandomArbitrary(0, 550));
    // 檢查新磚塊是否與現有磚塊重疊，若重疊則重新產生
    // 取得磚塊陣列中的最後一個磚塊
    let lastBrick = brickArray[brickArray.length - 1];

    // 遍歷除了最後一個之外的所有磚塊
    for (let j = 0; j < brickArray.length - 1; j++) {
        let b = brickArray[j]; // 目前要檢查的磚塊

        // 檢查 lastBrick 是否與目前的磚塊 b 有重疊
        while (
            lastBrick.x < b.x + b.width &&                // lastBrick 左邊界在 b 右邊界左側
            lastBrick.x + lastBrick.width > b.x &&        // lastBrick 右邊界在 b 左邊界右側
            lastBrick.y < b.y + b.height &&               // lastBrick 上邊界在 b 下邊界上方
            lastBrick.y + lastBrick.height > b.y          // lastBrick 下邊界在 b 上邊界下方
        ) {
            // 如果有重疊，則重新隨機產生 lastBrick 的位置
            lastBrick.x = getRandomArbitrary(0, 950);
            lastBrick.y = getRandomArbitrary(0, 550);

            // 重新從頭檢查所有磚塊，確保新的位置不會與任何磚塊重疊
            j = -1;
        }
    }
}

c.addEventListener("mousemove", (e) => {
    ground_x = e.clientX - 100; // 讓地板的中心在滑鼠位置
});

function drawCircle() {
    // 確認球是否打到橘色地板
    if (circle_x >= ground_x - radius && 
        circle_x <= ground_x + 200 + radius && 
        circle_y >= ground_y - radius && 
        circle_y <= ground_y + radius) {
        if (ySpeed > 0) { 
            circle_y -= 50;
        } else {
            circle_y += 50;
        }
        ySpeed *= -1; 
    }

    // 確認球有沒有打到邊界
    // 確認右邊邊界
    if (circle_x >= canvasWidth - radius) { 
        xSpeed *= -1; // 反向
    }
    // 確認左邊邊界
    if (circle_x <= radius) {
        xSpeed *= -1; // 反向
    }
    // 確認上邊邊界
    if (circle_y <= radius) {
        ySpeed *= -1; // 反向
    }
    // 確認下邊邊界
    if (circle_y >= canvasHeight - radius) {
        ySpeed *= -1; // 反向
    }    

    // 更動圓的座標
    circle_x += xSpeed;
    circle_y += ySpeed;

    // 畫出黑色背景
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, canvasWidth, canvasHeight);

    // 畫出磚塊
    brickArray.forEach((brick) => {
        brick.drawBrick();
    });

    // 畫出可控制的地板
    ctx.fillStyle = "orange";
    ctx.fillRect(ground_x, ground_y, 200, ground_height);

    // 畫出圓球
    ctx.beginPath();
    ctx.arc(circle_x, circle_y, radius, 0, Math.PI * 2);
    ctx.stroke();
    ctx.fillStyle = "yellow";
    ctx.fill();
}

let game = setInterval(drawCircle, 25);