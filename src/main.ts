/*
 * @Date: 2023-05-10 11:57:35
 * @LastEditors: sxw s9x9w9@163.com
 * @LastEditTime: 2023-05-10 12:20:28
 * @FilePath: \vue-advance-vite\src\main.ts
 */
import { createApp } from 'vue'
import router from './router';
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'

createApp(App).use(router).use(createPinia()).mount('#app')
