<script setup>
import { RouterLink } from 'vue-router'
</script>

<template>
  <div class="flex flex-col items-center">
    <img src="@/assets/images/pfp.png" alt="Profil picture" class="w-52 rounded-full" />
    <h1 class="text-text text-4xl">KVRN<span class="italic text-secondary">.zip</span></h1>
    <nav class="flex gap-2">
      <RouterLink to="/blog">Blog</RouterLink>
      <span>·</span>
      <RouterLink to="/me">About me</RouterLink>
      <span>·</span>
      <RouterLink to="/contact">Contact</RouterLink>
      <span>·</span>
      <RouterLink to="/links">Cool links</RouterLink>
    </nav>
  </div>

  <div class="flex flex-col items-center border-t-1 p-4">
    <div class="grid grid-cols-3 gap-2">
      <div v-for="_ in 6" class="w-[88px] h-[31px] bg-white"></div>
    </div>

    <p><a href="#">←</a> <a href="#">webring</a> <a href="#">→</a></p>

    <p>Source code available <a href="#">here</a> under GPLv3</p>

    <p>KVRN.zip © {{ new Date().getFullYear() }}</p>
  </div>
</template>
