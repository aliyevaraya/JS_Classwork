const input = document.querySelector("#li-input");
const addBtn = document.querySelector("#add-btn");
const ulEl = document.querySelector("#ulel");

addBtn.disabled = true;

input.addEventListener("input", function (event) {
  event.target.value ? (addBtn.disabled = false) : (addBtn.disabled = true);
});

addBtn.addEventListener("click", liList);

window.addEventListener("keyup", function (event) {
  if (event.code === "Enter") liList();
});

function liList() {
  ulEl.innerHTML += `
    <li class="list-group-item list-group-item-warning d-flex justify-content-between align-items-center mb-2">
    <span>${input.value}</span>
    <div>
      <button type="button" class="btn btn-success">Edit</button>
      <button type="button" class="btn btn-danger">Delete</button>
    </div>
  </li>`;

  const allDeleteBtns = document.querySelectorAll(".btn-danger");

  allDeleteBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      this.closest("li").remove();
    });
  });

  const allEditBtn = document.querySelectorAll(".btn-success");

  allEditBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      input.value = this.closest("li").firstElementChild.innerText;
      input.focus();
      this.closest("li").remove();
      addBtn.innerText="Edit"
      addBtn.disabled=false;
    })
    addBtn.addEventListener('click',function(){
      addBtn.innerText="ADD"
    });
    window.addEventListener("keyup", function (event) {
      if (event.code === "Enter") addBtn.innerText="ADD";
    });
    
  });
  input.value = "";
  addBtn.disabled = true;
}
