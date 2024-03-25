function cloneObject(obj) {
    const clonedObj = {};
    for (let key in obj) {
        clonedObj[key] = obj[key];
    }
    return clonedObj;
}
const studentA = { name: 'Bob', age: 9, mark: {math: 10, english: 7}};
const studentB = cloneObject(studentA);
console.log(studentA === studentB);
console.log(studentB.name); 
console.log(studentB.mark.math);
console.log(studentB);

