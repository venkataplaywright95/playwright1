
//const {ExcelUtilities} =require(/ExcelUtilities/readExcelFile);

import { ExcelUtilities } from './ExcelUtilities/readexcel';

const XLSX = require('xlsx')

import {test,expect}  from '@playwright/test'


test("Read excel", async ({page}) => {


    //const mobileName="Nexus 6";


    const filepath="./tests/testdata/Exceldata/data.xlsx"

    const data=ExcelUtilities.readExcelFile(filepath)



    for(let i=0;i<data.length;i++)
    
{

const name= data[i].name;
const category= data[i].category;





    
//  const mobileName="HTC One M9";

//     const category="Phones"


   

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

    const appprice=await page.locator(`//a[text()='${name}']/ancestor::div[@class="card-block"]//h5`).textContent()
    console.log("Price is :"+ appprice)


    console.log(category +" : "+name + ":"+ appprice)

    data[i].price=appprice;

}

else
{
console.log("invalid search")
}

}
   
await ExcelUtilities.updateExcel(filepath,data)
await ExcelUtilities.modifyData(filepath,data)
})



