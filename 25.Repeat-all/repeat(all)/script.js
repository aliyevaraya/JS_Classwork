const menuIcon = document.querySelector(".fa-bars");
const burgerMenu = document.querySelector(".burger-menu");
const closeIcon = document.querySelector(".fa-xmark");
const tbody = document.querySelector("tbody");
const cards = document.querySelector("#card-sec");

const BASE_URL = " http://localhost:8080/users";

menuIcon.addEventListener("click", () => {
  burgerMenu.style.display = "block";
});
closeIcon.addEventListener("click", () => {
  burgerMenu.style.display = "none";
});


function getAllUser(arr) {
  tbody.innerHTML = "";
  cards.innerHTML = "";
  arr.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <th scope="row">${element.id}</th>
        <td><img src="${element.photo}" alt="" /></td>
        <td>${element.name}</td>
        <td>${element.surname}</td>
        <td>${element.email}</td>
        <td>${element.date}</td>
        <td>
          <a href="adduser.html?id=${element.id}" id="editbtn" class="btn btn-success" >Edit</a>
          <a href="#" id="delbtn" class="btn btn-danger" onclick=delUser(${element.id})>Delete</a>
          <a href="#"  class="btn btn-primary"  onclick=addFav(${element.id})>Add Fav</a>
        </td>
        `;
    tbody.append(tr);

    const card = document.createElement("div");
    card.innerHTML = `
        <div class="id-date">
          <span class="card-id">id: ${element.id}</span>
          <span class="card-date">${element.date}</span>
        </div>
        <div class="card-info">
          <div class="img-name">
            <img src="${element.photo}" alt="" style="width: 40px" />
            <div>
              <span>${element.name} ${element.surname}</span>
              <span>${element.email}</span>
            </div>
          </div>
          <div class="btns">
            <a href="adduser.html?id=${element.id}" class="btn btn-success">Edit</a>
            <a href="#" class="btn btn-danger" onclick=delUser(${element.id})>Delete</a>
            <a href="#" class="btn btn-primary" onclick=addFav(${element.id})>Add Fav</a>
          </div>
        </div>
        `;
    card.classList.add("card", "mb-3");
    cards.append(card);
  });
}

async function getData() {
  let res = await axios(`${BASE_URL}`);
  let data = res.data;
  getAllUser(data);
}
getData();

async function delUser(id) {
  await axios.delete(`${BASE_URL}/${id}`);
}

let favs = JSON.parse(localStorage.getItem("Favorites")) || [];

async function addFav(id) {
  const res = await axios(`${BASE_URL}/${id}`);
  const data = await res.data;
  let check = favs.find((user) => user.id == data.id);
  if (check) {
    alert("User already added to Favorites");
  } else {
    favs.push(data);
    localStorage.setItem("Favorites", JSON.stringify(favs));
  }
}
