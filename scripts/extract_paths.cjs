const fs = require('fs');
const path = require('path');

const inputPath = path.join(__dirname, '../static/assets/devOps.svg');
const outputPath = path.join(__dirname, '../src/lib/svgPaths.ts');

const content = fs.readFileSync(inputPath, 'utf8');

// List of expected IDs to look for
const expectedIds = [
    'arrow-code', 'code',
    'arrow-build', 'build',
    'arrow-test', 'test',
    'arrow-release', 'release',
    'arrow-deploy', 'deploy',
    'arrow-operate', 'operate',
    'arrow-monitor', 'monitor',
    'arrow-plan-top', 'arrow-plan-bottom', 'plan'
];

const allPaths = {};
const pathTags = content.match(/<path[^>]+>/g) || [];

pathTags.forEach((tag, index) => {
    const idMatch = tag.match(/id=["']([^"']+)["']/);
    const dMatch = tag.match(/d=["']([^"']+)["']/);
    
    let id = idMatch ? idMatch[1] : null;
    let d = dMatch ? dMatch[1] : null;

    // Fallback: If no ID, use the list of expected IDs in order
    if (!id && d && index < expectedIds.length) {
        id = expectedIds[index];
    }

    if (id && d) {
        allPaths[id] = d;
    }
});

console.log('Keys found:', Object.keys(allPaths));
if (allPaths['code']) {
    console.log('Code path length:', allPaths['code'].length);
}

const output = `export const svgPaths: Record<string, string> = ${JSON.stringify(allPaths, null, 2)};`;
fs.writeFileSync(outputPath, output);
console.log('Saved to', outputPath);
