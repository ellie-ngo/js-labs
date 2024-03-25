// Object exercises

// 1. Create an object student with name is Easr Frontend and age is 18.
// cách 1:
const student = {};
student.name = 'Easy Frontend';
student.age = 18;
// cách 2: 
const student = {
    name: 'Easy Frontend',
    age: 18
}

// 2. Check if an object is empty (mean have no keys)

function isEmpty(obj) {
    const keyList = Object.keys(obj);
    return keyList.length === 0
}
const student1 = {};
const student2 = {
    name: 'Easy Frontend',
    age: 18
}
console.log(isEmpty(student2));

// 3. Get average mark of an object
// calcAvgMark({ math: 10, english: 8}) --> 9
// cách 1
function calcAvgMark(obj) {
    const keyList = Object.keys(obj);
    let sum = 0;
    for (let i = 0; i < keyList.length; i++) {
        const key = keyList[i];
        sum = sum + obj[key];
    }
    return sum/keyList.length
}
console.log(calcAvgMark({math: 10, english: 7}));
console.log(calcAvgMark({math: 10, english: 20}));

// cách 2
function calcAvgMark(obj) {
    const length = Object.keys(obj).length;
    let sum = 0;
    for (let key in obj) {
        const value = obj[key];
        sum += value;
    }
    return sum/length;
}
console.log(calcAvgMark({math: 10, english: 7}));
console.log(calcAvgMark({math: 10, english: 20}));