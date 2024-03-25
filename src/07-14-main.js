// using indexOf()
function isSecureUrlV1(url) {
    if ((url.indexOf('https')) >= 0 || (url.indexOf('wss') >= 0)) return true;
    return false;
  }
console.log(isSecureUrlV1('http://abc.com'));
console.log(isSecureUrlV1('https://ezfrontend.com'));
console.log(isSecureUrlV1('wss://chat.ezfrontend.com'));
console.log(isSecureUrlV1('ws://chat.abc.com'));
  
// using startsWith()
function isSecureUrlV2(url) {
    if ((url.startsWith('https')) || (url.startsWith('wss'))) return true;
    return false;
  }
console.log(isSecureUrlV2('http://abc.com'));
console.log(isSecureUrlV2('https://ezfrontend.com'));
console.log(isSecureUrlV2('wss://chat.ezfrontend.com'));
console.log(isSecureUrlV2('ws://chat.abc.com'));