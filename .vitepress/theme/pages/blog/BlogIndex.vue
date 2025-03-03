<script setup>
import { data as posts } from "../../../data/blog.data.mjs";
</script>

<template>
  <h1>Blog</h1>
  <ul>
    <li v-for="post in posts">
      <a :href="post.url">{{ post.frontmatter.title }}</a>
      <p>{{ new Date(post.frontmatter.date).toLocaleDateString("en-UK") }}</p>
    </li>
  </ul>
</template>
