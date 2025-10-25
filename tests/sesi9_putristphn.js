const { Builder, By, until } = require('selenium-webdriver');
const assert = require('assert');
const chrome = require('selenium-webdriver/chrome');

describe('SauceDemo website – Login & Sort product name Z→A', function () {
    // Increase default Mocha timeout for slow browser startup/network
    this.timeout(30000);
    let driver;

    // Ensure driver is quit after each test 
    afterEach(async () => {
        if (driver) {
            await driver.quit();
            driver = null;
        }
    });

    it('Successfully login to SauceDemo website & Sort product name from Z→A', async function () {
        options = new chrome.Options();
        options.addArguments('--incognito'); // Add Chrome option to run in incognito mode so that no password-save popup appears
        driver = await new Builder()
            .forBrowser('chrome')
            .setChromeOptions(options)
            .build();

        await driver.get('https://www.saucedemo.com');
        const title = await driver.getTitle();

        // Validate the title page
        assert.strictEqual(title, 'Swag Labs');

        // Login inputs
        let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        let inputPassword = await driver.findElement(By.css('[data-test="password"]'))
        let buttonLogin = await driver.findElement(By.css('[data-test="login-button"]'))
        await inputUsername.sendKeys('standard_user')
        // Small wait to allow input username to take effect
        await driver.sleep(3000);
        await inputPassword.sendKeys('secret_sauce')
        // Small wait to allow input password to take effect
        await driver.sleep(3000);
        await buttonLogin.click()
        // Small wait to allow login button to take effect
        await driver.sleep(3000);
        
        // Wait for the shopping cart link to appear and be visible
        let buttonCart = await driver.wait(
            until.elementLocated(By.css('[data-test="shopping-cart-link"]')),
            10000
        );
        const visible = await driver.wait(until.elementIsVisible(buttonCart), 5000, 'Shopping cart should be displayed');
        // Assert the element is visible
        assert.ok(await buttonCart.isDisplayed());

        // Validate that the text within the element is correct
        let textAppLogo = await driver.findElement(By.className('app_logo'))
        let logotext = await textAppLogo.getText()
        assert.strictEqual(logotext, 'Swag Labs')

        // Dropdown option and select sort Z→A
        let dropdownSort = await driver.findElement(By.xpath('//select[@data-test="product-sort-container"]'))
        await dropdownSort.click()
        // Small wait to allow dropdown to take effect
        await driver.sleep(3000);
        let option = await driver.findElement(By.xpath('//option[text()="Name (Z to A)"]'));
        await option.click();
        // Small wait to allow sorting to take effect
        await driver.sleep(3000);
    });
});
