// Arrays
// Always store the arrays in a square Brackets 
// "[]" - Square Brackets
// "()" - Parenthesis 
// can be of mixed type of datatype
// can be of variable size
// Zero based indexing
// Creating a copy of the array creates a "SHALLOW COPY", means call by reference 


const MyArr1 = [1,2,3,4,5,6,7,8]
const Myarr2 = ["ABCD", "abcd", "edfg", "srkfnes"]
console.log(MyArr1);
console.log(MyArr1[3]); 
console.log(Myarr2);

// Array Methods
MyArr1.push(16);    // Push elements from the back of the array
MyArr1.push(16);    // Push elements from the back of the array
console.log(MyArr1); 

MyArr1.pop();       // Removes the last element
console.log(MyArr1);

MyArr1.unshift(14); // Shifts elements from the front and add a new element | Less Optimized
console.log(MyArr1);

MyArr1.shift()
console.log(MyArr1); // Removes the element from the first.

console.log(MyArr1.includes(8));    //Checks if the element is present in the array
console.log(MyArr1.indexOf(8));    // Returns the index of the element if present else

const MyArr3 = [17, 20, 35];
console.log(MyArr1.concat(MyArr3)); // merges two Array together

const MyArr4 = MyArr1.join();   //adds all the element of an array into a string
console.log(MyArr4);
console.log(typeof MyArr4);     // the datatype changed to string 

//slice and splice function
console.log("A", MyArr1);
const MyArr5 = MyArr1.slice(1, 3) // Slice doesn't modifies or changes the original array at all.
console.log(MyArr5); 
console.log("B", MyArr1); 

const MyArr6 = MyArr1.splice(1, 3); // Slice modifies or changes the original array at all.
console.log(MyArr5);
console.log("C", MyArr1); // Elements removed from the original array and moved to the new array

