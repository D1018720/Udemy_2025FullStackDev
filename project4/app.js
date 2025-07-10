let hero = document.querySelector('.hero');
let slider = document.querySelector('.slider');
let animation = document.querySelector('section.animation-wrapper');

const time_line = new TimelineMax();

// parameter1 是要控制的對象
// parameter2 是duration
// parameter3 是控制對象的原始狀態
// parameter4 是控制對象的動畫結束後的狀態
// parameter5 "-=1.2" 是提早1.2秒跑
time_line
    .fromTo(hero, 1, {height: '0%'}, {height: '100%', ease: Power2.easeInOut})
    .fromTo(hero, 1.2, {width: '80%'}, {width: '100%', ease: Power2.easeInOut})
    .fromTo(slider, 1, {x: '-100%'}, {x: '0%', ease: Power2.easeInOut},"-=1.2")
    .fromTo(animation, 0.3, {opacity: 1}, {opacity: 0});


// 上面動畫所花的實際時間為1+1.2+0.3 = 2.5秒
// 這裡設定2.5秒後，讓動畫區塊無法點擊
setTimeout(() => {
    animation.style.pointerEvents = 'none';
}, 2500);

// 讓整個網站的Enter Key都無法使用
window.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
    }
});

// 防止form內部的button交出表單
let allButtons = document.querySelectorAll('button');
allButtons.forEach((button) => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
    });
});

// 選擇select內的option之後，要改變相對應的顏色
let allSelects = document.querySelectorAll('select');
allSelects.forEach((select) => {
    select.addEventListener('change', (e) => {
        setGPA();
        changeColor(e.target); // e.target 是被選擇的select元素
    });
});


// 改變credit之後，GPA也要更新
let credits = document.querySelectorAll('.class-credit');
credits.forEach((credit) => {
    credit.addEventListener('change', () => {
        setGPA();
    });
});

function changeColor(target) {
    if (target.value === "A" || target.value === "A-") {
        target.style.backgroundColor = "lightgreen";
        target.style.color = "black";
    }
    else if (target.value === "B" || target.value === "B-" || target.value === "B+") {
        target.style.backgroundColor = "yellow";
        target.style.color = "black";
    }
    else if (target.value === "C" || target.value === "C-" || target.value === "C+") {
        target.style.backgroundColor = "orange";
        target.style.color = "black";
    }
    else if (target.value === "D" || target.value === "D-" || target.value === "D+") {
        target.style.backgroundColor = "red";
        target.style.color = "white";
    }
    else if (target.value === "F") {
        target.style.backgroundColor = "grey";
        target.style.color = "white";
    }
    else {
        target.style.backgroundColor = "white";
    }
}

function convertor(grade) {
    switch (grade) {
        case "A":
            return 4.0;
        case "A-":
            return 3.7;
        case "B+":
            return 3.4;
        case "B":
            return 3.0;
        case "B-":
            return 2.7;
        case "C+":
            return 2.4;
        case "C":
            return 2.0;
        case "C-":
            return 1.7;
        case "D+":
            return 1.4;
        case "D":
            return 1.0;
        case "D-":
            return 0.7;
        case "F":
            return 0.0;
        default:
            return 0;
    }
}

function setGPA() {
    let formLength = document.querySelectorAll('form').length;
    let credits =  document.querySelectorAll('.class-credit');
    let selects = document.querySelectorAll('select');
    let sum = 0; // GPA計算用分子
    let creditSum = 0; // GPA計算用分母

    for (let i = 0; i < credits.length; i++) {
        if (!isNaN(credits[i].valueAsNumber)) {
            creditSum += credits[i].valueAsNumber;
        }
    }

    for (let i = 0; i < formLength; i++) {
        if (!isNaN(credits[i].valueAsNumber)) {
            sum += credits[i].valueAsNumber * convertor(selects[i].value);
        }
    }

    let result;
    if (creditSum == 0) {
        result = (0.0).toFixed(2); // 如果總學分為0，則GPA為0.00
    } else {
        result = (sum / creditSum).toFixed(2); // 保留兩位小數
    }
    document.getElementById('result-gpa').innerText = result;
}    
