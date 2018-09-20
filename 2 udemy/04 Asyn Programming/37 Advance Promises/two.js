
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

asyncAdd (5 , 15).then((result) => {
    console.log("Sum : " , result);
    return asyncAdd(result, 10);
}, (error) => {
    console.log("Error : " , error);
}).then((result) => {
    console.log("Sum : " , result);
}, (error) => {
    console.log("Error : " , error);
});