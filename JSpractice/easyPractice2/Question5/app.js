// pyramid(1);
//*
// pyramid(2);
//  *
// ***
// pyramid(4);
//    *
//   ***
//  *****
// *******

// 口口口*       3 space 1 star
// 口口 ***      2 space 3 star
// 口  *****     1 space 5 star
//    *******    0 space 7 star

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

// n - 1 個space 1個star
// n - 2 個space 3個star
// n - 3 個space 5個star
// n - 4 個space 7個star

function pyramid(n) {
    let star = 1;
    let space = n - 1;
    while (space >= 0) {
        printStar(star, space);
        star += 2;
        space -= 1;
    }
}


pyramid(1);
console.log("===================");
pyramid(2);
console.log("===================");
pyramid(4);
