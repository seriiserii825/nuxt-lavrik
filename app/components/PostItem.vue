<script setup lang="ts">
import type { PropType } from "vue";
import type { TPost } from "~/types/TPost";

const props = defineProps({
  post: {
    type: Object as PropType<TPost>,
    required: true,
  },
});
</script>

<template>
  <article class="bg-white rounded-lg shadow hover:shadow-lg transition p-6 mb-6">
    <h3 class="text-2xl font-semibold text-indigo-600 mb-2">
      <NuxtLink :to="`/posts/${post.id}`">{{ post.title }}</NuxtLink>
    </h3>
    <p class="text-sm text-gray-500 mb-4">
      By
      <span class="font-medium text-gray-700">{{ post.User.login }}</span>
      •
      <time datetime="2025-09-12T14:20:00Z"></time>
    </p>
    <p class="text-gray-700 mb-4 line-clamp-3">
      {{ post.content }}
    </p>
    <NuxtLink
      :to="`/posts/${post.id}`"
      class="inline-block text-indigo-600 font-semibold hover:underline">
      Read More →
    </NuxtLink>
  </article>
</template>
