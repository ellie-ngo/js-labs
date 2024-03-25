// for...i: return false if found number is not perfect
function isAllPerfectNumbersV1(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;
    for (let i = 0; i < numberList.length; i++) {
        const num = numberList[i];
        if (!isPerfectNumber(num)) return false;
    }
    return true;
}
console.log(isAllPerfectNumbersV1([28, 6, 5]));
  
// reduce: check if the number of perfect numbers is equal to length
// optional: you can practice more to use forEach or filter :)
function isAllPerfectNumbersV2(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;
    const count = numberList.reduce((sum, number) => isPerfectNumber(number) ? sum +=1 : sum, 0);
    return count === numberList.length;
}
console.log(isAllPerfectNumbersV2([28, 6, 1]));
  
  
// every
function isAllPerfectNumbersV3(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;
    return numberList.every(x => isPerfectNumber(x));
}
console.log(isAllPerfectNumbersV2([28, 6]));

function isPerfectNumber(n) {
    if (n <= 1 || n >= 1000) return false;
    const numberList = [];
    for (let i = 1; i < n; i++) {
        if (n % i === 0) numberList.push(i);
    }
    const sum = numberList.reduce((sum, number) => sum = sum + number);
    return sum === n;
}