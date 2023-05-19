
const boxes = document.querySelector(".boxs")
const addUser=document.querySelector(".add")

let users = JSON.parse(localStorage.getItem("UsersData")) || []

function userData() {
    boxes.innerHTML=""
    users.forEach(user => {
        const box = document.createElement("div")
        boxes.append(box)
        box.innerHTML=`
        <h1 style="text-align: center; margin-bottom: 20px; color: red;">User</h1>
        <h5>name: ${user.name}</h5>
        <h6>email: ${user.email}</h6>
        <button class="del btn btn-danger" onclick=remove(${user.id}) >Delete</button>
        `  
        box.classList.add("box")
    });
}

userData()


function remove(id) {
    users=users.filter(user=>user.id != id)
    localStorage.setItem("UsersData",JSON.stringify(users))
    userData()
}

addUser.addEventListener("click",()=>{
window.location="./index.html"
})