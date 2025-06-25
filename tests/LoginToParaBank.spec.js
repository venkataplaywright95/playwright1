import{test,expect, chromium} from '@playwright/test';
import { log } from 'console';
import { LoginPage } from '../Pages/LoginPage';

test("LoginPage",async ()=>{


const browser= await chromium.launch();

const context=await browser.newContext();
const page=await context.newPage();
//await page.goto("https://parabank.parasoft.com/");
//await page.waitForTimeout(4000)

const login=new LoginPage(page)
//await login.navigateToURL("https://parabank.parasoft.com/")

await login.navigateToURL("https://google.com/")
//await login.navigatoToRegistrationPage();

await page.waitForTimeout(4000)
})