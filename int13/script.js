let son = parseFloat(prompt("3 xonali son kiriting"));

if (son > 999 && son < 99) {
  alert("Xatolik yuzaga chiqdi");
} else {
  let bir = Math.floor(son / 100);
  let biron = Math.floor(son / 10);
  let ikki = Math.floor(biron / 10);
  let uch = son % 10;

  let yangiSon = uch * 100 + ikki * 10 + bir;
  console.log(yangiSon);
}
