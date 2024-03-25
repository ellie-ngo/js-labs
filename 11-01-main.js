// Tính S(n) = 1 + 2 + 3 + … + n

export function calcSum(n) {
    if (n <= 0) return 0
    let sum = 0;
    for (let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}
// console.log(calcSum(3));