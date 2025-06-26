<script setup>
import { listPosts } from './listPosts.js';
const posts = listPosts();

</script>

<template>
  <ul class="space-y-4">
    <li v-for="post in posts" :key="post.title" class="border-b pb-2">
      <div class="text-sm text-gray-500 nowrap">
        <RouterLink :to="`/posts/${post.slug}`" class="text-blue-600 hover:underline text-lg font-semibold">
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