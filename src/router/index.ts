// src/router/index.js
import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router';

import Home from '../pages/Home.vue';
import About from '../pages/About.vue';
import PostsList from '../pages/PostsList.vue';
import Post from '../pages/Post.vue';

const routes: RouteRecordRaw[] = [
  { path: '/', component: Home },
  { path: '/about', component: About },
  { path: '/posts', component: PostsList },
  { path: '/posts/:slug', component: Post, props: true }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

export default router;
