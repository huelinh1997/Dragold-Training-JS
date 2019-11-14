// JSON object
// 1. stringify - Convert an object to a JSON string
// 2. parse - Convert an JSON string to an object


// 1. stringify - Convert an object to a JSON string
var myDog = {name: 'Milu', age: 1, dead: false};
console.log(typeof myDog);
var myDogString = JSON.stringify(myDog);
console.log( myDogString);
console.log(typeof myDogString);


// 2. parse - Convert an JSON string to an object
var myCatString = '{"name": "Tom", "age": 2, "dead": true}';
var myCat = JSON.parse(myCatString);
console.log(myCat);
