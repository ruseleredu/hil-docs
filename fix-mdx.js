const fs = require('fs');
const path = require('path');

const dirs = ['./docs', './blog', './src/pages'];

const migrateToMdx = (dir) => {
    if (!fs.existsSync(dir)) return;

    const files = fs.readdirSync(dir);

    files.forEach((file) => {
        const oldPath = path.join(dir, file);
        const stat = fs.statSync(oldPath);

        if (stat.isDirectory()) {
            migrateToMdx(oldPath);
        } else if (oldPath.endsWith('.md') || oldPath.endsWith('.mdx')) {
            let content = fs.readFileSync(oldPath, 'utf8');
            const originalContent = content;

            // 1. Fix HTML comments: to {/* */}
            const newContent = content.replace(/<!--([\s\S]*?)-->/g, '{/*$1*/}');

            // 2. Escape literal curly braces that aren't JSX
            // content = content.replace(/(?<![`\\{])\{([^}`\n]+)\}(?![`}\n])/g, '\\{$1\\}');

            // Write changes back to the file
            fs.writeFileSync(oldPath, content, 'utf8');

            // 3. Rename .md to .mdx
            if (oldPath.endsWith('.md')) {
                const newPath = oldPath.replace(/\.md$/, '.mdx');

                // Ensure we don't overwrite an existing .mdx file accidentally
                if (!fs.existsSync(newPath)) {
                    fs.renameSync(oldPath, newPath);
                    console.log(`\x1b[32m✔ Renamed & Fixed:\x1b[0m ${oldPath} -> ${newPath}`);
                } else {
                    console.log(`\x1b[33m⚠ Skipped rename:\x1b[0m ${newPath} already exists.`);
                }
            } else {
                if (content !== originalContent) {
                    console.log(`\x1b[36m✔ Updated syntax:\x1b[0m ${oldPath}`);
                }
            }
        }
    });
};

console.log('🚀 Starting MDX migration and renaming...');
dirs.forEach(migrateToMdx);
console.log('✨ Migration complete!');
