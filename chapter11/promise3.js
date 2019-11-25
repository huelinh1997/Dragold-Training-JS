
new Promise((_, reject) => reject(new Error('Fail')))
    .then(value => console.log('Success'))
    .catch(err => {
        console.log("message:"+err);
        return "nothing";
    })
    .then(value => console.log(value))