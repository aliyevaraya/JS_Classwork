const cards = document.querySelector(".we-care-contents");
const sortBtn = document.querySelector("#sort");
const search = document.querySelector(".search");
const load = document.querySelector(".load");
const header = document.querySelector("header");

const BASE_URL = "  http://localhost:8080/offers";
const BASE_URL_2 = "   http://localhost:8080/favs";

let copyArr = [];
let filtered = [];
let defaultArr = [];
let num = 3;

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
    <div class="we-care-content">
                <img src="${el.photo}" alt="" />
                <div class="we-care-content-text mt-3">
                  <h5>${el.title}</h5>
                  <p>
                   ${el.content}
                  </p>
                  <span class="price d-inline-block mb-2">${el.price}$</span>
                  <div class="btns">
                    <a href="#" class="btn border-danger" onclick=delOffer(${el.id},this)>Delete</a>
                    <a href="./add-edit.html?id=${el.id}" class="btn border-success">Edit</a>
                    <br />
                    <a href="#" class="btn border-primary mt-2" onclick=addFav(${el.id})>Add Fav</a>
                    <a href="./detail.html?id=${el.id}" class="btn border-info mt-2">Details</a>
                  </div>
                </div>
              </div>
        `;
    cards.append(card);
    card.classList.add("col-lg-4", "mb-3", "col-sm-6");
  });
}
getDataAll();

async function delOffer(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest(".we-care-content").remove();
}
search.addEventListener("input", async (e) => {
  filtered = copyArr.slice(0, num);
  filtered = filtered.filter((el) =>
    el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
  );
  getDataAll(filtered);
});

load.addEventListener("click", (e) => {
  e.preventDefault();
  num = num + 3;
  filtered = copyArr.slice(0, num).filter((item) => {
    return item.title
      .toLocaleLowerCase()
      .includes(search.value.toLocaleLowerCase());
  });
  console.log(defaultArr);
  defaultArr = filtered;
  getDataAll();
});

sortBtn.addEventListener("change", () => {
  if (sortBtn.value == "asc") {
    filtered = filtered.sort((a, b) => a.price - b.price);
  } else if (sortBtn.value == "dsc") {
    filtered = filtered.sort((a, b) => b.price - a.price);
  } else {
    filtered = defaultArr;
  }
  console.log(filtered);

  getDataAll();
});

 async function addFav(id) {
  const res= await axios(`${BASE_URL_2}/${id}`)
  const obj=res.data
  await axios(BASE_URL_2,obj)
}