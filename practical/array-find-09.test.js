// tìm vị trí của student có id cho trước
// viết hàm findStudentById(studentList, studentID) để tìm ra vị trí của student có id = studentId
import { findStudentById } from "./array-find-09"

describe('findStudentById()', () => {
    it('should return -1 for empty array', () => {
        expect(findStudentById([], 1)).toBe(-1);
        
    });

    it('should return -1 when array doesnt have id = studentId', () => {
        const studentList = [
            {id: 1, name: 'Oanh'},
            {id: 2, name: 'Lu'}
        ]
        expect(findStudentById(studentList, 3)).toBe(-1);
        
    });

    it('should return id when array has id = studentId', () => {
        const studentList = [
            {id: 1, name: 'Oanh'},
            {id: 2, name: 'Lu'}
        ]
        expect(findStudentById(studentList, 1)).toBe(0);
        
        
    });
    
});