// tìm tất cả các số mà bắt đầu bằng số lẻ
// viết hàm findAllNumber(numberList) để tìm ra tất cả các số có chữ số đầu tiên là chữ số lẻ

import {findAllNumber} from './array-filter-06'

describe('findAllNumber(numberList)', () => {
    it('should return empty array if list is empty', () => {
        expect(findAllNumber([])).toEqual([]);
        expect(findAllNumber({})).toEqual([]);
        expect(findAllNumber()).toEqual([]);
        expect(findAllNumber('')).toEqual([]);
        expect(findAllNumber(true)).toEqual([]);
        
    });

    it('should return null for empty doesnt have number started with odd number', () => {
        expect(findAllNumber([2, 43, 61])).toEqual([]);
        
    });

    it('should return all number started with odd number', () => {
        expect(findAllNumber([1, 4, 35, 68])).toEqual([1, 35]);
        expect(findAllNumber([21, 74, 935, 368, -56])).toEqual([74, 935, 368, -56]);
    });
    
});
