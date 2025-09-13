import type {TUser} from "~/types/TPost";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<TUser | null>(null);
  const token = ref<string | null>(null);

  function setUser(newUser: TUser | null) {
    user.value = newUser;
  }
  function setToken(newToken: string | null) {
    token.value = newToken;
  }

  function logout() {
    user.value = null;
    token.value = null;
  }

  return { user, setUser, token, setToken, logout };
}, {
  persist: true,
});
