// kiểm tra có student giới tính là Nữ tên Alice không
// Viết hàm hasAlice(studentList) để kiểm tra trong mảng students có student nữ nào tên Alice không? (ko phân biệt hoa thường)
// VD: const studentList = [
//    {id: 1, name: 'Alice', gender: 'male'},
//    {id: 2, name: 'aliCE', gender: 'female'},
//    {id: 3, name: 'Easy frontend', gender: 'male'},
// ];
// hasAlice(studentList); // true

function isAlice(student) {
    if (!student) return false;
    return student.gender === 'female' && student.name.toLowerCase() === 'alice';
}

//for ... i
export function hasAlice(studentList) {
    if (!Array.isArray(studentList) || studentList.length === 0) return false;
    for (let i = 0; i < studentList.length; i++) {
        const student = studentList[i];
        if (isAlice(student)) return true;
    }
    return false;
}

// forEach

// function isAlice(student) {
//     if (!student) return false;
//     return student.gender === 'female' && student.name.toLowerCase() === 'alice';
// }
// function hasAlice1(studentList) {
//     if (!Array.isArray(studentList) || studentList.length === 0) return false;
//     let hasAliceFlag = false;
//     studentList.forEach(student => {
//         if (isAlice(student)) hasAliceFlag = true;
//     })
//     return hasAliceFlag;
// }
// const studentList = [
//        {id: 1, name: 'Alice', gender: 'male'},
//        {id: 2, name: 'aliCE', gender: 'female'},
//        {id: 3, name: 'alice', gender: 'male'},
// ]
//console.log(hasAlice1(studentList));
