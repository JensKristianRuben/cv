const fs = require('fs');
const content = fs.readFileSync('static/assets/devOps.svg', 'utf8');
const pathTags = content.match(/<path[^>]+>/g) || [];

pathTags.forEach((tag, i) => {
    const idMatch = tag.match(/id="([^"]+)"/);
    const dMatch = tag.match(/d="([^"]+)"/);
    if (idMatch && dMatch) {
        const id = idMatch[1];
        const d = dMatch[1];
        console.log(`${id}: ${d.length} chars, ends with: ${d.slice(-10)}`);
    }
});
