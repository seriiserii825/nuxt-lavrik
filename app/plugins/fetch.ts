export default defineNuxtPlugin({
  name: "fetch",
  parallel: true,
  setup(nuxtApp) {
    const auth_store = useAuthStore();
    const token = auth_store.token;

    const config = useRuntimeConfig();

    const fetchApi = $fetch.create({
      baseURL: config.public.apiBase,
      onRequest({ request, options, error }) {
        options.headers.set("Content-type", "application/json");
        options.headers.set("Accept", "application/json");
        options.headers.set("Authorization", "Bearer " + token);
        // options.headers.set("Authorization", "Bearer " + "mynewtoken");
      },
      async onResponseError({ response }) {
        // if (response.status === 401) {
        //   await nuxtApp.runWithContext(() => navigateTo("/login"));
        // }
      },
    });

    // Expose to useNuxtApp().$api
    return {
      provide: {
        fetchApi,
      },
    };
  },
});
