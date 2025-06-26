<template>
  <div v-if="postContent">
    <h2>{{ title }}</h2>
    <h3>{{ dateMd }}</h3>
    <div v-html="postContent"></div>
  </div>
</template>

<script>
import { readPost } from './readPosts.js'; // 导入 usePost
export default {
  props: ['slug'],
  setup(props) {
    const { postContent, title, dateMd } = readPost(props.slug); // 使用 usePost 钩子函数
    return { postContent, title, dateMd };
  }
}
</script>
<style>
h3 {
  font-size: 16px !important;
  text-align: center;
}
</style>
