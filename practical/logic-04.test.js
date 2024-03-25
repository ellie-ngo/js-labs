// tìm số có số lần xuất hiện nhiều nhất
// Viết hàm findMostFrequenNumber(numberList) tìm số có số lần xuất hiện nhiều nhất 
// trong mảng numberList, trường hợp có nhiều số cùng tần suất xuất hiện thì trả về số đầu tiên

import {findMostFrequenNumber} from './logic-04'

describe('findMostFrequenNumber(numberList)', () => {
    it('should return undefined if empty', () => {
        expect(findMostFrequenNumber([])).toBeUndefined();
        expect(findMostFrequenNumber({})).toBeUndefined();
    });

    it('should return correct most frequent number', () => {
        expect(findMostFrequenNumber([1])).toBe(1);
        expect(findMostFrequenNumber([1, 2])).toBe(1);
        expect(findMostFrequenNumber([1, 2, 2])).toBe(2);
        expect(findMostFrequenNumber([1, 2, 2, 1, 1])).toBe(1);
    });
});