let favs = JSON.parse(localStorage.getItem("Favorites"));
const cards = document.querySelector(".cards");

function favList() {
    cards.innerHTML=""
  favs.forEach(el => {
    cards.innerHTML+=`
    <div class="card" style="width: 14rem;">
    <img src=${el.photo} class="card-img-top" alt="" style="height: 200px" />
    <div class="card-body">
      <h5 class="card-title">${el.name} ${el.surname}</h5>
      <p class="card-text">${el.email}</p>
      <a href="#" class="btn btn-primary" onclick=removeFav(${el.id})>Remove Fav</a>
    </div>
  </div>
  `
  });
}
favList()

function removeFav(id) {
      // let index = favs.findIndex((e) => e.id == id);
      // favs.splice(index, 1);
      favs=favs.filter(user=>user.id!=id)
      localStorage.setItem("Favorites", JSON.stringify(favs));  
      favList()
}

