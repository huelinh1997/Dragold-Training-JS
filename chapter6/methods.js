let dog = {
    name: 'husky'
}
dog.bark = function () {
    console.log(`${this.name} gau gau`);
}
dog.bark();
