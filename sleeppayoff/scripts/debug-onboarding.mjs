import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });
await page.goto('http://localhost:3000/onboarding', { waitUntil: 'networkidle' });
await page.waitForTimeout(400);

await page.getByText('Entre 6:30 y 7:30').click();
await page.waitForTimeout(500);
await page.getByText('A media tarde (2-4 PM)').click();
await page.waitForTimeout(500);
await page.getByRole('button', { name: 'Continuar' }).click();
await page.waitForTimeout(500);
await page.getByText('Nada todavía').click();
await page.waitForTimeout(500);
await page.getByText('Rendir más en el trabajo').click();
await page.waitForTimeout(500);
await page.getByRole('button', { name: 'Continuar' }).click();
await page.waitForTimeout(500);
console.log('after horas continue, url:', page.url());
await page.screenshot({ path: '../docs/revisiones/_debug1.png' });

await page.getByRole('button', { name: 'Fijar mi hora' }).click();
await page.waitForTimeout(500);
console.log('after fijar mi hora');
await page.screenshot({ path: '../docs/revisiones/_debug2.png' });

const bodyText = await page.evaluate(() => document.body.innerText);
console.log('BODY TEXT:', bodyText.slice(0, 300));

await browser.close();
