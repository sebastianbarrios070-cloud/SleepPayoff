import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

await page.goto('http://localhost:3000/paywall?plan=anual&deuda=4.2&desconexion=22%3A00&puntos=70', {
  waitUntil: 'networkidle',
});
await page.waitForTimeout(900);
await page.screenshot({ path: '../../docs/revisiones/paywall-375.png' });

await page.getByText('Mensual').click();
await page.waitForTimeout(400);
await page.screenshot({ path: '../../docs/revisiones/paywall-mensual-375.png' });

await browser.close();
console.log('done');
