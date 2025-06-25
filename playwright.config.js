// @ts-check
import { chromium, defineConfig, devices } from '@playwright/test';
import { json } from 'stream/consumers';
// import dotenv from "dotenv";

// import path, { dirname } from "path";

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
import dotenv from 'dotenv';
import path from 'path';
 dotenv.config({ path: path.resolve(__dirname, '.env') });

//require('dotenv').config();
/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',
  //testMatch: ['**.spec.js'],
  
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,

  //retries: 2,
  /* Opt out of parallel tests on CI. */
  //workers: process.env.CI ? 1 : undefined,
  workers:1,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  // reporter: [
  //   ['html',{
  //     open: "never"
  //   }]
  // ],


 
  //reporter: "allure-playwright",

  // reporter: [
   
  //   ['line'],
  //    ['allure-playwright']
  //   ],

  // reporter:  [
  //   ['allure-playwright', {outputFolder: 'my-allure-results'}]
  // ],
  
  
  
  
  // reporter: [
    
  //   ['json', {  outputFile: 'test-results.json' }]

  
  // ],




  

 
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    //baseURL: process.env.bas
//viewport:null,
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'on',
    video: 'on',
    screenshot: 'on',
    headless: false,
    //viewport:null,
     //browserName: "chromium",
    
    //  launchOptions:{
    //   args: ["--start-maximized"]
    //  }


    // //channel: 'chrome',
    //screenshot: 'on',
    //viewport:{width:1920,height:1080}
  },


  //grep:[new RegExp("@smoke")],

  //grep: [new RegExp("@smoke")],

  /* Configure projects for major browsers */

  //testMatch :["input.spec.js"],

  projects: [
    {
      name: 'chromium',
      
      use: { ...devices['Desktop Chrome'] },
    },





    // {
    //   name: 'firefox',
    //   use: { ...devices['Desktop Firefox'] },
    // },

    // {
    //   name: 'webkit',
    //   use: { ...devices['Desktop Safari'] },
    // },



    

    /* Test against mobile viewports. */
    // {
    //   name: 'Mobile Chrome',
    //   use: { ...devices['Pixel 5'] },
    // },
    // {
    //   name: 'Mobile Safari',
    //   use: { ...devices['iPhone 12'] },
    // },

    /* Test against branded browsers. */
    // {
    //   name: 'Microsoft Edge',
    //   use: { ...devices['Desktop Edge'], channel: 'msedge' },
    // },
    // {
    //   name: 'Google Chrome',
    //   use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    // },
  ],

  /* Run your local dev server before starting the tests */
  // webServer: {
  //   command: 'npm run start',
  //   url: 'http://127.0.0.1:3000',
  //   reuseExistingServer: !process.env.CI,
  // },
});

