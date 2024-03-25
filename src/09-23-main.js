//  for...i
function hasPrimeV1(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;
    let count = 0;
    for (let i = 0; i < numberList.length; i++) {
        if (isPrime(numberList[i])) count = count + 1; 
    }
    return count > 0 ? true : false;
  }
console.log(hasPrimeV1([1, 70, 9, 50]));
  
//  forEach
function hasPrimeV2(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;
    let count = 0;
    numberList.forEach(x => {
        if (isPrime(x)) count = count + 1; 
    })
    return count > 0 ? true : false;
}
console.log(hasPrimeV2([3, 7, 9, 5]));
  
//  find
function hasPrimeV3(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;
    return numberList.find(x => isPrime(x)); 
}
console.log(hasPrimeV2([30, 27, 9, 15]));
  
//  findIndex
function hasPrimeV4(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;
    return numberList.find(x => isPrime(x)); 
}
console.log(hasPrimeV2([30, 27, 9, 15]));
  
//  some
function hasPrimeV5(numberList) {
    if (!Array.isArray(numberList) || numberList.length === 0) return false;
    return numberList.some(x => isPrime(x));
}
console.log(hasPrimeV2([30, 27, 9, 15]));

  function isPrime(n) {
    if (n < 2) return false;
    const sqr = Math.sqrt(n);
    for (let i = 2; i <= Math.trunc(sqr); i++) {
        if (n % i === 0) return false
    }
    return true
}


