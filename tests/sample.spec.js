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
    console.log("Page title is "+ pagetile)
    await expect(page).toHaveTitle("STORE")
    const pageURl=await page.url();
    console.log("page url is"+pageURl);

    
    await expect(page).toHaveURL("https://demoblaze.com/index.html")
    await page.close();

})


test.skip("Para Bank Login", async ({ page }) => {
    await page.goto("https://demoblaze.com/index.html");

    const pagetile = await page.title();
    console.log("Page title is "+ pagetile)
    await expect(page).toHaveTitle("STORE")
    const pageURl=await page.url();
    console.log("page url is"+pageURl); 

    
    await expect(page).toHaveURL("https://demoblaze.com/index.html")
    await page.close();

})





test("Para Bank Login1", async () => {
   console.log("this is test 1")

})




test("sample", async () => {
    console.log("this is test 2")
 
 })


 test("sample1", async () => {
    console.log("this is test 3")
 
 })