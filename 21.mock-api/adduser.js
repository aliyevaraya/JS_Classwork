const form = document.querySelector("form");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const submitBtn = document.querySelector(".submit");

submitBtn.disabled = true;
function addStatus() {
  nameInput.value && emailInput.value
    ? (submitBtn.disabled = false)
    : (submitBtn.disabled = true);
}

nameInput.addEventListener("input", () => {
  addStatus();
});
emailInput.addEventListener("input", () => {
  addStatus();
});

async function addUser() {
  await fetch(`http://localhost:8080/users/`, {
    method: "POST",
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
  addUser();
  window.location = "index.html";
});
