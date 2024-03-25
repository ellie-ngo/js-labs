import {withdraw} from './coding1-ex24'

describe('withdraw(amount)', () => {
    it('should return \'Invalid balance\' if wrong amount', () => {
        expect(withdraw(0)).toBe('Invalid balance');
        expect(withdraw('a')).toBe('Invalid balance');
        expect(withdraw(125000)).toBe('Invalid balance'); 
    });


    it('should return \'Insufficient balance from ATM\' if ATM insufficient', () => {
        expect(withdraw(19000000)).toBe('Insufficient balance from ATM');
        
    });

    it('should return correct quantity of values', () => {
        expect(withdraw(850000)).toEqual({K500 : 1, K200 : 1, K100 : 1, K50 : 1});
        expect(withdraw(200000)).toEqual({K500 : 0, K200 : 1, K100 : 0, K50 : 0});
    });
    
});

