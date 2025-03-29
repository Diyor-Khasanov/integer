let son = parseFloat(prompt("2 xonali son kiriting"));

if (son > 100 && son <= 9) {
  alert("Xatolik yuzaga chiqdi");
} else {
  let bir = Math.floor(son / 10);
  let ikki = son % 10;
  let yangiIkki = ikki * 10;
  let yangiSon = yangiIkki + bir;
  console.log(yangiSon);
}
