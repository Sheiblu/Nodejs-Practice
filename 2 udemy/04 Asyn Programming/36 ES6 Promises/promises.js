var somePromise = new Promise((resolve, reject)=> {

    setTimeout(()=> {
        resolve('This is solve');
        reject('Unable to connect Server');
    }, 2500);
});


somePromise.then((message) => {
    console.log('Success : ', message);
}, (failMessage)=> {
    console.log('Fail : ', failMessage);
});