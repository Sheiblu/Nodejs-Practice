const util = require('./utils');
const expect = require('expect');

describe('Utils', () => {
    it('should be Sum 2 number', ()=> {
        var res = util.sum( 4 , 10); 
        expect(res).toBe(14);                    // toBe
    });
    
    it('should be Multiple 2 number', ()=> {
        var res = util.mul( 4 , 10);            // not toBe
        expect(res).not.toEqual(42);            //check equels
        expect(res).toBeLessThan(42);
    
        //check include 
        expect([ 1, 2, 3 ]).toContain(3);     //check item in Here ?? 
       
    });
    
    
    it('Result should be number', ()=> {
        var res = util.mul( 4 , 10);  
        expect(typeof res).toBe('number');      //check type
    });
    
    
    it('Asyn Sum Result ', (done)=> {    // 'done' or use any name as i wish
        util.sumAsyn (10 , 5, (sum) => {
            expect(sum).toBe(15);
            done();
        })
    });
});



