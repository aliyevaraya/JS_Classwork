let id = new URLSearchParams(window.location.search).get("id");
const BASE_URL = "http://localhost:8080/favs";

const card = document.querySelector(".we-care-contents");

async function drawDetail() {
const res= await  axios(`${BASE_URL}/${id}`)
const data= res.data
    card.innerHTML = `
  <div class="col-lg-4">
  <div class="we-care-content">
    <img src="${data.photo}" alt="" />
    <div class="we-care-content-text mt-3">
      <h5>${data.title}</h5>
      <p>
        ${data.content}
      </p>
      <span class="price d-inline-block mb-2">${data.price}$</span>
      </div>
    </div>
  </div>
</div>
  `;
  }
drawDetail();
