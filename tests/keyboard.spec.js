
import { test, expect } from "@playwright/test"
import { ADDRGETNETWORKPARAMS } from "dns";



test.skip("Keyboard actions", async ({ page }) => {
    await page.goto("https://gotranscript.com/text-compare")


    await page.locator("//textarea[@placeholder='Paste one version of the text here.']").fill("welcome to playwright");
    // Crtl +A
    // Ctrl + C
    //Tab
    await page.keyboard.press("Control+A")

    await page.waitForTimeout(4000)
    await page.keyboard.press("Control+C")
    await page.waitForTimeout(4000)
    await page.keyboard.press("Tab")

    //await page.keyboard.up("Tab")


    //await page.locator("//textarea[@placeholder='Paste another version of the text here.']")

    await page.keyboard.press("Control+V")
    await page.waitForTimeout(4000)
})



test("Keyboard  Google actions", async ({ page }) => {
    await page.goto("https://www.google.com/")

    await page.waitForTimeout(4000)
    //await page.locator("//textarea[@name='q']").fill("playwright");
    await page.locator("//textarea[@name='q']").focus();
     await page.waitForTimeout(4000)

     //await page.keyboard.type("Venkata Reddy")
     //await page.waitForTimeout(4000)




     await page.locator("//textarea[@name='q']").pressSequentially("venkata reddy",{delay:100})
     await page.waitForTimeout(4000)
     
    //  await page.keyboard.down("Shift")
    //  await page.keyboard.press("V")

    //    await page.keyboard.up("Shift")

    //    await page.waitForTimeout(4000)

    //  await page.keyboard.press("ArrowLeft")
    //  await page.keyboard.down("Shift")


    //  for(let i=0;i<6;i++){

    // await page.keyboard.press("ArrowLeft")
    //  }
    //  await page.keyboard.up("Shift")

    //  await page.keyboard.press("Backspace")


    // await page.keyboard.press("Control+A")
    // await page.waitForTimeout(4000)
    // await page.keyboard.press("Control+C")
    // await page.keyboard.press("Backspace")
    // //await page.keyboard.press("Enter")
    // await page.keyboard.press("Control+V")
    // await page.waitForTimeout(4000)
})
