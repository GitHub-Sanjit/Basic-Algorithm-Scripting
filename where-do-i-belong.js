// function getIndexToIns(arr, num) {
//   return arr.filter(val => num > val).length;
// }
// getIndexToIns([40, 60], 50);

function getIndexToIns(arr, num) {
  return arr
    .concat(num)
    .sort((a, b) => a - b)
    .indexOf(num);
}

getIndexToIns([1, 3, 4], 2);