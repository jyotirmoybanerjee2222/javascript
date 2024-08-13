
// console.log("one");
// function hello(){
//     console.log("hello");
// }
// setTimeout(hello,2000);//timeout
// console.log("one");
// function sum(a,b)
// {
//     console.log(a*b);
// }
// function cal(a,b,sumcallback)
// {
// sumcallback(a,b);
// }
// cal(1,2,sum);

// function getData(dataId,getNextdata)
// {
//    setTimeout (()=> {
//     console.log("data:", dataId);
//     if(getNextdata)
//     {
//         getNextdata();
//     }
//    },2000);
// }
// getData(1);
// getData(2);
// getData(30);

// //callback hell
// getData(1,() => {
//   getData(2, () => {
//     getData(3,() => {
//         getData(4 ,() => {
//             getData(5);
//         });
//     });
//   });
// });

// let promice = new Promise((resolve ,reject) => {
//     console.log("I am a promise");
//     //resolve(123);
//     resolve("some error");
// });

// const getPromise = () => {
//    return new Promise((resolve,reject) => {
//        console.log("I am a promice");
//        reject("error");
//        //resolve("succes");
//    });
// };
// let promise = getPromise();
// promise.then((res) =>{
//     console.log("promise fulfilled",res);
// });

// promise.catch((err) => {
//   console.log("rejected",err);
// });


//promise chaining

// function asyncFunc1() {
//     return new Promise((resolve,reject) => {
//        setTimeout(() => {
//         console.log("some data1");
//         resolve("sucess");
//        },2000)
//     });
// }
// function asyncFunc2() {
//     return new Promise((resolve,reject) => {
//        setTimeout(() => {
//         console.log("some data1");
//         resolve("sucess");
//        },2000)
//     });
// }
// console.log("getting data1");
// let p1 = asyncFunc1();
// p1.then((res) => {
//     console.log(res);
//     console.log("getting data2");
//     let p2 = asyncFunc2();
//     p2.then((res) => {
//         console.log(res);
//     })
// })
// console.log("getting data2");
// let p2 = asyncFunc2();
// p2.then((res) => {
//     console.log(res);
// })



function getData(dataId,getNextdata) {
    return new Promise((resolve,reject) => {
        setTimeout (()=> {
                 console.log("data:", dataId);
                 if(getNextdata)
                 {
                     getNextdata();
                 }
                 resolve("Success");
                },2000);
    });
}

//Async-await 
async function getAlldata(){
    await getData(1);
    await getData(2);
    await getData(3);
}

// promise chain
// getData(1)
//     .then((res) => {
//         return getData(2);
//     })
//     .then((res) => {
//         return getData(3);
//     })
//     .then((res) => {
//         console.log(res);
//     });

//Async-await
 async function hello(){
    console.log("hello");
 }

function api() {
   return new Promise((resolve,reject) => {
    setTimeout(() => {
        console.log("weather data");
        resolve("success");
   },2000);
   });
}
async function getweatherdata()
{
    await api();
}

