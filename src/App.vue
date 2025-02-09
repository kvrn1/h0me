<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div>
      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/blog">Blog</RouterLink>
        <RouterLink to="/me">About me</RouterLink>
        <RouterLink to="/contact">Contact</RouterLink>
        <RouterLink to="/links">Cool links</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>
