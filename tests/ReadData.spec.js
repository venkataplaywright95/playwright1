import { test, expect } from '@playwright/test'

const data = JSON.parse(JSON.stringify(require("../logintestdata.json")))




test.describe("Data driven testing", function () {


    for (const datadriven of data) {

        test.describe(`Login with users ${datadriven.id}`, function () {

            test("Login with Application", async ({ page }) => {



                await page.goto("https://freelance-learn-automation.vercel.app/login")
              


                await page.locator("//input[@id='email1']").fill(datadriven.username)
           

                
                await page.locator('//input[@name="password1"]').fill(datadriven.password)
               


            })
        })
    }
})



test("Read data from Json", async ({ page }) => {



    await page.goto("https://freelance-learn-automation.vercel.app/login")
    await page.waitForTimeout(3000)


    await page.locator("//input[@id='email1']").fill(data.Interest[1])
    await page.waitForTimeout(3000)


})