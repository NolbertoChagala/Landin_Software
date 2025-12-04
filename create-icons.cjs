#!/usr/bin/env node

/**
 * Script para crear iconos PNG básicos para PWA
 * Este script crea iconos simples con gradiente
 */

const fs = require('fs');
const path = require('path');

// Crear directorio public si no existe
const publicDir = path.join(__dirname, 'public');
if (!fs.existsSync(publicDir)) {
  fs.mkdirSync(publicDir, { recursive: true });
}

// SVG template para icon
function createIconSVG(size) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${size}" height="${size}" fill="url(#grad1)" rx="${Math.floor(size * 0.25)}"/>
  <text x="${Math.floor(size / 2)}" y="${Math.floor(size * 0.6)}" font-size="${Math.floor(size * 0.5)}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold">&lt;</text>
  <text x="${Math.floor(size * 0.55)}" y="${Math.floor(size * 0.75)}" font-size="${Math.floor(size * 0.35)}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold">/&gt;</text>
</svg>`;
}

// SVG para maskable icon
function createMaskableIconSVG(size) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${size} ${size}">
  <defs>
    <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#6366f1;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#ec4899;stop-opacity:1" />
    </linearGradient>
  </defs>
  <circle cx="${Math.floor(size / 2)}" cy="${Math.floor(size / 2)}" r="${Math.floor(size / 2)}" fill="url(#grad2)"/>
  <text x="${Math.floor(size / 2)}" y="${Math.floor(size * 0.6)}" font-size="${Math.floor(size * 0.5)}" text-anchor="middle" fill="white" font-family="Arial, sans-serif" font-weight="bold">&lt;</text>
</svg>`;
}

// SVG para screenshot
function createScreenshotSVG(width, height) {
  return `<?xml version="1.0" encoding="UTF-8"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${width} ${height}">
  <defs>
    <linearGradient id="gradBg" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#f8fafc;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#e2e8f0;stop-opacity:1" />
    </linearGradient>
    <linearGradient id="gradHeader" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" style="stop-color:#1e1e2e;stop-opacity:1" />
      <stop offset="100%" style="stop-color:#6366f1;stop-opacity:1" />
    </linearGradient>
  </defs>
  <rect width="${width}" height="${height}" fill="url(#gradBg)"/>
  <rect width="${width}" height="${Math.floor(height * 0.15)}" fill="url(#gradHeader)"/>
  <text x="${Math.floor(width * 0.05)}" y="${Math.floor(height * 0.1)}" font-size="${Math.floor(width * 0.04)}" fill="white" font-family="Arial, sans-serif" font-weight="bold">Historia del Software</text>
  
  <rect x="${Math.floor(width * 0.05)}" y="${Math.floor(height * 0.25)}" width="${Math.floor(width * 0.9)}" height="${Math.floor(height * 0.15)}" fill="white" rx="8" opacity="0.8"/>
  <text x="${Math.floor(width * 0.5)}" y="${Math.floor(height * 0.325)}" font-size="${Math.floor(width * 0.03)}" text-anchor="middle" fill="#6366f1" font-family="Arial, sans-serif" font-weight="bold">La Evolución del Software</text>
  
  <rect x="${Math.floor(width * 0.05)}" y="${Math.floor(height * 0.48)}" width="${Math.floor(width * 0.28)}" height="${Math.floor(height * 0.35)}" fill="white" rx="8" opacity="0.9"/>
  <text x="${Math.floor(width * 0.19)}" y="${Math.floor(height * 0.58)}" font-size="${Math.floor(width * 0.02)}" text-anchor="middle" fill="#1e1e2e" font-family="Arial, sans-serif">Era Mainframe</text>
  
  <rect x="${Math.floor(width * 0.36)}" y="${Math.floor(height * 0.48)}" width="${Math.floor(width * 0.28)}" height="${Math.floor(height * 0.35)}" fill="white" rx="8" opacity="0.9"/>
  <text x="${Math.floor(width * 0.5)}" y="${Math.floor(height * 0.58)}" font-size="${Math.floor(width * 0.02)}" text-anchor="middle" fill="#1e1e2e" font-family="Arial, sans-serif">Era PC</text>
  
  <rect x="${Math.floor(width * 0.67)}" y="${Math.floor(height * 0.48)}" width="${Math.floor(width * 0.28)}" height="${Math.floor(height * 0.35)}" fill="white" rx="8" opacity="0.9"/>
  <text x="${Math.floor(width * 0.81)}" y="${Math.floor(height * 0.58)}" font-size="${Math.floor(width * 0.02)}" text-anchor="middle" fill="#1e1e2e" font-family="Arial, sans-serif">Era Móvil</text>
</svg>`;
}

console.log('🎨 Generando iconos SVG para PWA...\n');

// Generar iconos
const icons = [
  { name: 'icon-192x192.png', size: 192, maskable: false },
  { name: 'icon-512x512.png', size: 512, maskable: false },
  { name: 'icon-192x192-maskable.png', size: 192, maskable: true },
  { name: 'icon-512x512-maskable.png', size: 512, maskable: true },
];

icons.forEach(icon => {
  const svgContent = icon.maskable 
    ? createMaskableIconSVG(icon.size)
    : createIconSVG(icon.size);
  
  const filePath = path.join(publicDir, icon.name.replace('.png', '.svg'));
  fs.writeFileSync(filePath, svgContent);
  console.log(`✅ Creado: ${icon.name.replace('.png', '.svg')}`);
});

// Generar screenshots
const screenshots = [
  { name: 'screenshot-540x720.svg', width: 540, height: 720 },
  { name: 'screenshot-1280x720.svg', width: 1280, height: 720 },
];

screenshots.forEach(screenshot => {
  const svgContent = createScreenshotSVG(screenshot.width, screenshot.height);
  const filePath = path.join(publicDir, screenshot.name);
  fs.writeFileSync(filePath, svgContent);
  console.log(`✅ Creado: ${screenshot.name}`);
});

// Crear favicon.ico como SVG (fallback)
const faviconSVG = createIconSVG(32);
const faviconPath = path.join(publicDir, 'favicon.svg');
fs.writeFileSync(faviconPath, faviconSVG);
console.log('✅ Creado: favicon.svg');

console.log('\n📝 Nota: Los archivos SVG se pueden convertir a PNG usando:');
console.log('   - https://cloudconvert.com/ (online)');
console.log('   - ImageMagick: convert icon-192x192.svg icon-192x192.png');
console.log('   - GIMP o Inkscape (herramientas desktop)');
console.log('\nPara una experiencia PWA completa, convierte estos SVG a PNG.');
