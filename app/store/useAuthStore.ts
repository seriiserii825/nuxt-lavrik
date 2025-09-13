import type {TUser} from "~/types/TPost";

export const useAuthStore = defineStore("auth", () => {
  const user = ref<TUser | null>(null);

  function setUser(newUser: TUser | null) {
    user.value = newUser;
  }

  return { user, setUser };
});
