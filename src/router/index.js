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
        path: '/',
        component: HomeView,
        meta: {
          breadcrumb: 'KVRN.zip',
        },
      },

      {
        path: '/blog',
        component: BlogView,
        meta: {
          breadcrumb: 'Blog',
        },
        children: [
          {
            path: ':id',
            components: null,
            meta: {
              breadcrumb: 'BlogId',
            },
          },
        ],
      },

      {
        path: '/me',
        component: AboutMeView,
        meta: {
          breadcrumb: 'About me',
        },
      },

      {
        path: '/contact',
        component: ContactView,
        meta: {
          breadcrumb: 'Contact',
        },
      },

      {
        path: '/links',
        component: CoolLinksView,
        meta: {
          breadcrumb: 'Cool links',
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
