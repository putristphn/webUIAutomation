const { By } = require('selenium-webdriver');
 async function clickSortingOption (driver, sortOption) {
 let dropdownSort = await driver.findElement(By.xpath('//select[@data-test="product-sort-container"]'))
 await dropdownSort.click()
 await driver.sleep(3000);
 }
 module.exports = { clickSortingOption };