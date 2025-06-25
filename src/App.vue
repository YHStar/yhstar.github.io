<template>
  <div>
    <header>
      <ul>
        <h1>Away的博客</h1>
        <div>
          <li class="list-none">
            <RouterLink to="/">Home</RouterLink>
          </li>
          <li class="list-none">
            <RouterLink to="/about">About</RouterLink>
          </li>
        </div>
      </ul>
    </header>

    <main class="container mx-auto py-8 px-4">
      <!-- 注意 router-view 是动态加载当前路由组件的插槽 -->
      <router-view v-slot="{ Component }">
        <!-- 使用动态组件确保每次切换都会重新渲染 -->
        <component :is="Component" />
      </router-view>
    </main>

    <footer class="text-center text-sm text-gray-500 py-6 border-t">
      2025 Away的博客
    </footer>
  </div>
</template>

<script setup>
// 这里可以引入全局状态或初始化逻辑
</script>

<style>
/* 可选的全局样式 */
</style>
