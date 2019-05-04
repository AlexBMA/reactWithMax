/*
class Person{
    name ="Max" // property
    call = () =>{console.log("##")} // method
}

// usage
const myPesron = new Person();
 myPesron.call();
 console.log(myPesron.name);

 //inheritance
 class Person2 extends Person{
     name2 ="Alex" // property
     zcall = () => {console.log("$$")} // method
 }*/

 class Human{
     constructor(){
         this.gender ='male';
     }
     printGender(){
         console.log(this.gender);
     }
 }

 class Persoana extends Human{
     constructor(){
         super();
         this.name = 'Alex';
         this.gender ='Male';
     }
     printMyName(){
         console.log(this.name);
     }
 }

 const person = new Persoana();

 person.printMyName();
 person.printGender();


// ES6 properties
/*
constructor (){
    this.myProperty = 'value'
}
*/
// ES7
/*
myProperty = 'value'
*/

//ES6 methods
/*
myMethod(){...}
*/
//ES7
/*
myMethod = () =>{}
*/

class Human2{
    gender = 'male';
    printGender = () => {console.log(this.gender);}
}

class Person2 extends Human2{
    name = 'Max';
    gender = 'Male';
    printName = () => {console.log(this.name);}
}

const person2 = new Person2();
person2.printName();
person2.printGender();

