// kiểm tra có student giới tính là Nữ tên Alice không
// Viết hàm hasAlice(studentList) để kiểm tra trong mảng students có student nữ nào tên Alice không? (ko phân biệt hoa thường)
// VD: const studentList = [
//    {id: 1, name: 'Alice', gender: 'male'},
//    {id: 2, name: 'aliCE', gender: 'female'},
//    {id: 3, name: 'Easy frontend', gender: 'male'},
// ];
// hasAlice(studentList); // true

import {hasAlice} from './array-check-07'

describe('hasAlice()', () => {
    it('should return false for empty array', () => {
        expect(hasAlice([])).toBe(false);
        
    });
    it('should return false for array doesnt have female Alice', () => {
        const studentList = [
            {id: 1, name: 'Alice', gender: 'male'}, 
            {id: 2, name: 'aliCE', gender: 'male'},
        ]
        expect(hasAlice(studentList)).toBe(false);    
    });

    it('should return true for array has female Alice', () => {
        const studentList = [
               {id: 1, name: 'Alice', gender: 'male'},
               {id: 2, name: 'aliCE', gender: 'female'},
               {id: 3, name: 'Easy frontend', gender: 'male'},
            ]
        expect(hasAlice(studentList)).toBe(true);  
    });
    
});


