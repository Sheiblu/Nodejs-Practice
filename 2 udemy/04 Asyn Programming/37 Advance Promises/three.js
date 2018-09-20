
var asyncAdd = (num1 , num2) => {
    return new Promise((resolve, reject) => {

        setTimeout(()=> {
            if ( typeof num1 === 'number' && typeof num2 === 'number'){
                resolve(num1 + num2);
            } else {
                reject("Argument must be a number");
            }
        }, 1500);
    });
};

asyncAdd (3 , 6).then((result) => {
    console.log("1 Sum : " , result);
    return asyncAdd(result, '7');
}).then((result) => {
    console.log("2 Sum : " , result);
}).catch((error) => {
    console.log("Fail : " , error);
});
