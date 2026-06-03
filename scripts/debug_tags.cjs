const fs = require('fs');
const content = fs.readFileSync('static/assets/devOps.svg', 'utf8');
const pathTags = content.match(/<path[^>]+>/g) || [];

pathTags.forEach((tag, i) => {
    console.log(`Tag ${i}:`, tag.substring(0, 100));
    const dMatch = tag.match(/\sd="([^"]+)"/);
    if (dMatch) {
        console.log(`  d length: ${dMatch[1].length}`);
    } else {
        console.log('  d NOT FOUND');
    }
});
