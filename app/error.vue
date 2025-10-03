<script setup lang="ts">
import type { NuxtError } from "#app";

const is_dev = import.meta.dev;

const props = defineProps({
  error: {
    type: Object as () => NuxtError,
  },
});
</script>

<template>
  <pre v-if="error && is_dev">{{ JSON.stringify(error, null, 2) }}</pre>
  <div v-if="error" class="bg-white p-8 rounded shadow-md text-center">
    <h1 class="text-4xl font-bold mb-4">Error {{ error.statusCode }}</h1>
    <p class="text-lg mb-4">{{ error.message }}</p>
    <NuxtLink to="/" class="text-indigo-600 hover:underline">Go back to Home</NuxtLink>
  </div>
</template>
