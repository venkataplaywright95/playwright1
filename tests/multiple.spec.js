


import {test,expect}  from '@playwright/test'
import { buffer } from 'stream/consumers';


test("Multiple",async ({page})=> {


    const mobileName="HTC One M9";

   Buffer.from(`{username}:{password}`)

await page.goto("https://demoblaze.com/")

await page.waitForTimeout(4000)

await expect(page.locator("//a[@id='cat']")).toBeVisible()

// //a[text()='Nexus 6']/ancestor::div[@class="card-block"]//h5
if(await page.locator(`//a[text()='${mobileName}']`).isVisible())
{


    const price=await page.locator(`//a[text()='${mobileName}']/ancestor::div[@class="card-block"]//h5`).textContent()
    console.log("Price is :"+ price)
}


})