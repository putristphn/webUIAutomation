 async function loginForm (driver, username, password) {
 let inputUsername = await driver.findElement(By.css('[data-test="username"]'))
        let inputPassword = await driver.findElement(By.css(By.xpath('//*[@data-test="password"]'))
        let buttonLogin = await driver.findElement(By.className('submit-button btn_action'))
        await inputUsername.sendKeys(username)
        // Small wait to allow input username to take effect
        await driver.sleep(3000);
        await inputPassword.sendKeys(password)
        // Small wait to allow input password to take effect
        await driver.sleep(3000);
        await buttonLogin.click()
        // Small wait to allow login button to take effect
        await driver.sleep(3000);
 }