export default defineNuxtRouteMiddleware((to, from) => {
  const auth_store = useAuthStore();

  if (to.meta.auth && !auth_store.user) {
    return navigateTo({ name: "auth-login" });
  } else if (to.meta.guest && auth_store.user) {
    return navigateTo({ name: "office" });
  }
});
