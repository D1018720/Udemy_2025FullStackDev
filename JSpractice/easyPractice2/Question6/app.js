// inversePyramid(4);
// *******
//  *****
//   ***
//    *
function printStar(star, space) {
    let str = "";
    for (let i = 0; i < space; i++) {
        str += " ";
    }
    for (let i = 0; i < star; i++) {
        str += "*";
    }
    console.log(str);
}

function inversePyramid(n) {
    let star = 2  * n - 1; 
    let space = 0;
    while (star >= 0) {
        printStar(star, space);
        star -= 2;
        space += 1;
    }
}

inversePyramid(4);