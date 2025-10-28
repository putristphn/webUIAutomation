# 🧪 SauceDemo UI Automation Testing

Automated Web UI Testing project for [**SauceDemo Website**](https://www.saucedemo.com) using **Selenium WebDriver** and **Mocha**.  
Developed as part of the **Digital Skola QA Bootcamp Batch 12** by **Putri Stephanie Lesilolo**.

---

## 📋 Project Overview

This project automates end-to-end UI tests for the SauceDemo website, focusing on:

- ✅ Login functionality validation (Session 10)
- ✅ Product Sorting (Name Z→A / Price Low→High) (Session 9 & 10)
- ✅ Page title and logo verification  
- ✅ Dropdown interaction and element visibility checks  
- ✅ Chrome browser options (e.g., Incognito mode to avoid password popups)

---

## 📁 Project Structure
```
webUIAutomation/
├── helper/
│    ├── helperlogin.js                      # Add helper
│    ├── helperloginfailed.js
│    └── helpersorting.js
│
├── tests/
│   ├── sesi9_putristphn.js                  # Main automation test script (SauceDemo)
│   └── sesi10_putristphn/
│       ├── sesi10_login.js                  # Login test cases
│       └── sesi10_sorting.js                # Sorting test cases
│
├── assets/
│   └── mochawesome-report-snapshot.png      # Snapshot of the Mochawesome report
│
├── package.json                             # Project metadata & npm scripts
├── package-lock.json
├── README.md
└── mochawesome-report/                      # Auto-generated HTML reports
```

---

## ⚙️ Tech Stack

| Tool | Purpose |
|:------|:---------|
| **JavaScript (ES6)** | Test scripting language |
| **Selenium WebDriver** | Browser automation framework |
| **Mocha** | Test runner |
| **Mochawesome** | Test reporting |
| **Node.js + npm** | Runtime environment & package management |
| **ChromeDriver** | Web UI execution engine |

---

## 🚀 How to Run the Tests

### 1️⃣ Clone the repository
```bash
git clone https://github.com/putristphn/webUIAutomation.git
cd webUIAutomation
```
### 2️⃣ Install dependencies
```bash
npm install
```
### 3️⃣ Run specidic tests

| Command                 | Description                                |
| ----------------------- | ------------------------------------------ |
| `npm run testsesi9`     | Run Session 9 SauceDemo UI Fundamentals    |
| `npm run sesi10login`   | Run Session 10 Login (Positive & Negative) |
| `npm run sesi10sorting` | Run Session 10 Product Sorting Test        |

### 4️⃣ View the Mochawesome report
After the tests finish running, open:
```bash
open mochawesome-report/mochawesome.html
```

---

## 🖼️ Test Report Snapshot (Mochawesome)
Below is an example of the generated Mochawesome report after running the tests:

![Mochawesome Report Screenshot](mochawesome-report/assets/mochawesome-report-snapshot.png)

The report includes detailed logs, assertions, and pass/fail status for each test case.

---

## 🧠 Key Learning Points

- Setting up Selenium WebDriver with Node.js
- Handling elements using locators (`CSS`, `XPath`, `Class locators`)
- Using explicit waits (`until.elementLocated`, `until.urlContains`)
- Verifying UI elements instead of titles for headless runs
- Generating HTML reports with Mochawesome
- Separating positive and negative login flows into dedicated helpers
- Managing browser options (e.g., incognito mode)

---

## 💡 Example Test Case 

### 🧩 Product Sorting (Name Z→A)
```javascript
 let dropdownSort = await driver.findElement(By.xpath('//select[@data-test="product-sort-container"]'));
await dropdownSort.click();
let option = await driver.findElement(By.xpath('//option[text()="Name (Z to A)"]'));
await option.click();
```

### Login (Positive Flow)
```javascript
await loginForm(driver, 'standard_user', 'secret_sauce');
const appLogo = await driver.findElement(By.className('app_logo'));
const text = await appLogo.getText();
assert.strictEqual(text, 'Swag Labs');
```

### 🧩 Login (Negative Flow)
```javascript
await loginFormFailed(driver, 'locked_out_user', 'secret_sauce');
const errorEl = await driver.findElement(By.css('[data-test="error"]'));
const text = await errorEl.getText();
assert.ok(text.toLowerCase().includes('locked out'));
```

## 📊 Example Test Output

```pgsql
Login Form Suite
  ✓ should login successfully with valid credentials (3s)
  ✓ should fail to login with locked out user (2s)

2 passing (5s)
```

---

## 👩🏻‍💻 Author

**Putri Stephanie Lesilolo**  
*Quality Assurance Engineer*  
📍 Jakarta, Indonesia  

🔗 [LinkedIn](https://www.linkedin.com/in/putrilesilolo/) | [GitHub](https://github.com/putristphn)



