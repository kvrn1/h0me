import { defineConfig } from "vitepress";

export default defineConfig({
  title: "KVRN.zip",

  cleanUrls: true,
  srcDir: "src",

  markdown: {
    theme: "vitesse-black",

    anchor: {
      permalink: (slug, opts, state, index) => {
        console.log(opts);
      },
    },
  },
});
