// tìm vị trí của student có id cho trước
// viết hàm findStudentById(studentList, studentID) để tìm ra vị trí của student có id = studentId

export function findStudentById(studentList, studentId) {
    if (!Array.isArray(studentList) || studentList.length === 0) return -1;
    return studentList.findIndex(student => student.id === studentId)
}
const studentList = [
    {id: 1, name: 'Oanh'},
    {id: 2, name: 'Lu'}
]
//console.log(findStudentById(studentList, 1));