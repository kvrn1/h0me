<script setup>
import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";

import { useData } from "vitepress";
const { frontmatter } = useData();
</script>

<template>
  <div>
    <Navbar v-if="frontmatter.layout !== 'home'" />
    <main>
      <Content />
    </main>
    <Footer />
  </div>
</template>
