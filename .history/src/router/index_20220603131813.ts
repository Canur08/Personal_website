import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
const history = createWebHistory()
const routes: Array<RouteRecordRaw> = [
    {
        path: '/',
        name: 'wlc',
        component: () => import('../components/Welcome.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import('../components/Home.vue')
    },
    {
        path: '/test',
        name: 'test',
        component: () => import('../components/Test.vue')
    },
]

const router = createRouter({
    history,
    routes
})

export default router