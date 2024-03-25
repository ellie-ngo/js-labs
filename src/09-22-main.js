// using for...i
function transformNumbersV1(numberList) {
    const length = numberList.length;
    if (length === 0 || length === 1) return [...numberList];
    const transList = [];
    for (let i = 0; i < length; i++) {
        const sum = (i > 0 ? numberList[i-1] : 0) + (i < length - 1 ? numberList[i+1] : 0);
        transList.push(sum);
    }
    return transList;
}
console.log(transformNumbersV1([1, 2, 3, 4, 5]));

// using forEach()
function transformNumbersV2(numberList) {
    const length = numberList.length;
    if (length === 0 || length === 1) return [...numberList];
    const transList = [];
    numberList.forEach((value, index) => {
        const sum = (index > 0 ? numberList[index -1] : 0) + (index < length - 1 ? numberList[index + 1] : 0);
        transList.push(sum);
    })
    return transList;
}
console.log(transformNumbersV2([1, 2]));

// using map()
function transformNumbersV3(numberList) {
    const length = numberList.length;
    if (length === 0 || length === 1) return [...numberList];
    const transList = [];
    numberList.map((value, index) => {
        const sum = (index > 0 ? numberList[index -1] : 0) + (index < length - 1 ? numberList[index + 1] : 0);
        transList.push(sum);
    })
    return transList;
}
console.log(transformNumbersV3([3, 5, 1, 8, 9, 7]));
