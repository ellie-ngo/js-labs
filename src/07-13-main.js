// please try to use these constants in your code
const SECONDS_PER_HOUR = 3600;
const SECONDS_PER_MIN = 60;

function formatTime(seconds) {
    if (seconds < 0 || seconds > 86400) return '';
    const SECONDS_PER_HOUR = 3600;
    const SECONDS_PER_MIN = 60;
    let hh = Math.trunc(seconds/SECONDS_PER_HOUR);
    let mm = Math.trunc((seconds - hh*SECONDS_PER_HOUR)/60);
    let ss = seconds - hh*SECONDS_PER_HOUR - mm*SECONDS_PER_MIN;
    if (hh.toString().slice(1) === '') hh = `0${hh}`;
    if (mm.toString().slice(1) === '') mm = `0${mm}`;
    if (ss.toString().slice(1) === '') ss = `0${ss}`;
    return `${hh}:${mm}:${ss}`;
}

console.log(formatTime(4256));
console.log(formatTime(10983));
console.log(formatTime(9));
console.log(formatTime(0));
