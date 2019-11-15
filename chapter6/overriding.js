class Rabbit {
    constructor(type) {
        this.type = type;
    }
}

let killerRabbit = new Rabbit("killer");
let blackRabbit = new Rabbit("black");

Rabbit.prototype.teeth = 'small';
console.log(killerRabbit.teeth)
console.log(blackRabbit.teeth);

// overriding
killerRabbit.teeth = 'big';
console.log(killerRabbit.teeth)
console.log(blackRabbit.teeth);