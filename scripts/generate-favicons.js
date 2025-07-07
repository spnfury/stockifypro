import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// SVG base para el favicon
const svgContent = `
<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
  <!-- Fondo circular -->
  <circle cx="16" cy="16" r="15" fill="#0F172A" stroke="#1E293B" stroke-width="2"/>
  
  <!-- Letra "S" estilizada -->
  <path d="M12 8C12 8 14 8 16 8C18 8 20 8.5 20 10C20 11.5 18.5 12 16 12C13.5 12 12 12.5 12 14C12 15.5 13.5 16 16 16C18.5 16 20 16.5 20 18C20 19.5 18 20 16 20C14 20 12 19.5 12 18" 
        stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" fill="none"/>
  
  <!-- Punto central -->
  <circle cx="16" cy="16" r="2" fill="white"/>
</svg>
`;

// Tamaños de favicon a generar
const sizes = [16, 32, 180];

async function generateFavicons() {
  console.log('Generando favicons...');
  
  // Generar PNGs en diferentes tamaños
  for (const size of sizes) {
    const outputPath = path.join('public', `favicon-${size}x${size}.png`);
    
    try {
      await sharp(Buffer.from(svgContent))
        .resize(size, size)
        .png()
        .toFile(outputPath);
      
      console.log(`✅ Generado: ${outputPath}`);
    } catch (error) {
      console.error(`❌ Error generando ${outputPath}:`, error);
    }
  }
  
  // Generar apple-touch-icon
  try {
    await sharp(Buffer.from(svgContent))
      .resize(180, 180)
      .png()
      .toFile(path.join('public', 'apple-touch-icon.png'));
    
    console.log('✅ Generado: public/apple-touch-icon.png');
  } catch (error) {
    console.error('❌ Error generando apple-touch-icon:', error);
  }
  
  console.log('🎉 Favicons generados exitosamente!');
}

generateFavicons().catch(console.error); 