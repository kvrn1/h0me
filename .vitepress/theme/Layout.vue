<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Home from "./pages/Home.vue";

import { useData } from "vitepress";
import { computed } from "vue";

const { frontmatter } = useData();

const isHome = computed(() => {
  return frontmatter.value.layout === "home";
});
</script>

<template>
  <div
    class="mx-auto flex h-screen max-w-2xl flex-col justify-between p-4 pb-0"
  >
    <Navbar v-if="!isHome" />
    <main class="mb-auto">
      <Home v-if="isHome" />
      <Content
        v-else
        class="prose prose-stone prose-headings:text-text prose-h1:text-center prose-headings:uppercase max-w-none"
      />
    </main>
    <Footer />
  </div>
</template>
