export default defineNuxtPlugin({
  name: "fetch",
  parallel: true,
  setup(nuxtApp) {
    const api = $fetch.create({
      baseURL: "http://localhost:3001",
      onRequest({ request, options, error }) {
        options.headers.set("Content-type", "application/json");
        options.headers.set("Accept", "application/json");
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
        api,
      },
    };
  },
});
