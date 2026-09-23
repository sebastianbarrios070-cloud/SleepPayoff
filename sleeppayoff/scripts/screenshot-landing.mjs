import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 900 } });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle' });

// Trigger every whileInView reveal by scrolling through the whole page first.
const height = await page.evaluate(() => document.body.scrollHeight);
for (let y = 0; y <= height; y += 400) {
  await page.evaluate((y) => window.scrollTo(0, y), y);
  await page.waitForTimeout(120);
}
await page.evaluate(() => window.scrollTo(0, 0));
await page.waitForTimeout(600);

await page.screenshot({ path: '../docs/revisiones/landing-375.png', fullPage: true });
await browser.close();
console.log('done');
