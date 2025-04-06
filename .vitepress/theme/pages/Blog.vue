<script setup>
import { data as posts } from "../../data/blog.data.mjs";
</script>

<template>
  <ul>
    <li v-for="post in posts">
      <p>
        <a :href="post.url">{{ post.frontmatter.title }}</a> ({{
          new Date(post.frontmatter.date).toLocaleDateString("en-UK")
        }})
      </p>
    </li>
  </ul>
</template>
