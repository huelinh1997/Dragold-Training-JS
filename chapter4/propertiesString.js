let kim = "Kim";
kim.age = 88;
console.log(kim.age);
// → undefined

// slice
console.log("coconuts".slice(2, 7));
// → conut

// index of
console.log("coconut".indexOf("o"));
// → 1

// trim
console.log('  aaaffff     '.trim());

//padStart
console.log('9'.padStart(4, "0"));
// → 006

// split
let sentence = "Secretarybirds specialize in stomping";
let words = sentence.split(" ");
console.log(words);
// → ["Secretarybirds", "specialize", "in", "stomping"]
console.log(words.join("."));
// → Secretarybirds. specialize. in. stomping

// repeat
console.log('hello '.repeat(3));