import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import BlogView from '@/views/BlogView.vue'
import AboutMeView from '@/views/AboutMeView.vue'
import ContactView from '@/views/ContactView.vue'
import CoolLinksView from '@/views/CoolLinksView.vue'
import NotFoundView from '@/views/NotFoundView.vue'

const router = createRouter({
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

    {
      name: '404',
      path: '/404',
      component: NotFoundView,
      meta: {
        title: '404',
        breadcrumbs: [{ to: 'home' }],
      },
    },
  ],
})

router.beforeEach((to, from, next) => {
  var title = to.meta.title

  if (to.name !== 'home') {
    title = 'KVRN.zip - ' + title
  }

  document.title = title

  next()
})

export default router
