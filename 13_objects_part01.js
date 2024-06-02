// Objects can we defined in two types - Literals as well as Constructors
// When we define a object in a literal way, the singletons are not formed. Constructor way always makes the singleton 

// Object.create 
// Constructor method, makes singleton 

const abc = Symbol("Key1")

//Object Literals 
//pair of Keys and values
const obj1 = {  
    FirstName: "viraj",
    "full name" : "Viraj Agarwal",
    age: 22,
    [abc] : "myKey1",            // To make this a symbol, put the key in a Square Bracket
    location: "Ramgarh",
    email: "abc@gmail.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//Method to access oject keys - Two Methods
// Below console codes prove that we can directly access the keys adn value or indirectly as a strings also.
// Indirect method se access krne ke liye square brackets me access kre

console.log(obj1["FirstName"]);
console.log(obj1.email);
console.log(obj1["full name"]);
console.log(obj1["email"]);
console.log(obj1[abc]); // but we needed it as a Symbol


// Now how to change the values of a object
obj1.FirstName = "VARP Ltd.";
console.log(obj1.FirstName);    // Freezes the values of an Object and doesn't allow to change it.
// Object.freeze(obj1);

// obj1.FirstName = "VARP Ltd.segsrgsrbs";
// console.log(obj1); // Freeze method does not allow to change the value of the object

// We can treat the functions as variables. Adding a function in the object Obj1
obj1.greeting = function() {
    console.log("Hello VARP-stars");
}
console.log(obj1.greeting);     // Returns functions reference, not the value
console.log(obj1.greeting());   // Returns the function's value

// Now we will perform string interpolation
obj1.greeting2 = function() {
    console.log(`Hello Legend ${this.FirstName}`);  // We can access the same Object using "this"
}
console.log(obj1.greeting2());