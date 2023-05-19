/////// Task1
function fun1(num) {
  // let result = 1;
  // if (num > 0) {
  //   for (let i = 1; i <= num; i++) {
  //     result *= i;
  //   }
  //   return result;
  // } else return 1;

  // or

  return num > 1 ? num * fun1(num - 1) : 1;
}
// console.log(fun1(5));
// console.log(fun1(0));
// console.log(fun1(-1));

///// Task2

function fun2(num) {
  // let result = 1;
  // for (let i = 1; i <= num; i += 2) {
  //   result *= i;
  // }
  // return result;

  // or
  return num > 2 ? num * fun2(num - 2) : 1;

}
console.log(fun2(5));
console.log(fun2(1));
console.log(fun2(-1));
console.log(fun2(0));

// Task3
function sumArray(arr) {
  //   return arr.flat(Infinity).reduce((a, b) => a + b, 0);
  // or
  return arr.reduce((sum,prev)=> Array.isArray(prev)? sum+sumArray(prev): sum+prev,0)
}
console.log(sumArray([4, [2,[1]], 8]));
