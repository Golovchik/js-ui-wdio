//import * as assert  from 'assert';

import * as chai from 'chai';
const expect = chai.expect
const assert = chai.assert

//add in object property should.
chai.should(); 

describe("Chai ", function() {
    it("should", async () => {
        await browser.url('');
        $("div").isDisplayed().should.equal(true, 'hello world');
    });

    it("expect", async () =>{
        await browser.url('');
        expect($("div").isDisplayed()).to.equal(true, 'hello message')
    });

    it("assert", async () => {
        await browser.url('');
        assert.isTrue($("div").isDisplayed(), 'hello world')
    });
});



describe('Website',  () => {
   it('checking assertions', function(){
       try {
           assert(false);
       } catch (error) {
           console.dir(error);
       }
   })
})