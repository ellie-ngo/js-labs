// 1. Convert hours to seconds

function convertHoursToSeconds(h) {
    if (h <= 0) return 0;

    return h*60*60;
}

console.log(convertHourToSecond(1.5));

// 2. Given 3 numbers, find max

function findMax(a, b, c) {
    if (a <= b) {
        if (b <= c) return c;
        return b
    }
    if (a >= c) return a;
    return c;
}

console.log(findMax(10, 10, 10));

// version 2
function findMax(a, b, c) {
    let max = a;

    if (b > max) max = b;
    if (c > max) max = c;

    return max;
}
console.log(findMax(10, 10, 10));

// 3. Given 3 number, find max even number

function findMaxEven(a, b, c) {
    let max = Number.NEGATIVE_INFINITY;

    if (a % 2 === 0 && a > max) max = a;
    if (b % 2 === 0 && b > max) max = b;
    if (c % 2 === 0 && c > max) max = c;

    return max;
}
console.log(findMaxEven(4, 6, 18));