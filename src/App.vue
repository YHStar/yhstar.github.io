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

  <main class="main-container">
    <div class="sidebar"></div> <!-- 空白区域 -->
    <div class="content">
      <router-view v-slot="{ Component }">
        <component :is="Component" />
      </router-view>
    </div>
  </main>

  <footer class="is-center">
    Copyright &copy; 2025 Away's Blog
  </footer>
</template>

<script setup>

</script>

<style>
.main-container {
  position: fixed;
  //width:94%;
  display: flex;
  justify-content: space-between;
  gap: 40px;
}

/* 空白区域 */
.sidebar {
  flex: 1;
  height: 80vh;
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(45, 45, 45, 0.8);
}

/* 正文区域 */
.content {
  flex: 3;
  padding: 20px;
  overflow-y: auto;
  height: 80vh;
  border-radius: 20px;
  margin-bottom: 0px !important;
  background-color: rgba(45, 45, 45, 0.8);
}

@media (max-width: 1000px) {
  .main-container {
    flex-direction: column-reverse;
    /* 在小屏设备上将三列变成纵向布局 */
    gap: 10px;
  }
}

/* 自定义滚动条的整体样式 */
.content::-webkit-scrollbar {
  width: 12px;  /* 设置垂直滚动条的宽度 */
  height: 12px; /* 设置水平滚动条的高度 */
}

/* 滚动条轨道（背景部分） */
.content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);  /* 轨道的背景色 */
  border-radius: 50px;  /* 轨道的圆角 */
}

/* 滚动条滑块（可拖动的部分） */
.content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);  /* 滑块的颜色 */
  border-radius: 20px;  /* 滑块的圆角 */
  border: 3px solid rgba(0, 0, 0, 0.1);  /* 滑块周围的边框 */
}

/* 滚动条按钮（可选，显示上下箭头） */
.content::-webkit-scrollbar-button {
  display: none;  /* 隐藏滚动条的上下箭头按钮 */
}

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

h2 {
  font-size: 40px !important;
  text-align: center;
}

p {
  text-indent: 2em;
  font-size: 20px;
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
  font-size: 28px;
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
  background-attachment: fixed;
}

main {
  margin-top: 80px;
  margin-left: 50px;
  margin-right: 50px;
  margin-bottom: 50px;
  color: #fff;
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
