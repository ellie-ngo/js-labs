// number-01: Kiểm tra số tăng dần
// viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
// 0 < n < 1000000
// số tăng dần có ít nhất 2 chữ số
// chữ số bên phải luôn lớn hơn chữ số bên trái
// trả về true nếu là số tăng dần, ngược lại trả về false

export function isIncreasingNumber(n) {
    if (n <= 9 || n >= 1000000) return false;
    const numberList = n.toString();
    for (let i = 1; i < numberList.length; i++) {
        if (numberList[i] <= numberList[i-1]) return false;
    }
    return true;
}

// console.log(isIncreasingNumber(123321));