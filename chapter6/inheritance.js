// inheritance
class Animal {
    constructor(name) {
        this.name = name;
    }
    eat() {
        console.log(`${this.name} eating...`);
    }
}

// class Bird inheritance class animal, it have method of animal
class Bird extends Animal {
    fly() {
        console.log(`${this.name} flying...`);
    }
}
const bird = new Bird('Thong');
bird.eat();
bird.fly();

class Parrot extends Bird {
    speak() {
        console.log(`${this.name} speaking...`);
    }
}
const parrot = new Parrot('vet');
parrot.eat();
parrot.fly();
parrot.speak();