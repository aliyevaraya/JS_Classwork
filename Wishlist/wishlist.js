let favs  = JSON.parse(localStorage.getItem("Favorites")) || []
const row = document.querySelector(".row")

favs.forEach(el => {
    row.innerHTML+= `
    <span class="col col-3 my-3">
    <div class="card" style="width: 18rem;">
       <div class="card-body">
       <h5 class="card-title">${el.title}</h5>
       <p class="card-text">${el.publisher}</p>
       <em><p class="card-text">${el.year}</p></em> 
       <button class="btn removebtn bg-danger" id=${el.id}>Remove from Favorites</button>
   </div>
   </div>
   </span>`;
});

removeBtn=document.querySelectorAll(".removebtn")

removeBtn.forEach(btn=>{
    btn.addEventListener("click",()=>{
        let index = favs.findIndex(e=>e.id==btn.id)
        favs.splice(index,1)
        localStorage.setItem("Favorites",JSON.stringify(favs))
        btn.closest("span").remove()
    })
})