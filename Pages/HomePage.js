const { addAbortListener } = require("events");

class HomePage{

    constructor(page){

        this.page=page;
        this.productList="//div[@id='tbodyid']/div/div//h4/a";
        this.addToCart= "//a[text()='Add to cart']";
        this.cart="#cartur"
    }


    async addProductTocart(productNmae){

        const productList=await this.page.$$(this.productList);
        for(const prod of productList)
        {
            if(productNmae == await prod.textContent())
            {
                await prod.click();
                break;

            }
        }


        await this.page.on("dialog",async dialog =>{


            if(dialog.message().includes("added"))
            {
                await dialog.accept();

            }

        })

        await this.page.locator(this.addToCart).click();
    }


    async gotoCart(){
        await this.page.locator(this.cart).click();
    }
}


module.exports= {HomePage}