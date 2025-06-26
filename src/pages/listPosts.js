import { ref, onMounted } from 'vue';

export function listPosts() {
  const posts = ref([]);

  onMounted(async () => {
    try {
      const res = await fetch('/posts/index.json');
      const postList = await res.json();

      const loadedPosts = await Promise.all(
        postList.map(async (item) => {
          const res = await fetch(`/posts/${item.slug}.md`);
          const content = await res.text();
          return {
            ...item,
            content,
          };
        })
      );

      posts.value = loadedPosts;
    } catch (err) {
      console.error('Failed to load posts:', err);
    }
  });

  return posts;
}
