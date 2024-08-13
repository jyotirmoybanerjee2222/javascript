let newbtn = document.createElement("button");
newbtn.innerText = "click Me";
newbtn.style.color = "white";
newbtn.style.backgroundColor = "red";
document.querySelector("body").prepend(newbtn);

//question2
let para = document.querySelector("p");
para.classList.add("newclass");