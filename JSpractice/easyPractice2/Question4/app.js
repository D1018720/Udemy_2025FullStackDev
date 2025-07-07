// 回文是指，正著讀或反著讀都一樣的句子。例如:【上海自來水來自海上】是迴文。寫一個名為palindrome的函式，它接受一個String作為參數，回傳值為一個boolean，告訴我們參數是否為回文。
function palindrome(str) {
    let i = 0;
    let j = str.length - 1;

    while (i < j) {
        if (str[i] !== str[j]) {
            console.log(false);
            return false;
        }
        i++;
        j--;
    }

    console.log(true);
    return true;
}

palindrome("bearaeb"); // returns true
palindrome("whatever revetahw"); // returns true
palindrome("Aloha, how are you today?"); // returns false