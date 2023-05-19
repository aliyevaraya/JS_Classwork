1//
const arr1=['a','b','c','d','e','f','j','k','y','u']
function getRandomLetter(anyarr){
    return anyarr[Math.floor(Math.random()*anyarr.length)]
}
console.log(getRandomLetter(arr1))


2//
const arr2=[1,2,3,4,14,5,6,8]
let sum=0
function calcSum(anyarr){
    for(let item of anyarr){
        if(item%2==0){
            sum+=item
        }
    }
    return sum
}
console.log(calcSum(arr2))

3//
const arr3=[-3,-5,-9,3,0,true,false,-22]
const newarr=[]
const getPositiveNam= function(any){
for(i=0;i<any.length;i++){
   newarr.push(Math.abs(any[i]))
}
    return newarr
}
console.log(getPositiveNam(arr3))

4//
const arr4=[4,9,16,18,30,36,50]
const newarr4=[]
const calcSquareRoot = anyarr => {
    for (let i = 0; i < anyarr.length; i++) {
        newarr4.push(parseInt(Math.sqrt(anyarr[i])) )
}
    return newarr4
}
console.log(calcSquareRoot(arr4))