const form = document.querySelector("form");
const childName = document.querySelector("#child-name");
const childAge = document.querySelector("#child-age");
const childPhoto = document.querySelector("#child-photo");
const back = document.querySelector(".back-btn");
const add = document.querySelector(".add-btn");

const BASE_URL = " http://localhost:8080/children";

back.addEventListener("click", () => {
  window.location = "./index.html";
});

let id = new URLSearchParams(window.location.search).get("id");

async function fillinput(id) {
  let res = await axios(`${BASE_URL}/${id}`);
  let data = res.data;
  childName.value = data.name;
  childAge.value = data.age;
  add.innerText = "Edit";
}

if (id) {
  fillinput(id);
}


form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    photo: `./assets/images/${childPhoto.value.split("\\")[2]}`,
    name: childName.value,
    age: childAge.value,
  };
  if (!id) {
    axios.post(BASE_URL, obj);
    window.location = "index.html";
  } else {
    axios.patch(`${BASE_URL}/${id}`, obj);
    window.location = "index.html";
  }
});
