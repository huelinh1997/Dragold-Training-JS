console.log('Hello, John'.replace('John', 'Peter'));

console.log("Barbudur".replace(/[ou]/, "a"));
// → Barbadur (replace character first which it found)
console.log("Borobudur".replace(/[ou]/g, "a"));
// → Barabadar (replace all character which it found)

let s = "the cia and fbi cia fbi";
console.log(s.replace(/\b(cia|fbi)\b/g, str => str.toUpperCase()));