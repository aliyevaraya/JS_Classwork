const card= document.querySelector(".card")

let id = new URLSearchParams(window.location.search).get("id");


axios(`http://localhost:8080/blogs/${id}`).then(res=>{
        card.innerHTML=`
        <h3>Blog Title:${res.data.title}</h3>
        <p>
          ${res.data.body}
        </p>
        <h4>Author: ${res.data.author}</h4>
        `
    });