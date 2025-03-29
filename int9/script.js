let son = parseFloat(prompt("3 xonali son kiriting"));

if (son > 1000 && son < 9) {
  alert("Xatolik yuzaga chiqdi");
} else {
  let bir = Math.floor(son / 100);
  console.log(bir);
}
