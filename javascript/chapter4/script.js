let heroes = ['ironman',"hulk","shaktiman","spiderman","antman"];
let marks = [97,82,75,64,36]
console.log(marks)
console.log(marks.length)
console.log(heroes)
console.log(typeof marks)
console.log(marks[1]);

//for loop
for(let idx=0;idx<heroes.length;idx++)
{
    console.log(heroes[idx]);
}

//for-of
for(let el of heroes)
{
    console.log(el);
}
//questyion 1
let cities = ["delhi","pune","mumbai"]
for(let el of cities)
{
    console.log(el);
}
//question 2
let sum = 0;
for(el of marks)
{
    sum = sum+el;
}
let avg = sum/marks.length;
console.log(`avg of marks isd = ${avg}`);

//question 3
let items = [250,645,300,900,50];
let idx = 0;
for(let val of items)
{
    console.log(`value of index ${idx}= ${val}`);
    let offer = val / 10;
    items[idx] = items[idx]-offer;
    console.log(`value after offer = ${items[idx]}`);

    idx++;

}


//Array method
let foodItems = ["potato","food item","litchi"];

foodItems.push("chips","burger","paneer");
console.log(foodItems);
let deletetedItem=foodItems.pop()
console.log(foodItems);
console.log(deletetedItem);
console.log(foodItems.toString());//return new string
console.log(marks.toString());
let marvel_heroes = ["thor","spiderman"]
let dc_heroes = ["superman","batman"]
let indian_h = ["shatiman"]
let Heroes = marvel_heroes.concat(dc_heroes,indian_h);
console.log(Heroes);

marvel_heroes.unshift("antman");//push at front
console.log(marvel_heroes);
let val = marvel_heroes.shift()//delete at front
console.log(val);
console.log(marvel_heroes.slice(1,2))

let arr = [1,2,3,4];
arr.splice(2,2,101,102);
console.log(arr);

//add element
arr.splice(2,0,101);
console.log(arr);
arr.splice(1,1);
console.log(arr);
console.log(arr.splice(1));

//practice
let companies = ['bloomberg',"Micrtosoft","uber","google"];
companies.shift();
companies.splice(1,1,"ola");
console.log(companies);