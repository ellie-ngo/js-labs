// String exercise
// Check if a string contains an email address with `@gmail.com` or not

function hasEmail(str) {
    return str.includes('@gmail.com');
}

console.log(hasEmail('nfdkn@gmail.com'));

// cách 2

function hasEmail(str) {
    return str.indexOf('@gmail.com') >= 0;
}

console.log(hasEmail('nfdkn@gmailcom'));