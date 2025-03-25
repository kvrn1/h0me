<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

import { useData } from "vitepress";
const { frontmatter } = useData();
</script>

<template>
  <div
    class="mx-auto flex h-screen max-w-2xl flex-col justify-between p-4 pb-0"
  >
    <Navbar v-if="frontmatter.layout !== 'home'" />
    <main class="mb-auto">
      <Content class="prose prose-stone" />
    </main>
    <Footer />
  </div>
</template>
