<script setup lang="ts">
const props = defineProps({
  title: {
    type: String,
    required: false,
    default: "Login",
  }
});
</script>

<template>
  <div class="login flex-[600px] flex items-center justify-center">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
      <h1 class="text-2xl font-bold text-center text-indigo-600 mb-6">{{ title }}</h1>
      <slot />
    </div>
  </div>
</template>
