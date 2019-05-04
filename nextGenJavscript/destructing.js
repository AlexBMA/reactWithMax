// destructuring
// easily extract array elements or object properties 
// and store them in variables 

//array destructing
// [a,b] = ['Hello','Max'];
// console.log(a); // Hello
// console.log(b); // Max

//object destructing
// {name} = {name:'Max',age:28}
// console.log(name);// Max
// console.log(age); // undefined

const numbers = [...Array(5).keys()];
console.log(numbers);
[a, ,b] = numbers;

console.log(a);
console.log(b);

