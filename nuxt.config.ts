// Load environment variables from .env file
import 'dotenv/config';

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
    "nuxt-icon",
    "nuxt-mail",
    '@formkit/nuxt',
    '@nuxtjs/tailwindcss'
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
    fallback: "dark",
  },
  sitemap: {
    strictNuxtContentPaths: true,
  },
  nitro: {
    preset: "bun",
  },
  routeRules: {
    "/pronouns": {
      redirect: "https://en.pronouns.page/@matta"
    }
  },
  mail: {
    message: {
      to: 'contact@matt-is.gay',
    },
    smtp: {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS
      }
    }
  },
  formkit: {
    // Experimental support for auto loading (see note):
    autoImport: true
  }
});
