class LoginPage {

    constructor() {
        this.username = $('#User_Username')
        this.passwordField = $('#User_LoginPassword')
        this.loginButton = $('#Login')
    }

    go(url){
       browser.get(url); 
    }

    login(email, password) {
        this.username.clear()
        this.username.sendKeys(email)
        this.passwordField.clear()
        this.passwordField.sendKeys(password)
        this.loginButton.click()
    }
}

exports.LoginPage = LoginPage; 

