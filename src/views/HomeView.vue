<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <main>
    <div class="@container">
      <div class="flex justify-center">
        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/blog">Blog</RouterLink>
          <RouterLink to="/me">About me</RouterLink>
          <RouterLink to="/contact">Contact</RouterLink>
          <RouterLink to="/links">Cool links</RouterLink>
        </nav>
      </div>
    </div>
  </main>
</template>
