function isValidBracketPairs(str) {
    if (str.length === 0) return true;

    let stack = [];

    const map = new Map ([
        ['(', ')'],
        ['{', '}'],
        ['[', ']'],
    ]);

    for (let i = 0; i < str.length; i++) {
        let letter = str[i];
    
        if (letter === '(' || letter === '{' || letter === '[') stack.push(letter);
        for (const [key, value] of map) {
            if (letter === value && stack.length === 0) return false;
            if (stack[stack.length - 1] === key && letter === value) stack.pop();
        }
    }

    return stack.length === 0 ? true : false;
  }

  console.log(isValidBracketPairs('a+b) * 2 + [3]'));