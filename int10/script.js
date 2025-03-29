let son = parseFloat(prompt("3 xonali son kiriting"));

if (son > 1000 && son < 99) {
  alert("Xatolik yuzaga chiqdi");
} else {
  let bir = Math.floor(son / 10);
  let ikki = son % 10;

  console.log(bir, ikki);
}
