// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  modules: [
    "@nuxt/image",
    "@nuxtjs/color-mode",
    "@nuxt/content",
    "@nuxtjs/seo",
  ],
  ogImage: {
    enabled: false,
  },
  site: {
    url: "https://matt-is.gay",
    name: "Matt Adcock",
    description: "Welcome to my site!",
    defaultLocale: "en",
  },
  colorMode: {
    preference: "system",
    fallback: "dark", // will render in dark mode
  },
  // seo: {
  //   redirectToCanonicalSiteUrl: true,
  // },
});