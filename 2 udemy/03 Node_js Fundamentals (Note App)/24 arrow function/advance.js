var person = {
    name : "Sheiblu", 
    age : "23",
    sayName : () => {
        console.log(`i am ${this.name}`);            //arrow function
    },
    sayAge () {                                      //reguler function
        console.log(`i am ${this.name}`);
    },
    say : function () {                             //reguler function
        console.log(`i am ${this.name}`);
    } 
}

person.sayName() ; // i am undefined
person.sayAge();   // i am Sheiblu
person.say();     // i am Sheiblu

/* 
    Don't Use this. or Arguments In =>   arrow Function , Use reguler function

*/