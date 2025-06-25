import {test,expect,page} from '@playwright/test'


test("hi",async ({page})  => 
{

    await page.goto("https://demoblaze.com/")
})