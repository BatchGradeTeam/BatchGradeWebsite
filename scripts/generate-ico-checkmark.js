const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const src = path.join(publicDir, 'checkmark.svg');

const sizes = [16, 32, 48];

async function generate() {
  try {
    await Promise.all(
      sizes.map((s) =>
        sharp(src).resize(s, s, { fit: 'contain' }).png().toFile(path.join(publicDir, `checkmark-${s}x${s}.png`))
      )
    );

    const pngBuffers = sizes.map((s) => fs.readFileSync(path.join(publicDir, `checkmark-${s}x${s}.png`)));
    const icoBuffer = await toIco(pngBuffers);
    fs.writeFileSync(path.join(publicDir, 'checkmark.ico'), icoBuffer);

    console.log('Generated checkmark PNGs and checkmark.ico in public/');
  } catch (err) {
    console.error('Error generating checkmark icons:', err);
    process.exit(1);
  }
}

generate();
