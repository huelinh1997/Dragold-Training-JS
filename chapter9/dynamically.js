let name = 'def';
let text = 'ASD def abc ff';
let regexp = new RegExp("\\b(" + name + ")\\b", "gi");
console.log(text.replace(regexp, '_$1_'));