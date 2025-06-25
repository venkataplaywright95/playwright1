//import { test, expect } from "@playwright/test"

const { test, expect } = require("@playwright/test")






test("Test1@sanity",async ({page})=>{

    console.log("This is Test 1")
})
test("Test2@sanity",async ({page})=>{

    console.log("This is Test 2")
})


test("Test3@reg",async ({page})=>{


    //await page.context().clearCookies();
    console.log("This is Test 3")
})
test("Test4@reg",async ({page})=>{


    console.log("This is Test 4")
})

test("Test5@sanity@reg",async ({page})=>{

    console.log("This is Test 5")
})


