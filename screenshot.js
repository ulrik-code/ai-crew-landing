const puppeteer = require('puppeteer');
(async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  await page.setViewport({width: 1200, height: 900});
  await page.goto('http://localhost:4173', {waitUntil: 'networkidle0'});
  await page.screenshot({path: '../deliverables/landing-preview.png', fullPage: true});
  await browser.close();
  console.log('Screenshot saved to deliverables/landing-preview.png');
})();
