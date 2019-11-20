let notBinary = /[^\d]/;
console.log(notBinary.test("D"));  // → true
console.log(notBinary.test("#"));  // → true
console.log(notBinary.test("0"));  // → false

console.log(/\d+/.test("123"));
// → true
console.log(/\d+/.test(""));
// → false
console.log(/\d*/.test("123"));
// → true
console.log(/\d*/.test(""));
// → true


console.log(/neighbour/.test("neighbour")); // → true
console.log(/nei?ghbour/.test("neghbour")); // → true
