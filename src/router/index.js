import {createRouter, createWebHistory} from 'vue-router'

const Home = () => import('@/views/Home');
const EpDetail = () => import('@/views/projectOrTypes/ProjectOrTypes');

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home,
    }, {
        path: '/epDetail',
        name: 'epDetail',
        component: EpDetail,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
