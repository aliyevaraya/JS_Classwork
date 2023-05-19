const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const userPhoto = document.querySelector("#photo");
const form = document.querySelector("form");
const submitBtn = document.querySelector("button");

let id = new URLSearchParams(window.location.search).get("id");

const BASE_URL = " http://localhost:8080/users";

if (id) {
async function getUser() {
 const res=  await axios(`${BASE_URL}/${id}`)
    const data= res.data
      firstName.value = data.name;
      lastName.value = data.surname;
      email.value = data.email;
      submitBtn.innerText = "Edit";
    };
  
  getUser()
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const date = new Date()
  console.log(userPhoto.value);
  let obj = {
    photo: `./images/${userPhoto.value.split("\\")[2]}`,
    name: firstName.value,
    surname: lastName.value,
    email: email.value,
    date: date.toLocaleString(),
  };
  if (!id) {
    axios.post(BASE_URL, obj);
    window.location = "index.html";
  } else {
    axios.patch(`${BASE_URL}/${id}`, obj);
    window.location = "index.html";
  }
});
