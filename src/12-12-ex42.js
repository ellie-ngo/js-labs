function getUniqueWords(sentence) {
    if (typeof sentence !== 'string' || sentence.length === 0) return [];
    const wordList = sentence.trim().split(' ');
    const uniqueWords = new Set(wordList);
    return [...uniqueWords];
  }

console.log(getUniqueWords(' is easy is easy die is'));

