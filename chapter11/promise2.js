let money = 2000;
function buyCake(gift) {
    return new Promise((resolve, reject) => {
        if(money > 1000) return resolve(gift);
        else return  reject('Dont enough money!')
    })
}

buyCake('Birthday cake')
    .then(result => console.log(result))
    .catch(err => console.log(err))