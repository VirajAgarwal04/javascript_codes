const name  = "Viraj"
const repocount = 5

// console.log(name + " " + repocount );   //old syntax || Called String Interpolation || Can help to do my things on the Go.
// console.log(`Hello my name is "${name}" and my repo count is : ${repocount}`);  //Modern Syntax  

//Another method to define strings
const gameName = new String('Viraj Agarwal')
console.log(gameName); 
//Output: String {"Viraj"} || Makes a key-Value pair of characters and their index

console.log(gameName.length);
console.log(gameName.toUpperCase());    // String to uppercase
console.log(gameName.toLowerCase());    // String to lowercase 
console.log(gameName.charAt(4));        // Gives the character at that perticular position
console.log(gameName.indexOf('j'));     // Gives the Index of the character in the string.|
console.log(gameName.lastIndexOf('a')); // Gvies the last index of the character

let chutiye = gameName.substring(-1, 4);  //Trims and gives the substring from the main string.
console.log(chutiye);                   //Doesn't include the last character

let abc = "abcdefghi"
const anotherString = abc.slice(-1, 2); // Can also give the negative value to slice that gives the output in reverse
console.log(anotherString); 

//trim and replace
const new_string = "     Google   "    // string with extra space
console.log(new_string);                // Trim only works for whitespce and newline characters
console.log(new_string.trim());         // Removes the extra spaces


