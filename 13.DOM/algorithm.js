//// median of unsorted array
function findMedian(numbers) {
  return numbers.length % 2 === 0
    ? `${numbers} don't have median number`
    : numbers[(numbers.length - 1) / 2];
}
console.log(findMedian([1, 2, 3, 9, 5, 6, 7]));
console.log(findMedian([5,7,8,9]));

//// median of sorted array
function findMedian2(numbers) {
   numbers.sort((a, b) => a - b);
  return numbers.length % 2 === 0
  ? `${numbers}- don't have median number`
  : numbers[(numbers.length - 1) / 2];
}
console.log(findMedian2([1, 7, 6, 3, 2, 4,5]));
console.log(findMedian2([8, 9, 5, 2]));



// const counter = str => [...str].reduce((a, c) => (a[c] = ++a[c] || 1) && a, {})

// console.log(
//   counter("hello world")
// )  

