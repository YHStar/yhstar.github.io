import { ref, onMounted } from 'vue';
import markdownIt from 'markdown-it';

export function readPost(slug) {
  const postContent = ref('');  // 渲染的 HTML 内容
  const title = ref('');        // 文章标题
  const dateMd = ref('');       // 文章日期
  const outline = ref([]);      // 大纲内容
  const md = markdownIt();     // markdown-it 实例

  onMounted(async () => {
    // 1. 读取 Markdown 文件
    const file = await fetch(`/posts/${slug}.md`);
    const text = await file.text();

    // 2. 提取 frontmatter 部分（如 title, date 等）
    const lines = text.split('\n');
    const metadata = {};
    let contentStart = 0;

    for (let i = 0; i < lines.length; i++) {
      const line = lines[i].trim();
      if (line === '') {
        contentStart = i + 1;
        break;
      }
      const match = line.match(/^(\w+):\s*(.*)$/);
      if (match) {
        metadata[match[1]] = match[2];
      }
    }

    // 3. 获取正文部分
    const body = lines.slice(contentStart).join('\n');

    // 4. 使用 markdown-it 渲染 Markdown 内容为 HTML
    const renderedHtml = md.render(body);

    // 5. 提取标题并为每个标题生成 id 和大纲
    const headings = [];
    const updatedHtml = renderedHtml.replace(/<h([1-6])>(.*?)<\/h\1>/g, (match, level, text) => {
      const id = text.toLowerCase().replace(/\s+/g, '-');
      headings.push({ level: parseInt(level), text, id });
      return `<h${level} id="${id}">${text}</h${level}>`; // 为标题添加 id
    });

    // 6. 更新大纲
    if (headings.length === 0) {
      headings.push({ level: 1, text: 'NoOutline', id: 'nooutline' });
    }
    outline.value = headings;

    // 7. 更新页面的 title 和 date
    title.value = metadata.title || 'NoTitle';
    dateMd.value = new Date(metadata.date).toLocaleDateString() || 'NoDate';

    // 8. 更新渲染的内容
    postContent.value = updatedHtml;
  });

  return { postContent, title, dateMd, outline };
}
