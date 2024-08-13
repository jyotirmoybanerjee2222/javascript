//Attribute
//getAttribute
let div = document.querySelector("div");
console.log(div);
let id= div.getAttribute("id");
console.log(id);
let name1= div.getAttribute("Name");
console.log(name1);
let para = document.querySelector("p")
console.log(para.getAttribute("class"));

//setAttribute
console.log(para.setAttribute("class","newClass"));//genging attribute value


//style
let Div = document.querySelector("div");//inline style has highest priorities

console.log(div.style);
div.style.backgroundColor="green";
div.style.backgroundColor="purple";
div.style.fontSize="26px";
//div.innerText="Hellow";
//div.style.visibility = "hidden";

//insert element
let newbtn = document.createElement("button");
newbtn.innerText = "click me";
console.log(newbtn);
//div.append(newbtn);//append at last->inside
//div.prepend(newbtn);//add at the start of node->outside
div.before(newbtn);//before but outside
div.after(newbtn);//after but outside


let newHeading = document.createElement("h1");
newHeading.innerHTML = "<i>hi ,i am jyotirmoy</i>";

document.querySelector("body").prepend(newHeading);


//delete element

para.remove();

//appendchild and removechild -- mdn docs
