const addBtn = document.querySelector("#add-btn");
const listInput = document.querySelector("#li-input");
const toDoList = document.querySelector(".list");

addBtn.disabled = true;

let todo = JSON.parse(localStorage.getItem("TodoList")) || [];

function list() {
  toDoList.innerHTML = "";
  todo.forEach((el) => {
    toDoList.innerHTML += `
          <div class="col col-2"></div>
          <div class="col col-8">
            <ul id="ulel" class="list-group ">
              <li class="list-group-item d-flex justify-content-between align-items-center" ><span><input id=check type="checkbox">${el.text}</span>
              <div>
              <button class="btn btn-success " onclick=edit(${el.id})>Edit</button>
              <button class="btn btn-danger" onclick=remove(${el.id})>Delete</button>
              </div>
              </li>
            </ul>
          </div>
          <div class="col col-2"></div>
          `;
  });
}
list();

function sendLocal() {
  let obj = {
    id: Date.now(),
    text: listInput.value,
  };
  if (listInput.value) {
    todo.push(obj);
    localStorage.setItem("TodoList", JSON.stringify(todo));
    listInput.value = "";
  }
}

listInput.addEventListener("input", (event) => {
  event.target.value ? (addBtn.disabled = false) : (addBtn.disabled = true);
});

addBtn.addEventListener("click", function () {
  sendLocal();
  list();
});

window.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    sendLocal();
    list();
  }
});

function remove(id) {
  todo = todo.filter((item) => item.id != id);
  localStorage.setItem("TodoList", JSON.stringify(todo));
  list();
}

// function edit(id) {
//   addBtn.innerHTML = "Edit";
//   if ((addBtn.innerHTML = "Edit")) {
//     listInput.value = todo.find((el) => el.id == id).text.value;
//     // console.log(list);
//     listInput.focus();
//   }
// }

// const checkboxs = document.querySelectorAll("#check")
// const tasks = document.querySelectorAll("span")
// tasks.forEach(task=>{
//   if(checkboxs.forEach(checkbox=> task.childElement(checkbox).checked==true)){
//     task.style.textDecoration="line-through"
//   }else task.style.textDecoration="none"
// })

// console.log();