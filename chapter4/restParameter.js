function max(...numbers) {
    let result = -Infinity;
    for (let number of numbers) {
        if (number > result) result = number;
    }
    return result;
}
console.log(max(4, 1, 9, -2));
// → 9

function show(a, ...num) {
    console.log(a);
    console.log(num);
}
show(1, 2, 3, 4);

function show2(...num) {
    console.log(num);
}
show2(23, 4, 2);