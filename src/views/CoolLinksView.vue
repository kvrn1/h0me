<script setup>
const links = {
  webdev: [
    { title: 'TailwindCSS', link: 'https://tailwindcss.com' },
    { title: 'HeadlessUI', link: 'https://headlessui.com' },
    { title: 'Heroicons', link: 'https://heroicons.com' },
    { title: 'Realtime Colors', link: 'https://www.realtimecolors.com' },
    { title: 'Fontjoy', link: 'https://fontjoy.com' },
    { title: 'Froala Design Blocks', links: 'https://froala.com/design-blocks' },
  ],
  media: [
    { title: 'qBittorrent', link: 'https://www.qbittorrent.org' },
    { title: 'Jellyfin', link: 'https://jellyfin.org' },
    { title: 'Piracy survival guide', link: 'https://www.reddit.com/r/Piracy/wiki/megathread' },
    { title: 'Radio Garden', link: 'https://radio.garden' },
    { title: 'TV garden', link: 'https://tv.garden' },
  ],
  misc: [
    { title: 'Are we Wayland yet?', link: 'https://arewewaylandyet.com' },
    { title: 'LineageOS', link: 'https://lineageos.org' },
    { title: 'Cooked', link: 'https://cooked.wiki' },
  ],
}
</script>

<template>
  <div>
    <h1>Cool links you should give a try</h1>
    <h2>Web development</h2>
    <ul>
      <li v-for="(entry, key) in links.webdev" :key="key">
        <a :href="entry.link">{{ entry.title }}</a>
      </li>
    </ul>
    <h2>Media</h2>
    <ul>
      <li v-for="(entry, key) in links.media" :key="key">
        <a :href="entry.link">{{ entry.title }}</a>
      </li>
    </ul>
    <h2>Miscellaneous</h2>
    <ul>
      <li v-for="(entry, key) in links.misc" :key="key">
        <a :href="entry.link">{{ entry.title }}</a>
      </li>
    </ul>
  </div>
</template>
