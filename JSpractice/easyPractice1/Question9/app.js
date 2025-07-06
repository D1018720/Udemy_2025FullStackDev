// 編寫一個名為stars2的函式，功能為按以下模式打印出星星層：
// stars2(1);
// *
// stars2(2);
// *
// **
// *
// stars2(3);
// *
// **
// ***
// **
// *
// stars2(4);
// *
// **
// ***
// ****
// ***
// **
// *
function stars2(n) {
    for (let i = 1; i <= n; i++) {
        let starLine = '';
        for (let j = 1; j <= i; j++) {
            starLine += '*';
        }
        console.log(starLine);
    }
    for (let i = n - 1; i >= 1; i--) {
        let starLine = '';
        for (let j = 1; j <= i; j++) {
            starLine += '*';
        }
        console.log(starLine);
    }
}

stars2(1);
console.log('==========================='); 
stars2(2);
console.log('==========================='); 
stars2(3);
console.log('==========================='); 
stars2(4);