import type { TPost } from "~/types/TPost";
import type { TPostStore } from "~/types/TPostStore";

export function createPostsRepository(appFetch: typeof $fetch) {
  return {
    all() {
      return appFetch<TPost[]>("/posts");
    },
    one(id: string | number) {
      return appFetch<TPost>(`/posts/${id}`);
    },
    add(body: TPostStore) {
      return appFetch("/posts", {
        method: "POST",
        body: JSON.stringify(body),
      });
    },
  };
}
