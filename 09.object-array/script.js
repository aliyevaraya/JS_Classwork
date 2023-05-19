///1.Create a function called 'secretName()' that takes in an array of names and returns the first letter of name.
let names1 = ["Adam", "Sarah", "Malcolm"] //"ASM"
let names2 = ["Harry", "Newt", "Luna", "Cho"] //"CHLN"
let names3 = ["Phoebe", "Chandler", "Rachel", "Ross", "Monica", "Joey"] //"CJMPRR"
let newName =''
function func(anyarray) {
   newName=anyarray.map((el,i)=> el[0]);
   return newName.sort().join("")
}
console.log(func(names1));
console.log(func(names2));
console.log(func(names3));

2///
const users = [
    { name: 'Anar', surname: 'Hesenli', age: '22', uni: 'ADA', gender:'male' },
    { name: 'Nezrin', surname: 'Reshidova', age: '23', uni: 'UNEC', gender:'female' },
    { name: 'Hikmet', surname: 'Hesenova', age: '22', uni: 'UNEC', gender:'male' },
    { name: 'Nicat', surname: 'Sadiqov', age: '25', uni: 'UNEC', gender:'male' },
    { name: 'Murad', surname: 'Salmanli', age: '23', uni: 'ADNSU', gender:'male' },
    { name: 'Aynure', surname: 'Hesenzade', age: '23', uni: 'BMU' , gender:'female'},
]
//2.1.Show users who is studying at 'UNEC' and surname starts 'r'.
console.log(users.filter(el=> el.uni==="UNEC" && el.surname[0].toLocaleLowerCase()==="r"));

// // 2.2.Show users whose age is eqaul to 22 and name start 'a'.
console.log(users.filter(el=> el.age==='22' && el.name[0].toLocaleLowerCase()==="a"));

// // 2.3.Return new array, if user is male add in front of name 'Mr', or Ms. (e.g. name:'Mr Anar', 'Ms Aynure').
const newarr=users.map(el=> el.gender==='male' ? 'Mr.'+ el.name : 'Ms.'+el.name)
console.log(newarr);

// // 2.4.Sort users by age (ascending).
console.log(users.sort((a,b)=> a.age-b.age));

///3.Shuffle array
const letters = ['a', 'b', 'c', 'd']
const numbers = [1, 2, 3, 4, 5, 6, 7]
function shuffle(array) {
    array.sort(() => Math.random() - 0.5);
    return array
  }
console.log(shuffle(letters));  
console.log(shuffle(numbers) ); 

// 4.Divide 2 the price of arr4.
const arr4 = [
    {
        product: 'Lenova',
        price: 1900,
    },
    {
        product: 'HP',
        price: 1300,
    },
    {
        product: 'Acer',
        price: 1600,
    },
]
const newarr4 = arr4.map(el=>({...el, price: el.price/2}))
console.log(newarr4);

// 5.Create a function called 'reverseNum()' which is to bind number with its reverse.
let num1 = 246 //246642
let num2 = 102 //102201
let num3 = 152 //152251
let mirrownum;
 function reverseNum(number) {
    mirrownum=Number(String(number).split('').reverse().join(''));
    return `${number}${mirrownum}`
}
console.log(reverseNum(num1));
console.log(reverseNum(num2));
console.log(reverseNum(num3));
