// 1//
let myText='An Array is a collection of items of same data type stored at contigous memory location.';
let countA=0;
for(let i=0;i<myText.length;i++){
    if(myText[i].toLowerCase()==='a')
    countA++
}
console.log(`There are ${countA} number of a`)


2// 
const arr=[1,2,4,5,7,9,13,32]
let sum=0
for(let i=0;i<arr.length;i++){
    sum+=arr[i]
}
console.log(sum)


3//
const arr3=[false,0,2,true,23,undefined,'are u stack?','come on']
const newarr=[]
for (let i = 0; i < arr3.length; i++) {
    if(i%2){
        newarr.push(arr3[i])
    }
}
console.log(newarr)


4//
let text1="how is it going?"
let newText=''
for (let i = 0; i < text1.length; i++) {
    if(text1[i]!='i'){
        newText+=text1[i]
    }
}
console.log(newText)


5//
const numberArr=[2,false,'5','true',9,0,'1']
let sumnum=0;
for (let i = 0; i < numberArr.length; i++) {
    if(typeof (numberArr[i])=='number'){
        sumnum+=numberArr[i]
    }
}
console.log(sumnum)


6//
const mixType=[1,'3',4,false,null,22,true]
const newType=[]
for (i=0;i<mixType.length;i++) {
    newType.push(String(mixType[i]))
}
console.log(newType)


7//
let myObj={
    color:'red',
    width:320,
    height:200,
    padding:4,
    fontSize:'32px',
}
for(value in myObj){
    if(typeof(myObj[value])=='number'){
        console.log(myObj[value]*2)
    }
}