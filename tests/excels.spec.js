
import { test, expect } from "@playwright/test"




test("Excel operations", async ({ page },testInfo) => {


        const org_path="origional.xlsx"


        const origionaldata=readExcel(org_path);


    await page.goto("https://letcode.in/file")


    const [download]= await Promise.all([

         page.waitForEvent('download'),

        await page.locator("(//a[normalize-space()='Download Excel'])[1]").click()
        
    ]);
const path= download.suggestedFilename();
await download.saveAs(path)

await testInfo.attach('downloaded',{path:path})

   const fromdownloadedfile=readExcel(path)

   await  expect(origionaldata).toStrictEqual(fromdownloadedfile)
    await page.waitForTimeout(4000)
})



async function readExcel(String) {
    const workBook=XLSX.readFile(String)

    workBook.Sheets(workBook.SheetNames[0])  
    
}