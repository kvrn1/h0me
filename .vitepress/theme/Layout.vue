<script setup>
import { useData } from "vitepress";
import BlogIndex from "./pages/blog/BlogIndex.vue";
import BlogPost from "./pages/blog/BlogPost.vue";

const { frontmatter } = useData();
</script>

<template>
  <BlogIndex v-if="frontmatter.layout === 'blog'" />
  <BlogPost v-else-if="frontmatter.layout === 'blog-post'" />
</template>
