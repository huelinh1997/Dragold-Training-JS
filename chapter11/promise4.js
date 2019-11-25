let money = 2000;
function buyCake(gift) {
    return new Promise((resolve, reject) => {
        if(money > 1000) return resolve(gift);
        else return  reject('Dont enough money!')
    })
}

buyCake('Birthday cake')
    .then(result => {
        console.log(result);
        return buyCake('ring');
    })
    .then(result => {
        console.log(result);
        return buyCake('watch');
    })
    .then(result => console.log(result))
    .catch(err => console.log(err))

// => you can replace by use promise all
Promise.all([
    buyCake('Birthday cake2'),
    buyCake('ring2'),
    buyCake('watch2')
])
.then(result => console.log(result))
.catch(err => console.log(err))