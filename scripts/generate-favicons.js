const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const src = path.join(publicDir, 'circle-check-big.svg');

const sizes = [16, 32, 48, 150, 180, 192, 512];

async function generate() {
  try {
    await Promise.all(
      sizes.map((s) =>
        sharp(src).resize(s, s, { fit: 'contain' }).png().toFile(path.join(publicDir, `favicon-${s}x${s}.png`))
      )
    );

    // create favicon.ico from 16/32/48
    const pngBuffers = [
      fs.readFileSync(path.join(publicDir, 'favicon-16x16.png')),
      fs.readFileSync(path.join(publicDir, 'favicon-32x32.png')),
      fs.readFileSync(path.join(publicDir, 'favicon-48x48.png')),
    ];
    const icoBuffer = await toIco(pngBuffers);
    fs.writeFileSync(path.join(publicDir, 'favicon.ico'), icoBuffer);

    console.log('Generated PNG favicons and favicon.ico in public/');
  } catch (err) {
    console.error('Error generating favicons:', err);
    process.exit(1);
  }
}

generate();
