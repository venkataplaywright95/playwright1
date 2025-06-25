import {test,expect,page} from  "@playwright/test"



import dotenv from "dotenv";

import path, { dirname } from "path";

import XLSX  from "xlsx"
import env from "../tests/utility/env"

const url=process.env.BASE_URL 
//dotenv.config({path: path.resolve(__dirname,'..','.env' )})

// dotenv.config({

//     path:`.env`,
//     override: true
// });


test("multiple env",async ({page})=>{

console.log(env.username)
await page.goto(env.BASE_URL)

})



test.only("xlsx",async ({page})=>{

await page.goto("https://letcode.in/file")



})