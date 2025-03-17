<script setup>
const props = defineProps(["src", "alt", "href"]);
</script>

<template>
  <div class="bg-accent h-[31px] w-[88px]">
    <a :href="href">
      <img
        :src="props.src"
        :href="props.href"
        :alt="props.alt"
        class="opacity-80 grayscale hover:opacity-100 hover:filter-none"
      />
    </a>
  </div>
</template>
