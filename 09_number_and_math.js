// basics of Numbers and maths in a single video


//Starting Numbers
const score = 400 
const balance = new Number(400)
/*
normal pattern to do it.
 most of the times Javascript automatically detects the datatype of the variable and stores it.
But we can also explicitely  define the required datatype
*/
console.log(score);
console.log(balance);

console.log(balance.toString());
console.log(typeof balance.toString());
console.log(balance.toString().length);
console.log(balance.toFixed(1));  //to give Decimal valueof fixed required decimal

const otherNumber = 24.16
console.log(otherNumber.toPrecision(2)); 
//to give Decimal valueof fixed required decimal. Gives precision upto the required precision number

const hundreds = 1000000
console.log(hundreds.toLocaleString());

console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

//Maths Part

console.log(Math);
console.log(Math.abs(-4));
console.log(Math.abs(4));
console.log(Math.round(4.6));
console.log(Math.ceil(4.6));
console.log(Math.floor(4.9999));
console.log(Math.sqrt(25));
console.log(Math.min(4,88,9,66,1,2,33,-1));
console.log(Math.max(4,88,9,66,1,2,33,-1));

console.log(Math.random()); // Generates random values between 0 and 1.
let abc = Math.random()*10;
console.log(Math.round(abc));   //Generating Random value between 1 to 10.

const min = 10
const max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)  //Important to get random number between a given range of Values
