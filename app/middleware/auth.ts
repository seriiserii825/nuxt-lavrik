export default defineNuxtRouteMiddleware((to, from) => {
  const auth_store = useAuthStore();
  const { token } = storeToRefs(auth_store);

  if (token.value == null) {
    return navigateTo("/login");
  }
});
