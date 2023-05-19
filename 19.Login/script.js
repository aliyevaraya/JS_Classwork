const form = document.querySelector("form")
const username =document.querySelector("#username")
const email =document.querySelector("#email")
const password =document.querySelector("#pw")
const checkbox =document.querySelector("#check")
const submitBtn = document.querySelector(".submit")

submitBtn.disabled=true
let usersData= JSON.parse(localStorage.getItem("UsersData")) || []

username.addEventListener("change",()=>{
    if(username.value&& email.value&&password.value&& checkbox.checked) 
    submitBtn.disabled=false
})
email.addEventListener("change",()=>{
    if(username.value&& email.value&&password.value&& checkbox.checked) 
    submitBtn.disabled=false
})
password.addEventListener("change",()=>{
    if(username.value&& email.value&&password.value&& checkbox.checked) 
    submitBtn.disabled=false
})
checkbox.addEventListener("change",()=>{
    (username.value&& email.value&&password.value&& checkbox.checked) 
    ? submitBtn.disabled=false
    : submitBtn.disabled=true
})

form.addEventListener("submit",function(event){
    event.preventDefault()
    let userObj={
        id: Date.now(),
        name: username.value,
        email: email.value,
    }
    usersData.push(userObj)
    localStorage.setItem("UsersData",JSON.stringify(usersData))
    window.location="./users.html"
})