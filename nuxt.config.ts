// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  modules: ["@nuxt/eslint", "@nuxtjs/tailwindcss", "nuxt-typed-router", "@pinia/nuxt"],
  pinia: {
    storesDirs: ["./app/store/**"],
  },
});

