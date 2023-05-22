const form = document.querySelector("form");
const title = document.querySelector("#title");
const description = document.querySelector("#description");
const price = document.querySelector("#price");
const photo = document.querySelector("#photo");

const BASE_URL = " http://localhost:8080/news";

form.addEventListener("submit", (e) => {
    e.preventDefault()
  console.log("hi");
  let news = {
    photo: `./assets/images/${photo.value.split("\\")[2]}`,
    title: title.value,
    description: description.value,
    price: price.value
  };
  axios.post(BASE_URL, news);
  window.location = "index.html";
});
