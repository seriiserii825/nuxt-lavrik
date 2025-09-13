<script setup lang="ts">
import type { TPost } from "~/types/TPost";

const posts = ref<TPost[]>([]);
const { data, pending, error } = await useAPI<TPost[]>("/posts");
</script>

<template>
  <!-- Posts List -->
  <main class="container mx-auto px-6 py-12">
    <h2 v-if="pending">Loading: {{ pending }}</h2>
    <div v-else-if="error" class="text-red-600">Error: {{ error.message }}</div>
    <div v-else>
      <PostItem v-for="post in data" :key="post.id" :post="post" />
    </div>
  </main>

  <!-- Footer -->
</template>
