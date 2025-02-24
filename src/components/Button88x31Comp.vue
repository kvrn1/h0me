<script setup>
const props = defineProps(['src', 'alt', 'href'])
</script>

<template>
  <div class="w-[88px] h-[31px] bg-accent">
    <a :href="href">
      <img
        :src="props.src"
        :href="props.href"
        :alt="props.alt"
        class="grayscale opacity-80 hover:opacity-100 hover:filter-none"
    /></a>
  </div>
</template>
