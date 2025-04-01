<script setup>
import Button88x31 from "./Button88x31.vue";
import button1 from "../assets/images/buttons/gimp.gif";
import button2 from "../assets/images/buttons/fedi.gif";
import button3 from "../assets/images/buttons/firefox.gif";
import button4 from "../assets/images/buttons/ralsei.gif";
import button5 from "../assets/images/buttons/chameleon.gif";
import button6 from "../assets/images/buttons/penguins.gif";

const buttonElmts = [
  {
    src: button1,
    href: "https://www.gimp.org",
    alt: "Gimp now !",
  },
  {
    src: button2,
    href: "https://en.wikipedia.org/wiki/Fediverse",
    alt: "Join the Fediverse",
  },
  {
    src: button3,
    href: "https://www.mozilla.org/firefox",
    alt: "Use Firefox",
  },
  {
    src: button4,
    href: "https://cat-bounce.com",
    alt: "Chill",
  },
  {
    src: button5,
    href: "https://youtu.be/ktC6EQtGP3E",
    alt: "Léon le Cameléon",
  },
  {
    src: button6,
    href: "https://www.linuxmint.com",
    alt: "Linux Army",
  },
];
</script>

<template>
  <div
    class="border-text mt-8 flex flex-col items-center border-t-1 p-4 text-center"
  >
    <div class="grid grid-cols-3 gap-2">
      <Button88x31
        v-for="(btn, key) in buttonElmts"
        :key="key"
        :src="btn.src"
        :href="btn.href"
        :alt="btn.alt"
      />
    </div>

    <p class="my-2">
      <a href="#">←</a> <a href="#">webring</a> <a href="#">→</a>
    </p>

    <p>
      Source code available
      <a href="https://github.com/kvrn1/h0me">here</a>
      under GPLv3
    </p>

    <p>KVRN.zip © {{ new Date().getFullYear() }}</p>
  </div>
</template>
