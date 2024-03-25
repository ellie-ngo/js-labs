// Write a function to classify student
// Receive mark as a number, output as below:
// mark > 8       --> 'Excellence'
// 7 <= mark <= 8 --> 'Good'
// 4 <= mark <= 6 --> 'Not Good'
// mark < 4       --> 'Bad'

// version 1 (tự làm)
function classifyStudentV1(mark) {
    if (mark > 8 && mark <= 10) {
        return 'Excellence';
    } 
    if (mark >= 7 && mark <= 8) {
        return 'Good';
    }
    if (mark >= 4 && mark <= 6) {
        return 'Not Good';
    } 
    
    return 'Bad';
    
}
//console.log(classifyStudent(51));

// version 2
function classifyStudentV2(mark) {
    let result;
    if (mark > 8) result = 'Excellence'
    else if (mark >= 7) result = 'Good'
    else if (mark >= 4) result = 'Not Good'
    else result = 'Bad';
    return result;
}
//console.log(classifyStudent(1));

// version 3
function classifyStudentV3(mark) {
    // validate arguments
    // mark shoul be in range of [0, 10]
    if (mark <0 || mark > 10) return '';

    let result = 'Bad';

    if (mark > 8) result = 'Excellence'
    else if (mark >= 7) result = 'Good'
    else if (mark >= 4) result = 'Not Good'
    return result;
}
//console.log(classifyStudent(12));

// version 4
export function classifyStudentV4(mark) {
    // validate arguments
    // mark shoul be in range of [0, 10]
    if (mark <=0 || mark > 10) return 'Invalid mark';

    if (mark > 8) return 'Excellence';
    if (mark >= 7) return 'Good';
    if (mark >= 4) return 'Not Good';

    return 'Bad';
}
//console.log(classifyStudent(1));
