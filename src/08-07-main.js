function isEqual(obj1, obj2) {
    const keyList1 = Object.keys(obj1);
    const keyList2 = Object.keys(obj2);

    if (keyList1.length === 0 && keyList2.length === 0) return true;
    if (keyList1.length === keyList2.length) {
        for (let i = 0; i < keyList1.length; i++) {
            if (obj1[keyList1[i]] === obj2[keyList2[i]]) return true
        }
    }
    return false
}
console.log(isEqual({}, {}));
console.log(isEqual({ name: 'Bob' }, { name: 'Alice' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Bob' }));
console.log(isEqual({ name: 'Bob' }, { name: 'Bob', age: 18 }));
console.log(isEqual({ name: 'Bob', age: 18 }, { name: 'Bob', age: 18 }));
console.log(isEqual({}, { name: 'Bob' }));
