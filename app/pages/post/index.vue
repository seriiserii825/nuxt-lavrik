<script setup lang="ts">
import type { TPost } from "~/types/TPost";

const posts = ref<TPost[]>([]);
const { data, pending, error } = await useAPI<TPost[]>("/posts");
console.log(data.value, "data");
</script>

<template>
  <!-- Posts List -->
  <main class="container mx-auto px-6 py-12">
    <PostItem v-for="post in data" :key="post.id" :post="post" />
  </main>

  <!-- Footer -->
</template>
