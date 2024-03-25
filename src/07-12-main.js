// using if...else
function formatSecondsV1(seconds) {
    if ( seconds < 0 || seconds > 60) return -1;
    if (seconds.toString().length === 1) return `0${seconds}`;
    return `${seconds}`;
  }

console.log(formatSecondsV1(6));

// using slice()
function formatSecondsV2(seconds) {
    if ( seconds < 0 || seconds > 60) return -1;
    if (seconds.toString().slice(1) === '') return `0${seconds}`
    return `${seconds}`;
  }

console.log(formatSecondsV2('6'));