


import {test,expect} from "@playwright/test"


//test.use({browserName:'webkit'})



// const browsers=['chromium','firefox','webkit'];

// for(const browser of browsers){

//     test.use({browserName:browser});

//     test(`test in ${browser}`,async ({page}) => {
//   await page.goto("https://the-internet.herokuapp.com/upload")

//     })
// }

test.skip("File uplaods", async ({ page }) => {

    await page.goto("https://the-internet.herokuapp.com/upload")
    await page.locator("//input[@id='file-upload']").setInputFiles("tests/files/download.xlsx")
    await page.waitForTimeout(4000);
    await page.locator("//input[@id='file-submit']").click({force:true});
    await page.waitForTimeout(4000);
    expect(await page.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText("File Uploaded!")
    await page.waitForTimeout(4000);
})


test("cookies", async ({ page }) => {

     await page.goto("https://www.google.com/")
     //await page.goto(process.env.baseurl)

     await page.context().addCookies([{name: 'mycookie',value: 'cookievalue',domain:'https://www.google.com/'}])

     const cookies=await page.context().cookies();

     console.log("cookie name:"+cookies)

await page.context().clearCookies();


await page.evaluate(()=> localStorage.setItem('key','value'))
const value=await page.evaluate(()=> localStorage.getItem('key'))

await page.context().storageState({path: 'auth.json'})





    // await page.locator("//input[@id='file-upload']").setInputFiles("tests/files/download.xlsx")
    // await page.waitForTimeout(4000);
    // await page.locator("//input[@id='file-submit']").click({force:true});
    // await page.waitForTimeout(4000);
    // expect(await page.locator("//h3[normalize-space()='File Uploaded!']")).toHaveText("File Uploaded!")
    // await page.waitForTimeout(4000);
})