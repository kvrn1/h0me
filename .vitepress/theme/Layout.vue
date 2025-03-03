<script setup>
import { Content, useData } from 'vitepress'
import BlogPost from './pages/blog/BlogPost.vue'

const { frontmatter } = useData()
</script>

<template>
  <BlogPost v-if="frontmatter.layout ==='blog-post'" />
  <Content v-else />
</template>
