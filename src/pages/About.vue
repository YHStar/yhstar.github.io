<template>
  <div class="main-container">
    <div class="content">
      <h2>About</h2>
      <p>
        很早就想做属于自己的博客了，但是小时候没有自己的服务器也没有自己的域名。在大学，我了解到可以通过Github-Pages来免费托管网站，又恰逢JS大作业，于是完成自己从小的一份愿望，编写了这份个人博客。网页是用Vue+Vite从头编写的，主要学习资料来自于ChatGPT，欢迎大家查阅源码，也欢迎大家指点。
      </p>
      <p class='leftAbout'>2025.6.26</p>
    </div>
    <div class="sidebar"></div>
  </div>
</template>

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
  background-color: rgba(45, 45, 45, 0.8);
}

/* 空白区域 */
.sidebar {
  flex: 1;
  height: 75vh;
  padding: 0px;
  border-radius: 20px;
}

.leftAbout {
  text-align: right;
  width: 100%;
}
</style>
<script>
export default {
  name: 'About'
}
</script>