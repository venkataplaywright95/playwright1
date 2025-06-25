
const{test, expect,page} =require("@playwright/test");



class LoginPage{



    constructor(page)
    {

        this.page=page;
        //this.registrationBtn="//a[text()='Register']";
        this.registrationBtn=page.locator("//a[text()='Register']");
       

    }

    async navigateToURL(url)
    {
        await this.page.goto(url)
    }

    async navigatoToRegistrationPage(){

         await this.registrationBtn.click();
    }
}

module.exports= {LoginPage}