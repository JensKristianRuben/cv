const fs = require('fs');
const content = fs.readFileSync('../static/assets/testSvg1.svg', 'utf8');
const match = content.match(/d="([^"]+)"/g);
if (match && match[1]) {
    // The second path in testSvg1.svg is the text
    const d = match[1].substring(3, match[1].length - 1);
    console.log('Found full path length:', d.length);
    
    // Update svgPaths.ts
    let tsContent = fs.readFileSync('../src/lib/svgPaths.ts', 'utf8');
    // Find the code key and replace its value
    const updatedTs = tsContent.replace(/"code": "[^"]+"/, `"code": "${d}"`);
    fs.writeFileSync('../src/lib/svgPaths.ts', updatedTs);
    console.log('Updated src/lib/svgPaths.ts');
} else {
    console.log('Not found in testSvg1.svg');
}
