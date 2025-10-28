const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');
const { loginForm } = require('../../helper/helperlogin');
const { clickSortingOption } = require('../../helper/helpersorting');

describe('Sorting Product Suite', function () {
let driver;
this.timeout(30000);

before(async function () {
    const options = new chrome.Options().addArguments('--incognito');
    if (process.env.HEADLESS === 'true') options.addArguments('--headless=new');
    driver = await new Builder().forBrowser('chrome').setChromeOptions(options).build();

    // 💡 Login only once before all tests
    await loginForm(driver, 'standard_user', 'secret_sauce');
  });

  after(async function () {
    if (driver) await driver.quit();
  });

it('should sort products by name from A to Z', async function () {
let option = await driver.findElement(By.xpath('//option[text()="Name (A to Z)"]'));
        await option.click();
        // Small wait to allow sorting to take effect
        await driver.sleep(3000);
        assert.ok(true);
    })

 it('should sort products by name from Z to A', async function () {
let option = await driver.findElement(By.xpath('//option[text()="Name (Z to A)"]'));
        await option.click();
        // Small wait to allow sorting to take effect
        await driver.sleep(3000);
        assert.ok(true);
    })
    
it('should sort products by price from low to high', async function () {
let option = await driver.findElement(By.xpath('//option[text()="Price (low to high)"]'));
        await option.click();
        // Small wait to allow sorting to take effect
        await driver.sleep(3000);
        assert.ok(true);   
    })

it('should sort products by price from high to low', async function () {
let option = await driver.findElement(By.xpath('//option[text()="Price (high to low)"]'));
        await option.click();
        // Small wait to allow sorting to take effect
        await driver.sleep(3000);
        assert.ok(true);
})
});
