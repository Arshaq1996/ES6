

console.log(`Excersise #1`);
var name = "Arshaq";
var vocation = "Programmer";

console.log(`${name} is a ${vocation}`);

var originalPrice = 25;
var newPrice = 10;
var decreaseRate = (10/25)*100;
console.log ( `The Decrease rate of this case is ${decreaseRate}`);
var saverate = 100-decreaseRate;
console.log(`final save in this case as  ${saverate}%`);

console.log(`Excersise #2`);

var text = "Join the ‘Happy Learning’ Team in slack";

console.log(text.startsWith("Join"));
console.log(text.startsWith("Happy"));
console.log(text.endsWith("slack"));
console.log(text.includes("Join Now"));
console.log(text.includes("Happy Learning"));
console.log(text.startsWith("appy",10));

// lecture#2 let and const
                //   First Using var Keyword
function getValue(condition)
{
if(condition===true)
{
let myName = "Arshaq";
return myName;

}

else
return null;

}

console.log(getValue(true))
console.log(getValue(false))
                //   First Using var Keyword






              // Using Let Keyword

function SetValue(Expression){

if(Expression===true)
{
let yourName = "MUhammad Arshaq";
return yourName;
}
else{


    return (null);
}

}

console.log(SetValue(true))

            // Using Let Keyword 



// Exercise fOR LECTURE 2

for (let i =1; i<=10;i++){

    console.log(i);
    

}
//console.log(i);



// Arrow Functions Vs Normal Js Funtions

function sayHello()
{   

const person = {
name:"Arshaq",
age : "22"

}
console.log(person)
console.log(`Person name : ${person.name} Person Age : ${person.age}` )
}

sayHello();



let animalPats= function (){

    let arr =["elephant","Tiger","Lion"];

console.log(arr);

arr.push("Cow");
console.log(arr[3-1]);

}
animalPats();
//Start Arrow functions
let Draw = (circle,rectangle)=>{

console.log(`The Circle = ${circle}  
The Ractangle = ${rectangle}`);
}


Draw("Round Shape","Square Sahpe");
//End Arrow functions


//Start FOREACH IN JS

let fruits =["Apple", 'Mango','Banana'];

fruits.forEach((items,index)=>{

console.log(`${index} ${items}`);

});



//End FOREACH IN JS



//Start Map Function


// let list = [1,2,3,4,5];
// let tryMap = list.map(function(){

// return  tryMap * 2;

// })


//End Map Function








//Fiter In Es6

const people =[{

id:1,
name:"Arshaq"},

{
id:2,
name:"Omer"},

{
id:3,
name:"Zain"

}];
let people2 = people.filter((objPerson) =>{


    if(objPerson.id!==2)
    {


    }
});


console.log(people2);
//Fiter In Es6



//Start SPREAD
const arr1 = [1,2,3,4];
const arr2 =[...arr1,5,6,7];
arr3 =[...arr1.filter(num=>num !==2)];
console.log(arr3);
console.log(arr2);

let person3 = {

    name : 'Arshaq',
    age : 22
}
console.log(person3);
let person4 ={

... person3,
email    : 'arshaqshakeel3@gmial.com'

}
console.log(person4);


// End SPREAD



//Start  Distruction
 let profile ={

name1 : "Arif",
adddres :{
street : "Rashid Minhas Road",
City : "karachi"

},
hobbies : ['Cricket','Movies']
 }  //This Could be the part of State component or state object in React js
//console.log(profile.adddres.street)

const {street,City} = profile.adddres;
console.log(street,City);



const {name1,hobbies}= profile;
console.log(name1,hobbies);
//END  Distruction