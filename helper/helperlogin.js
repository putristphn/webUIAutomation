const { By, until } = require('selenium-webdriver');
const assert = require('assert');

async function loginForm(driver, username, password) {
  // Open login page
  await driver.get('https://www.saucedemo.com/');

  // Wait for username field
  const inputUsername = await driver.wait(
    until.elementLocated(By.css('[data-test="username"]')),
    10000
  );
  const inputPassword = await driver.findElement(By.css('[data-test="password"]'));
  const buttonLogin   = await driver.findElement(By.css('.submit-button.btn_action'));

  // Fill login fields
  await inputUsername.sendKeys(username);
  await inputPassword.sendKeys(password);
  await buttonLogin.click();

 // Wait until redirected to inventory page
  await driver.wait(until.urlContains('/inventory.html'), 10000, 'URL did not change to inventory.html');

 // Then check the title
  const title = await driver.getTitle();
  assert.strictEqual(title, 'Swag Labs', 'User should be on inventory page after login');
}

module.exports = { loginForm };