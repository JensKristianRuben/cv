const fs = require('fs');
const content = fs.readFileSync('static/assets/devOps.svg', 'utf8');
const match = content.match(/id="code"[^>]+d="([^"]+)"/);
if (match) {
    const d = match[1];
    console.log('Full length:', d.length);
    for (let i = 0; i < d.length; i += 1000) {
        console.log(`Chunk ${i}:`, d.substring(i, i + 1000));
    }
} else {
    console.log('Not found');
}
