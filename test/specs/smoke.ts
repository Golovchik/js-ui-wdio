/*
describe('Website', function () {
    it('should be alive', function () {
        browser.url(`/`);
        const img = $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]');
        expect(img.isExisting(), 'Website should be opened, and logo displayed').to.be.true
    })
})
*/

describe('Website',  () => {
    it('should be alive', async () => {
        await browser.url('https://webdriver.io');
        const img = await $('img[src="http://ip-5236.sunline.net.ua:38015/images/logotype.png"]');
        if(!img.isExisting()) {
            throw new Error('Website should be opened, and logo displayed');
        }
        //await expect(img.isExisting(), 'Website should be opened, and logo displayed').to.be.true
    })
})