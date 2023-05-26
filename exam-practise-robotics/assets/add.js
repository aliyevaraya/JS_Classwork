const form = document.querySelector("form");
const name = document.querySelector("#companyName");
const title = document.querySelector("#contactTitle");
const submitBtn = document.querySelector(".submitBtn");

const BASE_URL = " http://localhost:8080/products";

let id = new URLSearchParams(window.location.search).get("id");

if (id) {
    axios(`${BASE_URL}/${id}`).then((res) => {
    let data = res.data;
    name.value = data.companyName;
    title.value = data.contactTitle;
    submitBtn.innerText = "Edit Page";
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    companyName: name.value,
    contactTitle: title.value,
  };
  if (!id) {
    axios.post(BASE_URL, obj);
  } else {
    axios.patch(`${BASE_URL}/${id}`, obj);
  }
  window.location = "index.html";
});
