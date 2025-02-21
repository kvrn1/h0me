import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import ContactView from '@/views/ContactView.vue'
import CoolLinksView from '@/views/CoolLinksView.vue'

const router = createRouter(
  {
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
      {
        name: 'home',
        path: '/',
        component: HomeView,
        meta: {
          title: 'KVRN.zip',
          breadcrumbs: [],
        },
      },

      {
        name: 'blog',
        path: '/blog',
        component: BlogView,
        meta: {
          title: 'Blog',
          breadcrumbs: [{ to: 'home' }],
        },
      },

      {
        name: 'blogItem',
        path: '/blog/:id',
        component: null,
        meta: {
          title: null,
          breadcrumbs: [{ to: 'home' }, { to: 'blog' }],
        },
      },

      {
        name: 'about',
        path: '/me',
        component: AboutMeView,
        meta: {
          title: 'About me',
          breadcrumbs: [{ to: 'home' }],
        },
      },

      {
        name: 'contact',
        path: '/contact',
        component: ContactView,
        meta: {
          title: 'Contact',
          breadcrumbs: [{ to: 'home' }],
        },
      },

      {
        name: 'links',
        path: '/links',
        component: CoolLinksView,
        meta: {
          title: 'Cool links',
          breadcrumbs: [{ to: 'home' }],
        },
      },
    ],
  },

  // {
  //   path: '*',
  //   redirect: '/404',
  //   component: null,
  // },
)

export default router
