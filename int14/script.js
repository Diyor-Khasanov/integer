function moveFirstDigitFromRightToLeft(number) {
  const numStr = number.toString();
  const lastDigit = numStr.slice(-1);
  const remainingDigits = numStr.slice(0, -1);
  const result = lastDigit + remainingDigits;
  return parseInt(result, 10);
}

const inputNumber = 12345;
const result = moveFirstDigitFromRightToLeft(inputNumber);
console.log(result); 
