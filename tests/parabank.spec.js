//const { test, expect, chromium } = require("@playwright/test");
//const { time } = require("console");

import { chromium, test, expect } from "@playwright/test";
import { ADDRGETNETWORKPARAMS } from "dns";
import { domainToASCII } from "url";


//test.use({viewport:{width:1000,height:800}})

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("https://demoblaze.com/index.html");
  await page.waitForTimeout(5000)
  await page.locator("//a[text()='Log in']").click()

  await page.locator("//input[@id='loginusername']").fill("pavanol")
  await page.locator("//input[@id='loginpassword']").fill("test@123")
  await page.locator("//button[@onclick='logIn()']").click()
  await page.waitForTimeout(5000)

})



test.afterAll(async () => {

  await page.locator("//a[text()='Log out']").click()
  await page.waitForTimeout(5000)
})
test.skip("Para bank", async ({ page }) => {

  await page.goto("http://parabank.parasoft.com/");
  // const login_label=await page.locator("//h2[normalize-space()='Customer Login']")
  await expect(await page.locator("//h2[normalize-space()='Customer Login']")).toBeVisible()
  await expect(await page.locator("//h2[normalize-space()='Customer Login']")).toBeEnabled()
  //await expect(await page.locator("//h2[normalize-space()='Customer Login']")).toBeDisabled()
  //await expect(await page.locator("//h2[normalize-space()='Customer Login']"))
  await page.locator("//input[@name='username']").fill("Venkat");

  await page.locator("//input[@name='password']").fill("Venkat");
  //await page.getByText("Log In").click({force: true});
  //await page.getByText("Forgot login info?").click()
  //await page.getByRole('button', { name: 'Log In' }).click();
  await page.getByRole('button', { name: 'Log In' }).click();
  await page.waitForTimeout(3000);

})

test.skip("Registration", async ({ page }) => {

  await page.goto("http://parabank.parasoft.com/");
  //await page.goto("http://google.com");
  //await page.waitForTimeout(3000)

  await page.getByRole('link', { name: 'Register' }).click()
  await page.waitForTimeout(3000)
  await page.locator("//input[@id='customer.firstName']").fill("venakt")
  await page.locator("//input[@id='customer.lastName']").fill("VENAKT123")
  await page.locator("//input[@id='customer.address.street'] ").fill("VENAKT123")
  await page.locator("//input[@id='customer.address.city']").fill("VENAKT123")
  await page.locator("//input[@id='customer.address.state']").fill("VENAKT123")
  await page.locator("//input[@id='customer.address.zipCode']").fill("VENAKT123")
  await page.locator("//input[@id='customer.phoneNumber']").fill("VENAKT123")
  await page.locator("//input[@id='customer.ssn']").fill("VENAKT123")
  await page.locator("//input[@id='customer.username']").fill("VENAKT12345")
  await page.locator("//input[@id='customer.password']").fill("VENAKT123")
  await page.locator("//input[@id='repeatedPassword']").fill("VENAKT123")
  await page.getByRole('button', { name: 'Register' }).click()
  await page.waitForTimeout(3000)
  const message = await page.getByText("Your account was created successfully. You are now logged in.")
  console.log("message is :" + message)
  await expect(message).toBeVisible();


})



test.skip("Amazon", async ({ page }) => {

  await page.goto("https://www.amazon.in/");


  await page.waitForTimeout(3000)
  //const visible=await page.getByRole("link",{name: 'Forgot login info?'})
  //await page.waitForTimeout(3000)
  await page.getByPlaceholder("Search Amazon.in").fill("shoes")
  await page.waitForTimeout(3000)
  await page.locator("//input[@value='Go']").click()
  await page.waitForTimeout(3000)



})

test.skip("Facebook", async ({ page }) => {

  await page.goto("https://www.facebook.com/");


  await page.waitForTimeout(3000)
  // //const visible=await page.getByRole("link",{name: 'Forgot login info?'})
  // //await page.waitForTimeout(3000)
  // await page.getByPlaceholder("Search Amazon.in").fill("shoes")
  // await page.waitForTimeout(3000)
  // await page.locator("//input[@value='Go']").click()
  // await page.waitForTimeout(3000)

  await page.locator("//input[@placeholder='Password']/following::button").click();

  await page.waitForTimeout(3000)



})


