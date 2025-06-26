
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

import About from '../pages/About.vue';
import Home from '../pages/Home.vue';
import Post from '../pages/Post.vue';
import { nextTick } from 'vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/posts/:slug', component: Post, props: true }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return nextTick(() => {
        setTimeout(() => {
          const element = document.getElementById(to.hash.slice(1)); // 获取元素
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' }); // 平滑滚动
          } else {
            console.warn(`Could not find element with id ${to.hash.slice(1)}`);
          }
        }, 100);
      });
    }
    return { top: 0 };
  },
});
router.beforeEach((to, from, next) => {
  document.title = 'Away的博客';
  next();
});
export default router;
