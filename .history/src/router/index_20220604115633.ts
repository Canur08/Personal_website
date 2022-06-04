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
        component: () => import('../components/Home.vue'),
        children: [
            {
                path: 'show',
                name: 'show',
                component: () => import('../view/Show.vue'),

            },
            {
                path: 'about',
                name: 'about',
                component: () => import('../view/aboutMe.vue'),

            },
            {
                path: 'talk',
                name: 'talk',
                component: () => import('../view/Talk.vue'),

            },
        ]
    },
]

const router = createRouter({
    history,
    routes
})

export default router