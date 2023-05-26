const form = document.querySelector("form");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const photo = document.querySelector("#photo");
const price = document.querySelector("#price");
const submitBtn = document.querySelector(".submitBtn");

const BASE_URL = " http://localhost:8080/offers";

let id = new URLSearchParams(window.location.search).get("id");

if (id) {
    axios(`${BASE_URL}/${id}`).then((res) => {
    let data = res.data;
    title.value = data.title;
    content.value = data.content;
    price.value = data.price;
    photo.value=data.photo
    submitBtn.innerText = "Edit";
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    photo: `./assets/images/${photo.value.split("\\")[2]}`,
    title: title.value,
    content: content.value,
    price: price.value
  };
  if (!id) {
    axios.post(BASE_URL, obj);
  } else {
    axios.patch(`${BASE_URL}/${id}`, obj);
  }
  window.location = "index.html";
});
