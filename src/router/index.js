import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import ContactView from '@/views/ContactView.vue'
import CoolLinksView from '@/views/CoolLinksView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/blog',
      name: 'blog',
      component: BlogView,
    },
    {
      path: '/me',
      name: 'about me',
      component: AboutMeView,
    },
    {
      path: '/contact',
      name: 'contact',
      component: ContactView,
    },
    {
      path: '/links',
      name: 'cool links',
      component: CoolLinksView,
    },
  ],
})

export default router
