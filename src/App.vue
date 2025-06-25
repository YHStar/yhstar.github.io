<template>
  <div class="min-h-screen bg-gray-50 text-gray-800">
    <header class="bg-white shadow p-4">
      <nav class="container mx-auto flex items-center justify-between">
        <h1 class="text-xl font-bold">
          我的博客
        </h1>
        <ul class="flex space-x-4">
          <li><RouterLink to="/" class="hover:underline">主页</RouterLink></li>
          <li><RouterLink to="/posts" class="hover:underline">文章</RouterLink></li>
          <li><RouterLink to="/about" class="hover:underline">关于</RouterLink></li>
        </ul>
      </nav>
    </header>

    <main class="container mx-auto py-8 px-4">
      <!-- 注意 router-view 是动态加载当前路由组件的插槽 -->
      <router-view v-slot="{ Component }">
        <!-- 使用动态组件确保每次切换都会重新渲染 -->
        <component :is="Component" />
      </router-view>
    </main>

    <footer class="text-center text-sm text-gray-500 py-6 border-t">
      &copy; 2025 我的博客. All rights reserved.
    </footer>
  </div>
</template>

<script setup>
// 这里可以引入全局状态或初始化逻辑
</script>

<style>
/* 可选的全局样式 */
</style>
