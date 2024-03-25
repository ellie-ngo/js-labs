// 1. Write a function to check if a number is odd/even

function checkParityOfNumber(n) {
    if (n % 2 === 0) return 'Even Number';
    if (n % 2 === 1) return 'Odd number';

    return 'Not integer number';
}

console.log(checkParityOfNumber(1.5));

// 2. Write a funciton to check if a number is divisible by 5

function isDivisibleBy5(n) {
    return n % 5 === 0;
}

console.log(isDivisibleBy5(14));

// 3. Write a function to check if a number is perfect square

function isSquareNumber(n) {
    if (n <= 0) return false;
    const sqrt = Math.trunc(Math.sqrt(n));

    return sqrt**2 === n;
}

console.log(isSquareNumber(-9));