import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

await page.goto('http://localhost:3000/onboarding', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
await page.screenshot({ path: '../docs/revisiones/onboarding-375.png' });

await page.getByText('Entre 6:30 y 7:30').click();
await page.waitForTimeout(500);
await page.getByText('A media tarde (2-4 PM)').click();
await page.waitForTimeout(500);
await page.getByRole('button', { name: 'Continuar' }).click();
await page.waitForTimeout(500);
await page.getByText('Nada todavía').click();
await page.waitForTimeout(500);
await page.getByText('Rendir más en el trabajo').click();
await page.waitForTimeout(900);
await page.screenshot({ path: '../docs/revisiones/onboarding-horas-375.png' });

await page.getByRole('button', { name: 'Continuar' }).click();
await page.waitForTimeout(500);
await page.getByRole('button', { name: 'Fijar mi hora' }).click();
await page.waitForTimeout(500);
await page.getByRole('button', { name: 'Continuar' }).click();
await page.waitForTimeout(4500);
await page.screenshot({ path: '../docs/revisiones/onboarding-resultado-375.png' });

await browser.close();
console.log('done');
