import { classifyStudentV4 } from './05-09-main'

describe('classifyStudentV4', () => {
    test('should return Invalid mark! when pass invalid n', () => {
        const value = classifyStudentV4(0);
        expect(value).toBe('Invalid mark');
    });

    test('should return Invalid mark! when n > 10 ', () => {
        const value = classifyStudentV4(11);
        expect(value).toBe('Invalid mark');
    });

    test('should return Exellence when n > 8 ', () => {
        expect(classifyStudentV4(9)).toBe('Excellence');
        expect(classifyStudentV4(10)).toBe('Excellence');
    });

    test('should return Good when n in [7, 8] ', () => {
        expect(classifyStudentV4(7)).toBe('Good');
        expect(classifyStudentV4(8)).toBe('Good');
    });

    test('should return Not good when n in [4, 6] ', () => {
        [4, 5, 6].forEach(n => {
            expect(classifyStudentV4(n)).toBe('Not Good');
        })
    });

    test('should return Bad when n in [1, 3] ', () => {
        [1, 2, 3].forEach(n => {
            expect(classifyStudentV4(n)).toBe('Bad');
        })
    });
});