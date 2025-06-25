//import { test, expect } from "@playwright/test"

const { test, expect } = require("@playwright/test")
/*
test("Launch Google", async ({ page }) => {

    await page.goto("https://www.google.com/")
    await page.waitForTimeout(5000);npx 
    await page.goto("https://www.facebook.com/")
   
});

*/
test.skip("Home Page", async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");

    const pagetile = await page.title();
    console.log("Page title is " + pagetile)
    await expect(page).toHaveTitle("STORE")
    const pageURl = await page.url();
    console.log("page url is" + pageURl);


    await expect(page).toHaveURL("https://demoblaze.com/index.html")
    await page.close();

})


test.skip("Para Bank Login", async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");

    const pagetile = await page.title();
    console.log("Page title is " + pagetile)
    await expect(page).toHaveTitle("STORE")
    const pageURl = await page.url();
    console.log("page url is" + pageURl);


    await expect(page).toHaveURL("https://demoblaze.com/index.html")
    await page.close();

})





test.skip("Inner Frames", async ({ page }) => {
    await page.goto("https://ui.vision/demo/webtest/frames/");

    const frames = await page.frame({ url: 'https://ui.vision/demo/webtest/frames/frame_3.html' })
    //frames.locator("//input[@name='mytext3']").fill("venkat")

    const childframes = await frames.childFrames();

    childframes[0].locator("//*[@id='i6']/div[3]/div").check()
    await page.waitForTimeout(5000)

})




test.describe("Group1", ()=>{
    test("Test 1", async ({ page }) => {
        console.log("This is test 1")
     
     })
     
     test("Test 2", async ({ page }) => {
         console.log("This is test 2")
      
      })

})



test.describe("Group2",()=>{
    test("Test 3", async ({ page }) => {
        console.log("This is test 3")
     
     })
     test("Test 4", async ({ page }) => {
        console.log("This is test 4")
     
     })


})

