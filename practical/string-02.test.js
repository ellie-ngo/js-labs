// Viết hàm statisticsWords(str) để đếm tần số xuất hiện của môi từ trong str
// Trả về một object với:
// key là từ có xuất hiện trong str
// value là số lần xuất hiện của key

import {statisticsWords} from './string-02'

describe('statisticsWords(str)', () => {
    it('should return empty object in case str is empty', () => {
        expect(statisticsWords('')).toEqual({});
        
    });

    it('should return correct statistics when str doesn\'t have redundant spaces', () => {
        expect(statisticsWords('easy frontend is very easy')).toEqual({
            easy: 2,
            frontend: 1,
            is: 1,
            very: 1
        });  
    });

    it('should return correct statistics when str has redundant spaces', () => {
        expect(statisticsWords('easy    frontend   is   very   easy')).toEqual({
            easy: 2,
            frontend: 1,
            is: 1,
            very: 1
        });  
    });
});