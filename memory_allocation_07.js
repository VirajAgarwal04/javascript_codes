/* In earlier time, we had to manually allot and disallot the memory
   But now, we have smart pointers which automatically manage the memory
*/

/*
    Two Type of Memory - Stack and Heap
    Primitive - Stack Memory - Get a value by copy
    Non-Primitive - Heap Memory - Get a value by reference
*/

// Example of call by value
let abc = "chutiya"
let xyz = abc;
xyz = "bhadwa";

console.log(abc);
console.log(xyz);

// Example of call by reference
let user = {
    email : "abc@gmail.com",
    UPI : "afeb24"
}
let user1 = user
user1.email = "xyz@gmail.com"
console.log(user);  //Value changed even in user variable oject