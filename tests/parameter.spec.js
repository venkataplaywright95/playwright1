import { test, expect, page } from "@playwright/test"




const googledata = [
    {
        name: "selenium"
    },

    {
        name: "playwright"
    }
];

googledata.forEach(data =>{
test(`patameter test ${data.name}`, async ({ page }) => {



    await page.goto("https://www.google.com/")


    await page.locator("//*[@name='q']").fill(data.name)
    // await page.locator("//*[@name='q']").fill(data.name)

    await page.waitForTimeout(2000)
})

})
