import {checkIfAllEvenV1, checkIfAllEvenV2} from './check-if-all-even-main'

describe('checkIfAllEvenV1()', () => {
    test('should returm false when not an array', () => {
        expect(checkIfAllEvenV1(1)).toBe(false);
        expect(checkIfAllEvenV1('')).toBe(false);
        expect(checkIfAllEvenV1({})).toBe(false);
        expect(checkIfAllEvenV1(null)).toBe(false);
        expect(checkIfAllEvenV1(undefined)).toBe(false);
    });

    test('should returm false when array is empty ', () => {
        expect(checkIfAllEvenV1([])).toBe(false);
    });

    test('should returm false when array has some even number', () => {
        expect(checkIfAllEvenV1([1])).toBe(false);
        expect(checkIfAllEvenV1([1, 3, 5])).toBe(false);
        expect(checkIfAllEvenV1([1, 3, 6])).toBe(false);
        
    });

    test('should returm true when array has all even number', () => {
        expect(checkIfAllEvenV1([2, 4, 6, 8])).toBe(true);
        
    });
    
});

describe('checkIfAllEvenV2()', () => {
    test('should returm false when not an array', () => {
        expect(checkIfAllEvenV2(1)).toBe(false);
        expect(checkIfAllEvenV2('')).toBe(false);
        expect(checkIfAllEvenV2({})).toBe(false);
        expect(checkIfAllEvenV2(null)).toBe(false);
        expect(checkIfAllEvenV2(undefined)).toBe(false);
    });

    test('should returm false when array is empty ', () => {
        expect(checkIfAllEvenV2([])).toBe(false);
    });

    test('should returm false when array has some even number', () => {
        expect(checkIfAllEvenV2([1])).toBe(false);
        expect(checkIfAllEvenV2([1, 3, 5])).toBe(false);
        expect(checkIfAllEvenV2([1, 3, 6])).toBe(false);
        
    });

    test('should returm true when array has all even number', () => {
        expect(checkIfAllEvenV2([2, 4, 6, 8])).toBe(true);
        
    });
    
});