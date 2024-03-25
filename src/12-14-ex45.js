const PIN_LENGTH = 6;
function isValidPIN1(pin) {
    if (typeof pin !== 'string' || pin.length !== PIN_LENGTH || isNaN(pin)) return false;

    if (isIncrease(pin)) return false;

    if (isDecrease(pin)) return false;

    let statistic = {};

    for (let i = 0; i < pin.length; i++) {
        const num = pin[i];
        statistic[num] = statistic[num] !== undefined ? statistic[num] += 1 : 1;

    }

    for (let key in statistic) {
        if (statistic[key] > 2) return false;
    }

    return true;
}

function isIncrease(pin) {
    let stackUp = [];

    stackUp.push(pin[0]);

    for (let i = 1; i < pin.length; i++) {
        if (pin[i] - pin[i-1] === 1) {
            stackUp.push(pin[i])
        };
    }

    return stackUp.length === pin.length ? true : false;
}

function isDecrease(pin) {
    let stackDown = [];

    stackDown.push(pin[0]);

    for (let i = 1; i < pin.length; i++) {
        if (pin[i] - pin[i-1] === 1) {
            stackDown.push(pin[i])
        };
    }

    return stackDown.length === pin.length ? true : false;
}

console.log(isValidPIN1('123456'));

// cách 2 của thầy

function isValidPIN2(pin) {
    if (pin.length !== PIN_LENGTH) return false;
    // should contains digit only

    const hasNonDigit = Array.from(pin).some((x) => x < '0' || x > '9');
    if (hasNonDigit) return false;

    // should not be a simple sequence number
    const increaseNumber = '0123456789';
    const decreaseNumber = '9876543210';
    if (increaseNumber.includes(pin) || decreaseNumber.includes(pin)) return false;

    // should not contain digit appearing more than 2 times
    const digitSet = new Set(pin);
    const hasDigitMoreThanTwice = [...digitSet].some((x) => Array.from(pin).filter((y) => y === x).length > 2);
    if (hasDigitMoreThanTwice) return false;

    return true;
}

console.log(isValidPIN2('123456'));