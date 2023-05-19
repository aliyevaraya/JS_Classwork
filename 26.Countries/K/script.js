const allCountry = document.querySelector(".countries");
const search = document.querySelector(".search-input");
const filterByRegion = document.querySelector("#regions");
const spinner = document.querySelector(".spinner");
const darkModeBtn = document.querySelector("#dark-mood");

const BASE_URL = "https://restcountries.com/v2/all";

window.onload = function () {
  spinner.style.display = "flex";
  axios(BASE_URL).then((res) => {
    spinner.style.display = "none";
    getAllCountry(res.data);
  });

  localStorage.getItem("dark") && document.body.classList.add("dark-mode");
    darkModeBtn.addEventListener("click", () => {
      if (localStorage.getItem("dark")) {
        localStorage.removeItem("dark");
        document.body.classList.remove("dark-mode");
      } else {
        document.body.classList.add("dark-mode");
        localStorage.setItem("dark", "mode");
      }
    });
};

function getAllCountry(arr) {
  allCountry.innerHTML = "";
  arr.forEach((element) => {
    allCountry.innerHTML += `
   <div class="col-lg-3 col-md-6 col-sm-12 mt-5 d-flex justify-content-center align-items-center">
            <a href="./detail.html?name=${element.name}">
              <div class="card" style="width: 18rem">
                <img src="${element.flags.svg}" class="card-img-top" alt="flag" style="height: 200px"/>
                <div class="card-body">
                  <h5 class="card-title mb-3">${element.name}</h5>
                  <p class="card-text">Population: ${element.population}</p>
                  <p class="card-text">Region: ${element.region}</p>
                  <p class="card-text">Capital: ${element.capital}</p>
                </div>
              </div>
            </a>
          </div>
   `;
  });
}

search.addEventListener("input", (e) => {
  spinner.style.display = "flex";
  axios(`${BASE_URL}`).then((res) => {
    let filtered = res.data.filter((el) =>
      el.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    spinner.style.display = "none";
    getAllCountry(filtered);
  });
});

filterByRegion.addEventListener("change", (e) => {
  spinner.style.display = "flex";
  axios(`${BASE_URL}`).then((res) => {
    let select = res.data.filter((el) => el.region == e.target.value);
    spinner.style.display = "none";
    getAllCountry(select);
  });
});
