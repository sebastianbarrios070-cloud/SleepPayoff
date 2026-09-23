import sharp from 'sharp';
import { mkdirSync } from 'node:fs';

const src = 'C:/Users/monic/Downloads/WhatsApp Image 2026-09-22 at 5.28.52 PM.jpeg';
const outDir = 'public/brand';
mkdirSync(outDir, { recursive: true });

// The source is black line-art on a white background. We want a white silhouette
// with alpha transparency, so it can sit as a white mark on the orange chip.
const { data, info } = await sharp(src)
  .resize(512, 512, { fit: 'contain', background: '#ffffff' })
  .ensureAlpha()
  .raw()
  .toBuffer({ resolveWithObject: true });

const { width, height, channels } = info;
const out = Buffer.alloc(width * height * 4);
for (let i = 0; i < width * height; i++) {
  const r = data[i * channels];
  const g = data[i * channels + 1];
  const b = data[i * channels + 2];
  const luminance = (r + g + b) / 3;
  // black (0) -> fully opaque white mark; white (255) -> fully transparent
  const alpha = 255 - luminance;
  out[i * 4] = 255;
  out[i * 4 + 1] = 255;
  out[i * 4 + 2] = 255;
  out[i * 4 + 3] = alpha;
}

await sharp(out, { raw: { width, height, channels: 4 } })
  .png()
  .toFile(`${outDir}/logo-mark-white.png`);

console.log('done', width, height);
