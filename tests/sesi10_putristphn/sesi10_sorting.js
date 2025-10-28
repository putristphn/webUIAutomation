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

    // Login only once before all tests
    await loginForm(driver, 'standard_user', 'secret_sauce');
  });

  after(async function () {
    if (driver) await driver.quit();
  });

  // Add some delay 2s  after each test
  afterEach(async function () {
  await driver.sleep(2000);
});

it('should sort products by name from A to Z', async function () {
  const select = await driver.findElement(By.css('[data-test="product-sort-container"]'));
  await select.click();
  await driver.findElement(By.css('option[value="az"]')).click();

  // Wait until the first item changes to "Sauce Labs Backpack"
  await driver.wait(async () => {
    const first = await driver.findElement(By.css('.inventory_item_name'));
    return (await first.getText()) === 'Sauce Labs Backpack';
  }, 8000, 'List did not change to A→Z');

  const firstText = await driver.findElement(By.css('.inventory_item_name')).getText();
  assert.strictEqual(firstText, 'Sauce Labs Backpack', 'First item must be "Sauce Labs Backpack" for A→Z');
});

it('should sort products by name from Z to A', async function () {
  const select = await driver.findElement(By.css('[data-test="product-sort-container"]'));
  await select.click();
  await driver.findElement(By.css('option[value="za"]')).click();

  await driver.wait(async () => {
    const first = await driver.findElement(By.css('.inventory_item_name'));
    return (await first.getText()) === 'Test.allTheThings() T-Shirt (Red)';
  }, 8000, 'List did not change to Z→A');

  const firstText = await driver.findElement(By.css('.inventory_item_name')).getText();
  assert.strictEqual(firstText, 'Test.allTheThings() T-Shirt (Red)', 'First item must be the T-Shirt (Red) for Z→A');
});

it('should sort products by price from low to high', async function () {
  const select = await driver.findElement(By.css('[data-test="product-sort-container"]'));
  await select.click();
  await driver.findElement(By.css('option[value="lohi"]')).click();

  await driver.wait(async () => {
    const firstPriceText = await driver.findElement(By.css('.inventory_item_price')).getText();
    return firstPriceText.trim() === '$7.99';
  }, 8000, 'Prices did not change to Low→High');

  const firstPriceText = await driver.findElement(By.css('.inventory_item_price')).getText();
  assert.strictEqual(firstPriceText.trim(), '$7.99', 'First price must be $7.99 for Low→High');
});

it('should sort products by price from high to low', async function () {
  const select = await driver.findElement(By.css('[data-test="product-sort-container"]'));
  await select.click();
  await driver.findElement(By.css('option[value="hilo"]')).click();

  await driver.wait(async () => {
    const firstPriceText = await driver.findElement(By.css('.inventory_item_price')).getText();
    return firstPriceText.trim() === '$49.99';
  }, 8000, 'Prices did not change to High→Low');

  const firstPriceText = await driver.findElement(By.css('.inventory_item_price')).getText();
  assert.strictEqual(firstPriceText.trim(), '$49.99', 'First price must be $49.99 for High→Low');
});
});