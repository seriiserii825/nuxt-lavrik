<script setup lang="ts">
const route = useRoute();
const post_id = route.params.id;
</script>

<template>
  <div class="single-post">
    <NuxtLink to="/posts">Back to Posts</NuxtLink>
    <div class="post-id">Post {{ post_id }}</div>
  </div>
</template>
