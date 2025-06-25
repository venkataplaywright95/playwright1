class LoginPagePavan {


    constructor(page) {
        this.page = page
        this.loingLink = "//a[text()='Log in']";
        this.username = "//input[@id='loginusername']";
        this.password = "//input[@id='loginpassword']";
        this.loginBtn = "//button[@onclick='logIn()']";
    }

    async gotoLoginPage(url) {
        await this.page.goto(url)
    }

    async login(username1,password1){

        await this.page.locator(this.loingLink).click();
        await this.page.locator(this.username).fill(username1)
        await this.page.locator(this.password).fill(password1)
        await this.page.locator(this.loginBtn).click();

    }
}


module.exports= { LoginPagePavan}