const tBody = document.querySelector("#tBody");
const search = document.querySelector("#search");
const form = document.querySelector("#userform");
const firstName = document.querySelector("#firstname");
const lastName = document.querySelector("#lastname");
const email = document.querySelector("#email");
const submitBtn = document.querySelector("#submitbtn");
const sortName = document.querySelector("#thFirstName");
const arrowUp = document.querySelector(".arrowUp");
const arrowDown = document.querySelector(".arrowDown");
const notification = document.querySelector("#notif");
const card_pw = document.querySelector("#card-pw");

let dataArr = [];
let sortedArr = [];
axios("http://localhost:8080/users").then((res) => {
  dataArr = res.data;
  drawTable(dataArr);
});

function drawTable(arr) {
  tBody.innerHTML = "";
  arr.forEach((el) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <tr>
        <td>${el.firstName}</td>
        <td>${el.lastName}</td>
        <td>${el.email}</td>
        <td>${el.card
          .split("")
          .fill("*", 0, el.card.length - 4)
          .join("")}</td>
        <td><a href="#" class="btn btn-warning" onclick=editUser(${
          el.id
        })>Edit</a>
       <a href="#" class="btn btn-danger" onclick=delUser(${
         el.id
       },this)>Delete</a>
       <button  class="btn btn-primary" onclick=getDetail(${el.id},"${
      el.firstName
    }","${el.date}")>Detail</button></td>
        </tr>
        `;
    tBody.append(tr);
  });
}

function showAlert(massage, className) {
  notification.innerHTML = massage;
  notification.className = `alert alert-${className}`;
  notification.removeAttribute("hidden");
  setTimeout(() => {
    notification.setAttribute("hidden", "");
  }, 5000);
}

function getDetail(id, username,date) {
  console.log(id);
  console.log(username);
  console.log(date);
  showAlert(`user: ${username} created on ${date}`, "primary");
}


let status = false;
let userId;
function delUser(id) {
  axios.delete(`http://localhost:8080/users/${id}`);
  showAlert(`user succesfully deleted`, `danger`);
}

async function editUser(id) {
  userId = id;
  status = true;
  sortedArr = dataArr.find((el) => el.id == id);
  console.log(sortedArr);
  firstName.value = sortedArr.firstName;
  lastName.value = sortedArr.lastName;
  email.value = sortedArr.email;
  card_pw.value = sortedArr.card;
  submitBtn.value = "Edit";
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const date = new Date();
  if (firstName.value && lastName.value && email.value && card_pw.value) {
    let obj = {
      firstName: firstName.value,
      lastName: lastName.value,
      email: email.value,
      card: card_pw.value,
      date: date.toLocaleDateString(),
    };

    console.log(date.toLocaleDateString());
    if (status) {
      axios.patch(`http://localhost:8080/users/${userId}`, obj);
      showAlert(`New user succesfully added`, `success`);
    } else {
      axios.post("http://localhost:8080/users", obj);
      showAlert(`New user succesfully undated`, `primary`);
    }
  } else {
    showAlert("please fill all fields", "danger");
  }
});

let bool = false;
sortName.addEventListener("click", () => {
  bool = !bool;
  let sort;
  if (bool) {
    sort = dataArr.sort((a, b) => a.firstName.localeCompare(b.firstName));
    arrowUp.style.display = "inline-block";
    arrowDown.style.display = "none";
  } else {
    sort = dataArr.sort((a, b) => b.firstName.localeCompare(a.firstName));
    arrowDown.style.display = "inline-block";
    arrowUp.style.display = "none";
  }
  drawTable(sort);
});

search.addEventListener("input", (e) => {
  sortedArr = dataArr.filter((el) =>
    el.firstName
      .toLocaleLowerCase()
      .includes(e.target.value.toLocaleLowerCase())
  );
  dataArr = sortedArr;
  drawTable(dataArr);
});
