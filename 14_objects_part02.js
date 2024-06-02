// Object Singleton or with Constructor

const bumbleUser = new Object()     // This is a singleton Object
// const tinderUser = {}                // This is not a singleton Object

bumbleUser.id = "2370524"
bumbleUser.name = "Viraj"
bumbleUser.isLoggedIn = false

console.log(bumbleUser);

const regularUser = {
    email : "abc@gmail.com",
    fullName : {                        // Multilevel Nesting of Oject in JavaScript
        userFUllName : {
            firstName : "ABC",
            lastName : "XYZ"
        }
    }
}

console.log(regularUser.fullName.userFUllName.firstName);
console.log(regularUser.fullName?.userFUllName.firstName);  // Here we added a quesiton Mark for protection if the value doesn't exist

// We can also combine multiple Objects together
const Obj1 = {1: "a", 2: "b"};
const Obj2 = {3: "c", 4: "d"};
const Obj3 = {5: "e", 6: "f"};
const Obj4 = Object.assign({}, Obj1, Obj2, Obj3)     
const Obj5 = {...Obj1, ...Obj2, ...Obj3} 
// Merges two or more objects into a single Object
// Or rather use the Spread method to merge the two Objects
// Here is empty bracket is the target and the other objects are the source objects
console.log(Obj4);
console.log(Obj5);

// Often datas from the database comes in the form of arrays of object.
const Obj6 =  [
    {id: "A", email: "B"},
    {id: "C", email: "D"},
    {id: "E", email: "F"}
]
console.log(typeof Obj6);
console.log(Obj6[0].email); // Accessing the values of the objects inside the array

console.log(Object.keys(bumbleUser));   // Getting a list of keys in a Object
console.log(Object.values(bumbleUser));// Getting a list of keys in a Object
console.log(Object.keys(Obj6));
console.log(Object.values(Obj6));

console.log(bumbleUser.hasOwnProperty("name"));  //Checks and gives output in boolean if the particular key is present in the Object or not.