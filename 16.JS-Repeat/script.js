// const arr = ["6", 8, NaN, "0", 5, 4, "true", false, 7, "a", undefined, 8, true];

//1.Show only falsy values in 'arr'

// const falsyValue= (arr)=>{
//     let newArr = []
//     for(let i=0; i<arr.length;i++ ){
//     if(!arr[i]) {
//         newArr.push(arr[i])
//     }
//  }
//     return newArr
// }
// console.log(falsyValue(arr));

// 2.Show only string values

// const stringValues=(arr)=>{
//     let newArr=[]
//     for(let i=0; i<arr.length;i++ ){
//         if(typeof arr[i] === 'string'){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr
// }
// console.log(stringValues(arr));

// 3.Slice array from index 3 to 7(includes both indexs)
// console.log(sliceArr(arr));   //['0', 5, 4, 'true', false]

// const sliceArr=(arr)=>{
//     const newArr=[]
//     for(let i=3;i<8;i++){
//         newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(sliceArr(arr));

// 4.Sum only number values
// console.log(sumArr(arr)); //32

// const sumArr = (arr)=>{
//     let sum=0
//     for(i=0;i<arr.length;i++){
//         if((typeof arr[i]=== "number" && arr[i])){
//          sum+=arr[i]
//         }
//     }
//     return sum
// }
// console.log(sumArr(arr))

//5.Find last 8's index in 'arr'
// console.log(findLastIndex(arr)); //11

// const findLastIndex=(arr)=>{
//     for(i=2;i<arr.length;i++){
//         if(arr[i]===8){
//             return i
//         }
//     }

// }
// console.log(findLastIndex(arr))

// 6.Reverse 'arr'
// console.log(reverseArr(arr));  //[undefined, true, 8, undefined, 'a', 7, false, 'true', 4, 5, '0', NaN, 8, '6']

// const reverseArr=(arr)=>{
//     let newArr=[]
//     for(i=arr.length-1;i>=0;i--){
//          newArr.push(arr[i])
//     }
//     return newArr
// }
// console.log(reverseArr(arr))

// 7. Sort 'arrNum' ascending
const arrNum = [8, 3, 22, 1, 12, 11, 9, 0, 10, 14, 41, 55, 51];
// console.log(sortArr(arrNum));  //[0, 1, 3, 8, 9, 10, 11, 12, 14, 22, 41, 51, 55]

// const sortArr=(array)=> {
//     let sorting = true;
//     while (sorting) {
//       sorting = false;
//       for (let i = 1; i < array.length; i ++) {
//         if (array[i - 1] > array[i]) {
//           sorting = true;
//           let num = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = num;
//         }
//       }
//     }

//     return array;
//   }
//   console.log(sortArr(arrNum))

// 8. Sort 'arrLetters' ascending
const arrLetters = ["g", "d", "a", "c", "j", "b", "e"];
// console.log(sortLetters(arrLetters));  //['a', 'b', 'c', 'd', 'e', 'g', 'j']

// const sortLetters=(array)=> {
//     let sort = true;
//     while (sort) {
//       sort = false;
//       for (let i = 1; i < array.length; i ++) {
//         if (array[i - 1] > array[i]) {
//           sort = true;
//           let letter = array[i - 1];
//           array[i - 1] = array[i];
//           array[i] = letter;
//         }
//       }
//     }

//     return array;
//   }
//   console.log(sortLetters(arrLetters))

// 9.Flat 'arr9'
const arr9 = [[1, 2], [3, 4, 5], [6, 7, 8, 9], 10];
// console.log(flatArr(arr9));  //[1, 2, 3, 4, 5, 6, 7, 8, 9]

// const flatArr=(arr)=>{
//     let newArr=[]
//     for(let i=0;i<arr.length;i++){
//         for(let j=0;j<arr[i].length;j++){
//             newArr.push(arr[i][j])
//         }
//     }
//     return newArr
// }
// console.log(flatArr(arr9))

// let newArr=[]
// let flatArr=(arr)=>{
//     for(let a of arr){
//         Array.isArray(a) ? flatArr(a):newArr.push(a)
//     }
//     return newArr
// }
// console.log(flatArr(arr9))

//Algorithm

// 1.Given a number, return an array containing the two halves of the number.If the number is odd, make the rightmost number higher.

function numberSplit(n) {
  let newArr = [];
  if (n % 2 === 0) newArr.push(n / 2, n / 2);
  else newArr.push(n - 1 / 2, n + 1 / 2);
  return newArr;
}

// console.log(numberSplit(4)); //[2,2]
// console.log(numberSplit(11));  //[5,6]
// console.log(numberSplit(-9));  //[-5,-4]

// 2.Create a function that reorders the digits of each numerical element in an array based on ascending (asc) or descending (desc) order.
function reorderDigits(arr, direction) {}

// console.log(reorderDigits([515, 341, 98, 44, 211], "asc"));    // [155, 134, 89, 44, 112]
// console.log(reorderDigits([515, 341, 98, 44, 211], "desc"));   //[551, 431, 98, 44, 211]

// const arr = [543, 65, 343, 75, 567, 878, 87];
// const ascendNumber = num => {
//    const numArr = String(num).split('').map(el => +el);
//    numArr.sort((a, b) => a - b);
//    return Number(numArr.join(''));
// };

// const sortDigits = arr => {
//    const res = [];
//    for(let i = 0; i < arr.length; i++){
//       res.push(ascendNumber(arr[i]));
//    };
//    return res;
// };
// console.log(sortDigits(arr));

