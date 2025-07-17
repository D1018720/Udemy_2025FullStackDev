// Switch Statement
// 在 Switch Statement中，若沒有break，則會繼續執行下一個case的程式碼，
// 甚至執行到default子句，而不管該case的值是否匹配，這稱為'fall-through'。
let day = prompt("請輸入今天星期幾?");

switch (day) {
    case "星期一":  
        alert("今天是星期一");
        break;
    case "星期二":
        alert("今天是星期二");
        break;
    case "星期三":
        alert("今天是星期三");
        break;
    case "星期四":
        alert("今天是星期四");
        break;
    case "星期五":
        alert("今天是星期五");
        break;
    case "星期六":
        alert("今天是星期六");
        break;
    case "星期日":
        alert("今天是星期日");
        break;
    default:
        alert("輸入錯誤，請輸入星期一到星期日");
        break;
}