test.skip("Google", async ({ page }) => {

  await page.goto("https://www.facebook.com/");

  const text = await page.locator("//*[@name='email']").getAttribute("placeholder")
  await page.waitForTimeout(3000)

  console.log(text)

  const no_of_links = await page.$$("//a")
  console.log(no_of_links.length)

  for (const link of no_of_links) {
    const link_texts = await link.textContent();
    console.log("Link text is:" + link_texts)

  }

})



test.skip("Browser fixture", async () => {


  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


  await page.goto("https://demoblaze.com/index.html");
  await page.waitForTimeout(3000)
  const title = await page.title();
  console.log("title is :" + title)

  const url = await page.url();
  console.log("Url is :" + url)

  await expect(page).toHaveURL("https://demoblaze.com/index.html")
  await expect(page).toHaveTitle("STORE")

})



test.skip("Navigation", async () => {


  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


  await page.goto("https://google.com");
  await page.waitForTimeout(3000)

  await page.goto("https://facebook.com");
  await page.waitForTimeout(3000)
  await page.goBack();
  await page.waitForTimeout(3000)
  await page.goForward();
  await page.waitForTimeout(3000)
  await page.reload()

})


test.skip("Validation", async () => {


  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();


  await page.goto("https://parabank.parasoft.com/parabank/register.htm");
  await page.waitForTimeout(3000)


  await page.locator("//input[@value='Log In']").click();
  await page.waitForTimeout(3000)
  //const username=await page.locator("//p[text()='Please enter a username and password.']").isVisible()
  //console.log("user name is:"+username)
  await expect(await page.locator("//p[text()='Please enter a username and password.']")).toBeVisible();


})


test.skip("checkbox", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.cleartrip.com/");
  await page.waitForTimeout(3000)
  await page.locator("//div[@color='#1A1A1A']/input").check()
  await expect.soft(await page.locator("//div[@color='#1A1A1A']/input")).not.toBeChecked();
  await page.locator("//div[@color='#1A1A1A']/input").uncheck();
  await expect(await page.locator("//div[@color='#1A1A1A']/input")).not.toBeChecked();
  await page.waitForTimeout(3000);

})


test.skip("checkbox1", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://artoftesting.com/samplesiteforselenium");
  await page.waitForTimeout(3000)
  await page.locator("//form[text()='Automation Testing']/input[1]").check();
  await page.waitForTimeout(3000)
  await expect(page.locator("//form[text()='Automation Testing']/input[1]")).toBeChecked();
  await page.locator("//form[text()='Automation Testing']/input[1]").uncheck();
  await page.waitForTimeout(3000)
  await expect(page.locator("//form[text()='Automation Testing']/input[1]")).not.toBeChecked();

  await page.waitForTimeout(3000);
  await expect.soft(page.locator("//input[@name='gender' and @value='male']")).toBeChecked();

  await page.locator("//input[@name='gender' and @value='male']").click();
  await page.waitForTimeout(3000);

})


test.skip("Textbox", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://artoftesting.com/samplesiteforselenium");
  await page.waitForTimeout(3000)


  await page.locator("//input[@name='firstName']").scrollIntoViewIfNeeded();

  await page.locator("//input[@name='firstName']").fill("Venkat")
  await page.waitForTimeout(3000)
  //await page.locator("//input[@name='firstName']")

  await page.waitForTimeout(3000)
  await page.locator("//input[@name='firstName']").fill("Reddy");
  await page.waitForTimeout(3000)
  const text = await page.locator("//input[@name='firstName']").inputValue()
  console.log("text is: " + text)

  await expect(await page.locator("//input[@name='firstName']")).toHaveValue("Reddy")
  await page.waitForTimeout(3000)

})



