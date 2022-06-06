require('dotenv').config();
const puppeteer = require('puppeteer');

const HEADLESS_MODE = process.env.HEADLESS_MODE.toLowerCase() === 'true';
const ROUTER_URL = process.env.ROUTER_URL;
const piholeOctets = process.env.PIHOLE_IP.split('.');

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

  await page.click('.scroll-pane > table:nth-child(1) > tbody:nth-child(1) > tr:nth-child(13) > td:nth-child(1) > input:nth-child(1)')

  // first, we need to clear out the values that already exist in the inputs
  await page.evaluate( () => document.querySelector('input[name="DAddr1"]').value = "")
  await page.evaluate( () => document.querySelector('input[name="DAddr2"]').value = "")
  await page.evaluate( () => document.querySelector('input[name="DAddr3"]').value = "")
  await page.evaluate( () => document.querySelector('input[name="DAddr4"]').value = "")

  // this needs to be the IP of the pihole on your local network
  // primary DNS server
  await page.type('input[name="DAddr1"]', piholeOctets[0]);
  await page.type('input[name="DAddr2"]', piholeOctets[1]);
  await page.type('input[name="DAddr3"]', piholeOctets[2]);
  await page.type('input[name="DAddr4"]', piholeOctets[3]);

  // first, we need to clear out the values that already exist in the inputs
  await page.evaluate( () => document.querySelector('input[name="PDAddr1"]').value = "")
  await page.evaluate( () => document.querySelector('input[name="PDAddr2"]').value = "")
  await page.evaluate( () => document.querySelector('input[name="PDAddr3"]').value = "")
  await page.evaluate( () => document.querySelector('input[name="PDAddr4"]').value = "")

  // this needs to be the IP of the pihole on your local network
  // secondary DNS server
  await page.type('input[name="PDAddr1"]', piholeOctets[0]);
  await page.type('input[name="PDAddr2"]', piholeOctets[1]);
  await page.type('input[name="PDAddr3"]', piholeOctets[2]);
  await page.type('input[name="PDAddr4"]', piholeOctets[3]);

  // this is basically going to immediately close, but that's fine
  await page.click('button[name="apply"]')
  await page.waitForNetworkIdle();

  console.log('setting Pihole as the DNS server, please wait about a minute for this to take effect...');

  await browser.close();
})();
