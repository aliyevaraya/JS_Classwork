// const addBtn = document.querySelector("#add")
// const delBtn  =document.querySelector("#del")
// const removeBtn  =document.querySelector("#remove-all")

// 1////////
// addBtn.addEventListener('click',function(){
    localStorage.setItem("firstName","Raya")
    localStorage.setItem("lastName","Eliyeva")
    localStorage.setItem("age","22")

// 1.1///////////
// console.log(localStorage.length);

// 2////////
// for(let i=0;i<localStorage.length;i++){
//     console.log(localStorage.key(i));
// }

// 3////////////////
// for(let i=0;i<localStorage.length;i++){
//     let key =localStorage.key(i)
//     console.log(localStorage.getItem(key));
// }

// 4/////////////
// console.log(localStorage.key(0));
// 4.1///////////
// let keyArr=[]
// for (let i = 0; i < localStorage.length; i++) {
//     keyArr.push(localStorage.key(i))
// }
// console.log(keyArr);


// 5/////////////
// console.log(localStorage.getItem(localStorage.key(0)));
// 5.1/////////////////////
// let valueArr=[]
// for (let i = 0; i < localStorage.length; i++) {
//     let key = localStorage.key(i)
//     valueArr.push(localStorage.getItem(key))
// }
// console.log(valueArr);

// 6//////////
// delBtn.addEventListener("click",function(){
//     localStorage.removeItem("firstName")
// })

// removeBtn.addEventListener("click",function(){
//     localStorage.clear()
// })

// 7////////////////
// const form = document.querySelector("form")
// const exampleInputEmail1 =document.querySelector("#exampleInputEmail1")
// const exampleInputName =document.querySelector("#exampleInputName")
// const exampleInputPassword1 =document.querySelector("#exampleInputPassword1")
// let checkBox=document.querySelector("#exampleCheck1")
// const usersData= JSON.parse(localStorage.getItem("UsersData")) || []

// form.addEventListener("submit",function(event){
    
//         event.preventDefault()
//         let userObj={
//             email: exampleInputEmail1.value,
//             username: exampleInputName.value,
//             password: exampleInputPassword1.value,
//             checked: checkBox.checked
//         }
//         if(userObj.email && userObj.username){
//         usersData.push(userObj)
//         localStorage.setItem("UsersData",JSON.stringify(usersData))

//         }
//     }
// )


// 8//////////////////

// console.log(JSON.parse(localStorage.getItem("UsersData")));



