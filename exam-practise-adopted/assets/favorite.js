const BASE_URL = "http://localhost:8080/favs";
const cards = document.querySelector(".cards");

function favList(arr) {
  cards.innerHTML = "";
  arr.forEach((el) => {
    cards.innerHTML += `
    <span class="card" style="width: 14rem;">
    <img src=${el.photo} class="card-img-top" alt="" style="height: 200px" />
    <div class="card-body">
      <h5 class="card-title mb-3">${el.name}, ${el.age} years old</h5>
      <a href="#" class="btn btn-primary" onclick=removeFav(${el.id},this)>Remove Fav</a>
    </div>
  </span>
  `;
  });
}

async function getFav() {
  let res = await axios(BASE_URL);
  let data = await res.data;
  favList(data);
}
getFav();

async function removeFav(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest("span").remove();
  favList();
}
