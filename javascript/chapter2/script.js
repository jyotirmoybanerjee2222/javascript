console.log("Hellow world");
//print hellow world
/* this print hellow world*/

//Arithmetic Operator
let a = 5;
let b = 2;
console.log("a=",a,"b=",b);

console.log("a+b=",a+b);
console.log("a-b=",a-b);
console.log("a*b=",a*b);
console.log("a/b=",a/b);
console.log("a % b=",a%b);
console.log("a ** b=",a**b);

//unary operator
a = a+1;
console.log("a=",a);//6
a++;
console.log("a=",a);//7
console.log("a++ =",a++);//7 post increment operator

console.log("a =",a)//8
console.log("++a = ",++a);//9
console.log("--a=",--a);//8
console.log("a--=",a--);//8
console.log("a=",a);//5

//Asingment Operator
a += 4;//a = a+4;
console.log("a = ",a);//11
a *= 4;
console.log("a =",a);//44
a /= 4;
console.log("a =",a);
a %= 4;
console.log("a =",a);
a **= 4;
console.log("a =",a);//81


// operators
console.log("a == b", a == b);//false
console.log("a != b",a != b);
let a1 = 5;
let  b1 = "5"; //string -> number implicitely and then compares
console.log("a == b", a1 == b1);//true
console.log("a === b",a1 === b1);//false
console.log("a !== b", a !== b);//true
console.log("a > b", a > b);//true
console.log("a < b",a<b);//false
console.log("a >= b", a >= b);//true
console.log("a <= b", a <= b);//true


//logical operator
let cond1 = a>b;
let cond2 = a === 81;//
console.log("cond1 && cond2 :",cond1 && cond2);
console.log(a>b && a === 81);//true
console.log(a>b && a == 81);//true


console.log(a>b || a>b);//true
console.log(!(a===80));//false


//condition Statement
let age=18;
if(age>18)
{
    console.log("you can vote");
}
else if(age=18)
{
    console.log("you can vote");
}
else
{
    console.log("you cannot vote");
}

let mode = "dark";
let color;
if(mode === "dark")
{
    color = "black";
}
else if(mode === "blue")
{
    color = "blue";
}
else
{
    color = "white";
}
console.log(color);

//even-odd
let num = 10;
if(num%2 === 0)
{
    console.log("even");
}
else{
    console.log("odd");
}
if(mode === "dark") console.log(mode);

//Tennary operator
//let age = 25;
let result = age >= 18 ? "adult" : "not Adult";
console.log(result);
age >= 18 ? console.log("adult") : console.log("not Adult");


const expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // Expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log(`Sorry, we are out of ${expr}.`);
}

let name = prompt("hello");
console.log(name);

let num1 = prompt("enter a number");
if(num1 % 5 === 0)
{
    console.log("number is multliple of 5");
}else{
    ("console is not multlple of 5");
}

