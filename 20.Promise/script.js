let api_url = "https://northwind.vercel.app/api/suppliers";

const tBody = document.querySelector("tbody");

function createTable() {
  fetch(api_url)
    .then((data) => data.json())
    .then((item) => {
      // tBody.innerHTML = "";
      item.forEach((el) => {
        let trEl = document.createElement("tr");
        trEl.innerHTML = `
            <td>${el.id}</td>
            <td>${el.companyName}</td>
            <td>${el.address?.city}</td>
            <td>${el.address?.country}</td>
            <td>${el.address?.phone}</td>
            <td><button class="del" onclick=remove(${el.id}) style="background-color: red;"> Delete </button></></td>
            `;
        tBody.append(trEl);
      });
    });
}
createTable();

// function remove(id) {
//   fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
//     method: "DELETE",
//   }).then(() => {
//     createTable();
//   });
// }

function remove(id) {
  fetch(`https://northwind.vercel.app/api/suppliers/${id}`, {
    method: "DELETE",
  })
  document.querySelector(".del").closest("tr").remove()
}
