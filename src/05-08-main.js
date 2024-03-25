// Write a function to check if a number a positive even number 
// If yes, return true> Otherwise return false

// flag -- version 1
function isPositiveEvenNumberV1(n) {
    let isValid; 

    if (n > 0 && n % 2 === 0) {
        isValid = true;
    } else {
        isValid = false;
    }

    return isValid;
}

// version 2
function isPositiveEvenNumberV2(n) {
    let isValid = false; 

    if (n > 0 && n % 2 === 0) {
        isValid = true;
    } 

    return isValid;
}

// version 3
function isPositiveEvenNumberV3(n) {
    if (n > 0 && n % 2 === 0) {
        return true;
    } 

    return false;

}

// version 4
export function isPositiveEvenNumberV4(n) {
    return n > 0 && n % 2 === 0;
}
// console.log(isPositiveEvenNumber(10));
