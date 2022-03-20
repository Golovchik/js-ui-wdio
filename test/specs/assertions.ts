//import * as assert  from 'assert';

import * as chai from 'chai';

const expectChai = chai.expect;

//const expect = chai.expect;
const assert = chai.assert;

//add in object property should.
chai.should(); 

describe("Chai ", () => {
    it("should", async () => {
        await browser.url('https://webdriver.io/docs/frameworks');
        let div = await $("div");
        let divDisplayed = await div.isDisplayed();
        divDisplayed.should.equal(true, 'hello world1');
    });

    it("expect", async () =>{
        await browser.url('https://webdriver.io/docs/frameworks');
        let div = await $("div");
        //let expected = await div.isDisplayed();
        expectChai(await div.isDisplayed()).to.equal(true, 'hello message')
    });

    it("assert", async () => {
        await browser.url('https://webdriver.io/docs/frameworks');
        let div = await $("div");
        assert.isTrue(await div.isDisplayed(), 'hello world2')
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