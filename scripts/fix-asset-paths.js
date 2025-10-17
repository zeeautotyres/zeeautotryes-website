const fs = require('fs');
const path = require('path');

const basePath = '/zeeautotryes-website';

function fixAssetPaths(dir) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      fixAssetPaths(filePath);
    } else if (file.endsWith('.html') || file.endsWith('.css') || file.endsWith('.js')) {
      console.log(`Processing: ${filePath}`);
      
      let content = fs.readFileSync(filePath, 'utf8');
      
      // Fix various asset path patterns
      const patterns = [
        { from: 'src="/assets/', to: `src="${basePath}/assets/` },
        { from: 'href="/assets/', to: `href="${basePath}/assets/` },
        { from: 'data-src="/assets/', to: `data-src="${basePath}/assets/` },
        { from: 'data-background="/assets/', to: `data-background="${basePath}/assets/` },
        { from: 'url("/assets/', to: `url("${basePath}/assets/` },
        { from: 'url(/assets/', to: `url(${basePath}/assets/` },
        { from: '"/assets/', to: `"${basePath}/assets/` },
        { from: "'/assets/", to: `'${basePath}/assets/` },
        { from: '(/assets/', to: `(${basePath}/assets/` },
        { from: '=/assets/', to: `=${basePath}/assets/` },
        // Additional patterns for more comprehensive coverage
        { from: 'src=\\"/assets/', to: `src=\\"${basePath}/assets/` },
        { from: 'href=\\"/assets/', to: `href=\\"${basePath}/assets/` },
        { from: 'data-src=\\"/assets/', to: `data-src=\\"${basePath}/assets/` },
        { from: 'data-background=\\"/assets/', to: `data-background=\\"${basePath}/assets/` },
        { from: 'url(\\"/assets/', to: `url(\\"${basePath}/assets/` },
        { from: 'url(\\"/assets/', to: `url(\\"${basePath}/assets/` },
        // Handle template literals and dynamic paths
        { from: '`/assets/', to: `\`${basePath}/assets/` },
        { from: '`/assets/', to: `\`${basePath}/assets/` },
        // Handle CSS background-image and other properties
        { from: 'background-image: url("/assets/', to: `background-image: url("${basePath}/assets/` },
        { from: 'background: url("/assets/', to: `background: url("${basePath}/assets/` },
        { from: 'background-image: url(/assets/', to: `background-image: url(${basePath}/assets/` },
        { from: 'background: url(/assets/', to: `background: url(${basePath}/assets/` }
      ];
      
      patterns.forEach(pattern => {
        content = content.replace(new RegExp(pattern.from.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'), 'g'), pattern.to);
      });
      
      // Final catch-all for any remaining /assets/ references
      content = content.replace(/\/assets\//g, `${basePath}/assets/`);
      
      fs.writeFileSync(filePath, content);
    }
  });
}

// Start fixing from the out directory
const outDir = path.join(__dirname, '..', 'out');
if (fs.existsSync(outDir)) {
  console.log('Fixing asset paths in:', outDir);
  fixAssetPaths(outDir);
  console.log('Asset paths fixed successfully!');
} else {
  console.log('Out directory not found:', outDir);
}
