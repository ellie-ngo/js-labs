// Create a function `truncate(text, maxlength)` that checks the length of the text and, 
// if it exceeds maxlength - replace the end of the str with the ellipsis character `"..."`,
// to make its length equal to maxlength.

// Horizontal ellipsis code is 8230. String.fromCodePoint(8230)
//UTF-16 '\u2026'

function truncate(text, maxlength) {
    if (text.length <= maxlength) return text;
    const textTrunc = text.substring(0, maxlength - 1);
    return `${textTrunc}\u2026`;
}
console.log(truncate('tes-------', 6));