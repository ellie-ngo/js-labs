//Write a function  to find max

// for...i
function findMaxI(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
    let max = numberList[0];
    for (let i = 1; i < numberList.length; i++) {
        if (max < numberList[i]) max = numberList[i];
    }
    return max;
}
console.log(findMaxI([10101, 2, 3, 99, 4, 5]));


// forEach
function findMaxE(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
    let max = numberList[0];
    numberList.forEach(number => {
        if (number > max) max = number;
    });
    return max;
}
console.log(findMaxE([10101, 2, 3, 99, 4, 5]));


// reduce
function findMaxReduce(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return undefined;
    let max = numberList[0];
    return numberList.reduce((max, number) => (number > max ? number : max))
}
console.log(findMaxReduce([10101, 20000, 3, 99, 4000000, 5]));
