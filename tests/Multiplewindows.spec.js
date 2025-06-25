import { test, expect, chromium } from '@playwright/test'
import { promises } from 'dns';


test.skip("Multiple Windows", async () => {


    const browser = await chromium.launch();

    const context = await browser.newContext();


    const page1 = await context.newPage();

    const page2 = await context.newPage();

    const allpages = context.pages();


    console.log("No of Pages:" + allpages.length)


    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")


    await page2.goto("https://orangehrm.com")
    await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")

})

test.skip("Handling Multiple Windows", async () => {


    const browser = await chromium.launch();

    const context = await browser.newContext();


    const page1 = await context.newPage();

    const page2 = await context.newPage();

    const allpages = context.pages();


    console.log("No of Pages:" + allpages.length)


    await page1.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
    await expect(page1).toHaveTitle("OrangeHRM")



    const pagePromise = context.waitForEvent('page')
    await page1.locator("//a[normalize-space()='OrangeHRM, Inc']").click();

    const newPage = await pagePromise;

    await expect(newPage).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")

    await page1.waitForTimeout(3000)
    //await newPage.waitForTimeout(3000)

    await page1.locator("//input[@placeholder='Username']").fill("venkatareddy")
    //await newPage.waitForTimeout(30000)


    //await newPage.locator("//input[@id='Form_submitForm_action_request']").click();

    //await newPage.waitForTimeout(3000)
    //await browser.close()

    // await page2.goto("https://orangehrm.com")
    // await expect(page2).toHaveTitle("Human Resources Management Software | OrangeHRM HR Software ")




})




test.skip("handling Multiple Windows", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.waitForTimeout(3000)


    const [newpage1] = await Promise.all
        (
            [

                context.waitForEvent('page'),

                page.locator("(//a[contains(@href,'facebook')])[1]").click()

            ]
        )
    await page.waitForTimeout(5000)

    await newpage1.locator("(//input[@name='email'])[1]").fill("venkata reddy")

    await newpage1.waitForTimeout(5000)

    await newpage1.close();

    await page.locator('//input[@placeholder="Enter Password"]').fill("venkata@gmail.com")
    await page.waitForTimeout(5000)




});




test.skip("New tab Multiple Windows", async ({ browser }) => {

    const context = await browser.newContext();
    const page = await context.newPage();
    await page.goto("https://demo.automationtesting.in/Windows.html")
    await page.waitForTimeout(3000)


    await page.locator("//a[normalize-space()='Open New Seperate Windows']").click();



    



});




