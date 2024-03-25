// using for...i to loop from 1 to n
function getDivisorListV1(n) {
    if (n < 1 || n > 1000) return undefined;
    let divisorList = [];
    for (let i = 1; i <= n; i++) {
        if (n % i === 0) divisorList.push(i);
    }
    return divisorList;
}

console.log(getDivisorListV1(12));


// using Array.from() and filter() to loop from 1 to n
function getDivisorListV2(n) {
    if (n < 1 || n > 1000) return undefined;
    const numberList = Array.from({length: n}, (v, i) => i+1);
    return numberList.filter(x => n % x === 0);
}
console.log(getDivisorListV2(9));


// using Array.from(), forEach and sort() but loop from 1 to square root of n only
function getDivisorListV3(n) {
    if (n < 1 || n > 1000) return undefined;
    const sqr = Math.sqrt(n)
    const divisorList = [];
    const numberList = Array.from({length: Math.trunc(sqr)}, (v, i) => i+1);
    numberList.forEach(x => {
        if (n % x === 0) {
            divisorList.push(x);
            if (x !== n/x) divisorList.push(n/x);
        }
    })
    return divisorList.sort((a,b) => a - b);
}
console.log(getDivisorListV3(9));




