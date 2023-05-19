let header = document.createElement("header");
let nav = document.createElement("nav");
let ul = document.createElement("ul");
let home = document.createElement("li");
let about = document.createElement("li");
let blog = document.createElement("li");
let contact = document.createElement("li");
let sec1 = document.createElement("section");
let sec2 = document.createElement("section");
let sec3 = document.createElement("section");
let sec4 = document.createElement("section");

document.body.append(header);
header.append(nav);
nav.append(ul);
ul.append(home);
ul.append(about);
ul.append(blog);
ul.append(contact);

document.body.append(sec1);
document.body.append(sec2);
document.body.append(sec3);
document.body.append(sec4);

home.innerHTML = "<strong>Home</strong>";
about.innerHTML = "<strong>About</strong>";
blog.innerHTML = "<strong>Blog</strong>";
contact.innerHTML = "<strong>Contact</strong>";

sec1.innerHTML = "Home";
sec2.innerHTML = "About";
sec3.innerHTML = "Blog";
sec4.innerHTML = "Contact";

ul.style.height = "10vh";
ul.style.display = "flex";
ul.style.justifyContent = "space-around";
ul.style.backgroundColor = "black";
ul.style.alignItems = "center";

home.style.listStyle = "none";
home.style.color = "white";
home.style.cursor="pointer"

about.style.listStyle = "none";
about.style.color = "white";
about.style.cursor="pointer"

blog.style.listStyle = "none";
blog.style.color = "white";
blog.style.cursor="pointer"

contact.style.listStyle = "none";
contact.style.color = "white";
contact.style.cursor="pointer"

sec1.style.height = "100vh";
sec1.style.display = "flex";
sec1.style.justifyContent = "center";
sec1.style.alignItems = "center";
sec1.style.fontSize = "20px";
sec1.style.fontWeight = "bolder";
sec1.style.border = "1px dashed #000";

sec2.style.height = "100vh";
sec2.style.display = "flex";
sec2.style.justifyContent = "center";
sec2.style.alignItems = "center";
sec2.style.fontSize = "20px";
sec2.style.fontWeight = "bolder";
sec2.style.border = "1px dashed #000";

sec3.style.height = "100vh";
sec3.style.display = "flex";
sec3.style.justifyContent = "center";
sec3.style.alignItems = "center";
sec3.style.fontSize = "20px";
sec3.style.fontWeight = "bolder";
sec3.style.border = "1px dashed #000";

sec4.style.height = "100vh";
sec4.style.display = "flex";
sec4.style.justifyContent = "center";
sec4.style.alignItems = "center";
sec4.style.fontSize = "20px";
sec4.style.fontWeight = "bolder";
sec4.style.border = "1px dashed #000";


sec1.id = "sec1";
sec2.id = "sec2";
sec3.id = "sec3";
sec4.id = "sec4";

home.addEventListener("click", () => {
  document.location = "#sec1";
});

about.addEventListener("click", () => {
  document.location = "#sec2";
});

blog.addEventListener("click", () => {
  document.location = "#sec3";
});

contact.addEventListener("click", () => {
  document.location = "#sec4";
});
