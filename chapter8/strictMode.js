//
function show() {
    x = 5;
    console.log(window.x);
}
function show2() {
    "use strict";
    x = 5;
    console.log(window.x);
}
function canYouSpotTheProblem() {
    "use strict";
    for ( counter = 0; counter < 10; counter++) {
        console.log("Happy happy");
    }
}

// canYouSpotTheProblem();
// show(); show2()

function show3() {
    "use strict";
    function Person(name) {
        this.name = name;
    }
    let person1 = Person('John');
}
show3()
