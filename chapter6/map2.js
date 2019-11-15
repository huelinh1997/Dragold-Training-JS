let ages = new Map();
ages.set("Boris", 39);
ages.set("Liang", 22);
ages.set("Júlia", 62);

console.log(ages);

console.log(`Júlia is ${ages.get("Júlia")}`);
// → Júlia is 62
console.log("Is Jack's age known?", ages.has("Jack"));
// → Is Jack's age known? false
console.log(ages.has("toString"));
// → false
console.log('--------------------')
var draft = {
    x: 1
}
console.log(draft.hasOwnProperty('x'));
console.log(draft.hasOwnProperty('toString'));