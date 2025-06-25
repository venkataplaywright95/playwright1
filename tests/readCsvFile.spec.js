// import {test,expect} from '@playwright/test'


// import fs from 'fs'

// import { parse } from 'csv-parse/sync'
// import { asyncWrapProviders } from 'async_hooks';

// const records=parse(fs.readFileSync("testdata/readcsvfile.csv"),
// {
//     columns: true,
//     skip_empty_lines: true,
//     //delimiter:";"
// }
// )

// records.forEach(record => {

//     test("Read data from CVV file -"+ record.Id,async({page})=>{


//     await page.goto("https://demoqa.com/automation-practice-form")

//     await page.locator("//input[@id='firstName']").fill(record.Firstname);
//     await page.locator("//input[@id='lastName']").fill(record.LastName)

//     //await page.waitForTimeout(3000)
// })
// });