test.skip("Check Boxes", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(3000)

  await page.locator("//*[@value='sunday']").scrollIntoViewIfNeeded();
  // await page.locator("//*[@value='sunday']").check();
  // await page.waitForTimeout(3000)

  // await expect(await page.locator("//*[@value='sunday']").isChecked()).toBeTruthy();

  // await expect(await page.locator("//*[@value='monday']").isChecked()).toBeFalsy();
  // await page.waitForTimeout(3000)


  const checkboxes = [
    "//*[@value='sunday']",
    "//*[@value='monday']",
    "//*[@value='saturday']"
  ];

  for (const checkbox of checkboxes) {
    await page.locator(checkbox).check()
  }
  await page.waitForTimeout(4000)

  for (const checkbox of checkboxes) {
    if (await page.locator(checkbox).isChecked()) {


      await page.locator(checkbox).uncheck();
    }

  }
  await page.waitForTimeout(4000)

})


test.skip("Edit Boxes", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(3000)

  await expect(await page.locator("//input[@id='name']")).toBeVisible();
  await expect(await page.locator("//input[@id='name']")).toBeEmpty();
  await expect(await page.locator("//input[@id='name']")).toBeEditable();
  await expect(await page.locator("//input[@id='name']")).toBeEnabled();



  await page.locator("//input[@id='name']").fill("venkat");
  await page.waitForTimeout(4000)

})



test.skip("Radio Buttons", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(3000)
  await page.locator("//input[@id='male']").check()
  await expect(await page.locator("//input[@id='male']")).toBeChecked();
  await expect(await page.locator("//input[@id='male']").isChecked()).toBeTruthy();
  const checkd = await page.locator("//input[@id='male']").isd
  console.log(checkd)
  await expect(await page.locator("//input[@id='female']").isChecked()).toBeFalsy();
  const femaleradiobutton = await page.locator("//input[@id='female']").isChecked();
  console.log(femaleradiobutton)
  await page.waitForTimeout(4000)

})


test.skip("Drop Down Examples", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("//select[@id='country']").scrollIntoViewIfNeeded()
  //await page.locator("//select[@id='country']").selectOption({label: 'India'})
  //await page.locator("//select[@id='country']").selectOption('India')
  //await page.locator("//select[@id='country']").selectOption({index: 1})


  // const count=await page.locator("#country option");
  // //console.log("no of options"+count.count())
  // await expect(count).toHaveCount(10)
  // await page.waitForTimeout(4000)



  // const options=await page.$$("#country option")
  // console.log("No of options "+options.length)
  // await expect(options.length).toBe(10)



  // const content= await page.locator("#country").textContent();
  // await expect(content.includes("India")).toBeTruthy()




  // using looping

  // const options=await page.$$("#country option")
  // let status=false;
  // for(const option of options)
  // {
  //   //console.log(await option.textContent())
  //   let value=await option.textContent();
  //   if(value.includes("France"))
  //   {
  //     status=true;
  //     break;
  //   }
  //   expect(status).toBeTruthy();

  // }




  const options = await page.$$("#country option")
  //let status=false;
  for (const option of options) {
    //console.log(await option.textContent())
    let value = await option.textContent();
    if (value.trim().includes("china")) {
      // await page.locator("#country").selectOption(value);
      //await page.locator("#country").selectOption(value);
      await page.selectOption("#country", value)

      break;
    }

  }
  await page.waitForTimeout(5000);
})




test.skip("Multi Drop Down Examples", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.locator("//select[@id='country']").scrollIntoViewIfNeeded()

  //await page.locator("#colors").selectOption['Blue','Red', 'Yellow']
  //await page.selectOption('#colors',['Red','Blue','Yellow'])
  //await page.selectOption("[]")
  //await page.locator("#colors").selectOption(['Red','Blue','Yellow'])




  // const options=await page.$$('#colors option')
  // for(const option of options)
  // {
  //   console.log(await option.textContent())
  // }



  const textcontent = await page.locator("#colors").textContent();
  await expect(textcontent.includes("Blue")).toBeTruthy()

  await page.waitForTimeout(5000)
})




