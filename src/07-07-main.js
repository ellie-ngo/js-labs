// Write a funciton to transform a string:
// - The first letter is UPPERCASE
// - The rest in lowercase
// Eg: capitalize('ease FRontend') --> 'Ease frontend'

function transformString(s) {
    const first = s.charAt(0);
    const rest = s.slice(1);

    return ''.concat(first.toUpperCase(), rest.toLowerCase());
}

console.log(transformString('T  EST fgfg 000 JJHDFS'));


// thầy chữa

function capitalize(str) {
    if (str === '') return '';

    const firstLetter = str[0].toUpperCase();
    const rest = str.slice(1).toLowerCase();

    return `${firstLetter}${rest}`;
}

console.log(capitalize('T  EST fgfg 000 JJHDFS'));