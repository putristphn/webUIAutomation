const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const { loginForm } = require('../../helper/helperlogin');
const { loginFormFailed } = require('../../helper/helperloginfailed');


describe('Login Form Suite', function () {
let driver;
this.timeout(30000);

before(async function () {
    const options = new chrome.Options().addArguments('--incognito');
    if (process.env.HEADLESS === 'true') options.addArguments('--headless=new');
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();
});

after(async function () {
    if (driver) await driver.quit();
  });

it('should login successfully with valid credentials', async function () {
    await loginForm(driver, 'standard_user', 'secret_sauce');
    const title = await driver.getTitle();
    assert.strictEqual(title, 'Swag Labs', 'User should be on inventory page after login');
})

it('should failed to login with invalid credentials', async function () {
    await loginFormFailed(driver, 'locked_out_user', 'secret_sauce');
})
});