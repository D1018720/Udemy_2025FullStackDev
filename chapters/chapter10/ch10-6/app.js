// 客製化錯誤訊息
class NotArrayError extends TypeError {
    constructor(message) {
        super(message);
    }

    printSolution() {
        return "請傳入一個陣列作為參數。";
    }
}

function sumArray(arr) {
    // Array Class static method
    if (!Array.isArray(arr)) {
        // throw "參數並非array!";
        throw new NotArrayError("參數並非array!");  // 使用TypeError來表示類型錯誤，會顯示哪裡有錯誤。
    }
    let result = 0;
    arr.forEach((element) => {
        result += element;
    });
    return result;
}

try {
    sumArray("hello");
} catch (e) {
    // console.log(e);
    console.log(e.printSolution()); // 呼叫自訂義的錯誤方法
}