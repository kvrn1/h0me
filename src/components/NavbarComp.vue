<script setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

const router = useRouter()
const route = useRoute()

const routeName = computed(() => {
  return route.meta.title
})

const crumbs = computed(() => {
  return route.meta.breadcrumbs
})

const getRouteFromName = (name) => {
  return router.getRoutes().filter((r) => r.name === name)[0]
}
</script>

<template>
  <nav class="flex space-x-2">
    <span class="flex space-x-2" v-for="crumb in crumbs">
      <RouterLink :to="{ name: crumb.to }">{{ getRouteFromName(crumb.to).meta.title }}</RouterLink>
      <p>/</p>
    </span>

    <p>{{ routeName }}</p>
  </nav>
</template>
