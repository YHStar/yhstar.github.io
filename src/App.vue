<template>
  <div class="head-roll-bar">
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
      <div class="sidebar">
        <!-- 头像部分 -->
        <div class="avatar-section">
          <img src="/logo.png" alt="头像" class="avatar" />
        </div>

        <!-- 空白部分用于填充 -->
        <div class="spacer"></div>

        <!-- 联系方式部分 -->
        <div class="contact-section">
          <a href="mailto:980506422@qq.com">
            <img src="/Email.png" alt="邮箱" class="contact-icon" />
          </a>
          <a href="https://www.github.com/YHStar">
            <img src="/Github.png" alt="Github" class="contact-icon" />
          </a>
        </div>
      </div>
      <div class="content">
        <router-view v-slot="{ Component }">
          <component :is="Component" />
        </router-view>
      </div>
    </main>

    <footer class="is-center">
      Copyright &copy; 2025 Away's Blog
    </footer>
  </div>

</template>

<style>
*::-webkit-scrollbar {
  display: none;
}

* {
  color: rgb(180, 180, 180) !important;
}



h2 {
  font-size: 40px !important;
  text-align: center;
}

p {
  text-indent: 2em;
  font-size: 20px;
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
  overflow-y: hidden;
}

main {
  margin-top: 100px;
  margin-left: 50px;
  margin-right: 50px;
  color: #fff;
}

.head-roll-bar {
  -ms-overflow-style: none;
  scrollbar-width: none;
  overflow: hidden;
}

/* 自定义滚动条的整体样式 */
.content::-webkit-scrollbar {
  width: 10px;
  display: block;
}

/* 滚动条轨道（背景部分） */
.content::-webkit-scrollbar-track {
  background: rgba(0, 0, 0, 0.1);
  /* 轨道的背景色 */
  border-radius: 50px;
  /* 轨道的圆角 */
}

/* 滚动条滑块（可拖动的部分） */
.content::-webkit-scrollbar-thumb {
  background: rgba(255, 255, 255, 0.3);
  /* 滑块的颜色 */
  border-radius: 20px;
  /* 滑块的圆角 */
  border: 3px solid rgba(0, 0, 0, 0.1);
  /* 滑块周围的边框 */
}

/* 滚动条按钮（可选，显示上下箭头） */
.content::-webkit-scrollbar-button {
  display: none;
  /* 隐藏滚动条的上下箭头按钮 */
}
</style>

<style scoped>
@media (max-width: 1000px) {
  *::-webkit-scrollbar {
    display: none !important;
  }

  .main-container {
    flex-direction: column-reverse;
    gap: 20px;
    height: auto;
  }

  .sidebar {
    flex: 0 !important;
    flex-direction: row !important;
    height: 60px !important;
    padding: 10px !important;
    background-color: rgba(30, 30, 30, 0.8);
  }

  .avatar-section {
    margin: 0 !important;
    width: 50% !important;
    align-items: end !important;
  }

  .avatar {
    height: 20px !important;
  }

  .spacer {
    display: none !important;
  }

  .contact-section {
    flex: none;
    flex-direction: row !important;
    gap: 50% !important;
    margin: 0 !important;
  }

  .contact-icon {
    width: 20px !important;
    height: 20px !important;
  }
}


.main-container {
  display: flex;
  height: 80vh;
  justify-content: space-between;
  gap: 40px;
}

/* 正文区域 */
.content {
  flex: 4;
  padding: 0px;
  overflow-y: auto;
  height: 75vh;
  border-radius: 20px;
  margin-bottom: 0px !important;
}

/* 空白区域 */
.sidebar {
  flex: 1;
  height: 75vh;
  padding: 20px;
  border-radius: 20px;
  background-color: rgba(45, 45, 45, 0.8);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.avatar-section {
  margin-top: 100px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.avatar {
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
}

.spacer {
  flex-grow: 1;
  /* 占据中间空间，推动下方联系方式到底部 */
}

.contact-section {
  flex: 1;
  display: flex;
  flex-direction: row;
  gap: 30px;
  margin-bottom: 10px;
}

.contact-icon {
  width: 70px;
  height: 70px;
  transition: opacity 0.3s;
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

footer {
  position: fixed;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  height: 40px;
  padding: 8px;
  color: gray;
  text-align: center;
}
</style>
