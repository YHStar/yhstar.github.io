<template>
  <header class="flex">
    <nav class="navbar backpic">
      <div class="navbar-brand ">
        <h1 class="navbar-item is-light is-size-3">Away's Blog</h1>
      </div>
      <!-- 将 Home 和 About 按钮放到同一行 -->
      <div class="navbar-end">
        <div class="navbar-item buttons">
          <RouterLink to="/" class="button is-transparent is-light is-outlined">Home</RouterLink>
          <RouterLink to="/about" class="button is-transparent is-light is-outlined">About</RouterLink>
        </div>
      </div>
    </nav>
  </header>

  <main class="section">
    <dev class="container mx-auto py-8 px-4">
      <!-- 注意 router-view 是动态加载当前路由组件的插槽 -->
      <router-view v-slot="{ Component }">
        <!-- 使用动态组件确保每次切换都会重新渲染 -->
        <component :is="Component" />
      </router-view>
    </dev>
  </main>

  <footer class="flex is-center text-sm text-gray-500 py-6 border-t">
    2025 Away的博客
  </footer>
</template>

<script setup>
// 这里可以引入全局状态或初始化逻辑
</script>

<style>
.backpic {
  height: 300px;
  margin: 0;
  background-image: url('./background.jpg');
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}
</style>
