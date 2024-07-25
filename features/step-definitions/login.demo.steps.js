const { Given, When,Then} = require('@wdio/cucumber-framework');

Given('User is on page', async function() {
   await browser.url('https://the-internet.herokuapp.com/login')
});

When('User use {string} and {string}', async function (username, password) {
    await $('#username').setValue(username);
    await $('#password').setValue(password);
});

When('Click on login button', async function (){
    (await $('button[type="submit"]')).click()
   
});

Then('This {string} is displayed', async function (message){

    await expect($('#flash')).toHaveTextContaining(message)

});
