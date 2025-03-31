function findWeekday27(K) {
  const days = [
    "dushanba",
    "seshanba",
    "chorshanba",
    "payshanba",
    "juma",
    "shanba",
    "yakshanba",
  ];
  const dayIndex = K % 7;
  return days[dayIndex === 0 ? 6 : dayIndex - 1];
}

console.log(findWeekday27(1));
console.log(findWeekday27(2));
