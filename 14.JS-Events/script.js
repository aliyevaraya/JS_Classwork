const nameInput = document.querySelector("#name-input");
const surNameInput = document.querySelector("#surname-input");
const emailInput = document.querySelector("#email-input");
const password = document.querySelector("#pw-input");
const checkInput = document.querySelector("#checkbox");
const checkLabel = document.querySelector("#checked");
const submit = document.querySelector("#submitbtn");
const radios = document.querySelectorAll(".want");

nameInput.addEventListener("focus", function () {
  this.style.backgroundColor = "grey";
  this.style.color = "white";
});
nameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});

surNameInput.addEventListener("mouseover", function () {
  this.style.backgroundColor = "darkGreen";
});
surNameInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});

emailInput.addEventListener("contextmenu", function () {
  this.style.backgroundColor = "red";
});
emailInput.addEventListener("mouseout", function () {
  this.style.backgroundColor = "";
});


password.addEventListener("focus", function () {
  this.value = 12345678;
});
password.addEventListener("mouseout", function () {
  this.value = "";
});

checkInput.addEventListener("click", function () {
  if (checkbox.checked) {
    checkLabel.style.visibility = "visible";
  } else checkLabel.style.visibility = "hidden";
});

submit.setAttribute("disabled", "");

nameInput.addEventListener('change',function(){
    if(nameInput.value && surNameInput.value && checkbox.checked){
        submit.removeAttribute('disabled')
    }else submit.setAttribute('disabled','')
})
surNameInput.addEventListener('change',function(){
    if(nameInput.value && surNameInput.value && checkbox.checked){
        submit.removeAttribute('disabled')
    }else submit.setAttribute('disabled','')
})
checkInput.addEventListener('change',function(){
    if(nameInput.value && surNameInput.value && checkbox.checked){
        submit.removeAttribute('disabled')
    }else submit.setAttribute('disabled','')
})

radios.forEach((radio) =>
  radio.addEventListener("click", function () {
    alert("Thanx");
  })
);
