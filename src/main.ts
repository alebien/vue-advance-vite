/*
 * @Date: 2023-05-10 11:57:35
 * @LastEditors: sxw s9x9w9@163.com
 * @LastEditTime: 2023-05-12 15:05:14
 * @FilePath: \vue-advance-vite\src\main.ts
 */
import { createApp, inject } from 'vue'
import router from './router';
import { createPinia } from 'pinia';
import './style.css'
import App from './App.vue'

const app = createApp(App);
app.provide('name', 'sxw');

router.beforeEach((to, from, next) => {
    console.log(inject('name'));
    next();
})
app.use(router).use(createPinia()).mount('#app');

