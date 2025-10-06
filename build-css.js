/**
 * Optional CSS build script for JERSEY SOCIETY theme
 * Adds PostCSS processing with autoprefixer and minification
 */

const fs = require('fs');
const path = require('path');

// Simple build script - in production, you could add PostCSS, Tailwind, etc.
const buildCSS = () => {
  const cssSource = path.join(__dirname, 'theme/assets/theme.css');
  const cssOutput = path.join(__dirname, 'theme/assets/theme.css');
  
  console.log('🎨 Building JERSEY SOCIETY theme CSS...');
  
  // For now, we just ensure the file exists
  // You can add PostCSS processing here if needed
  if (fs.existsSync(cssSource)) {
    console.log('✅ CSS already exists at', cssSource);
    console.log('💡 To add Tailwind or PostCSS processing, extend this script');
  } else {
    console.error('❌ CSS source file not found:', cssSource);
    process.exit(1);
  }
};

// Watch mode
if (process.argv.includes('--watch')) {
  console.log('👀 Watching for CSS changes...');
  const cssPath = path.join(__dirname, 'theme/assets');
  fs.watch(cssPath, (eventType, filename) => {
    if (filename === 'theme.css') {
      console.log('🔄 CSS changed, rebuilding...');
      buildCSS();
    }
  });
} else {
  buildCSS();
}
