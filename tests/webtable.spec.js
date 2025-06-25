
import { test, expect } from "@playwright/test"




test.skip("Web table operations", async ({ page }, testInfo) => {



    await page.goto("https://letcode.in/table")

    const table = page.locator("#simpletable");
    const header = table.locator("thead");
    console.log(await header.allTextContents())


    const rows = table.locator("tbody tr");
    console.log("No of rows" + await rows.count());

    const cols = rows.first().locator("td")
    console.log("columns count" + await cols.count())


    // await checkInput(rows, page,"Raj");
    //   await checkInput(rows, page,"Man");
    // await page.waitForTimeout(3000)


    for (let i = 0; i < await rows.count(); i++) {


        const row = rows.nth(i);
        const tds = row.locator("td");
        for (let j = 0; j < await tds.count(); j++) {

            if (await tds.nth(j).textContent() == "Raj") {

                console.log(await tds.nth(2).textContent());
                await tds.last().locator("input").check();

            }
        }
    }


});


async function checkInput(rows, page, name) {
    const namematch = rows.filter({
        has: page.locator("td"),
        hasText: name
    });

    await namematch.locator("input").check();
}


test.skip("Web table cal", async ({ page }, testInfo) => {



    await page.goto("https://letcode.in/table")

    const table = page.locator("#shopping");
    const tbdoy = table.locator("tbody")

    const foot = table.locator("tfoot")

    const rowCount = await tbdoy.locator("tr").count();
    console.log("No of Rows:" + rowCount)


    expect(rowCount).toBe(4)


    let total = 0
    for (let i = 0; i < rowCount; i++) {

        const row = tbdoy.locator("tr").nth(i);
        const price = await row.locator("td").last().textContent();

        console.log("Price:" + price)

        total = total + Number(price)

    }

    const actualCount = await foot.locator("td").last().textContent();

    expect(Number(actualCount)).toBe(total)

    console.log(actualCount, total)
    await page.waitForTimeout(3000)
});


test.skip("Broken Images", async ({ page }, testInfo) => {



    await page.goto("https://the-internet.herokuapp.com/broken_images")

    await page.waitForLoadState("domcontentloaded");
    const images = page.locator("img");
    console.log(await images.count)


    const allImages = await images.all();

    for await (const imge of allImages) {

        const imgsrc = await imge.getAttribute("src");
        expect.soft(imgsrc.length).toBeGreaterThan(1)

        if (imgsrc.length > 1) {
            const res = await page.request.get("https://the-internet.herokuapp.com/broken_images" + imgsrc)

            expect.soft(res.status(), "failed to load:" + imgsrc).toBe(200)
        }
    }

});




test.only("pagenation", async ({ page }) => {


    await page.goto("https://testautomationpractice.blogspot.com/")

    const table = await page.locator("#productTable")

    const columns = await table.locator("thead tr th")

    console.log("Totla no of Clumns:" + await columns.count())




    const rows = await table.locator("tbody tr")



//     for(let i=0;i<await rows.count();i++){
// const row=rows.nth(i)
// const tds=row.locator("td")
//         for(let j=0;j<await tds.count()-1;j++){
// console.log (await tds.nth(j).textContent());

//         }
//     }




// Read data from all pages

const pages=await page.locator("#pagination li a")
console.log("No of pages in a table:"+ await pages.count())



for(let p=0;p<await pages.count();p++){
if(p>0){

    await pages.nth(p).click();
}

    for(let i=0;i<await rows.count();i++){
const row=rows.nth(i)
const tds=row.locator("td")
        for(let j=0;j<await tds.count()-1;j++){
console.log (await tds.nth(j).textContent());

        }
    }

await page.waitForTimeout(3000)
}

await page.waitForTimeout(3000)
});

    //await checkInput(rows, page, 'Laptop');
// const matchedRow = rows.filter({
//         has: page.locator("td"),

//         hasText: "Laptop"
//     });

//     await matchedRow.locator("input").check();

 
// })



// async function checkInput(rows, page, name) {
//     const matchedRow = rows.filter({
//         has: page.locator("td"),

//         hasText: name
//     });

//     await matchedRow.locator("input").check();
// }
