const fs = require('fs');
const content = fs.readFileSync('static/assets/devOps.svg', 'utf8');
const match = content.match(/id="code"[^>]+d="([^"]+)"/);
if (match) {
    fs.writeFileSync('code_path.txt', match[1]);
    console.log('Saved code path to code_path.txt, length:', match[1].length);
} else {
    console.log('Code path not found');
}
