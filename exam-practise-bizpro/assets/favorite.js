const BASE_URL= "http://localhost:8080/fav"

const card = document.querySelector(".person");

function favList(arr) {
  card.innerHTML = "";
  arr.forEach((el) => {
    card.innerHTML += `
    <span class="d-inline-block mb-5 mx-5" style="width: 18rem;">
    <img src="./assets/images/photo-camera (2).png" alt=""/>
    <h4>${el.title}</h4>
    <p>
      ${el.content}
    </p>
    <p>
      ${el.price}
    </p>
    <a href="#" class="btn border-danger mt-2" onclick=delFav(${el.id},this)>Delete</a>
    </span>
  `;
  });
}

async function getFav() {
  let res = await axios(BASE_URL);
  let data = await res.data;
  favList(data);
}
getFav();

async function delFav(id, btn) {
  await axios.delete(`${BASE_URL}/${id}`);
  btn.closest("span").remove();
  favList();
}