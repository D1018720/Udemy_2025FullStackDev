// window.alert() - 在視窗中顯示警告對話框
// window.addEventListener() - 為指定的事件添加事件監聽器
// window.prompt() - 在視窗中顯示提示對話框，並返回用戶輸入的值
// window.setInterval() - 設置一個定時器，定期執行指定的函數或代碼片段
// window.clearInterval() - 停止由 setInterval() 方法設置的定時器
function sayHelloToUser(){
    alert("Hello, User!");
}

let interval = window.setInterval(sayHelloToUser, 3000); // 每3秒執行一次 sayHelloToUser 函數

window.clearInterval(interval); // 停止定時器

// window object常見的屬性
// window.console - return一個console onject，用於在控制台輸出訊息，常用的methods為log()，error()
// window.document - return window包含的文檔，也就是HTML文件
// window.localStorage - return一個local storage物件
// window.sessionStorage - return一個session storage物件