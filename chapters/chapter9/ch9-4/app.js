// Call stack是JS引擎追蹤本身在調用多個函數的程式碼中位置的機制。
// 1. 當執行函式f1時，JS會將其添加到call stack中，然後開始執行該函式。
// 2. 若該函式內部又調用其他函式f2，則將f2添加到call stack中，並開始執行f2。
// 3. 當f2執行完畢，JS會將其從call stack中移除，然後從f1停止的位置繼續執行。
// 4. 如果call stack堆疊過高，可能會導致stack overflow錯誤。

function f1() {
    console.log('開始執行f1...');
    f2();
    console.log('結束執行f1...');
}

function f2() {
    console.log('開始執行f2...');
    console.log('結束執行f2...');
}

f1(); // 開始執行f1... 開始執行f2... 結束執行f2... 結束執行f1...

// 數學上，遞迴關係recurrence relation是一種定義數列的方式:數列的每一項目定義為前面項的函數。
// 例如:
// 1. A base case S(1) = 2
// 2. S(n) = 2*S(n-1) for n >= 2
// 遞迴就有相似的概念，當一個函式內部，執行自己這個函式。