test.skip("BootStrap Drop Down Examples", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://testautomationpractice.blogspot.com/");


  //   await page.locator("//select[@id='country']").scrollIntoViewIfNeeded()
  // //first click on th drop down
  //  await page.locator("").click();
  //  // identyfy locators
  //  const options =await page.$$("ul>li label input")
  //  await expect(options.length).toBe(11)


  //select option from drip down


  const options = await page.$$("ul>li label")

  for (const option of options) {
    const value = await option.textContent();
    console.log("valuw is " + value)

    if (value.includes('java') || value.includes("CSS") || value.includes("Selenium")) {
      await option.click();

    }
  }

})





test.skip("Auto suggest  Drop Down Examples", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto("https://www.redbus.in/");

  await page.locator("#src").fill("Delhi")
  //await page.waitForTimeout(4000)
  await page.waitForSelector("//ul/li[contains(@class,'sc-iwsKbI')]//div/text[1]")

  const fromcityoptions = await page.$$("//ul/li[contains(@class,'sc-iwsKbI')]//div/text[1]");
  for (const option of fromcityoptions) {
    const value = await option.textContent();
    console.log(value)
    if (value.includes("Akshardham Metro Station")) {
      await option.click();
      break;
    }

  }
  await page.waitForTimeout(5000)

})




test.skip("Hidden   Drop Down Examples", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  //await page.goto("https://www.redbus.in/");

  await page.goto("https://opensource-demo.orangehrmlive.com/web/index.php/auth/login")
  await page.locator("//input[@placeholder='Username']").fill("Admin");
  await page.locator("//input[@placeholder='Password']").fill("admin123");
  const login_btn = await page.locator("//button[normalize-space()='Login']");
  await login_btn.click();
  await page.locator("//span[normalize-space()='PIM']").click();
  await page.locator("//div[6]//div[1]//div[2]//div[1]//div[1]//div[2]//i[1]").click();
  await page.waitForTimeout(5000)
  const listbox = await page.$$("//div[@role='listbox']//span")

  for (let option of listbox) {
    const value = await option.textContent();
    if (value.includes('QA Engineer')) {
      await option.click();
      break;
      await page.waitForTimeout(5000);

    }
  }

  await page.waitForTimeout(5000);


})


test.skip("CSS   Examples", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  //await page.goto("https://www.redbus.in/");
  await page.goto("https://demo.nopcommerce.com/")


  await page.waitForTimeout(5000);


})



test.skip("Date Picker", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  //await page.goto("https://www.redbus.in/");
  await page.goto("https://testautomationpractice.blogspot.com/")

  //await page.locator("#datepicker").fill("05/09/2025")


  const year = "2024"
  const month = "March"
  const date = "20"
  await page.locator("#datepicker").scrollIntoViewIfNeeded()
  await page.locator("#datepicker").click();
  await page.waitForTimeout(5000)
  while (true) {
    const currentMonth = await page.locator(".ui-datepicker-month").textContent()
    const currentYear = await page.locator(".ui-datepicker-year").textContent();
    if (currentYear == year && currentMonth == month) {
      break;

    }
    //await page.locator("//*[@title='Next']").click();
    await page.locator("//*[@title='Prev']").click();

  }
  const dates = await page.$$(".ui-state-default")
  // for (const dt of dates) {

  //   if(await dt.textContent()==date)
  //   {
  //     await dt.click();
  //     break
  //   }

  // }


  // this is tild symbol
  await page.locator(`//a[@class='ui-state-default'][text()='${date}']`).click();
  await page.waitForTimeout(5000);


})


