import { createRouter, createWebHistory } from 'vue-router'

const Home = () => import('@/views/Home')
const EpDetail = () => import('@/views/projectOrTypes/ProjectOrTypes')
const newsDetail = () => import('@/views/newsDetail/NewsDetail')
const NoFound = () => import('@/views/noFound/NoFound')
import index from '@/store'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/epDetail',
    name: 'epDetail',
    component: EpDetail,
  },
  {
    path: '/newsDetail',
    name: 'newsDetail',
    component: newsDetail,
  },
  {
    path: '/404',
    name: 'NotFound',
    component: NoFound,
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404',
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
