1; ///////////
const arr1 = ["guba", "mingecevir", "baku", "gazag", "gence", "shirvan"];
const newarr1 = arr1.map(
  (el) =>
    el[0].toLocaleUpperCase() + el.slice(1, -1) + el.toLocaleUpperCase().at(-1)
);
console.log(newarr1);

2; /////////////////
let text = "We are MERN-Stack developers!";

1; ////
console.log(text.replace('MERN-Stack','Front-end'));
2; ////
console.log(text.toLocaleLowerCase().replaceAll('e','a'));
3; ////
console.log(text.slice(0,-1).concat(' in Microsoft!'));
4; ////
const newarr2 = [];
text
  .split("")
  .map((el, i) => (el.toLocaleLowerCase() === "r" ? newarr2.push(i) : newarr2));
console.log(newarr2);
5; ////
console.log(text.toLocaleLowerCase().indexOf('r',5));

6; ////////////////////
let vowels = ["a", "i", "o", "u", "e"];
const newarr3 = [];
//method-1
text.split("").map((el,i) => {
  if (vowels.includes(el) && text.indexOf(el)==i) {
    newarr3.push(el)

  }
});
// console.log(newarr3);
//method-2
// text.split("").map((el,i) => vowels.includes(el) && newarr3.push(el))
// console.log([...new Set(newarr3)]);
//method-3
// console.log(Array.from(new Set(newarr3)));
//method-4
// const result = text.split('').filter((item)=>vowels.includes(item) && !newarr3.includes(item) && newarr3.push(item))
// console.log(result);
//method-5
// const result5 = text.split('').filter((item,i,arr)=> vowels.includes(item) && arr.indexOf(item)== i)
// console.log(result5);

3; /////////////////////
const arr3 = [
  {
    region: "Yasamal",
    area: 170,
  },

  {
    region: "Nizami",
    area: 20,
  },

  {
    region: "Nesimi",
    area: 10,
  },

  {
    region: "Sebail",
    area: 30,
  },
  {
    region: "Xetai",
    area: 30,
  },
];

const calcArea = (array) => {
  let result = array.reduce(
    (sum, current) => (current.region.length === 6 ? sum + current.area : sum),
    0
  );
  return result;
};
console.log(calcArea(arr3));

4; ////////////
const arr4 = [8, 44, 14, 2, 23, 1, 22, 34, 9, 0, 6];
console.log(arr4.sort((a,b) => a-b));

5; //////////////
const arr5 = [5, [8], [9, ["hi", ["don't touch me"], [0]], "9"]];
console.log(arr5.flat(4));
// console.log(arr5.flat(Infinity));

6; ////////////////
const colors = [
  "green",
  "blue",
  "yellow",
  "black",
  "red",
  "brown",
  "white",
  "gray",
  "violet",
  "pink",
];

colors.sort(function (a, b) {
  return a.length - b.length || a.localeCompare(b);
});
console.log(colors);