test.skip("Web Table Pagenation", async () => {
  const browser = await chromium.launch({ headless: false });
  const context = await browser.newContext();
  const page = await context.newPage();
  //await page.goto("https://www.redbus.in/");
  await page.goto("https://testautomationpractice.blogspot.com/")

  const table = await page.locator("#productTable");
  // total no of tows
  const cloumns = await table.locator("thead tr th");
  console.log("no of columns: " + await cloumns.count())


  const rows = await table.locator("tbody tr")
  console.log("No of rows: " + await rows.count());

  await expect(await cloumns.count()).toBe(4)
  await expect(await rows.count()).toBe(5)


  /*const matchedrow= rows.filter({
   has: page.locator('td'),
   hasText: 'Laptop'
  })
  await matchedrow.locator('input').check();
 
 */

  // select multiple rows
  // await selectProduct(rows,page,'Laptop')
  // await selectProduct(rows,page,'Tablet ')
  // await selectProduct(rows,page,'Smartwatch')



  // print all prodcut details


  /*for(let i=0;i< await rows.count();i++)
  {
    const row=rows.nth(i)
    const tds=row.locator('td')
    for(let j=0;j<await tds.count();j++)
  
    {
  console.log(await tds.nth(j).textContent())
    }
  }
  */


  // pagenation read data all page in the table

  const pages = await page.locator('.pagination li a')
  console.log("No of pages in the table: ", await pages.count())

  for (let p = 0; p < await pages.count(); p++) {
    if (p > 0) {
      await pages.nth(p).click();
    }
    for (let i = 0; i < await rows.count(); i++) {
      const row = rows.nth(i)
      const tds = row.locator('td')
      for (let j = 0; j < await tds.count(); j++) {
        console.log(await tds.nth(j).textContent())
      }
    }
    await page.waitForTimeout(5000)
  }

  //await page.waitForTimeout(5000)
})




async function selectProduct(rows, page, name) {
  const matchedrow = rows.filter({
    has: page.locator('td'),
    hasText: name
  })
  await matchedrow.locator('input').check();
}


test.skip("pagenation", async ({ page }) => {

  await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
  let pagecount = 1


  let hasnext = true
  while (hasnext) {
    const items = await page.locator(".rdt_Table  div#cell-2-undefined").allTextContents();
    console.log(`page ${pagecount} items : `, items)
    pagecount++
    const nextbtn = page.locator("")
  }
})



test.skip("Screenshots", async ({ page }) => {

  await page.goto("https://demo.opencart.com.gr/");

  // await page.screenshot({path :'tests/Screenshots/'+Date.now()+'Homepage.png'})
  // await page.waitForTimeout(5000)


  // await page.screenshot({path :'tests/Screenshots/'+Date.now()+'Fullpage.png',fullPage:true})
  await page.waitForTimeout(5000)


  // await page.locator("//img[@title='iPhone']").screenshot({path :'tests/Screenshots/'+Date.now()+'Fullpage.png'})
  // await page.waitForTimeout(5000)
})



test.skip("Mouse hover", async ({ page }) => {

  await page.goto("https://demo.opencart.com.gr/");

  // await page.screenshot({path :'tests/Screenshots/'+Date.now()+'Homepage.png'})
  // await page.waitForTimeout(5000)


  // await page.screenshot({path :'tests/Screenshots/'+Date.now()+'Fullpage.png',fullPage:true})
  await page.waitForTimeout(5000)


  // await page.locator("//img[@title='iPhone']").screenshot({path :'tests/Screenshots/'+Date.now()+'Fullpage.png'})
  // await page.waitForTimeout(5000)


  const desktop = await page.locator("//a[normalize-space()='Desktops']");
  const mac = await page.locator("//a[normalize-space()='Mac (1)']")
  await desktop.hover()
  await page.waitForTimeout(5000)
  await mac.click();
})





test.skip("Right click", async ({ page }) => {

  await page.goto("https://demoqa.com/buttons");

  const btn = await page.locator("//button[@id='rightClickBtn']")
  await btn.click({ button: 'right' });

  await page.waitForTimeout(5000)


  const text = await page.locator("//p[@id='rightClickMessage']").textContent();
  console.log("text is :", text)
  await page.waitForTimeout(5000)


})




test.skip("Double click", async ({ page }) => {

  await page.goto("https://demoqa.com/buttons");

  const btn = await page.locator("//button[@id='doubleClickBtn']")
  await btn.dblclick()

  await page.waitForTimeout(5000)


  const text = await page.locator("//p[@id='doubleClickMessage']").textContent();
  console.log("text is :", text)
  await page.waitForTimeout(5000)


})


test.skip("view port", async ({ page }) => {

  await page.goto("https://demoqa.com/buttons");

  //await page.locator("//button[@id='doubleClickBtn']")
  console.log(await page.viewportSize().width)
  console.log(await page.viewportSize().height)
  await page.waitForTimeout(5000)


})


