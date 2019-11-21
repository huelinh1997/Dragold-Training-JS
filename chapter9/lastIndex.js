let pattern = /y/g;
pattern.lastIndex = 3;
let match = pattern.exec("xyyzzyxxy");
console.log(match);
console.log(match.index);
// → 4
console.log(pattern.lastIndex);
// → 5

var regex1 = new RegExp( "foo", "g" );
var str1 = 'tableg football, foosball';

console.log(regex1.test(str1));

console.log(regex1.lastIndex);
// expected output: 9

console.log(regex1.test(str1));

console.log(regex1.lastIndex);
// expected output: 19