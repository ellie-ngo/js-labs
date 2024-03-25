// using split
function extractDomainV1(email) {
    if (email = '') return '';
    if (email.indexOf('@') < 0) return -1;
    const domain = email.split('@');
    return domain[1];
  }
console.log(extractDomainV1('alice@gmail.com'));
console.log(extractDomainV1('bob@abc.com'));
console.log(extractDomainV1('fgfhghg'));
  
  
// using indexOf() and slice()
function extractDomainV2(email) {
    if (email = '') return '';
    if (email.indexOf('@') < 0) return -1;
    const index = email.indexOf('@');
    return email.slice(index+1);
  }
console.log(extractDomainV2('alice@gmail.com'));
console.log(extractDomainV2('bob@abc.com'));
console.log(extractDomainV2('fgfhghg'));