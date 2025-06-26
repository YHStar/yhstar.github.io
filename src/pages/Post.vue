<template>
  <div class="main-container">
    <div class="content">
      <div v-if="postContent">
        <h2>{{ title }}</h2>
        <h3>{{ dateMd }}</h3>
        <div v-html="postContent"></div>
      </div>
    </div>
    <div class="sidebar">
      <ul>
        <li v-for="(item, index) in outline" :key="index">
          <router-link :to="'#' + item.id">
            {{ item.text }}
          </router-link>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { readPost } from './readPosts.js'; // 导入 usePost
export default {
  props: ['slug'],
  setup(props) {
    const { postContent, title, dateMd, outline } = readPost(props.slug); // 使用 usePost 钩子函数
    return { postContent, title, dateMd, outline };
  }
}
</script>
<style>
h3 {
  font-size: 16px !important;
  text-align: center;
}
</style>
<style scoped>
.main-container {
  display: flex;
  height: 75vh;
  justify-content: space-between;
  padding: 0px;
  gap: 40px;
}

/* 正文区域 */
.content {
  flex: 3;
  padding: 20px;
  overflow-y: auto;
  height: 75vh;
  border-radius: 20px;
  background-color: rgba(45, 45, 45, 1);
  color: rgb(180, 180, 180);
}

/* 空白区域 */
.sidebar {
  flex: 1;
  height: 75vh;
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(45, 45, 45, 0.8);
}
</style>
