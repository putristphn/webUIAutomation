# 🧪 SauceDemo UI Automation Testing

Automated Web UI Testing project for [**SauceDemo Website**](https://www.saucedemo.com) using **Selenium WebDriver** and **Mocha**.  
Developed as part of the **Digital Skola QA Bootcamp Batch 12** by **Putri Stephanie Lesilolo**.

---

## 📋 Project Overview

This project automates end-to-end UI tests for the SauceDemo website, focusing on:

- ✅ Login functionality validation  
- ✅ Product sorting (Name Z→A)  
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
### 3️⃣ Execute the tests
```bash
npm run test
```
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
- Handling elements using locators (`CSS`, `XPath`, `By.className`)
- Using explicit waits (`until.elementLocated`, `until.elementIsVisible`)
- Generating HTML test reports with Mochawesome
- Managing browser options (e.g., incognito)

---

## 💡 Example Test Case (SauceDemo Sort Z→A)
```javascript
 let dropdownSort = await driver.findElement(By.xpath('//select[@data-test="product-sort-container"]'))
 await dropdownSort.click()
 // Small wait to allow dropdown to take effect
await driver.sleep(3000);
let option = await driver.findElement(By.xpath('//option[text()="Name (Z to A)"]'));
await option.click();
```

---

## 👩🏻‍💻 Author

**Putri Stephanie Lesilolo**  
*Quality Assurance Engineer*  
📍 Jakarta, Indonesia  

🔗 [LinkedIn](https://www.linkedin.com/in/putrilesilolo/) | [GitHub](https://github.com/putristphn)



