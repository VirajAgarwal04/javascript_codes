// Destructuring, i.e. taking values as objects, and then break it down to fetch the actual values form the object.  
// Destructuring is Done in both the Arrays and the Objects

const course = {
    courseName: "JavaScript Course",
    price: "999",
    courseInstructor: "Hitesh"
}

// course.courseInstructor
// another method to do the same thing is explained below

// const {courseInstructor} = course
// console.log(courseInstructor);
const {courseInstructor: abc} = course //We can also rename the variable with the desired variable name
console.log(abc);


//-------------------********************------------------------------------------------
//API Part
// Earclier data used to come in the form of XML Structure. But now, These data used to come in the form of JSON Data.
// JSON are same as objects with out the name, example below : 

/*
{
    "name": "Viraj",
    "courseName1" : "JS course",
    "pricee" : "Free"
}
*/

/*
Sometimes data is also fetched in the form of arrays instead of JSON data.
These arrays contains al lot of objects. Example
[
    {},
    {},
    {}
];
*/
