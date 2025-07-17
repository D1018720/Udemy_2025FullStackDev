// 錯誤處理
// try...catch 語句用於捕捉和處理錯誤
// try {
//     tryStatemtents
// } catch (exctionVar) {
//     catchStatemtents
// } finally {
//     finallyStatements
// }
// 1. tryStatements：要執行的語句。
// 2. catchStatemtents：如果在try中引發異常，則執行的語句。
// 3. finallyStatements：在完成try...catch...語句時，一定會執行的語句。
// 無論是否發生異常，finally塊中的代碼都會執行。
// try...catch...
// try...finally...
// try...catch...finally...

// try {
//     whatever(); 
//     // console.log("This is a try block");
// } catch (error) {
//     console.log(error);
// }

// instanceof operator
// class Person {
//     constructor(name) {
//         this.name = name;
//     }
// }

// let mike = new Person("Mike");  
// console.log(mike instanceof Person); // true

// JS發生的錯誤會自動做成一個Error Object
try {
    whatever(); 
} catch (error) {
    if (error instanceof TypeError) {
        console.log("發生TypeError");
    } else if (error instanceof ReferenceError) {
        console.log("發生ReferenceError");
    } else {        
        console.log("發生其他種類的Error");
    }
} finally {
    console.log("這段程式碼無論如何都會執行");
}
