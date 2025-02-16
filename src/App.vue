<script setup>
import { RouterView } from 'vue-router'
import NavbarComp from './components/NavbarComp.vue'
</script>

<template>
  <NavbarComp />

  <header>
    <div></div>
  </header>

  <!-- TODO: add transition -->
  <RouterView />
</template>
