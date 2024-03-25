// đếm số lượng các số khác nhau có trong mảng
// viết hàm countUniqueNumber(numberList) để tìm ra có bao nhiêu số khác nhau trong mảng

import {countUniqueNumber} from './array-count-04'

describe('countUniqueNumber(numberList)', () => {
    it('should return 0 if empty', () => {
        expect(countUniqueNumber([])).toBe(0);
        expect(countUniqueNumber({})).toBe(0);
        expect(countUniqueNumber(123)).toBe(0);
        expect(countUniqueNumber('')).toBe(0);
        expect(countUniqueNumber(true)).toBe(0);
    })

    it('shoult return lenght if list is unique', () => {
        expect(countUniqueNumber([1])).toBe(1);
        expect(countUniqueNumber([1, 2])).toBe(2);
        expect(countUniqueNumber([1, 3, 4])).toBe(3);
    })

    it('should return correct count of unique numbers', () => {
        expect(countUniqueNumber([1, 1, 1])).toBe(1);
        expect(countUniqueNumber([1, 2, 1, 3])).toBe(3);
        expect(countUniqueNumber([1, 3, 1, 1, 1])).toBe(2);
    })
});
