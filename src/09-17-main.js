// Write a function to find the longest word


// for...i
function findLongestWordI(wordList) {
    if (!Array.isArray(wordList) || wordList.length === 0) return undefined;
    let longestWord = wordList[0];
    for (let i = 1; i < wordList.length; i++) {
        if (longestWord.length < wordList[i].length) longestWord = wordList[i];
    }
    return longestWord;
}
console.log(findLongestWordI(['afdhfjhjhgk', 'ab', 'grg', 'longest', 'r', 'and']));


// forEach
function findLongestWordE(wordList) {
    if (!Array.isArray(wordList) || wordList.length === 0) return undefined;
    let longestWord = wordList[0];
    wordList.forEach(word => {
        if (longestWord.length < word.length) longestWord = word;
    })
    return longestWord;
}
console.log(findLongestWordE(['afdhfjhjhgk', 'ab', 'grg', 'longest', 'r', 'and']));

// reduce
function findLongestWordE(wordList) {
    if (!Array.isArray(wordList) || wordList.length === 0) return undefined;
    return wordList.reduce((longestWord, word) => (word.length > longestWord.length ? word : longestWord));
}
console.log(findLongestWordE(['ab', 'grg', 'longest', 'r', 'and']));