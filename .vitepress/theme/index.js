import "./assets/styles/app.css";

import Layout from "./Layout.vue";

import Home from "./pages/Home.vue";
import Blog from "./pages/Blog.vue";

import Navbar from "./components/Navbar.vue";
import Footer from "./components/Footer.vue";
import Button88x31 from "./components/Button88x31.vue";

/** @type {import('vitepress').Theme} */
export default {
  Layout,
  enhanceApp({ app, router, siteData }) {
    app.component("Home", Home);
    app.component("Blog", Blog);
    app.component("Navbar", Navbar);
    app.component("Footer", Footer);
    app.component("Button88x31", Button88x31);
  },
};
