class CartPage{


    constructor(page){


        this.page=page;
        this.nofofproducts="//tbody[@id='tbodyid']/tr/td[2]";


    }


 
    async checkProductInCart(productName){


        const prodctnames=await this.page.$$(this.nofofproducts)
        for(const prod of prodctnames){
            console.log(await prod.textContent())  
            if(productName ==await prod.textContent())
                {
                    return true;
                    break;

                } 
        }
    }
}


module.exports = {CartPage}