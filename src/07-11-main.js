function removeVowel(str) {
    let result = str;
    if (str.indexOf('u') >= 0) result = str.replace('u', '');
    if (result.indexOf('e') >= 0) result = result.replace('e', '');
    if (result.indexOf('o') >= 0) result = result.replace('o', '');
    if (result.indexOf('a') >= 0) result = result.replace('a', '');
    if (result.indexOf('i') >= 0) result = result.replace('i', '');
    return result.trim();
}
console.log(removeVowel(' sayhello '));
console.log(removeVowel('   alueoim'));