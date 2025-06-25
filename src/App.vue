<template>
  <header>
    <div class="header-content">
      <!-- Left side: Away's Blog -->
      <h1 class="left">Away's Blog</h1>
      <div class="right">
        <RouterLink to="/" class="button is-transparent is-light is-outlined">Home</RouterLink>
        <RouterLink to="/about" class="button is-transparent is-light is-outlined">About</RouterLink>
      </div>
    </div>
  </header>

  <main class="section">
    <dev class="container mx-auto py-8 px-4">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </dev>
  </main>

  <footer class="is-center">
    Copyright &copy; 2025 Away's Blog
  </footer>
</template>

<script setup>

</script>

<style>
/* 确保导航项水平排列 */
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

/* 导航按钮容器 */
.navbar-end {
  display: flex;
  justify-content: flex-end;
  /* 将导航按钮向右对齐 */
}

p {
  text-indent: 2em;
  /* 将段落首行缩进 2 个字符宽度 */
}

header {
  position: fixed;
  top: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
}

.left {
  color: #fff;
  font-size: 24px;
}

.right {
  display: flex;
  gap: 10px;
}
html,
body {
  height: 100%;
  margin: 0;
  padding: 0;
  background-image: url('/background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
footer {
  position: fixed;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 40px;
  padding: 5px 5px;
  margin-top: 10px;
  color: gray;
  text-align: center;
}
</style>
