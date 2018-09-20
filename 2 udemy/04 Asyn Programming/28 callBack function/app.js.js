var getUser = (id, callBack) => {
    var user = {
       id : id ,
       name : 'Sheiblu'  
    };

    callBack(user);
};

getUser(15, (customerInfo) => {
    console.log(customerInfo);
});