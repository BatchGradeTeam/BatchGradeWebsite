const sharp = require('sharp');
const toIco = require('to-ico');
const fs = require('fs');
const path = require('path');

const publicDir = path.join(__dirname, '..', 'public');
const src = path.join(publicDir, 'circle-check-big.svg');

// Sizes commonly included in ICO files
const sizes = [16, 32, 48, 64, 128, 256];

async function generate() {
  try {
    // Render PNGs
    await Promise.all(
      sizes.map((s) =>
        sharp(src, { density: 300 })
          .resize(s, s, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
          .png()
          .toFile(path.join(publicDir, `circle-check-${s}x${s}.png`))
      )
    );

    // Read buffers and build ICO
    const pngBuffers = sizes.map((s) => fs.readFileSync(path.join(publicDir, `circle-check-${s}x${s}.png`)));
    const icoBuffer = await toIco(pngBuffers);
    fs.writeFileSync(path.join(publicDir, 'circle-check-big.ico'), icoBuffer);

    console.log('Generated circle-check-big.ico and PNGs in public/');
  } catch (err) {
    console.error('Error generating circle-check-big.ico:', err);
    process.exit(1);
  }
}

generate();
