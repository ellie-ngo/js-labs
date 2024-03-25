// Write a function to classify student
// Receive mark as a number, output as below:
// mark > 8       --> 'Exellence'
// 7 <= mark <= 8 --> 'Good'
// 4 <= mark <= 6 --> 'Not Good'
// mark < 4       --> 'Bad'
// Using switch case to implement it

// version 1 (tự làm)
function classifyStudent(mark) {
    let result;

    switch (mark) {
        case 0: {
            result = 'Bad';
            break;
        }

        case 1: {
            result = 'Bad';
            break;
        }

        case 2: {
            result = 'Bad';
            break;
        }

        case 3: {
            result = 'Bad';
            break;
        }

        case 4: {
            result = 'Not Good';
            break;
        }

        case 5: {
            result = 'Not Good';
            break;
        }

        case 6: {
            result = 'Not Good';
            break;
        }

        case 7: {
            result = 'Good';
            break;
        }

        case 8: {
            result = 'Good';
            break;
        }

        case 9: {
            result = 'Exellence';
            break;
        }

        case 10: {
            result = 'Exellence';
            break;
        }

        default: {
            result = 'Invalid mark'
        }
    }

    return result;
}

console.log(classifyStudent(1));
console.log(classifyStudent(2));
console.log(classifyStudent(3));
console.log(classifyStudent(4));
console.log(classifyStudent(5));
console.log(classifyStudent(6));
console.log(classifyStudent(7));
console.log(classifyStudent(8));
console.log(classifyStudent(9));
console.log(classifyStudent(10));
console.log(classifyStudent(0));
console.log(classifyStudent(100));

// version 2
function classifyStudent(mark) {
    let result;

    switch (mark) {
        case 0:
        case 1:
        case 2:
        case 3: {
            result = 'Bad';
            break;
        }

        case 4:
        case 5:
        case 6: {
            result = 'Not Good';
            break;
        }

        case 7:
        case 8: {
            result = 'Good';
            break;
        }

        case 9:
        case 10: {
            result = 'Exellence';
            break;
        }

        default: {
            result = 'Invalid mark'
        }
    }

    return result;
}

console.log(classifyStudent(1));
console.log(classifyStudent(2));
console.log(classifyStudent(3));
console.log(classifyStudent(4));
console.log(classifyStudent(5));
console.log(classifyStudent(6));
console.log(classifyStudent(7));
console.log(classifyStudent(8));
console.log(classifyStudent(9));
console.log(classifyStudent(10));
console.log(classifyStudent(0));
console.log(classifyStudent(100));