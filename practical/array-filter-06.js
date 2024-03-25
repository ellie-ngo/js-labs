// tìm tất cả các số mà bắt đầu bằng số lẻ
// viết hàm findAllNumber(numberList) để tìm ra tất cả các số có chữ số đầu tiên là chữ số lẻ

function getTheFirstDigit(number) {
    const unsignedNumber = Math.abs(number);
    const firstDigitCharacter = unsignedNumber.toString().charAt(0);
    return Number.parseInt(firstDigitCharacter);
}
export function findAllNumber(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return [];
    let filterList = [];
    numberList.filter(number => {
        const firstDigit = getTheFirstDigit(number)
        if (firstDigit % 2 !== 0) filterList.push(number) 
    })
    return filterList;
}
