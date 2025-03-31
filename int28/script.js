function findWeekday28(K, N) {
  const days = [
    "dushanba",
    "seshanba",
    "chorshanba",
    "payshanba",
    "juma",
    "shanba",
    "yakshanba",
  ];
  const dayIndex = (K + N - 2) % 7;
  return days[dayIndex];
}

console.log(findWeekday28(1, 3));
console.log(findWeekday28(7, 1));
