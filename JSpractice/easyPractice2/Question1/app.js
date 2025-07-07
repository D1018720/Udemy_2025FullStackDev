// 編寫一個名為reverse的函式，參數為一個String，回傳值為順序反轉的String。
function reverse(str) {
    let result = "";
    for (let i = 0; i < str.length; i++) {
        result += str[str.length - 1 - i];
    }
    console.log(result); // 印出反轉後的字串
    return result;
}

reverse("abcd"); // returns "dcba"
reverse("I am a good guy."); // returns ".yug doog a ma I"