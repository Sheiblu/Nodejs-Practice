var sum =  (x , y) => x + y ; 

var mul =  (x , y) => x * y ; 

var sumAsyn = (x , y , callBack) => {
        setTimeout(() => {
            callBack(x+y);
        },1000);
};


module.exports = {
    sum ,
    mul,
    sumAsyn
}