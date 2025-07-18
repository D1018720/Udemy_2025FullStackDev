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

let addButton = document.querySelector('.plus-btn');
addButton.addEventListener('click', () => { 
    let newForm = document.createElement('form');
    let newDiv = document.createElement('div');
    newDiv.classList.add('grader');

    // 製作五個小元素
    let netInput1 = document.createElement('input');
    netInput1.setAttribute('type', 'text');
    netInput1.setAttribute('list', 'opt');
    netInput1.classList.add('class-type');

    let netInput2 = document.createElement('input');
    netInput2.setAttribute('type', 'text');
    netInput2.classList.add('class-number');

    let netInput3 = document.createElement('input');
    netInput3.setAttribute('type', 'number');
    netInput3.setAttribute('min', '0');
    netInput3.setAttribute('max', '6');
    netInput3.classList.add('class-credit');
    netInput3.addEventListener('change', () => {
        setGPA();
    });

    // here is the select tag
    let newSelect = document.createElement("select");
    newSelect.classList.add("select");
    var opt1 = document.createElement("option");
    opt1.setAttribute("value", "");
    let textNode1 = document.createTextNode("");
    opt1.appendChild(textNode1);
    var opt2 = document.createElement("option");
    opt2.setAttribute("value", "A");
    let textNode2 = document.createTextNode("A");
    opt2.appendChild(textNode2);
    var opt3 = document.createElement("option");
    opt3.setAttribute("value", "A-");
    let textNode3 = document.createTextNode("A-");
    opt3.appendChild(textNode3);
    var opt4 = document.createElement("option");
    opt4.setAttribute("value", "B+");
    let textNode4 = document.createTextNode("B+");
    opt4.appendChild(textNode4);
    var opt5 = document.createElement("option");
    opt5.setAttribute("value", "B");
    let textNode5 = document.createTextNode("B");
    opt5.appendChild(textNode5);
    var opt6 = document.createElement("option");
    opt6.setAttribute("value", "B-");
    let textNode6 = document.createTextNode("B-");
    opt6.appendChild(textNode6);
    var opt7 = document.createElement("option");
    opt7.setAttribute("value", "C+");
    let textNode7 = document.createTextNode("C+");
    opt7.appendChild(textNode7);
    var opt8 = document.createElement("option");
    opt8.setAttribute("value", "C");
    let textNode8 = document.createTextNode("C");
    opt8.appendChild(textNode8);
    var opt9 = document.createElement("option");
    opt9.setAttribute("value", "C-");
    let textNode9 = document.createTextNode("C-");
    opt9.appendChild(textNode9);
    var opt10 = document.createElement("option");
    opt10.setAttribute("value", "D+");
    let textNode10 = document.createTextNode("D+");
    opt10.appendChild(textNode10);
    var opt11 = document.createElement("option");
    opt11.setAttribute("value", "D");
    let textNode11 = document.createTextNode("D");
    opt11.appendChild(textNode11);
    var opt12 = document.createElement("option");
    opt12.setAttribute("value", "D-");
    let textNode12 = document.createTextNode("D-");
    opt12.appendChild(textNode12);
    var opt13 = document.createElement("option");
    opt13.setAttribute("value", "F");
    let textNode13 = document.createTextNode("F");
    opt13.appendChild(textNode13);

    newSelect.appendChild(opt1);
    newSelect.appendChild(opt2);
    newSelect.appendChild(opt3);
    newSelect.appendChild(opt4);
    newSelect.appendChild(opt5);
    newSelect.appendChild(opt6);
    newSelect.appendChild(opt7);
    newSelect.appendChild(opt8);
    newSelect.appendChild(opt9);
    newSelect.appendChild(opt10);
    newSelect.appendChild(opt11);
    newSelect.appendChild(opt12);
    newSelect.appendChild(opt13);

    newSelect.addEventListener("change", (e) => {
        setGPA();
        changeColor(e.target);
    });

    let newButton = document.createElement('button');
    newButton.classList.add('trash-btn');
    let newItag = document.createElement('i');
    newItag.classList.add('fas');
    newItag.classList.add('fa-trash');
    newButton.appendChild(newItag);

    newButton.addEventListener('click', (e) => {
        e.preventDefault();
        e.target.parentElement.parentElement.style.animation = 'scaleDown 0.5s ease forwards';
        e.target.parentElement.parentElement.addEventListener('animationend', (e) => {
            e.target.remove(); 
            setGPA(); // 更新GPA
        });
    });

    newDiv.appendChild(netInput1);
    newDiv.appendChild(netInput2);
    newDiv.appendChild(netInput3);
    newDiv.appendChild(newSelect);
    newDiv.appendChild(newButton);

    newForm.appendChild(newDiv);
    document.querySelector('.all-inputs').appendChild(newForm);
    newForm.style.animation = 'scaleUp 0.5s ease forwards';
});    

