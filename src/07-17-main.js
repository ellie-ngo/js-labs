function getName(name) {
  const newName = name.trim().toLowerCase();
  return newName.replace(newName[0], newName[0].toUpperCase());
}

function getFullName(firstName, lastName) {
  if (firstName === "" && lastName === "") return "";
  if (firstName == null || firstName === "") return getName(lastName);
  if (lastName == null || lastName === "") return getName(firstName);
  const first = getName(firstName);
  const last = getName(lastName);
  return `${first}${" "}${last}`.trim();
}

// console.log(getFullName('john', 'pHAm'));
// console.log(getFullName('Alice'));
// console.log(getFullName('', 'Nguyen'));
// console.log(getFullName('Alice', ''));
// console.log(getFullName('Bob', 'Tran'));
// console.log(getFullName(' Boby ', ' Ngo  '));

function getFullName2(firstName, lastName) {
  if (!firstName && !lastName) {
    return console.log("Please enter either firstName or lastName!");
  }

  return !firstName && lastName
    ? trimAndCapitalize(lastName)
    : firstName && !lastName
    ? trimAndCapitalize(firstName)
    : trimAndCapitalize(firstName) + " " + trimAndCapitalize(lastName);
}

function trimAndCapitalize(word) {
  const trimmedAndLowered = word.trim().toLowerCase();
  return trimmedAndLowered.replace(
    trimmedAndLowered[0],
    trimmedAndLowered[0].toUpperCase()
  );
}

console.log(getFullName2("john", "pHAm"));
console.log(getFullName2("Alice"));
console.log(getFullName2("", "Nguyen"));
console.log(getFullName2("Alice", ""));
console.log(getFullName2("Bob", "Tran"));
console.log(getFullName2(" Boby ", " Ngo  "));
