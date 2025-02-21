<script setup>
import { computed } from 'vue'
import { RouterView, useRoute } from 'vue-router'
import NavbarComp from '@/components/NavbarComp.vue'

const route = useRoute()

const displayNavbar = computed(() => {
  return route.name !== 'home'
})
</script>

<template>
  <!-- TODO: add transition -->
  <main class="container mx-auto">
    <NavbarComp v-if="displayNavbar" />
    <RouterView />
  </main>
</template>
