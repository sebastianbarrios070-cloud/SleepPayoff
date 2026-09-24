import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

await page.goto('http://localhost:3000/app', { waitUntil: 'networkidle' });
await page.waitForTimeout(1000);
await page.screenshot({ path: '../../docs/revisiones/app-hoy-375.png' });

// probar el registro de 1 tap
await page.getByRole('button', { name: '7.0h' }).click();
await page.getByRole('button', { name: 'Registrar' }).click();
await page.waitForTimeout(500);
await page.screenshot({ path: '../../docs/revisiones/app-hoy-registrado-375.png' });

// probar editar
await page.getByRole('button', { name: 'Editar' }).click();
await page.waitForTimeout(400);
await page.screenshot({ path: '../../docs/revisiones/app-hoy-editando-375.png' });

await page.goto('http://localhost:3000/app/historial', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.screenshot({ path: '../../docs/revisiones/app-historial-375.png' });

await page.goto('http://localhost:3000/app/semana', { waitUntil: 'networkidle' });
await page.waitForTimeout(900);
await page.screenshot({ path: '../../docs/revisiones/app-semana-375.png' });

await page.goto('http://localhost:3000/app/cuenta', { waitUntil: 'networkidle' });
await page.waitForTimeout(600);
await page.screenshot({ path: '../../docs/revisiones/app-cuenta-375.png' });

await browser.close();
console.log('done');
