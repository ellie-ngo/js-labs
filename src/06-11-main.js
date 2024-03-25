// 1. Get the ones of a number having 3 digits

function getOnes(a) {
    if (a < 100) return -1;

     return a % 10;
}

console.log(getOnes(985));

// 2. Get the tens of a number having 3 digits

function getTens(a) {
    if (a < 100) return -1;

    const b = a % 100;
    const c = b % 10;

    return (b - c) / 10;
}
console.log(getTens(985));

// 3. Get the hundreds of a number having 3 digits

function getTens(a) {
    if (a < 100) return -1;

    const b = a % 100;

    return (a - b) / 100;
}
console.log(getTens(985));

// 4. Sum all digits of a number having 3 digits

function sumAllNumber(a) {
    if (a < 100 || a > 999) return -1;

    const b = a % 100;
    const ones = a % 10;
    const tens = (b - ones) / 10;
    const hundreds = (a - b) / 100;

    return ones + tens + hundreds;
}
console.log(sumAllNumber(985));