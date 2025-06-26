<script setup>
import { listPosts } from './listPosts.js';
const posts = listPosts();

</script>

<template>
  <div class="content">
    <ul class="hideDott">
      <li v-for="post in posts" :key="post.title">
        <div>
          <RouterLink :to="`/posts/${post.slug}`">
            {{ post.title }}
          </RouterLink>
          - {{ new Date(post.date).toLocaleDateString() }}
        </div>
      </li>
    </ul>
  </div>
</template>
<style scoped>
.hideDott {
  list-style: decimal;
}

ul {
  font-size: 24px;
  text-align: center;
}

/* 正文区域 */
.content {
  padding: 20px;
  overflow-y: auto;
  height: 75vh;
  border-radius: 20px;
  background-color: rgba(45, 45, 45, 0.8);
}
</style>