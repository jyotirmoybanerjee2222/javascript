//for loop
for(var count = 0;count<10;count++)
{
   console.log("jyotirmoy banerjee");
}
console.log("Jyotirmoy");
//CAlculate sum of 1 to n
let sum = 0;
for(let i = 1;i<=5;i++)
{
   sum = sum+i;
}
console.log(sum);
//console.log(i)
console.log(count);
let i = 1;
while(i<5)
{
   console.log("Jyotirmoy");
   i++
}

//do while loop runs one time
let I = 20;//do while loop runs for atleast one time
do{
   console.log("Jyotirmoy banerjee");
   I++;
}while(I<10);

//for of //for in -- special loops
//for-of -- helps to lopp on array or strting


//for-of
size= 0;
let str2 = "College";
for(let i of str2)
{
   console.log("i=",i);
   size++;
}
console.log(size);

//for-in
let student={
   name : "jyotirmoy",
   age :20,
   cgpa: 7.5,
   isPass: true
};
for(key in student)
{
   console.log("key =",key," value ",student[key]);
}

//print all wven number 0 to 100
for(let num=0;num<=100;num++)
{
   if(num%2 == 0)
   {
      console.log(num);
   }
}

//game number 
let gameNumber = 2

let UserNum1=prompt("Guess the Game Number");
while(UserNum1 != gameNumber)
{
   UserNum1 = prompt("Wrong number,Guess Again");
}
console.log("Congrats!right number");


//string
let str = "Jyotirmoy Banerjee";
console.log(str.length);
console.log(str[0]);

let obj ={
   item: "pen",
   price: 10,
};
let output = `the cost of ${obj.item} is  ${obj.price} rupees`;//string interpolation
console.log(output);
console.log("the cost of",obj.item,"is",obj.price,"rupees");
//Template Literals
let sentence = `this a sspecial string ${1+2+3}`;
console.log(typeof  sentence);
console.log(sentence);
console.log("Hi ,\n I am Jyotirmoy")//\n give next line
console.log("Hi ,\t I am Jyotirmoy")//give  tab space

//escape character 1 space

//String Methods
str.toUpperCase();
console.log(str.toUpperCase());
console.log(str.toLowerCase());
console.log(str.trim());//starting and end spaces remove
console.log(str.slice(1,3));
console.log(str.slice(2));

let str1 = "Jyotirmoy Banerjee";
let res =  str.concat(str1);
console.log(res);
res = "I "+"am learning javaScript";
console.log(res);
let rres = "hellowllow"+123//hellow123 -> string
console.log(rres);
console.log(rres.replace("h","m"));//replace the first
console.log(rres.replace("lo","p"));
console.log(rres.replaceAll("lo","m"));
str = "I Love javaScript";//string is immutable;
str[0]= "S";
console.log(str.charAt(2));
let FullName = prompt("Enter your full name");
let UserNum = "@"+FullName+FullName.length;
console.log(UserNum)
