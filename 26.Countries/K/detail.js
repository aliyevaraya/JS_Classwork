const country = document.querySelector(".row")
let name = new URLSearchParams(window.location.search).get("name");
const BASE_URL="https://restcountries.com/v3.1/name/"


async function countryDetails() {
  const res = await axios(`${BASE_URL}/${name}`);
  const data = res.data[0];
  console.log(data);
  country.innerHTML = `
    <div class="col-md-12 col-lg-6">
        <img src="${data.flags.svg}" alt="" class="detail-img" style="width: 100%; height: 380px; border-radius: 8px"/>
    </div>
    <div class="col col-lg-6">
        <h1>${data.name.common}</h1>
        <div class="row">
            <div class="col-md-6">
                <p><b>Native Name: </b>${Object.values(data.name.nativeName)[0].common}</p>
                <p><b>Population: </b>${data.population}</p>
                <p><b>Region: </b>${data.region}</p>
                <p><b>Sub Region: </b>${data.subregion}</p>
                <p><b>Capital: </b>${data.capital[0]}</p>
            </div>
            <div class="col-md-6">
                <p><b>Top Level Domain: </b>${data.tld[0]}</p>
                <p><b>Currencies: </b>${Object.values(data.currencies)[0].name}</p>
                <p><b>Languages: </b>${Object.values(data.languages)[0]} ${Object.values(data.languages)[1] ?? ''} ${Object.values(data.languages)[2] ?? ''}</p>
            </div>

        </div>
        <div class="mt-4 d-flex gap-3 text-center">
        <b>Border Countries:</b>
        <p class="border" style="width: 100px;">${data.borders[0]}</p>
        <p class="border" style="width: 100px">${data.borders[1]}</p>
        <p class="border" style="width: 100px">${data.borders[2]}</p>
    </div>
    </div>
  `;
}
countryDetails()