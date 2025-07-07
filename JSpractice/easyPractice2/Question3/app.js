// 編寫一個名為isPrime的函式，它接受一個整數作為參數，回傳值為一個boolean，告訴我們參數是否為一個質數。
function isPrime(num) {
    if (num == 1) {
        console.log(false);
        return false; // 0 and 1 are not prime numbers
    }   

    let starter = 2;
    while (starter < num) {
        if (num % starter === 0) {
            console.log(false);
            return false; // Found a factor, not a prime number
        }
        starter++;
    }
    console.log(true);
    return true; // No factors found, it's a prime number
}

isPrime(1); // returns false
isPrime(5); // returns true
isPrime(91); // returns false
isPrime(1000000); // returns false