// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },
  runtimeConfig: {
    public: {
      apiBase: "http://localhost:3001",
    },
  },
  modules: [
    "@nuxt/eslint",
    "@nuxtjs/tailwindcss",
    "nuxt-typed-router",
    "@pinia/nuxt",
    "pinia-plugin-persistedstate/nuxt",
  ],
  pinia: {
    storesDirs: ["./app/store/**"],
  },
  routeRules: {
    "/office/**": { ssr: false },
    "/auth/**": { ssr: false },
  },
});
