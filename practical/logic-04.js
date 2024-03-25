// tìm số có số lần xuất hiện nhiều nhất
// Viết hàm findMostFrequenNumber(numberList) tìm số có số lần xuất hiện nhiều nhất 
// trong mảng numberList, trường hợp có nhiều số cùng tần suất xuất hiện thì trả về số đầu tiên

export function findMostFrequenNumber(numberList) {
    if (!Array.isArray(numberList) ||numberList.length === 0) return undefined;

    const statistics = {};
    let maxKey = undefined

    for (let i = 0; i < numberList.length; i++) {
        const number = numberList[i];
        statistics[number] = statistics[number] === undefined? 1 : statistics[number] + 1;

        if (maxKey === undefined || statistics[number] > statistics[maxKey]) {
            maxKey = number;
        }
    }

    return Number.parseInt(maxKey);

}