import { test, expect, chromium } from "@playwright/test"
import { beforeEach } from "node:test";


const clipboard = require('clipboardy');

test.describe.parallel("parallel", () => {

    test("Para Bank Login smoke", async ({ page }) => {
        await page.goto("https://demoblaze.com/index.html");

        const pagetile = await page.title();
        console.log("Page title is " + pagetile)
        await expect(page).toHaveTitle("STORE2")
        const pageURl = await page.url();
        console.log("page url is" + pageURl);



    });

    test("Para Bank Login smoke1", async ({ page }) => {
        await page.goto("https://demoblaze.com/index.html");

        const pagetile = await page.title();

        console.log("Page title is " + pagetile)
        await expect(page).toHaveTitle("STORE")
        const pageURl = await page.url();
        console.log("page url is" + pageURl);

    // const btn = page.locator("")
        // const color = await btn.evaluate((ele) => {

        //    return  window.getComputedStyle(ele).getPropertyValue("background-color")
        // })
    });
    test("Para Bank Login smoke2", async ({ page }) => {
        await page.goto("https://demoblaze.com/index.html");

        // const pagetile = await page.title();
        // console.log("Page title is " + pagetile)
        // await expect(page).toHaveTitle("STORE")
        // const pageURl = await page.url();
        // console.log("page url is" + pageURl);



    });

})




test.only("Para Bank Login smoke1", async ({ page }) => {
        await page.goto("https://demoblaze.com/index.html");

        const pagetile = await page.title();

        console.log("Page title is " + pagetile)
        await expect(page).toHaveTitle("STORE")
        const pageURl = await page.url();
        console.log("page url is" + pageURl);

      


      

    // const btn = page.locator("")
        // const color = await btn.evaluate((ele) => {

        //    return  window.getComputedStyle(ele).getPropertyValue("background-color")
        // })
    });







