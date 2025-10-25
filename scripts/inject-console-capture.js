const fs = require('fs');
const path = require('path');
const { glob } = require('glob');

const CONSOLE_SCRIPT = `<script src="/dashboard-console-capture.js"></script>`;

async function injectScript() {
  try {
    const htmlFiles = await glob('out/**/*.html', { cwd: process.cwd() });
    
    let injectedCount = 0;
    
    for (const file of htmlFiles) {
      const filePath = path.join(process.cwd(), file);
      let content = fs.readFileSync(filePath, 'utf8');
      
      if (!content.includes('dashboard-console-capture.js')) {
        content = content.replace('</head>', `${CONSOLE_SCRIPT}</head>`);
        fs.writeFileSync(filePath, content, 'utf8');
        injectedCount++;
      }
    }
    
    console.log(`✓ Console capture script injected into ${injectedCount} HTML files`);
  } catch (error) {
    console.error('Error injecting console capture script:', error);
    process.exit(1);
  }
}

injectScript();