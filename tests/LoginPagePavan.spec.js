import {test,expect,chromium} from '@playwright/test';
import { LoginPagePavan } from '../Pages/LoginPagePavan';
import { log } from 'console';
import { HomePage } from '../Pages/HomePage';


import { CartPage } from '../Pages/CartPage';

test("Test",async()=>{


    const browser= await chromium.launch();
    
    const context=await browser.newContext();
    const page=await context.newPage();

const login=new LoginPagePavan(page)
await login.gotoLoginPage("https://demoblaze.com/index.html")
await login.login("pavanol","test@123")
await page.waitForTimeout(4000)

const homepage=new HomePage(page);
await homepage.addProductTocart("Samsung galaxy s6");
await homepage.gotoCart();

await page.waitForTimeout(4000)

const cart=new CartPage(page)
const status=await cart.checkProductInCart("Samsung galaxy s6");
await page.waitForTimeout(4000)
await expect(status).toBe(true)
await page.waitForTimeout(4000)




})