function Dog(name) {
    this.name = name,
    this.speak = function () {
        console.log(`${this.name} hello`);
    }
}
Dog.prototype.eat = function () {
    console.log(`${this.name} eat bone`);
}

var myDog1 = new Dog('husky');
var myDog2 = new Dog('shiba');
myDog1.eat();
myDog2.eat();
console.log(myDog1.eat === myDog2.eat);
myDog1.speak();
myDog2.speak()
console.log(myDog1.speak === myDog2.speak)
