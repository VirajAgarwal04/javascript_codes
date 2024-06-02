const marvelHeros = ["thor", "Ironman", "Spiderman"];
const dcHeros = ["superman", "flash", "batman"]

// marvelHeros.push(dcHeros)
// console.log(marvelHeros); 

// Here the problem that occured is that the array took another array as a input in this.
// The final number of elements is only 4, not 6 and the 4th element is itself a array.


console.log(marvelHeros.concat(dcHeros));   // this things merges both the array

// When we add 3 dots, it doesn't remains the array anymore and becomes indiviual elements.
// The benefit over here is that we can merge multiple arrays together in a single code.

const allNewHeros = [...marvelHeros, ...dcHeros]; //spread method
console.log(allNewHeros); 

const another_array1 = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
const another_array2 = another_array1.flat(Infinity);  // it flats the multidimentional array into a flat array
console.log(another_array2);

console.log(Array.isArray("viraj"));
console.log(Array.from("Viraj"));
console.log(Array.from({name: "bewakoof"}));    //In case of making array from objects, we first have to tell that from which one we have to make the array. Is that the key or the value.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));