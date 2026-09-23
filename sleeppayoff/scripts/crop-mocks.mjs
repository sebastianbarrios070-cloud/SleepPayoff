import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';

mkdirSync('public/mocks', { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 1300, height: 1600 } });
await page.goto(
  'file:///C:/Users/monic/OneDrive/Escritorio/CLAUDE PROYECTOS/ISONNEIRA/vista-previa-app.html',
  { waitUntil: 'networkidle' }
);

// Screenshot just the screen CONTENT (statusbar + pantalla), excluding the black
// device bezel and home-indicator — AppPorDentro already draws its own bezel, so
// including ours too would nest two phone frames.
const labels = ['hoy', 'onboarding', 'paywall', 'plan'];
const telefonos = await page.locator('.telefono').all();
for (let i = 0; i < telefonos.length; i++) {
  const box = await telefonos[i].evaluate((tel) => {
    const statusbar = tel.querySelector('.statusbar');
    const pantalla = tel.querySelector('.pantalla');
    const a = statusbar.getBoundingClientRect();
    const b = pantalla.getBoundingClientRect();
    const x = Math.min(a.left, b.left);
    const y = a.top;
    const right = Math.max(a.right, b.right);
    const bottom = b.bottom;
    return { x, y, width: right - x, height: bottom - y };
  });
  await page.screenshot({ path: `public/mocks/${labels[i]}.png`, clip: box });
}

await browser.close();
console.log('done', telefonos.length);
