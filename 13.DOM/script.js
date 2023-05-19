const strbtn = document.createElement("button");
const parag = document.createElement("p");
const form = document.createElement("form");
const username = document.createElement("label");
const nameinput = document.createElement("input");
const surname = document.createElement("label");
const surnameinput = document.createElement("input");
const checkbox = document.createElement("input");
const radio1 = document.createElement("input");
const radio2 = document.createElement("input");
const btn = document.createElement("button");
const nextpage = document.createElement("button");
const br1 = document.createElement("br");
const br2 = document.createElement("br");
const br3 = document.createElement("br");
const br4 = document.createElement("br");
const br5 = document.createElement("br");
const br6 = document.createElement("br");
const br7 = document.createElement("br");

document.body.append(strbtn);
document.body.append(parag);
document.body.append(form);
document.body.append(nextpage);
form.append(username);
form.append(br7);
form.append(nameinput);
form.append(br1);
form.append(surname);
form.append(br2);
form.append(surnameinput);
form.append(br3);
form.append(checkbox);
form.append(br4);
form.append(radio1);
form.append(br5);
form.append(radio2);
form.append(br6);
form.append(btn);

let time = 15;
strbtn.innerHTML = "Let's start...";
parag.innerHTML = `00: ${time}`;
username.innerHTML = "<strong>Name</strong>";
surname.innerHTML = "<strong>Surname</strong>";
btn.innerHTML = "Submit";
nextpage.innerHTML = "Next Page";

nameinput.setAttribute("required", "");
surnameinput.setAttribute("required", "");
checkbox.setAttribute("required", "");
radio1.setAttribute("required", "");
radio2.setAttribute("required", "");

checkbox.setAttribute("type", "checkbox");
radio1.setAttribute("type", "radio");
radio2.setAttribute("type", "radio");
radio1.setAttribute("name","yes")
radio2.setAttribute("name","yes")
btn.setAttribute("disabled", "true");
nextpage.setAttribute("disabled", "true");



parag.style.border = "1px solid black";
parag.style.width = "100px";
parag.style.height = "25px";
parag.style.display="flex"
parag.style.justifyContent="center"
parag.style.alignItems="center"


form.style.height = "80vh";
form.style.border = "1px dashed black";
form.style.display = "flex";
form.style.flexDirection = "column";
form.style.justifyContent = "center";
form.style.alignItems = "center";
checkbox.style.accentColor = "red";

let interval;


strbtn.addEventListener("click", function () {
  interval = setInterval(() => {
    time -= 1;
    parag.innerHTML=`00: ${time}`;
    btn.removeAttribute('disabled')
    strbtn.setAttribute('disabled','true')
    if(time<=10){
        parag.style.color="red";
        parag.style.border="1px solid red"
    }else{
        parag.style.color="black";
        parag.style.border="1px solid black"
    }
    if(time===0){
        parag.innerHTML="You missed("
        clearInterval(interval)
        strbtn.removeAttribute('disabled')
        btn.setAttribute("disabled","true")
       
    }
},1000);
} );

btn.addEventListener('click',function(){
    nextpage.removeAttribute('disabled')
})
nextpage.addEventListener('click',function(){
    alert("Finished!")
})
strbtn.addEventListener('click',()=>{
    time=15
    parag.innerHTML = `00: ${time}`;
    parag.style.color="black";
    parag.style.border="1px solid black"
 })