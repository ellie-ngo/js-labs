function sayHello(languageCode) {
    // your code here ...
    const languageMap = {
        en: 'Hello',
        vi: 'Xin chào',
        fr: 'Bonjour',
        cn: 'Nǐn hǎo',
        ja: 'Konnichiwa',
        ko: 'Anyoung haseyo',
    };

    return languageMap[languageCode] || 'Hello';
}

console.log(sayHello('fr'));


