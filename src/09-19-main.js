// Using loop from 2 to n - 1
function isPrimeV1(n) {
    if (n < 2) return false;
    for (let i = 2; i < n; i++) {
        if (n % i === 0) return false
    }
    return true
}
console.log(isPrimeV1(33));



// Using loop from 2 to square root of n
function isPrimeV2(n) {
    if (n < 2) return false;
    const sqr = Math.sqrt(n);
    for (let i = 2; i <= Math.trunc(sqr); i++) {
        if (n % i === 0) return false
    }
    return true
}
console.log(isPrimeV2(17));