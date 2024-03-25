// using for...i
function createArrayInRangeV1(a, b) {
    if (a > b) return undefined;
    const arr = [];
    for (let i = a; i <= b; i++) {
        arr.push(i);
    }
    return arr;
}
console.log(createArrayInRangeV1(-3, 0));

// using Array.from()
function createArrayInRangeV2(a, b) {
    if (a > b) return undefined;
    const l = b - a + 1;
    return Array.from({length: l}, (v, i) => i+a);
}
console.log(createArrayInRangeV2(0, 10));