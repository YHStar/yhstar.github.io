import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import Markdown from 'vite-plugin-md';
import Pages from 'vite-plugin-pages'


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/],
    }),
    vueDevTools(),
    Markdown({
       wrapperClasses: 'prose prose-sm m-auto',
    }),
    Pages({
      dirs: 'src/posts', // 指定文章目录
      extensions: ['vue', 'md'],
    }),
  ],
  base: './',
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
