function Person(_name){
    var name = _name; // private variable
    this.age = 20;    // public variable
    function say() {  // function private
        console.log('hello');
    }
    
    this.setName = function(_name){  // function public
        name = _name;
    }
    this.getName = function(){
        return name;
    }
}

var person = new Person("LamPham");
console.log(person.name);          // => undefined
console.log(person.say());         // error
console.log(person.getName());     // => LamPham

person.setName("LP Devs");
console.log(person.getName());     // => LP Devs