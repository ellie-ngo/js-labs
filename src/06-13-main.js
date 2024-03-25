function getMaxDigit(n) {
    if (n < 0 || n >= 1000) return -1;

    const ones = n % 10;
    const tens = (Math.trunc(n / 10)) % 10;
    const hundreds = Math.trunc(n / 100);

    let max = ones;
    if (tens >= max) max = tens;
    if (hundreds >= max) max = hundreds;

    return max;
}
console.log(getMaxDigit(289));