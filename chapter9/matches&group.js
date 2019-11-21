let match = /\d+/.exec("one two 56 three 1008");
console.log(match);
// → ["100"]

console.log(/\d+/.exec("one two three 1008"));

console.log(/bad(lly)/.exec("badllybad"));
console.log(/(\d)+/.exec("wr12388"));