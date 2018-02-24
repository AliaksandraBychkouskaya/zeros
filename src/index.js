module.exports = function getZerosCount(number) {
  // your implementation
  let countOf5 = 0;
  let countOf2 = 0;
  let numberForChanges;
  do {
    numberForChanges = number;
    while (numberForChanges % 5 === 0) {
      numberForChanges /= 5;
      countOf5++;
    }
    number -= 1;
  }
  while (number > 0)
  return countOf5;
}

// const getNumberDigitCapacity = (number) => {
//   let result = 1;
//
//   while ((number / result) >= 1) {
//     result *= 10;
//   }
//
//   return result / 10;
// }
//
// const sum = (number) => {
//   let result = 0;
//
//   while (number > 0) {
//     result += number;
//
//     number -= 1;
//   }
//
//   return result;
// }
//
// function getZerosCount(number) {
//   // your implementation
//   let countOf5 = 0;
//   let countOf2 = 0;
//
//   while (number > 2) {
//     let digitCapacity = getNumberDigitCapacity(number);
//
//     if ((digitCapacity / 5) > 1) {
//       countOf5 += sum(digitCapacity / 5) - 1;
//     }
//
//     number -= Math.floor(number / digitCapacity) * digitCapacity;
//   }
//
//   return countOf5;
// }
//
// module.exports = getZerosCount;
