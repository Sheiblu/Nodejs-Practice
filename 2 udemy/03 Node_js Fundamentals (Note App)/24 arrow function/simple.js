var sayOne = function(x) {  //reguler function
        return x * x ;
}

var sayTwo = (x) => {  //arrow function
    return x * x ;
}

var sayThree = (x) => x*x ;  //arrow Function better then saytwo


console.log(sayOne(5));   //25
console.log(sayTwo(5));   //25
console.log(sayThree(5)); //25
