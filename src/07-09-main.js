// String exercise
// Write a javascript function to parameterize a string
// Eg: parameterize('Code JS Is Fun') -> 'code-js-is-fun'

function parameterize(str) {
    if (str === '') return '';
    return str.toLowerCase().replaceAll(' ', '-');
}
console.log(parameterize('Code JS Is Fun'));

// cách 2

function parameterize(str) {
    if (str === '') return '';
    return str.toLowerCase().split(' ').join('-');
}
console.log(parameterize('Code JS Is Fun'));