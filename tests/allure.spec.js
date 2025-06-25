import {test,expect} from '@playwright/test'



test("Amazon", async ({ page }) => {

  await page.goto("https://www.amazon.in/");


  await page.waitForTimeout(3000)
  //const visible=await page.getByRole("link",{name: 'Forgot login info?'})
  //await page.waitForTimeout(3000)
  await page.getByPlaceholder("Search Amazon.in").fill("shoes")
  await page.waitForTimeout(3000)
  await page.locator("//input[@value='Go']").click()
  await page.waitForTimeout(3000)



})

test("Google", async ({ page }) => {

  await page.goto("https://www.google.com/");


 await page.waitForTimeout(4000)


})