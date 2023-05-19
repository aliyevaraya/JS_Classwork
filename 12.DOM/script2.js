function isAnoqram(str1,str2){
    return str1.toLowerCase().split('').sort((a,b)=>a.localCompare).join('') === str2.toLowerCase().split('').sort().join('')
}
console.log(isAnoqram('Raya','ayra'));



function maxChar(str) {
    let allCase=0
    let commonLetter=""
    str.toLowerCase().split('').map(letter=>{
        if(str.toLowerCase().split(letter).length>allCase){
            allCase=str.toLowerCase().split(letter).length
            commonLetter=letter
        }
    })
    return commonLetter
}
console.log(maxChar('hellooo'));