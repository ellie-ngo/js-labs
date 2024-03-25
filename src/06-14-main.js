function compareNumbers(a, b) {
    if (a > b) return 1;
    if (a < b) return -1;
    return 0;
}
console.log(compareNumbers(3, 5));
console.log(compareNumbers(9, 7));
console.log(compareNumbers(7, 7));