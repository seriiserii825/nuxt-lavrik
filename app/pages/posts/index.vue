<script setup lang="ts">
const { $api } = useNuxtApp();
const posts = dataOrFail(await useAsyncData("posts", () => $api.posts.all()));
const auth_store = useAuthStore();
</script>

<template>
  <!-- Posts List -->
  <main class="container mx-auto px-6 py-6">
    <header class="mb-8">
      <NuxtLink
        v-if="auth_store.token"
        to="/posts/create"
        class="bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700">
        Create New Post
      </NuxtLink>
    </header>
    <!-- <h2 v-if="pending">Loading: {{ pending }}</h2> -->
    <!-- <div v-else-if="error" class="text-red-600">Error: {{ error.message }}</div> -->
    <div v-if="posts">
      <PostItem v-for="post in posts" :key="post.id" :post="post" />
    </div>
    <div v-else>No posts available.</div>
  </main>

  <!-- Footer -->
</template>
