const addBtn = document.querySelector("#addbtn");
const cards = document.querySelector(".cards");

addBtn.addEventListener("click", function () {
  window.location = "adduser.html";
});

async function getAllData() {
  let res = await fetch("http://localhost:8080/users");
  let data = await res.json();
  cards.innerHTML = "";
  data.forEach((el) => {
    let card = document.createElement("div");
    card.innerHTML = `
        <div>
            <h5>${el.username}</h5>
            <h6>${el.email}</h6>
        </div>
      <div class="icons d-flex gap-3">
        <i class="fa-solid fa-pen text-success edit" onclick=editUser(${el.id})></i>
        <i class="fa-solid fa-trash-can text-danger" onclick=delUser(${el.id})></i>
      </div>
      `;
    card.classList.add(
      "col-5",
      "d-flex",
      "justify-content-between",
      "align-items-center",
      "bg-secondary",
      "p-3"
    );
    cards.append(card);
  });
}
getAllData();

async function delUser(id) {
  await fetch(`http://localhost:8080/users/${id}`, {
    method: "DELETE",
  });
  getAllData();
}

 function editUser(id) { 
  localStorage.setItem("UserId",id);
  window.location = "edituser.html";
}
