function isSymmetricNumber(n) {
    if (n < 0 || n > 999) return false;

    const ones = n % 10;
    const tens = (Math.trunc(n / 10)) % 10;
    const hundreds = Math.trunc(n / 100);

    if (n.toString().length === 1) return true;
    if (n.toString().length === 2 && ones === tens) return true;
    if (n.toString().length === 3 && ones === hundreds) return true;

    return false;
}

console.log(isSymmetricNumber(1));
console.log(isSymmetricNumber(9));
console.log(isSymmetricNumber(10));
console.log(isSymmetricNumber(11));
console.log(isSymmetricNumber(22));
console.log(isSymmetricNumber(56));
console.log(isSymmetricNumber(101));
console.log(isSymmetricNumber(910));
console.log(isSymmetricNumber(636));
console.log(isSymmetricNumber(1111));