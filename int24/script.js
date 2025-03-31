function findWeekday(K) {
  if (K < 1 || K > 365) {
    return "Xato: K 1-365 oralig‘ida bo‘lishi kerak!";
  }

  let firstDay = 1;
  let weekday = (firstDay + (K - 1)) % 7;

  let weekDays = [
    "Yakshanba",
    "Dushanba",
    "Seshanba",
    "Chorshanba",
    "Payshanba",
    "Juma",
    "Shanba",
  ];

  return `Kuni: ${weekDays[weekday]}`;
}

console.log(findWeekday(1));
console.log(findWeekday(365));
console.log(findWeekday(100));
