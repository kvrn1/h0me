<script setup>
import { useData } from "vitepress";
import { computed } from "vue";

const { frontmatter } = useData();

const crumbs = computed(() => {
  var elmts = [{ title: "KVRN.zip", href: "/" }];

  if (frontmatter.value.layout === "doc") {
    elmts.push({ title: "Blog", href: "/blog" });
  }

  return elmts;
});
</script>

<template>
  <nav class="mb-15 flex space-x-2">
    <span v-for="crumb in crumbs" class="flex space-x-2">
      <a :href="crumb.href">{{ crumb.title }}</a>
      <p>/</p>
    </span>

    <p>{{ frontmatter.title }}</p>
  </nav>
</template>
