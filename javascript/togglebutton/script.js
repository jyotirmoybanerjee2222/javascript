let modeBtn = document.querySelector('#mode');
let currMode = "Light";//dark

// modeBtn.addEventListener("click",() => {
//    console.log("you are trying to chang mode");
//    if(currMode == "Light"){
//     currMode="dark";
//     document.querySelector("body").style.backgroundColor ="black";
//    }
//    else{
//     currMode="Light"
//     document.querySelector("body").style.backgroundColor ="white";

//    }
//    console.log(currMode);
// });

let body=document.querySelector("body");

modeBtn.addEventListener("click",() => {
    console.log("you are trying to chang mode");
    if(currMode == "Light"){
     currMode="dark";
     body.classList.add("dark");
     body.classList.remove("white");
    }
    else{
     currMode="Light"
     body.classList.add("white");
     body.classList.remove("dark");
 
    }
    console.log(currMode);
 });


// modeBtn.addEventListener("click", () => {
//     console.log("you are trying to change mode");
//     if (currMode === "Light") {
//         currMode = "dark";
//         document.querySelector("body").classList.remove("white");
//         document.querySelector("body").classList.add("dark");
//     } else {
//         currMode = "Light";
//         document.querySelector("body").classList.remove("dark");
//         document.querySelector("body").classList.add("white");
//     }
//     console.log(currMode);
// });

