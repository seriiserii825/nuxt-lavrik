import type {TCheckResponse} from "~/types/TCheckResponse";
import type { TLoginResponse } from "~/types/TLoginResponse";
import type { TLoginStore } from "~/types/TLoginStore";

export function createAuthRepository(appFetch: typeof $fetch) {
  return {
    login(body: TLoginStore) {
      return appFetch<TLoginResponse>("/auth/login", {
        method: "POST",
        body: JSON.stringify(body),
      });
    },
    check() {
      return appFetch<TCheckResponse>("/auth/check");
    },
  };
}
