<script setup>
import { usePosts } from './usePosts.js';

// 返回的是 ref，需要保持响应性，不能用 `.value` 直接取
const posts = usePosts();
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
