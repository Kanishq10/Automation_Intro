//library by google
//use chromium as default browser
const puppeteer = require("puppeteer");
let page;
console.log("Before");
const browserOpenPromise = puppeteer.launch({ headless: false, slowMo: true ,defaultViewport:null}); //it will open headless browser if not given false
//this is called chaining ,then is associated with returned promise
browserOpenPromise
  .then(function (browser) {
    const pageArrpromise = browser.pages(); //array of browser tabs
    return pageArrpromise;
  })
  .then(function (browserpages) {
    //this function attached to the returned pageArrpromise from previous pageArrpromise
    page = browserpages[0]; //first tab
    let gotopromise = page.goto("https://www.google.co.in/"); //promise to go to website
    return gotopromise;
  })
  .then(function () {
    let elementwaitPromise = page.waitForSelector("input[type='text']"); //it wait for element to appear on page
    return elementwaitPromise;
  })
  .then(function () {
    console.log("Reached google home page");
    // let keywillsendPromise = page.keyboard.type(
    //   "input[type='text']",
    //   "pepcoding"
    // ); //simply type with keyboard
    let keywillsendPromise = page.type("input[type='text']", "pepcoding"); //type on given element
    return keywillsendPromise;
  })
  .then(function () {
    let enterwillbePressed = page.keyboard.press("Enter"); //press enter
    return enterwillbePressed;
  })
  .then(function () {
    let elementwaitPromise = page.waitForSelector("h3.LC20lb.MBeuO.DKV0Md", {
      visible: true,
    });
    return elementwaitPromise;
  })
  .then(function () {
    //mouse click function
    let clickwillsendPromise = page.click("h3.LC20lb.MBeuO.DKV0Md");
    return clickwillsendPromise;
  })
  .catch(function () {
    console.log(err);
  });
console.log("After");
