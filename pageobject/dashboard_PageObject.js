let EC = protractor.ExpectedConditions;

class Dashboard {

    constructor(){
        this.userIcon = $('#UserAccountImage')
        this.logoutOption = $('a[href*="/Account/Logout"]')
        this.search = $('.utiSearch')
        this.action = $('#ActionsImage')
        this.accordionAction = $('#accordion')
        this.acc_import = $$('.dcjq-parent-li').get(0)
        this.acc_import_trades = $$('.dcjq-parent').get(0)
        this.acc_import_trades_ss = $('.By Source Setting')
        // this.acc_import_trades_ss = element(by.linkText('By Source Setting'))
    }

    logout(){
        this.userIcon.click()
        this.logoutOption.click()
    }

    uti_search(trade){
        this.search.sendKeys(trade)
    }

    import_trade_ss(){
        this.action.click()
        // browser.wait(EC.visibilityOf(this.accordionAction), 3000)
        this.acc_import.click()
        // browser.wait(EC.visibilityOf(this.acc_import_trades), 3000)
        this.acc_import_trades.click()
        this.acc_import_trades_ss.click()
        
    }


}

exports.Dashboard = Dashboard;