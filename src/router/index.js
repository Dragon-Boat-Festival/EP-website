import {createRouter, createWebHistory} from 'vue-router'
import NewsDetail from "@/views/newsDetail/NewsDetail";

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
    }, {
        path: '/newsDetail',
        name: 'newsDetail',
        component: NewsDetail,
    },
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
})

export default router
