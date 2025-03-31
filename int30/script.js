function findCentury(year) {
  return Math.ceil(year / 100);
}

console.log(findCentury(1901));
console.log(findCentury(2000));
console.log(findCentury(2001));
