// helper/helperlogin.js
const { By, until } = require('selenium-webdriver');
const assert = require('assert');

/**
 * Login function for successful login attempts.
 * Waits for redirect to inventory page and validates the title.
 */
async function loginForm(driver, username, password) {
  await driver.get('https://www.saucedemo.com/');

  const usernameEl = await driver.findElement(By.css('[data-test="username"]'));
  const passwordEl = await driver.findElement(By.css('[data-test="password"]'));
  const loginBtn   = await driver.findElement(By.css('.submit-button.btn_action'));

  await usernameEl.sendKeys(username);
  await passwordEl.sendKeys(password);
  await loginBtn.click();

  // ✅ Wait until redirected to inventory page
  await driver.wait(until.urlContains('/inventory.html'), 10000, 'URL did not change to inventory.html');

  // ✅ Verify page title
  const title = await driver.getTitle();
  assert.strictEqual(title, 'Swag Labs', 'User should be on inventory page after login');
}

/**
 * Login function for negative login attempts.
 * Waits for the error message to appear on the same page.
 */
async function loginFormExpectError(driver, username, password) {
  await driver.get('https://www.saucedemo.com/');

  const usernameEl = await driver.findElement(By.css('[data-test="username"]'));
  const passwordEl = await driver.findElement(By.css('[data-test="password"]'));
  const loginBtn   = await driver.findElement(By.css('.submit-button.btn_action'));

  await usernameEl.sendKeys(username);
  await passwordEl.sendKeys(password);
  await loginBtn.click();

  // ✅ Wait for error message
  const errorEl = await driver.wait(
    until.elementLocated(By.css('[data-test="error"]')),
    10000,
    'Error message did not appear'
  );
  return errorEl;
}

module.exports = { loginForm, loginFormExpectError };
