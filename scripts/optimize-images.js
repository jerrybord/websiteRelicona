const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const inputDir = './public/projects';
const outputDir = './public/projects';

console.log('🖼️  Optimizing images...\n');

fs.readdirSync(inputDir).forEach(async (file) => {
  if (!file.match(/\.(jpg|jpeg|png)$/i)) return;

  const input = path.join(inputDir, file);
  const stats = fs.statSync(input);
  const outputWebP = path.join(outputDir, file.replace(/\.(jpg|jpeg|png)$/i, '.webp'));
  
  console.log(`Processing: ${file} (${(stats.size / 1024).toFixed(1)} KB)`);

  try {
    // Convert to WebP
    await sharp(input)
      .resize(1920, null, { 
        withoutEnlargement: true,
        fit: 'inside',
      })
      .webp({ 
        quality: 85,
        effort: 6, // higher effort = better compression
      })
      .toFile(outputWebP);

    const webpStats = fs.statSync(outputWebP);
    const savings = ((1 - webpStats.size / stats.size) * 100).toFixed(1);
    
    console.log(`  ✅ Created: ${path.basename(outputWebP)} (${(webpStats.size / 1024).toFixed(1)} KB) - Saved ${savings}%\n`);
  } catch (err) {
    console.error(`  ❌ Error: ${err.message}\n`);
  }
});

console.log('Done! 🎉');
