import { ref, onMounted } from 'vue';
import markdownIt from 'markdown-it';

export function readPost(slug) {
  const postContent = ref('');
  const title = ref('');
  const dateMd = ref('');
  const md = markdownIt();

  onMounted(async () => {
    const file = await fetch(`/posts/${slug}.md`);
    const text = await file.text();

    // 提取 frontmatter 行（格式：key: value）
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

    // 剩余部分为正文
    const body = lines.slice(contentStart).join('\n');
    const content = md.render(body);

    title.value = metadata.title || 'NoTitle';
    dateMd.value = new Date(metadata.date).toLocaleDateString() || 'NoDate';
    postContent.value = content;
  });

  return { postContent, title, dateMd};
}
