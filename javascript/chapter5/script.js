function myFuncction(msg,n){
    console.log("I am learning js");
    console.log(msg);
    console.log(n);
}
myFuncction("HI ,i am Jyotirmoy",100);

//sum of twoNuumber
// function sum(x,y)
// {
//     s = x+y;
//     return s;
// }

//sum  and multliplication using arrow function
const arrowSum = (a,b) =>{
    console.log(a+b);
};
const arrowmul = (a,b) =>{
    console.log(a*b);
};
const arrowMul = (a,b)=>
{
    return a*b;
};
const printHello = () =>
{
    console.log("PrintHellow");
};
function mul(x,y)
{
    s = x*y;
    return s;
}
// val = sum(1,2);
// console.log(val);
val1 = mul(1,2);
console.log(val1);
console.log(mul);
// ƒ mul(x,y)
// {
//     s = x*y;
//     return s;
// }

//takes an string and return the number of vowel in it
function countVowels(str)
{
    let count = 0;
   for(const char of str)
    {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" )
        {
            count++
        }  
    } 
    console.log(count);
    return count;
}

const countVow =(str) =>
{
    let count = 0;
   for(const char of str)
    {
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" )
        {
            count++
        }  
    } 
   // console.log(count);
    return count;
}

//forEach loop
function abd(){
    console.log("abc");
}
function myFunc(abd)//we can take function as argument
{
    return abd;
}

let arr = [1,2,3,4,5,5,6];

arr.forEach(function printVal(val){  //value at each index
  console.log(val);
})

let arr1 = ["delhi","pune","baNgalore"];

arr1.forEach(function printVal(val){  //value at each index
  console.log(val.toUpperCase());
})

//passing as arrow function
arr1.forEach((val,idx,arr) => {
    console.log(val,idx,arr)
})

//for givern number of array prinrt square
let nums = [2,3,4,5,6,7,8,9];

let calculateSquare = (nums) => {
    console.log(nums**2);
};
nums.forEach(calculateSquare);

//another way
nums.forEach((nums) => {
  console.log(nums**2);
});


//map method
// map is same as forEach but give new array
let newArr = nums.map((val)=>
{
    return val*val;
});
console.log(newArr);

//filter
let evenArr=nums.filter((val) => {
   return val % 2 === 0;
})
let oddArr=nums.filter((val) => {
    return val % 2 !== 0;
 })
console.log(evenArr);
console.log(oddArr);


//reduce method
//sum of number
const output= nums.reduce((res,curr)=>{
   return res+curr; 
});
console.log(output);//44

//largest number
const output1 = nums.reduce((prev,curr) => {
    return prev > curr ? prev : curr;
});
console.log(output1);

//filter out the marks which is higher than 90
let marks = [97,85,64,52,62,90,52,63,96];
let topper = marks.filter((val) => 
{
   return val >90;
})
console.log(topper)

//take use input a number and return a arr of 1 to n and calculate sum of n numner and product of n number

let n = prompt("entet a number");
let arr2 = [];
for(let i = 1;i<=n;i++)
{
    arr2[i-1] = i;
}
console.log(arr2);

let sum=arr.reduce((res ,curr) => {
   return res+curr
})
console.log(sum);

let mul1=arr.reduce((res,curr)=>
{
    return res*curr;
})
console.log(mul1);