//pre es6
var a;

// variable values new in es6
// use let instead of var
let b;

// constant values new in es6
const c ="q";

var myName ="Alex";
console.log(myName);

myName ="Alexandru";
console.log(myName);

// Arrow function new in es6
// old way 
/*
function myFnc(){

}
*/
// new way
/*
const myFnc = () =>{

}
*/
// No more issues with this keyword

const printName = name =>{
    console.log(name);
}
printName("Alex ..");

const multiply = (number) =>{
    return number * 2;
}
console.log(multiply(2));

