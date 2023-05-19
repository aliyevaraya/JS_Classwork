// 1.Array method/////////////////////////////////////////////////////////////////////////////////////////////////////////////
const arr = ['d', 7, '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]

// 1.1 Splice 'arr' // ['1',7, '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1]
// console.log(arr.splice(1,arr.length-2));

// 1.2 Show only last three values of 'arr' // [ false, 1, null]
// console.log(arr.slice(arr.length-3,));

// 1.3 Concat [true,'8','myName'] in front of the 'arr'. //[true,'8','myName','d', 7 '1', '7', 7, 0, 'c', 'a', undefined, 7, '3', false, 1, null]
// console.log([true,'8','myName'].concat(arr));

// 1.4 Find second 7's index. //4
// console.log(arr.indexOf(7,2));

// 1.5 Filter only true value // ['d', 7, '1', '7', 7, 'c', 'a', 7, '3', 1]
// console.log(arr.filter(Boolean));

// 1.6 Sum only integer values of 'arr' //22

// console.log(arr.filter(el=> Number.isInteger(el)).reduce((sum,cur)=>sum+cur,0));

// 1.7 Find fasly values' length //4
// console.log(arr.filter(el=>!Boolean(el)).length);


// 2.Object vs Array///////////////////////////////////////////////////////////////////////////////////////////////////////////

// 2.1 Create a function called 'findSmallest(inks)', that find out min value of obj.



function findSmallest(inks) {
    return Math.min(...Object.values(inks))
    // return Math.min.appy(null,Object.values(ink))
}
console.log(findSmallest({
    "cyan": 23,
    "magenta": 12,
    "yellow": 10
})); // 10

// console.log(findSmallest({
//          "cyan": 23,
//          "magenta": 12,
//          "yellow": 10
//     }))

// console.log(findSmallest({
//     "cyan": 432,
//     "magenta": 543,
//     "yellow": 777
// }));  // 432

// console.log(findSmallest({
//     "cyan": 700,
//     "magenta": 700,
//     "yellow": 0
// })); // 0






// 2.2 Create a function called maxNums that find out max num of each arr
function maxNums(array) {
    return array.map(elem=>Math.max(...elem))
}
console.log(maxNums([[4, 2, 7, 1], [20, 70, 40, 90], [1, 2, 0]])); //[7, 90, 2]

// console.log(maxNums([[-34, -54, -74], [-32, -2, -65], [-54, 7, -43]])); // [-34, -2, 7]




// 2.3 Create a function called 'findLetterIndex(text,letter)', that returns the first index and the last index of a character.
function findLetterIndex(text,letter) {
   return [text.indexOf(letter) ,text.lastIndexOf(letter)]
} 
console.log(findLetterIndex("hello", "l")); // [2,3]
console.log(findLetterIndex("happy", "h")); //[0, 0]


// 2.4 Create a function called checkNum that takes an array of numbers arr and a number n.
//  Return true if the sum of any two elements is equal to the given number. Otherwise, return false.
function checkNum(arr,n) {
    // return array.some(item => arr.includes(n-item))
    return arr.some((item=>arr.some(item2=> item+item2===n)))
}
console.log(checkNum([10, 12, 4, 7, 9, 11], 16));  //true
console.log(checkNum([2, 8, 9, 12, 45, 78], 1)); //false
console.log(checkNum([0, 9, 7, 23, 19, 18, 17, 66], 39)); //false


