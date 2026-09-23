import sharp from 'sharp';

const size = 64;
const iconSize = 44;
const accent = '#ff7a45';

const bg = Buffer.from(
  `<svg width="${size}" height="${size}"><rect width="${size}" height="${size}" rx="14" fill="${accent}"/></svg>`
);

const icon = await sharp('public/brand/logo-mark-white.png')
  .resize(iconSize, iconSize)
  .toBuffer();

const offset = Math.round((size - iconSize) / 2);

await sharp(bg)
  .composite([{ input: icon, left: offset, top: offset }])
  .png()
  .toFile('app/favicon.ico');

console.log('done');
