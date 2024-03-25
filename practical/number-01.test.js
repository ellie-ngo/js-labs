// number-01: Kiểm tra số tăng dần
// viết hàm isIncreasingNumber(n) để kiểm tra n có phải là số tăng dần hay không?
// 0 < n < 1000000
// số tăng dần có ít nhất 2 chữ số
// chữ số bên phải luôn lớn hơn chữ số bên trái
// trả về true nếu là số tăng dần, ngược lại trả về false

import {isIncreasingNumber} from './number-01'

describe('isIncreasingNumber(n)', () => {
    test('should return false when n <= 0 or n >= 1000000', () => {
        expect(isIncreasingNumber(0)).toBe(false);
        expect(isIncreasingNumber(1000000)).toBe(false);
    });

    test('should return false when n has 1 digit', () => {
        Array.from({ length: 10}, (x, idx) => idx).forEach(x => {
            expect(isIncreasingNumber(x)).toBe(false);
        })
    });


    test('should return false when n has digits are the same', () => {
        [111, 222, 33, 44, 32040, 124210, 1231].forEach(x => {
            expect(isIncreasingNumber(x)).toBe(false);
        })
            
    });

    test('should return false when n has digit in the right less than digit in the left', () => {
        [12, 234, 35, 4567, 13467, 123456].forEach(x => {
            expect(isIncreasingNumber(x)).toBe(true);
        })
    });


    test('should return true when n has digit in the left less than digit in the right', () => {
        expect(isIncreasingNumber(12345)).toBe(true);
    });
    
});