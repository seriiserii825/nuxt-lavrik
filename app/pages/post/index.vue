<script setup lang="ts">
import type { TPost } from "~/types/TPost";

const { data, pending, error } = await useAPI<TPost[]>("/posts");
</script>

<template>
  <!-- Posts List -->
  <main class="container mx-auto px-6 py-6">
    <header class="mb-8">
      <NuxtLink
        to="/post/create"
        class="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
        Create New Post
      </NuxtLink>
    </header>
    <h2 v-if="pending">Loading: {{ pending }}</h2>
    <div v-else-if="error" class="text-red-600">Error: {{ error.message }}</div>
    <div v-else>
      <PostItem v-for="post in data" :key="post.id" :post="post" />
    </div>
  </main>

  <!-- Footer -->
</template>
