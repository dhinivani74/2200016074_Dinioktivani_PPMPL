const { Builder, By, Key, until } = require('selenium-webdriver');
const { expect } = require('chai');

describe('UI Testing using selenium', function () {
    this.timeout(60000); // set timeout for mocha test
    let driver;

    // inisialisasi webDriver sebelum menjalankan test case
    before(async function() {
        driver = await new Builder().forBrowser('chrome').build();
    });

    // tutup webDriver setelah semua test selesai
    after(async function() {
        await driver.quit();
    });

    it('should load the login page', async function() {
        await driver.get('C:/Users/LENOVO X1 CARBON/OneDrive/Dokumen/semester 5/praktikum PPML/Praktikum4/test/login.html');
        const title = await driver.getTitle();
        expect(title).to.equal('Login Page');
    });

    it('should input username and password', async function() {
        await driver.findElement(By.id('username')).sendKeys('testuser');
        await driver.findElement(By.id('password')).sendKeys('password123');
        const usernameValue = await driver.findElement(By.id('username')).getAttribute('value');
        const passwordValue = await driver.findElement(By.id('password')).getAttribute('value');
        expect(usernameValue).to.equal('testuser');
        expect(passwordValue).to.equal('password123');
    });

    it('should click the login button', async function() {
        await driver.findElement(By.id('loginButton')).click();
    });

    it('should show error message on failed login', function(done) {
        driver.findElement(By.id('username')).clear();
        driver.findElement(By.id('username')).sendKeys('Dini Oktivani');
        driver.findElement(By.id('password')).clear();
        driver.findElement(By.id('password')).sendKeys('12345');
    
        driver.findElement(By.id('loginButton')).click();
    
        driver.wait(until.elementLocated(By.id('errorMessage')), 120000) 
            .then(async () => {
                const errorMessage = await driver.findElement(By.id('errorMessage')).isDisplayed();
                expect(errorMessage).to.be.true;
                done(); // Panggil done() saat test selesai
            })
            .catch((err) => {
                done(err); // Jika terjadi error, panggil done dengan error
            });
    });
});
    