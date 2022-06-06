require('dotenv').config();
const puppeteer = require('puppeteer');

const HEADLESS_MODE = process.env.HEADLESS_MODE.toLowerCase() === 'true';
const ROUTER_URL = process.env.ROUTER_URL;

(async () => {
  const browser = await puppeteer.launch({headless: HEADLESS_MODE});
  const page = await browser.newPage();
  await page.authenticate({
      username: process.env.USER_NAME,
      password: process.env.PASSWORD,
  });
  await page.goto(ROUTER_URL, {
      waitUntil: 'networkidle2',
  });
  await page.waitForNetworkIdle();

  await page.click('.scroll-pane > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(12) > td:nth-child(1) > input:nth-child(1)')

  // this is basically going to immediately close, but that's fine
  await page.click('button[name="apply"]')
  await page.waitForNetworkIdle();

  console.log('setting ISP as DNS server, please wait about a minute for this to take effect...');

  await browser.close();
})();
