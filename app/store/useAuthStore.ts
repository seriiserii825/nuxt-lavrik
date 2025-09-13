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

  return { user, setUser, token, setToken };
}, {
  persist: true,
});
