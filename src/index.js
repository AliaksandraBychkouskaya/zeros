module.exports = function getZerosCount(number) {
  // your implementation
  let countOf5 = 0;
  let countOf2 = 0;
  let numberForChanges;
  do {
    numberForChanges = number;
    while (numberForChanges > 1 && (numberForChanges % 5 === 0 || numberForChanges % 2 === 0)) {
      if (numberForChanges % 5 === 0) {
        numberForChanges /= 5;
        countOf5++;
      }
      if (numberForChanges % 2 === 0) {
        numberForChanges /= 2;
        countOf2++;
      }
    }

    number -= 1;
  }
  while (number > 0)
  return Math.min(countOf2, countOf5);
}
