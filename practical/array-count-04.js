// đếm số lượng các số khác nhau có trong mảng
// viết hàm countUniqueNumber(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng

export function countUniqueNumber(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return 0;
    const uniqueList = [];
    for (let i = 0; i < numberList.length; i++ ) {
        const number = numberList[i];
        if (!uniqueList.includes(number)) uniqueList.push(number)
    }

    return uniqueList.length
}


// cách 2: using object  map --> keys of object

// function countUniqueNumber(numberList) {
//     if (!Array.isArray(numberList) || numberList.length === 0) return 0;
//     const flag = numberList.reduce((flag, number) => {
//         flag[number] = true;
//         return flag
//     }, {});
//     return Object.keys(flag).length;
// }
