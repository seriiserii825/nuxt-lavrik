export default defineNuxtPlugin({
  name: "init-app",
  parallel: true,
  dependsOn: ["fetch"],
  async setup() {
    const { $api } = useNuxtApp();
    const auth_store = useAuthStore();
    const response = await $api.auth.check();
    if (response.auth){
      const user = response.user;
      auth_store.setUser(user);
    }else{
      response.auth;
    }
  },
});
