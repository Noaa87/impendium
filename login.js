let LoginPage = require('./pageobject/login_PageObject.js').LoginPage;
let Dashboard = require('./pageobject/dashboard_PageObject.js').Dashboard;
let Rrqueue = require('./pageobject/rrqueue_PageObject.js').Rrqueue;


const remitST_URL = "https://remitst-app12.devops.impendium.local/"
const userName = "SystemUser1";
const password = "SystemUser1!";

let EC = protractor.ExpectedConditions;

describe('angularjs homepage', function() {

    beforeAll(function() {
        let loginPage = new LoginPage();
        loginPage.go(remitST_URL);
        loginPage.login(userName, password);
        browser.wait(EC.urlIs('https://remitst-app12.devops.impendium.local/REMIT/Home/RemitWorkQueueSummary'), 10000); 
    });

    afterAll(function() {
        let dashboard = new Dashboard();
        dashboard.logout();
        browser.wait(EC.urlIs('https://remitst-app12.devops.impendium.local/account/login?ReturnUrl=%2fREMIT%2fHome%2fRemitWorkQueueSummary'), 10000);
    });


    // it('should find trade using searchbox', () => 
    // {
    //     // trade which is in repair required
    //     const trade_id = "TradeUS21605date21072015SII011";
    //     let dashboard = new Dashboard();
    //     let elm = $('.searchUtiDiv');
    //     browser.wait(EC.visibilityOf(elm), 10000);
    //     elm.sendKeys(trade_id);
    // });

    it('should select a trade and then clicking into it and showing details', () => {
        // access repair required 
        let rrqueue = new Rrqueue();
        rrqueue.rrQueue();
        let elm = $('#current');
        browser.wait(EC.visibilityOf(elm), 10000);
        expect(elm.getText()).toEqual("Repair Required");
    });

    xit('should navigate to import-trades by source settings', () => {
        let dashboard = new Dashboard();
        dashboard.import_trade_ss();
        browser.sleep(3000)
    });

});


