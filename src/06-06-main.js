// 1. Random a number in range of [0,n]
// n = 10
// Sử dụng hàm Math.random() ----> sẽ trả về giá trị trong khoảng [0,1]

function randomNumber(n) {
    if (n <= 0) return -1;
    
    const random = Math.random() * n;
    return Math.round(random);
}

console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));
console.log(randomNumber(3));

// 2. Random a number in range of [a,b] với a < b

// tự làm
function randomNumber2(a, b) {
    if (a >= b) return - 1;
    return Math.round(Math.random() * a) + (Math.abs(b)-Math.abs(a));
}

console.log(randomNumber2(3, 4));
console.log(randomNumber2(3, 5));
console.log(randomNumber2(2, 1));
console.log(randomNumber2(-3, -1));
console.log(randomNumber2(-3, 5));
console.log(randomNumber2(3, 15));
console.log(randomNumber2(0, 1));
console.log(randomNumber2(1000,9999));

// chữa bài
function randomNumberInrange(a, b) {
    if ( a >= b) return -1;

    const random = Math.random() * (b-a);
    return Math.round(random) + a;
}

console.log(randomNumberInrange(3, 4));
console.log(randomNumberInrange(3, 5));
console.log(randomNumberInrange(2, 1));
console.log(randomNumberInrange(-3, -1));
console.log(randomNumberInrange(-3, 5));
console.log(randomNumberInrange(3, 15));
console.log(randomNumberInrange(10, 99));