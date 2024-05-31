const score = 100
const score_value_dec = 100.3

const isLogged = false
const outsideTemp = null //this doesn't means that the value is zero, it just means that the value is null

let userEmail;  //it's value is undefined

// Symbols
 const id = Symbol('123') //symbol value for different variable can be same
 const anotherId = Symbol('123')

//  console.log(id == anotherId); // Output - False... Varified

 const BigNumber = 5432345676543n;
//  console.log(BigNumber);

 //Non Primitive

 const heros = ['lol','abc',"dog"]; //array
 //Objects in curly brackets
let myObj = {
    name: "Viraj",
    age: 22
}
// console.log(myObj);

//We can also store functions in variable
const myfunc = function() {
    console.log("Hello World");
}

//Use typeof to know the datatype of a variable
// console.log(typeof BigNumber);
// console.log(typeof outsideTemp);
// console.log(typeof(null));
// console.log(typeof(undefined));
// console.log(typeof myfunc);

let xyz = undefined
console.log(xyz);