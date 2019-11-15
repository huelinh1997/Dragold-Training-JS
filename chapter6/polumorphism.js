class Rabbit {
    constructor(type) {
        this.type = type;
    }
}

let blackRabbit = new Rabbit("black");

Rabbit.prototype.toString = function () {
    return `a ${this.type} rabbit`;
}

//console.log(blackRabbit.toString());
console.log(String(blackRabbit));
