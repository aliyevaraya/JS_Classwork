const cards = document.querySelector(".robotics");
const sortBtn = document.querySelector("#sort");
const search = document.querySelector(".search");
const load = document.querySelector(".load");
const header = document.querySelector("header");

const BASE_URL = " http://localhost:8080/products";

let copyArr = [];
let filtered = [];
let defaultArr = [];
let num = 4;

async function getDataAll() {
  let res = await axios(BASE_URL);
  let data = await res.data;
  copyArr = data;
  defaultArr = copyArr.slice(0, num);
  filtered = filtered.length || search.value ? filtered : data.slice(0, num);
  cards.innerHTML = "";
  filtered.forEach((el) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <div class="products">
    <div class="robotics-products-infor-img">
    <img src="./assets/images/p1.png" alt="" />
  </div> 
    <div class="robotics-products-infor-content">
      <h3>${el.companyName}</h3>
      <p>${el.contactTitle}</p>
      <a href="#" class="btn border-primary detail-bt n mb-3">Add Favs</a>
      <a href="#"  class="btn border-danger detail-btn mb-3" onclick=delCard(${el.id},this)>Delete</a>
      <a href="./add.html?id=${el.id}" class="btn border-success detail-btn mb-3">Edit</a>
      <a href="./detail.html?id=${el.id}" class="btn border-secondary detail-btn mb-3">View Details</a>
    </div>
    </div>
        `;
    cards.append(card);
    card.classList.add(
      "robotics-products-infor",
      "col-lg-3",
      "mb-3",
      "col-md-4",
      "col-sm-6"
    );
  });
}
getDataAll();

async function delCard(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest(".products").remove();
  // filtered = copyArr.slice(0, num).filter((item) => item.id != id);
}
search.addEventListener("input", async (e) => {
  filtered = copyArr.slice(0, num);
  filtered = filtered.filter((el) =>
    el.companyName
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  getDataAll(filtered);
});

load.addEventListener("click", (e) => {
  e.preventDefault();
  num = num + 4;
  filtered = copyArr.slice(0, num).filter((item) => {
    return item.companyName
      .toLocaleLowerCase()
      .includes(search.value.toLocaleLowerCase());
  });
  console.log(defaultArr);
  defaultArr=filtered
  getDataAll();
});

sortBtn.addEventListener("change", () => {
  if (sortBtn.value == "asc") {
    filtered = filtered.sort((a, b) => a.id - b.id);
  } else if (sortBtn.value == "desc") {
    filtered = filtered.sort((a, b) => b.id - a.id);
  } else {
    filtered = defaultArr;
  }
  console.log(filtered);

  getDataAll();
});

function scrollFunction() {
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    header.style.backgroundColor = "rgb(144,145,255)";
      // btn.style.display = 'block'
  } else {
      header.style.background = '';
      // btn.style.display = 'none'

  }
}

window.onscroll = function () { scrollFunction() }
