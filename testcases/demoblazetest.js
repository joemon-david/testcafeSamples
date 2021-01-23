
import {Selector} from 'testcafe';

fixture `Getting started with Demoblaze application`
.page `https://www.demoblaze.com/index.html`;

test('Login to DemoBlaze app', async t => {

    await t
    .click('#login2')
    .typeText('#loginusername','joemon')
    .typeText('#loginpassword','joemon')
    .click('[onclick="logIn()"]')
    .expect(Selector('#nameofuser').innerText).contains('joemon');
});


