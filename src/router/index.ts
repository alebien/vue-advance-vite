import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Home from '../views/Home.vue';
import About from '../views/About.vue';

const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    },
    {
        path: '/about',
        name: 'About',
        component: About,
    },
    {
        path: '/practice',
        name: 'Practice',
        component: () => import('../views/Practice.vue'),
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
})

export default router;