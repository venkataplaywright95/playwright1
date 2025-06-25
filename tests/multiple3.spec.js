
//const {ExcelUtilities} =require(/ExcelUtilities/readExcelFile);



  //"@playwright/test": "^1.51.1",
   // "playwright": "^1.53.0",




import { ExcelUtilities } from './ExcelUtilities/readexcel';

const XLSX = require('xlsx')

import {test,expect}  from '@playwright/test'


test("Read excel", async ({page}) => {






    
 const mobileName="HTC One M9";

    const category="Phones"


   

await page.goto("https://demoblaze.com/")

await page.waitForTimeout(4000)

await expect(page.locator("//a[@id='cat']")).toBeVisible()

if(category === 'Phones')
{

    await page.locator("//a[text()='Phones']").click()
    await page.waitForTimeout(3000)
}

else if(category === 'Laptops'){

    await page.locator("//a[text()='Laptops']").click()
        await page.waitForTimeout(3000)
}
else if(category === 'Monitors'){

    await page.locator("//a[text()='Monitors']").click()
     await page.waitForTimeout(3000)
}

    
await page.waitForLoadState("domcontentloaded")

if(await page.locator(`//a[text()='${name}']`).isVisible())
{

    const price=await page.locator(`//a[text()='${name}']/ancestor::div[@class="card-block"]//h5`).textContent()
    console.log("Price is :"+ price)
}





    
})



