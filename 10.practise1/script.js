///////////1.reverse string
function reversestring1(string){
   return string.split('').reverse('').join('')
}
console.log(reversestring1('Salam'))

function reversestring2(string){
    let newstr=""
    for(let i=string.length-1;i>=0;i--){
     newstr+=(string[i])
    }
    return newstr
}
console.log(reversestring2('Raya'));


//////////2.polidrom
// method1
function isPolidrom(word) {
    let newstr=""
    for(let i=word.length-1;i>=0;i--){
     newstr+=(word[i])
    };
    if(newstr===word) {
        return true
    } else return false
}
console.log(isPolidrom('helleh'));
//method2
function isPolidrom2(word){
    if(word===word.split('').reverse('').join('')){
        return `yes ${word} is polidrom`
    }else return `no ${word} is not polidrom`
}
console.log(isPolidrom2('havagi'));
//method3
function isPolidrom3(word){
    word===word.split('').reverse('').join('')
    ? console.log(`yes ${word} is polidrom`)
    : console.log(`no ${word} is not polidrom`);
}
isPolidrom3("yey")


//////////3.remove dublicated
let arr=[1,2,7,13,2,7,5,9,7,8,7]
function removeDublicated(array) {
   array.map((el,i)=>array.indexOf(el)!==i)
    return array.filter((el,i)=>array.indexOf(el)==i)
}
console.log(removeDublicated(arr));
//method2
function removeDublicated2(array) {
    let result=[]
    array.forEach((el,i) => {
        !result.includes(el) && result.push(el)
    });
    return result
}
console.log(removeDublicated2(arr));


////////////3.generate otp
function generateOtp() {
    let digits='0123456789';
    let num='';
    for (let i=0;i<4;i++){
    num+= digits[Math.floor(Math.random()*10)];
    }
    return num
}
console.log(generateOtp());
//method2
function generateOtp() {
    let num='';
    for (let i=0;i<4;i++){
    num+=Math.floor(Math.random()*10);
    }
    return num
}

