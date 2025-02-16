<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const crumbs = computed(() => {
  let pathArray = route.path.split('/')
  pathArray = pathArray.filter((p) => p !== '')
  pathArray.unshift('/')
  console.log(pathArray)
  console.log(route.matched)

  let breadcrumbArray = []
  pathArray.forEach((breadcrumb) => {
    breadcrumbArray.push({
      path: breadcrumb.path,
      to: breadcrumbArray[i - 1] ? breadcrumbArray[i - 1].to + '/' + breadcrumb.path : '/',
      text: route.matched[i]?.meta.breadcrumb || breadcrumb.path,
    })
  })

  let breadcrumbs = pathArray.reduce((breadcrumbArray, path, i) => {
    breadcrumbArray.push({})
    return breadcrumbArray
  }, [])

  return breadcrumbs
})
</script>

<template>
  <nav class="flex space-x-2">
    <RouterLink to="/">KVRN.zip</RouterLink>
    <p>/</p>
    <RouterLink to="#">...</RouterLink>
  </nav>

  <div class="text-red-300">
    {{ crumbs }}
  </div>
</template>
