// ... spred or rest

// spread  used to split up array elements OR
// or object properties

/*
const newArray = [...oldArray,1,2]
const newObject = {...oldObject, newProp:5}
*/

// rest used to merge a list of function 
//argument into an array

/*
function sortArgs(...args){
    return args.sort()
}
*/

let numbers = Array.from({length:5},(x,i)=>i);
const newNumbers = [...numbers,10,12];
console.log(numbers);
console.log(newNumbers);

const person = {
    name:'Max'
}
const newPerson ={
    ...person,
    age : 26
}
console.log(newPerson);

const filter = (...args)=>{
    return args.filter(item=>item === 1);
}

console.log(filter(1,2,3,4));

