const form = document.querySelector("form");
let nameInput = document.querySelector("#name");
let emailInput = document.querySelector("#email");
const editBtn = document.querySelector(".editbtn");

let userId = localStorage.getItem("UserId")


  async function getUser() {
    let res = await fetch(`http://localhost:8080/users/${userId}`);
    let data = await res.json();
    nameInput.value = data.username;
    emailInput.value = data.email;
  }
  getUser();

  async function editUser() {
    await fetch(`http://localhost:8080/users/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: nameInput.value,
        email: emailInput.value,
      }),
    });
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    editUser();
    window.location = "index.html";
  });
