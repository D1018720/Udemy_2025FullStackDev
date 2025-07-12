// 費波那契數列:
// 1. F(0) = 0
// 2. F(1) = 1
// 3. F(n) = F(n-1) + F(n-2) for n >= 2

function fibonacci(n) {
    if (n === 0) return 0; // 基礎情況
    if (n === 1) return 1; // 基礎情況
    return fibonacci(n - 1) + fibonacci(n - 2); // 遞迴調用
}

console.log(fibonacci(5)); // 5，因為F(5) = F(4) + F(3) = 3 + 2 = 5