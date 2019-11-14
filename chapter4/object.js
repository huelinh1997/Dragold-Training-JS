var dog = {
    name: 'Husky',
    age: 5,
    dead: false
}

console.log(dog.dead);
delete dog.dead;
console.log(dog.dead);
console.log("dead" in dog);
console.log("age" in dog);
