let EC = protractor.ExpectedConditions;

class Rrqueue {

    constructor(){
        this.repairReqQueue = $('div[title="Click for Repair Required Work Queue List"]');
    }

    rrQueue(){
        browser.wait(EC.visibilityOf(this.repairReqQueue), 5000)
        this.repairReqQueue.click()
    }

}

exports.Rrqueue = Rrqueue;