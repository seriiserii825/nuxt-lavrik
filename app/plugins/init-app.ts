export default defineNuxtPlugin({
  name: "init-app",
  parallel: true,
  dependsOn: ["fetch"],
  async setup() {
    const { $api } = useNuxtApp();
    const auth_store = useAuthStore();
    if (import.meta.browser) {
      $api.auth
        .check()
        .then((res) => {
          if (res.auth) {
            auth_store.setUser(res.user);
          }else{
            auth_store.logout();
          }
        })
        .catch(() => {
          auth_store.logout();
        });
    }
  },
});
