// Math object in javascript
// Math.PI
// Math.ceil(number)
// Math.floor(number)
// Math.round(number)
// Math.max(x1, x2, ...)
// Math.min(x1, x2, ...)
// Math.random()
//================================
function discArea(r){
    return r * r * Math.PI;
}
var S = discArea(5);
console.log(S);

// ==============================================
console.log(Math.ceil(9.4)); // 10
console.log(Math.floor(9.6)); // 9

// ==============================================
console.log(Math.max(10, 9, 20, 1)); // 20
console.log(Math.min(10, 9, 20, 1)); // 1

// ===============================================
console.log(Math.round(3.65)); // 4
console.log(Math.round(3.45)); // 3
// ===============================================
console.log('Random: ', Math.random()); // ket qua tra ve so thuc dao dong trong doan [0, 1]
//----------------------------------------
function rollAdie(){
    var roll = Math.ceil((Math.random()*6));
    return roll;
}
console.log(rollAdie()); // Ket qua tra ve so nguyen dao dong trong doan tu 1 - 6