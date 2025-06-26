<script setup>
import { listPosts } from './listPosts.js';
const posts = listPosts();

</script>

<template>
  <ul>
    <li v-for="post in posts" :key="post.title">
      <div>
        <RouterLink :to="`/posts/${post.slug}`">
          {{ post.title }}
        </RouterLink>
        - {{ new Date(post.date).toLocaleDateString() }}
      </div>
    </li>
  </ul>
</template>
<style>
ul {
  font-size: 24px;
  text-align: center;
}
</style>