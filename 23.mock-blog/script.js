const allCards = document.querySelector("#blogcards");
const delBtn = document.querySelector("#delbtn");
const search = document.querySelector("#search");

const blog_url = "http://localhost:8080/blogs";
axios(blog_url).then((res) => {
  getAllCards(res.data);
});

function getAllCards(arr) {
  allCards.innerHTML = "";
  arr.forEach((el) => {
    const card = document.createElement("div");
    card.innerHTML = `
    <h3>${el.title}</h3>
        <p>
          ${el.body.slice(0, 100)}...
          <a href="detail.html?id=${el.id}">Read More</a>
        </p>
        <p class="authorname">written by ${el.author}</p>
    <div><button class="btn delbtn" onclick=delCard(${
      el.id
    },this)>Delete</button>
    <a href="newblog.html?id=${el.id}" class="btn editbtn">Edit</a></div>
    `;
    allCards.append(card);
    card.classList.add("card");
  });
}

function delCard(id, btn) {
  axios.delete(`${blog_url}/${id}`);
  btn.closest("div").remove();
}
function editCard() {
  window.location = "newblog.html";
}

search.addEventListener("input", (e) => {
  axios(blog_url).then((res) => {
    let filtered = res.data.filter((el) =>
      el.title.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase())
    );
    getAllCards(filtered);
  });
});
