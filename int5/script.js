let a = parseFloat(prompt("Son kiriting"));
let b = parseFloat(prompt("Son kiriting"));

if (a > 0 && b > 0 && a > b) {
  let sum = a / b;
  let sum1 = a % b;
  console.log(sum, sum1);
} else {
  alert("Xatolik yuzaga chiqdi");
}
