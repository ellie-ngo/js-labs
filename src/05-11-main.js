// A list of error codes from server
// E01: Invalid username and password
// E02: Too many attempts
// E03: Missing data
// Other code: Something went wrong
// Write a function that take errorCode and return the according message

// version 1 (tự làm)
function returnErrorMessage (errorCode) {
    let message = '';

    switch (errorCode) {
        case 'E01': {
            message = 'Invalid username and password';
            break;
        }

        case 'E02': {
            message = 'Too many attempts';
            break;
        }

        case 'E03': {
            message = 'Missing data';
            break;
        }

        default: {
            message = 'Something went wrong';
        }

    }

    return message;
}

console.log(returnErrorMessage('E01'));
console.log(returnErrorMessage('E02'));
console.log(returnErrorMessage('E03'));
console.log(returnErrorMessage('E00'));

// version 2
function getErrorCode(errorCode) {
    const errorMap = {
        E01: 'Invalid username and password',
        E02: 'Too many attempts',
        E03: 'Missing data',
    };

    return errorMap[errorCode] || 'Something went wrong';
}
console.log(getErrorCode('E01'));
console.log(getErrorCode('E02'));
console.log(getErrorCode('E03'));
console.log(getErrorCode('E00'));