import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

await page.goto('http://localhost:3000/entrar', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
await page.screenshot({ path: '../../docs/revisiones/entrar-375.png' });

await page.getByLabel('Correo electrónico').fill('carlos@ejemplo.com');
await page.getByRole('button', { name: 'Enviarme el código' }).click();
await page.waitForTimeout(1200);
await page.screenshot({ path: '../../docs/revisiones/entrar-codigo-375.png' });

await browser.close();
console.log('done');
