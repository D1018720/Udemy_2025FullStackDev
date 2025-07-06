// 編寫一個名為fib的函式，唯一的參數是個整數n，回傳值為斐波那契數列的第n項。
function fib(n) {
    if (n <= 0) return 0; // 如果 n 小於等於 0，返回 0
    if (n === 1) return 1; // 如果 n 等於 1，返回 1

    let a = 0, b = 1; // 初始化前兩項
    for (let i = 2; i <= n; i++) {
        const temp = a + b; // 計算下一項
        a = b; // 更新前一項
        b = temp; // 更新當前項
    }
    return b; // 返回第 n 項
}
console.log(fib(0)); // 0
console.log(fib(1)); // 1   
console.log(fib(2)); // 1
console.log(fib(3)); // 2
console.log(fib(8)); // 21
