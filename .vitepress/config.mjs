import { defineConfig } from "vitepress";
import anchor from "markdown-it-anchor";

export default defineConfig({
  title: "KVRN.zip",
  titleTemplate: "KVRN.zip - :title",
  description: "Louis Kvrn's personal website",

  head: [
    [
      "link",
      {
        rel: "icon",
        type: "image/png",
        href: "/favicon-96x96.png",
        sizes: "96x96",
      },
    ],
    ["link", { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" }],
    ["link", { rel: "shortcut icon", href: "/favicon.ico" }],
    [
      "link",
      {
        rel: "apple-touch-icon",
        sizes: "180x180",
        href: "/apple-touch-icon.png",
      },
    ],
    ["link", { rel: "manifest", href: "/site.manifest" }],
  ],

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
