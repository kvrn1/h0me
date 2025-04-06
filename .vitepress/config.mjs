import { defineConfig } from "vitepress";
import anchor from "markdown-it-anchor";

export default defineConfig({
  title: "KVRN.zip",

  cleanUrls: true,
  srcDir: "src",

  markdown: {
    theme: "vitesse-black",

    anchor: {
      permalink: anchor.permalink.ariaHidden({
        placement: "before",
        symbol: "¶",
      }),
    },
  },
});
