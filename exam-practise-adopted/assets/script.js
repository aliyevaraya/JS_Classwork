const cards = document.querySelector(".cards");
const filterBtn = document.querySelector(".filterbtn");

const BASE_URL = " http://localhost:8080/children";

function drawCards(arr) {
  cards.innerHTML = "";
  arr.forEach((element) => {
    const card = document.createElement("div");
    card.innerHTML = `
       <img
       src=${element.photo}
       class= "card-img"
       alt="..."
     />
     <div class="card-body">
       <div class="d-flex  mb-4">
       <h5 class="title">${element.name}, </h5>
       <span class="card-text mx-2">
        ${element.age} yrs old
       </span>
       </div>
       <a class="btn btn-danger" onclick=delCard(${element.id})>Delete</a>
       <a href="#" class="btn btn-primary" onclick=addFav(${element.id})>Add fav</a>
       <a href="add.html?id=${element.id}" class="btn btn-success">Edit</a>
     </div>
       `;
    cards.append(card);
    card.classList.add("col-md-4", "child-card", "mb-4","col-sm-6");
  });
}

async function getCard() {
  const res = await axios(BASE_URL);
  const data = await res.data;
  drawCards(data);
}
getCard();

function delCard(id) {
  axios.delete(`${BASE_URL}/${id}`);
  getCard();
}

let bool = false;
filterBtn.addEventListener("click", async function () {
  let res = await axios(BASE_URL);
  let data = await res.data;
  console.log(data);
  bool = !bool;
  let sorted;

  if (bool) {
    sorted = data.sort((a, b) => a.age - b.age);
  } else {
    sorted = data.sort((a, b) => b.age - a.age);
  }
  drawCards(sorted);
});

async function addFav(id) {
  const res = await axios(`${BASE_URL}/${id}`);
  const obj = await res.data;
  console.log(obj);
  await axios.post("http://localhost:8080/favs", obj);
}
