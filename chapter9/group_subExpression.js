let cartoonCrying = /boo+(hoo+)+/i;
console.log(cartoonCrying.test("Boohoohoohooo"));
// → true

let cartoonCrying = /boo+(hoo+)+/;
console.log(cartoonCrying.test("Boohoohoohooo"));
// → false

// → i: The i modifier is used to perform case-insensitive matching. (ko phan biet hoa thuong)