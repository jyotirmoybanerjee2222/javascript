alert("helo");
console.log(window);
window.console.log("helo2");//console/alert is part of window
console.dir(window.document);
//dior print prop /method prints
console.dir(document.body);
console.log(document.body);//body object

console.dir(document.body.childNodes[1]);
console.log(document.body.childNodes[1]);

//dom
let button = document.getElementById("heading");
console.dir(button);
let heading = document.getElementsByClassName("myClass");
console.dir(heading);
console.log(heading);

let parahs = document.getElementsByTagName("p");
console.dir(parahs) //return alll object with same tag

//querySelector
let firstEl = document.querySelector("p");
console.dir(firstEl);//return first element with same tag

let allEl = document.querySelectorAll("p");
console.dir(allEl);//returall element with same tag
//return nodelist

let firstEl1 = document.querySelector(".myClass");
console.dir(firstEl1);//return first element with same tag

let allEl1 = document.querySelectorAll(".myClass");
console.dir(allEl1);//returall element with same tag
//return nodelist

let firstEl2 = document.querySelector("#myId");
console.dir(firstEl2);//return first element with same tag


console.log(document.body.firstChild);