let allTrash = document.querySelectorAll('.trash-button');
allTrash.forEach((trash) => {
    trash.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.classList.add('remove');
    });
});
allTrash.forEach((trash) => {
    let form = trash.parentElement.parentElement;
    form.addEventListener('transitionend', (e) => {
        e.target.remove(); // 移除整個form元素
        setGPA(); // 更新GPA
    });
});

// 排序演算法
let btn1 = document.querySelector('.sort-descending');
let btn2 = document.querySelector('.sort-ascending');
btn1.addEventListener('click', () => {
    handleSorting('descending');
});
btn2.addEventListener('click', () => {
    handleSorting('ascending');
});

function handleSorting(direction) {
    let graders = document.querySelectorAll('div.grader');
    let objectArray = [];

    for (let i = 0; i < graders.length; i++) {
        let class_name = graders[i].children[0].value; // class-type
        let class_number = graders[i].children[1].value; // class-number
        let class_credit = graders[i].children[2].value; // class-credit
        let class_grade = graders[i].children[3].value; // select

        if (!(class_name === "" && class_number === "" && class_credit === "" && class_grade === "")) {
            let class_object = {
                class_name,
                class_number,
                class_credit,
                class_grade
            };
            objectArray.push(class_object);
        }
        
    }

    // 取的object array後，我們可以把成績String換成數字
    for (let i = 0; i < objectArray.length; i++) {
        objectArray[i].class_grade_number = convertor(objectArray[i].class_grade);
    }

    objectArray = mergeSort(objectArray);
    if (direction == 'descending') {
        objectArray.reverse(); // 如果是降冪排序，則反轉陣列
    }
    // 根據object array的內容，來更新網頁
    let allInputs = document.querySelector('.all-inputs');
    allInputs.innerHTML = ''; // 清空原有的內容

    for (let i = 0; i < objectArray.length; i++) {
        allInputs.innerHTML += `<form>
            <!-- 在input之間加入註解是為了排版，避免產生多餘的空白 -->
            <div class="grader">
                <!-- 用datalist在class的分類裡讓使用者在輸入內容時，可以透過下拉選單，選擇於先設定好的內容。 -->
                <input type="text" placeholder="class category" class="class-type" list="opt" value=${objectArray[i].class_name}><!--  
                --><input type="text" placeholder="class number" class="class-number"  value=${objectArray[i].class_number}><!--  
                --><input type="number" placeholder="credits" class="class-credit" min="0" max="6"  value=${objectArray[i].class_credit}><!--  
                --><select name="select" class="select">
                    <option value=""></option>
                    <option value="A">A</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B">B</option>
                    <option value="B-">B-</option>
                    <option value="C+">C+</option>
                    <option value="C">C</option>
                    <option value="C-">C-</option>
                    <option value="D+">D+</option>
                    <option value="D">D</option>
                    <option value="D-">D-</option>
                    <option value="F">F</option>
                </select><!-- 
                --><button class="trash-button">
                    <i class="fas fa-trash"></i>
                </button>
            </div>
        </form>`;
    }
    // 因為select無法用上面的value直接更改，所以用JS直接改
    graders = document.querySelectorAll('div.grader');
    for (let i = 0; i < graders.length; i++) {
        graders[i].children[3].value = objectArray[i].class_grade; 
    }

    // 因為上面用.innerHTML方式去改裡面的內容，所以不會有事件監聽器
    // select事件監聽
    allSelects = document.querySelectorAll('select');
    allSelects.forEach((select) => {
        changeColor(select); // 初始化顏色
        select.addEventListener('change', (e) => {
            setGPA();
            changeColor(e.target); // e.target 是被選擇的select元素
        });
    });

    // credit事件監聽
    let allCredits = document.querySelectorAll('.class-credit');
    allCredits.forEach((credit) => {
        credit.addEventListener('change', () => {
            setGPA();
        });
    });

    // 垃圾桶
    let allTrashButtons = document.querySelectorAll('.trash-button');
    allTrashButtons.forEach((trash) => {
        trash.addEventListener('click', (e) => {
            e.preventDefault();
            e.target.parentElement.parentElement.style.animation = 'scaleDown 0.5s ease forwards';
            e.target.parentElement.parentElement.addEventListener('animationend', (e) => {
                e.target.remove(); 
                setGPA(); // 更新GPA
            });
        });
    });
}

function merge(a1, a2) {
    let result = [];
    let i = 0, j = 0;

    while (i < a1.length && j < a2.length) {
        if (a1[i].class_grade_number > a2[j].class_grade_number) {
            result.push(a2[j]);
            j++;
        } else {
            result.push(a1[i]);
            i++;
        }
    }

    while (i < a1.length) {
        result.push(a1[i]);
        i++;
    }

    while (j < a2.length) {
        result.push(a2[j]);
        j++;
    }

    return result;
}

function mergeSort(arr) {
    if (arr.length == 0) {
        return ;
    }

    if (arr.length == 1) {
        return arr;
    } else {
        let meddle = Math.floor(arr.length / 2);
        let left = arr.slice(0, meddle);
        let right = arr.slice(meddle, arr.length);
        return merge(mergeSort(left), mergeSort(right));
    }
}