test.skip("popups", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(5000)
  page.on("dialog", async dialog => {
    expect(dialog.type()).toContain('alert')
    expect(dialog.message()).toContain("I am an alert box!")
    await dialog.accept()
    //await dialog.dismiss()
    console.log(dialog.message())
  })
  await page.locator("//*[text()='Simple Alert']").click();
  await page.waitForTimeout(5000)



})


test.skip("Conformation witk ok and cancel", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(5000)

  page.on("dialog", async dialog => {

    expect(dialog.type()).toContain('confirm')
    expect(dialog.message()).toContain("Press a button!")
    console.log(dialog.message())
    await dialog.accept();


  })
  await page.locator("//*[text()='Confirmation Alert']").click();
  await page.waitForTimeout(5000)
  await expect(await page.locator("//p[text()='You pressed OK!']")).toHaveText("You pressed OK!")
})


test.skip("Prompt dialog", async ({ page }) => {

  await page.goto("https://testautomationpractice.blogspot.com/");
  await page.waitForTimeout(5000)

  page.on("dialog", async dialog => {

    expect(dialog.type()).toContain('prompt')
    expect(dialog.message()).toContain("Please enter your name:")
    expect(dialog.defaultValue()).toContain("Harry Potter")
    console.log(dialog.message())
    console.log(dialog.defaultValue())

    await dialog.accept("venkat");



  })
  await page.locator("//*[text()='Prompt Alert']").click();
  await page.waitForTimeout(5000)
  await expect(page.locator("//p[@id='demo']")).toHaveText("Hello venkat! How are you today?")
  //await page.close({ runBeforeUnload: true });
  //await page.close({runBeforeUnload})
})





test.skip("Frames", async ({ page }) => {

  await page.goto("https://ui.vision/demo/webtest/frames/");
  await page.waitForTimeout(5000)
  const totalframes = await page.frames();
  console.log("total frames:" + totalframes.length)


  // const frame1=await page.frame({url:'https://ui.vision/demo/webtest/frames/frame_1.html'});
  // //await page.locator("//*[@name='mytext1']").fill("venkat")
  // //await frame1.fill("//*[@name='mytext1']","hello")
  // await frame1.locator("//*[@name='mytext1']").fill("venkat")
  // await page.waitForTimeout(5000)


  // framelocator


  const frame1 = await page.frameLocator("//frame[@src='frame_1.html']")
  //await page.locator("//*[@name='mytext1']").fill("venkat")
  //frame1.locator("//*[@name='mytext1']").fill("venkat")

  await page.waitForTimeout(5000)

  //await page.pause(5000)

})





test("Home Page", async () => {


const products=await page.$$("//a[@class='hrefch']")
expect(products).toHaveLength(9)

  // await page.locator("//a[text()='Samsung galaxy s6']").click();
  // await page.waitForTimeout(5000)


  //await page.locator("//a[text()='Log out']").click()
  // await page.locator("//a[text()='Add to cart']").click()
  // await page.waitForTimeout(5000)
  // page.on("dialog",async dialog=>{


  //   expect(dialog.message()).toContain("Product added.")
  //   await dialog.accept();

  //   await page.locator("//a[text()='Log out']").click()

})




test("Add Products to cart", async () => {

  // await page.goto("https://demoblaze.com/index.html");
  // await page.waitForTimeout(5000)

  // await page.locator("//a[text()='Log in']").click()

  // await page.locator("//input[@id='loginusername']").fill("pavanol")
  // await page.locator("//input[@id='loginpassword']").fill("test@123")
  // await page.locator("//button[@onclick='logIn()']").click()
  // await page.waitForTimeout(5000)
  await page.locator("//a[text()='Samsung galaxy s6']").click();
  //await page.waitForTimeout(5000)
  await page.locator("//a[text()='Add to cart']").click()
  await page.waitForTimeout(5000)
  //await page.locator("//a[text()='Log out']").click()
  // await page.locator("//a[text()='Add to cart']").click()
  // await page.waitForTimeout(5000)
  page.on("dialog",async dialog=>{


    expect(dialog.message()).toContain("Product added.")
    await dialog.accept();

  //   await page.locator("//a[text()='Log out']").click()


  })

})
