const row = document.querySelector(".row");
const sortBtn = document.querySelector("#sort");
const search = document.querySelector("#search");

const BASE_URL = "http://localhost:8080/about";
const BASE_URL_2 = "http://localhost:8080/fav/";

let filtered = [];
let copyArr = [];
let defaultArr = [];

async function drawCard() {
  let res = await axios(BASE_URL);
  let data = res.data;
  copyArr = data;
  filtered = filtered.length || search.value ? filtered : data;
  // defaultArr = filtered;
  row.innerHTML = "";
  filtered.forEach((element) => {
    const card = document.createElement("div");
    card.innerHTML = `
   <div> <img src="./assets/images/photo-camera (2).png" alt="" /></div>
 <div>  
  <h4>${element.title}</h4>
 <p>
   ${element.content}
 </p>
 <p>
   ${element.price}$
 </p>
 </div>
   <div class="text-center">
   <a href="#" class="btn border-warning mt-2 favBtn" onclick=addFav(${element.id})>Add Favs</a>
   <a href="#" class="btn border-secondary mt-2 delBtn" onclick=delCard(${element.id})>Delete</a>
   <a href="href=./detail.html?id=${element.id}" class="btn border-danger mt-2 detailBtn" >More Details</a>
   <a href="./add.html?id=${element.id}" class="btn border-success mt-2 editBtn">Edit</a>
   </div>
    `;
    row.append(card);
    card.classList.add("col-lg-3", "img-col", "mt-3");
  });
}
drawCard();

async function delCard(id) {
  await axios.delete(`${BASE_URL}/${id}`);
  drawCard();
}



// sortBtn.addEventListener("click", async () => {
//   let res = await axios(BASE_URL);
//   let data = res.data;
//   console.log(data);
//   let sorted;
//   if (option=="ascending") {
//     // sortBtn.innerHTML = "Ascending";
//     sorted = filtered.sort((a, b) => a.price - b.price);
//   } else {
//     // sortBtn.innerHTML = "Descending";

//     sorted = filtered.sort((a, b) => b.price - a.price);
//   }
//   drawCard(sorted);
// });

async function addFav(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let obj = res.data;
  await axios.post("http://localhost:8080/fav/", obj);
}

search.addEventListener("input", function (e) {
  filtered = copyArr;
  filtered = filtered.filter((el) =>
    el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  defaultArr=filtered
  // console.log("filf",filtered);
  // console.log("def",defaultArr);
  drawCard();
});

sortBtn.addEventListener("change", (e) => {
  if (e.target.value == "asc") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (e.target.value == "desc") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else filtered=defaultArr;
  console.log(filtered);
  drawCard();
});