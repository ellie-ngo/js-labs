import {isPositiveEvenNumberV4} from './05-08-main'

describe('isPositiveEvenNumberV4', () => {
    test('should return false when numnber <= 0', () => {
        expect(isPositiveEvenNumberV4(0)).toBe(false);
        expect(isPositiveEvenNumberV4(-1)).toBe(false);
    });

    test('should return false when number is not an even number', () => {
        expect(isPositiveEvenNumberV4(3)).toBe(false);
        expect(isPositiveEvenNumberV4(1)).toBe(false);
    });

    test('should return false when number is an even number but negative', () => {
        expect(isPositiveEvenNumberV4(-4)).toBe(false);
    });

    test('should return true when number is a positive even number ', () => {
        expect(isPositiveEvenNumberV4(6)).toBe(true);
    });
    
});