<script setup>
import { useData } from "vitepress";
import BlogIndex from "./pages/blog/BlogIndex.vue";
import BlogPost from "./pages/blog/BlogPost.vue";

const { frontmatter } = useData();
</script>

<template>
  <div>
    <main>
      <BlogIndex v-if="frontmatter.layout === 'blog'" />
      <Content v-else />
    </main>
  </div>
</template>
