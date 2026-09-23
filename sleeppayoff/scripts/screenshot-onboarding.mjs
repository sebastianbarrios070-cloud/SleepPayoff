import { chromium } from 'playwright';

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 375, height: 812 } });

await page.goto('http://localhost:3000/onboarding', { waitUntil: 'networkidle' });
await page.waitForTimeout(500);
await page.screenshot({ path: '../docs/revisiones/onboarding-375.png' });

await page.getByText('Eliminar la neblina mental en el trabajo').click(); // meta
await page.waitForTimeout(500);
await page.getByText('A media tarde (2-4 PM)').click(); // neblina
await page.waitForTimeout(500);
await page.getByRole('button', { name: 'Continuar' }).click(); // reconocimiento1
await page.waitForTimeout(500);
await page.getByText('Nada todavía').click(); // probado
await page.waitForTimeout(500);
await page.getByText('Entre 6:30 y 7:30').click(); // despertar
await page.waitForTimeout(500);
await page.getByText('1 a 2 tazas').click(); // cafe
await page.waitForTimeout(900);
await page.screenshot({ path: '../docs/revisiones/onboarding-horas-375.png' });

await page.getByRole('button', { name: 'Continuar' }).click(); // horas' own button
await page.waitForTimeout(500);
await page.getByRole('button', { name: 'Fijar mi hora' }).click();
await page.waitForTimeout(500);
await page.getByRole('button', { name: 'Continuar' }).click(); // reconocimiento2 -> cargando
await page.waitForTimeout(4500);
await page.screenshot({ path: '../docs/revisiones/onboarding-resultado-375.png' });

await browser.close();
console.log('done');
