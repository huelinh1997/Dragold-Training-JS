// higher order functions: nhan vao 1 function lam tham so hoac la tra ve 1 function
function debug(name) { // co the coi ham debug la higher order function vi no tra ve 1 function
    return function(str) {
        console.log(`${name} ${str}`);
    }
}
let logs = debug('mouse');
logs('Error happened');
console.log('----------------------------------')

// example 2:
// day cung la 1 higher order function vi no nhan vao tham so la 1 func
function waitAndRun(func, ms) {
    setTimeout(func, ms);
}
function run() {
    console.log('run');
}
waitAndRun(run, 2000);