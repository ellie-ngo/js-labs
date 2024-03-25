// Tính S(n) = 1 + 2 + 3 + … + n
// function calcSum(n)
// n <= 0 --> 0
// n > 0 --> sum
import {calcSum} from './11-01-main'

describe('s(n) = 1 + 2 + ... + n', () => {
    test('should return 0 when n < 0', () => {
        expect(calcSum(-1)).toBe(0); 
    });

    test('should return 0 when n = 0 ', () => {
        expect(calcSum(0)).toBe(0);
        
    });

    test('should return sum when n > 0 ', () => {
        expect(calcSum(1)).toBe(1);
        expect(calcSum(2)).toBe(3);
        expect(calcSum(5)).toBe(15);
        expect(calcSum(100)).toBe(5050);
    });
    
});