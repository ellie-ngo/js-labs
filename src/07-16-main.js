
function findSecret(code) {
    for (let i = 0; i < code.length; i++) 
    {
        if (code[i] < 'a') 
        {
            code = code.replace(code.charAt(i), ' ');
        }
    }
    return code.split(' ').join(''); 
  }
console.log(findSecret('eaABFHsyUEYSJfrontJSKJSHend'));