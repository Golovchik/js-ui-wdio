import * as assert  from 'assert';

describe('Website',  () => {
    it('should be alive', async () => {
        await browser.url('https://software-testing.ru/forum/register');
        
        await $('input[id="display_name"]').setValue(new Date().getTime());

        const email = `test${new Date().getTime() / 1000}@test.com`;
        await $('input[id="email_1"]').setValue(email);

        await $('input[id="password_1"]').setValue('Test');
        await $('input[id="password_2"]').setValue('Test');
        await $('input[id="field_3"]').setValue('Test');

        await $('textarea[id="field_9"]').setValue(email);

        await (await $('input[id="agree_tos"]')).click();
        
        await (await $('input[id="register_submit"]')).click();
        
        await browser.pause(5000);
 
		//Обнаружены следующие ошибки:
		const messageError = $('div.message,div.error');
         assert((await messageError).isDisplayed, 'element message error not found');
        //Проверим что мы не прошли регистрацию, т.к очень мутная капча
         assert((await messageError.getText()).includes('Обнаружены следующие ошибки:'), 'text not includes');

    })
})