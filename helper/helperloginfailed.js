const { By, until } = require('selenium-webdriver');
const assert = require('assert');

async function loginFormFailed(driver, username, password) {
  await driver.get('https://www.saucedemo.com/');

  const usernameEl = await driver.findElement(By.css('[data-test="username"]'));
  const passwordEl = await driver.findElement(By.css('[data-test="password"]'));
  const loginBtn   = await driver.findElement(By.css('.submit-button.btn_action'));

  await usernameEl.sendKeys(username);
  await passwordEl.sendKeys(password);
  await loginBtn.click();

// Wait for error element
const errorEl = await driver.wait(
  until.elementLocated(By.css('[data-test="error"]')),
  10000,
  'Error message did not appear'
);

const text = await errorEl.getText();

// Assert the error message contains "locked out"
assert.match(text, /locked out/i, 'Error message should contain "locked out"');
}

module.exports = { loginFormFailed };
