const tbody = document.querySelector("tbody");
const search = document.querySelector("#search");
const spinner= document.querySelector(".spinner")


window.onload=function () {
    spinner.style.display="flex"
    axios("http://universities.hipolabs.com/search?country=azerbaijan").then(
      (res) => {
        spinner.style.display="none"
        drawTable(res.data);
      }
    );
}

function drawTable(arr) {
  tbody.innerHTML = "";
  arr.forEach((element) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
        <td>${element.name}</td>
        <td>${element.country}</td>
        <td>${element.domains}</td>
        <td><a href="${element.web_pages}" target="_blank">${element.web_pages}</a></td>
        `;
    tbody.append(tr);
  });
}

search.addEventListener("input", (e) => {
    spinner.style.display="flex"
  axios(
    `http://universities.hipolabs.com/search?country=azerbaijan&name=${e.target.value}`
  ).then(res=>{
    spinner.style.display="none"
    drawTable(res.data)
  })
});
