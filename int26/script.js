function findWeekday26(K) {
  const days = [
    "dushanba",
    "seshanba",
    "chorshanba",
    "payshanba",
    "juma",
    "shanba",
    "yakshanba",
  ];
  const dayIndex = (K + 1) % 7;
  return days[(dayIndex + 1) % 7];
}

console.log(findWeekday26(1));
console.log(findWeekday26(5));
