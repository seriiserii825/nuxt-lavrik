import type { UseFetchOptions } from "nuxt/app";

export function useFetchApp<T>(url: string | (() => string), options?: UseFetchOptions<T>) {
  return useFetch(url, {
    ...options,
    $fetch: useNuxtApp().$fetchApi as typeof $fetch,
  });
}
