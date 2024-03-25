function calcAvgOfAllEvenNumbers(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return 0;
    let count = 0;
    let sum = 0;
    numberList.forEach(x => {
        if ( x % 2 === 0) (count += 1) && (sum += x);
    })
     return count === 0 ? 0 : Math.round(sum/count);
}
console.log(calcAvgOfAllEvenNumbers([1, 2, 4, 8]));