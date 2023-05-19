const colors = ["red", "green", "blue", "yellow", "orange", "brown"];

1; //////////
$("#change-color").click(function () {
  $("h1").css({ color: colors[Math.floor(Math.random() * colors.length)] });
});

2; //////////
$("#hide").click(function () {
  $("h1").hide();
});

$("#show").click(function () {
  $("h1").show();
});

3; //////////////

$.each(colors, function (_, value) {
  // console.log(value);
});

4; //////////
const numbers = [4, 2, false, null, "false", NaN, undefined, 8, true, "9"];
let sum = 0;
$.map(numbers, function (num, i) {
  if (num) {
    sum += i;
  }
});
// console.log(sum);

//////////Aqrotihm/////////
1; //////
function capitalizeFirst(str) {
  // let arr = str.split(" ")
  //     for (let i = 0; i < arr.length; i++) {
  //    arr[i] = arr[i][0].toUpperCase()+arr[i].slice(1)
  // }
  // return arr.join(" ")
  return str.split(" ").map((item) => item[0].toUpperCase() + item.slice(1));
}

// console.log(capitalizeFirst("hey every one"));

2; ///////////

function encoded(str) {
  return str
    .split(" ")
    .map((item) =>
      item.length > 4
        ? item
            .split("")
            .map((item2) => (item2 = "*"))
            .join("")
        : item
    )
    .join(" ");
}
// console.log(encoded("There are three bees "));

// // 3. Clear sky
// function clearFog(str) {
//     return str.match(/[fog]/gi) ? str.replace(/[fog]/gi, "") : "It's a clear day!"

// }

// console.log(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog")); // "trees"
// console.log(clearFog("sky")); //It's a clear day!

1///////////////
function clearFog(str) {
  if (
    (newArr = str
      .split("")
      .filter(
        (item) =>
          item.toLowerCase() !== "f" &&
          item.toLowerCase() !== "g" &&
          item.toLowerCase() !== "o"
      ))
  ) {
    return newArr.join("");
  } else return "It's a clear day!";
}

2//////////////////
function clearFog2(str) {
  const arr = ["fog"];
  let filtered
 return  filtered = word
    .split("")
    .map(
      (item) =>
        !arr[0].toLocaleLowerCase().split("").includes(item.toLocaleLowerCase())
    )
  ?  filtered.join("")
  : "It's a clear day!"
}
console.log(clearFog("fogfogFFfoooofftogffreogffesGgfOogfog"));
console.log(clearFog("sky"));