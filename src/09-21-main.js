function isPerfectNumber(n) {
    if (n <= 1 || n >= 1000) return false;
    const numberList = [];
    for (let i = 1; i < n; i++) {
        if (n % i === 0) numberList.push(i);
    }
    const sum = numberList.reduce((sum, number) => sum = sum + number);
    return (sum === n);
}
console.log(isPerfectNumber(9));