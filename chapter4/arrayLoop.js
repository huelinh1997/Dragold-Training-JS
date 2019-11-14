var numbers = [1, 4, 6, 9, 10];

//
for(var i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

 for(var i of numbers) {
     console.log(i);
 }