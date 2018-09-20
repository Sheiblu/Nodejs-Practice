const util = require('./utils');

it('should be Sum 2 number', ()=> {
    var res = util.sum( 4 , 10);
    if (res !== 14){
        throw new Error (`Expected value not found : ${res}`);
    }
});

it('should be Multiple 2 number', ()=> {
    var res = util.mul( 4 , 10);
    if (res !== 40){
        throw new Error (`Expected value not found : ${res}`);
    }
});