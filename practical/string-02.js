// Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str
// Trả về một object với:
// key là từ có xuất hiện trong str
// value là số lần xuất hiện của key

function statisticsWords(str) {
    if (str.length === 0) return {};
    let statistic = {};
    str
    .split(' ')
    .filter((x) => x !== '')
    .forEach((word) => {
        statistic[word] = statistic[word] !== undefined ? statistic[word] += 1 : 1;
        }
    )
    return statistic;
}

console.log(statisticsWords('toi la toi co toi biet'));

console.log(Number('ab'));