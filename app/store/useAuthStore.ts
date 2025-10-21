import type { TUser } from "~/types/TPost";

export const useAuthStore = defineStore(
  "auth",
  () => {
    const user = ref<TUser | null>(null);

    // let readyResolve: ((value: TUser) => void) | null = null;
    // // Ready means “store has hydrated (or we’re on SSR)”, not “user exists”
    // const is_ready = new Promise((resolve) => (readyResolve = resolve));

    function setUser(newUser: TUser | null) {
      user.value = newUser;
      // if (readyResolve) {
      //   if (newUser) {
      //     readyResolve(newUser);
      //   }
      //   readyResolve = null;
      // }
    }

    function logout() {
      user.value = null;
    }

    return { user, setUser, logout };
  },
  {
    persist: true,
  }
);
