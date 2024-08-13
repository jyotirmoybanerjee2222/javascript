let btn1 = document.querySelector("#btn1");
// btn1.onclick = () =>{
//     console.log("this button was click");
//     let a = 25;
//     a++;
//     console.log(a);//25

// };
// btn1.onclick = (e) =>{
//     console.log(e);//gives details about event details like ehere it click
//     console.log(e.type);
//     console.log(e.target);
//     console.log(e.clientX,e.clientY);
//     console.log("2 handler was print first was overwrite");
//     let a = 25;
//     a++;
//     console.log(a);//25

// };
btn1.addEventListener("click",() => {
    console.log("btn1 was print - 1");
})
btn1.addEventListener("click",() => {
    console.log("btn1 was print -2");
})
const handler3 =() => {
    console.log("btn1 was print -3");
}
btn1.addEventListener("click",handler3)
btn1.removeEventListener("click",handler3);//handler3 was not printed
let div = document.querySelector("div");
div.onmouseover = (evt) => {
    console.log(evt);//gives details about event details like ehere it click
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clientX,evt.clientY);
    console.log("you are inside div");
};
// div.addEventListener("onmouseover",() => {
//     console.log("div was print");
// })