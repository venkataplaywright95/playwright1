//import { test, expect } from "@playwright/test"

const { test, expect } = require("@playwright/test")




test.beforeAll(async()=>{
    console.log("this is before all Hooks")
})



test.afterAll(async()=>{
    console.log("this is after all Hooks")
})


test.beforeEach(async()=>{
    console.log("this is before Each Hooks")
})

test.afterEach(async()=>{
    console.log("this is after each  Hooks")
})



test.describe.skip("Group1", ()=>{
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

