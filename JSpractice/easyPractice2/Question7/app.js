// 編寫一個名為factorPrime的函式，唯一的參數是個整數n，回傳值是一個String，表示n的質因數分解結果。
function factorPrime(n) {
    let answer = n + " = "; 
    let p = 2; // 從最小的質數開始
    while (n > 1) {
        if (n % p == 0) { // 如果p是n的因數
            n /= p; // 將n除以p
            answer += p + " x "; // 將p加入答案
        } else {
            p++; // 否則，檢查下一個數字
        }
    }
    
    let answer2 = "";
    for (let i = 0; i < answer.length - 3; i++) {
        answer2 += answer[i]; // 去掉最後的 " x "
    }
     
    console.log(answer2);
    return answer2; 
}

factorPrime(120); // returns "2 x 2 x 2 x 3 x 5"