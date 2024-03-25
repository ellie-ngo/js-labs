// Array exercise:


// 1. Print number: 1 -> 10
function printNumbers() {
    for (let i = 1; i <= 10; i++) {
        console.log(i);
    }
}
printNumbers();

// 2. Print even numbers [2, 4, 6, 8, 10]
function printEvenNumber() {
    for (let i = 1; i <= 10; i++) {
        if (i % 2 === 0) console.log(i);
    }
}
printEvenNumber();
// cách 2
function printEvenNumbers() {
    for (let i = 2; i <= 10; i+=2) {
        console.log(i);
    }
}

// 3. Print even numbers but less than n
function printEvenNumbersN(n) {
    for (let i = 0; i < n; i+=2) {
        console.log(i);
    }
}
printEvenNumberLessThanN(19);