// scripts/generatePostIndex.js
const fs = require('fs');
const path = require('path');

const postsDir = path.resolve(__dirname, '../public/posts');
const outputPath = path.resolve(postsDir, 'index.json');

function extractFrontmatter(content) {
  const lines = content.split('\n');
  const metadata = {};
  let inFrontmatter = false;

  for (const line of lines) {
    const trimmed = line.trim();
    if (trimmed === '---') {
      if (!inFrontmatter) {
        inFrontmatter = true;
      } else {
        break; // end of frontmatter
      }
      continue;
    }

    if (inFrontmatter) {
      const match = trimmed.match(/^(\w+):\s*(.*)$/);
      if (match) {
        metadata[match[1]] = match[2];
      }
    }
  }

  return metadata;
}

const result = [];

fs.readdirSync(postsDir).forEach((file) => {
  if (file.endsWith('.md')) {
    const fullPath = path.join(postsDir, file);
    const content = fs.readFileSync(fullPath, 'utf-8');
    const meta = extractFrontmatter(content);
    const slug = file.replace(/\.md$/, '');

    result.push({
      slug,
      title: meta.title || slug,
      date: meta.date || '',
    });
  }
});

// 排序：最新日期优先
result.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.writeFileSync(outputPath, JSON.stringify(result, null, 2), 'utf-8');
console.log('✅ posts/index.json generated.');
