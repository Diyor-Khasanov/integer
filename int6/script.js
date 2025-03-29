let son = parseFloat(prompt("2 xonali son kiriting"));

if (son > 100 && son <= 9) {
  alert("Xatolik yuzaga chiqdi");
} else {
  let bir = Math.floor(son / 10);
  let ikki = son % 10;
  console.log(bir, ikki);
}
