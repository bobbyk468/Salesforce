const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const files = execSync('find src/app -name "page.tsx" | grep "exam-tips"').toString().trim().split('\n');
let updatedCount = 0;
for (const file of files) {
    if (!file) continue;
    const dirName = path.basename(path.dirname(file));
    let content = fs.readFileSync(file, 'utf8');
    
    const regex = /alternates:\s*\{\s*canonical:\s*`\$\{siteUrl\}\/certifications\/[^`]+`\s*\}/;
    if (regex.test(content)) {
        content = content.replace(regex, `alternates: { canonical: \`\${siteUrl}/${dirName}\` }`);
        fs.writeFileSync(file, content, 'utf8');
        updatedCount++;
    } else {
        console.log("No match in", file);
    }
}
console.log(`Updated canonicals in ${updatedCount} files.`);
