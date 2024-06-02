// The arbitrary date that Javascript has taken is from Jan 1, 1970 and starts calculation from this date.
// Dates

let myDates = new Date()
console.log(myDates);

//Basics
console.log(myDates.toString());            //Gives date, time and other data with Indian Standard Time
console.log(myDates.toDateString());        //Gives only Date
console.log(myDates.toISOString());         //Same!! Gives date and universal time
console.log(myDates.toJSON());              //Gives date and universal time
console.log(myDates.toLocaleDateString());  //Gives only the date
console.log(myDates.toLocaleString());      //Gives date with time
console.log(typeof myDates);                //Datatype is Object

let myCreatedDate = new Date();
let myCreatedDate1 = new Date(2002, 3, 16);

console.log(myCreatedDate.toDateString());
console.log(myCreatedDate1.toDateString());

let create_date_and_time = new Date(1999, 4, 8, 23, 5, 3);
console.log(create_date_and_time.toDateString());
console.log(create_date_and_time.toLocaleString());

let abc = new Date("2023-01-14")
console.log(abc.toLocaleString());

let timeStamp = Date.now()
console.log(timeStamp);
console.log(abc.getTime());
console.log(Math.round(Date.now()/1000));

let newDate = new Date()
console.log(newDate.getDay());
console.log(newDate.getMonth() + 1);

console.log(" ");
console.log(newDate.toLocaleString())
console.log(newDate.toLocaleString('default', {
    weekday: "long",
    year: "numeric"
}))