// create
let re1 = new RegExp("abc");
let re2 = /abc/;

// testing for match
console.log(/abc/.test("abcde"));// → true
console.log(/abc/.test("abxde"));// → false

// set of characters
console.log(/[0123456789]/.test("inrfs#1992"));// → true
console.log(/[0-9]/.test("in%~0"));// → true

// \d same [0-9] same [123456789]
console.log(/\d/.test("inrfs`~#2"));// → true

console.log(/\d\d-\d\d-\d\d\d\d \d\d:\d\d/.test("60851-30-2903 15:20"));// → true
console.log(/\d\d-\d\d-\d\d\d\d \d\d:\d\d/.test("30-jan-2003 15:20"));// → false

// \w: only character and number
console.log(/\w/.test("a"));  // → true
console.log(/\w/.test("5"));  // → true
console.log(/\w/.test("#"));  // → false

// \s: Any whitespace character (space, tab, newline, and similar)
console.log(/\s/.test("\n")) // → true
console.log(/\s/.test(" "))  // → true

// \D: A character that is not a digit  (opposite of \d)
console.log(/\D/.test("45"))  // → true
console.log(/\D/.test("a"))   // → false

// \W: A non alphanumeric character  (opposite of \w)
console.log(/\W/.test("45")) // → false
console.log(/\W/.test("a")) // → false
console.log(/\W/.test(" ")) // → true

// \S: A nonwhitespace character (opposite of \s)
console.log(/\S/.test("45")) // → true
console.log(/\S/.test("a")) // → true
console.log(/\S/.test(" ")) // → false

// .	Any character except for newline
console.log(/./.test("4")) // → true
console.log(/./.test("a")) // → true
console.log(/./.test(" ")) // → true
console.log(/./.test("@")) // → true
console.log(/./.test("\n")) // → false