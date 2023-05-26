const cards = document.querySelector(".news-cards");
const sortBtn = document.querySelector(".sortbtn");
const search = document.querySelector("#search");

const BASE_URL = " http://localhost:8080/news";

async function getDataAll(arr) {
  cards.innerHTML = "";
  arr.forEach((el) => {
    const card = document.createElement("div");
    card.innerHTML = `
                <div class="card mb-3" style="width: 23rem; height: 30rem;">
                  <img src=${el.photo} class="card-img-top" alt="..." style="height: 50%" />
                  <div class="card-body">
                    <h5 class="card-title">${el.title}</h5>
                    <p class="card-text">
                     ${el.description}
                    </p>
                    <p>Price: ${el.price} dollar</p>
                    <button onclick=delnews(${el.id})  class="btn btn-primary">Delete</button>
                    </div>
                </div>
        `;
    cards.append(card);
  });
}

async function getCards() {
  let res = await axios(BASE_URL);
  let data = await res.data;
  getDataAll(data);
}
getCards();

async function delnews(id) {
  await axios.delete(`${BASE_URL}/${id}`);
}

let bool = false;
sortBtn.addEventListener("click", async function () {
  let res = await axios(BASE_URL);
  let data = await res.data;
  bool = !bool;
  let sorted;
  if (bool) {
    sorted = data.sort((a, b) => a.price - b.price);
  } else {
    sorted = data.sort((a, b) => b.price - a.price);
  }
  getDataAll(sorted)
});

search.addEventListener("input",async (e)=>{
  let res = await axios(BASE_URL);
  let data = await res.data;
  let filtered= data.filter(el=>el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
  getDataAll(filtered)
})