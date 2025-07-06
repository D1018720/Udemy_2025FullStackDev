// 編寫一個名為stars的函式，功能為按以下模式打印出星星層：
// stars(1);
// *
// stars(4);
// *
// **
// ***
// ****
function stars(n) {
    let starLine = '';
    for (let i = 1; i <= n; i++) {
        starLine += '*';
        console.log(starLine);
    }
}

stars(1);
console.log('==========================='); 
stars(4);