const form = document.querySelector("form");
const title = document.querySelector("#title");
const content = document.querySelector("#content");
const price = document.querySelector("#price");
const submitBtn = document.querySelector(".submitbtn");

const BASE_URL = "http://localhost:8080/about";

let id = new URLSearchParams(window.location.search).get("id");
console.log(id);

if (id) {
  async function fillInput() {
    let res = await axios(`${BASE_URL}/${id}`);
    let data = res.data;
    console.log(data);
    title.value = data.title;
    content.value = data.content;
    price.value = data.price;
    submitBtn.innerHTML = "Edit";
  }
  fillInput();
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    title: title.value,
    content: content.value,
    price: price.value,
  };
  if (!id) {
    axios.post(BASE_URL,obj);
  } else {
    axios.patch(`${BASE_URL}/${id}`, obj);
  }
  window.location = "./index.html";
});
