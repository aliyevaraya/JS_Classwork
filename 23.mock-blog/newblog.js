const form = document.querySelector("form");
const title = document.querySelector(".title");
const body = document.querySelector(".body");
const author = document.querySelector("#author");
const heading= document.querySelector(".heading")

let authorname;
axios("http://localhost:8080/blogs").then((res) => res.data);

author.addEventListener("change", (e) => {
  authorname = e.target.value;
});

let id = new URLSearchParams(window.location.search).get("id");
if(id){
  axios(`http://localhost:8080/blogs/${id}`).then((res) => {
  title.value = res.data.title;
  body.value = res.data.body;
  author.value = res.data.author;
  heading.innerText="Edit Page"
});
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = {
    title: title.value,
    body: body.value,
    author: authorname || "Lorem",
  };
  if (!id) {
    axios.post("http://localhost:8080/blogs", obj);
    window.location = "index.html";
  } else {
    axios.patch(`http://localhost:8080/blogs/${id}`, obj);
    window.location = "index.html";
  }
});

