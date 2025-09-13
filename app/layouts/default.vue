<script setup lang="ts"></script>

<template>
  <div class="bg-gray-50 text-gray-800">
    <header class="bg-white shadow">
      <div class="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 class="text-xl font-bold text-indigo-600">Brand</h1>
        <nav class="space-x-6">
          <NuxtLink to="/" class="hover:text-indigo-600">Home</NuxtLink>
          <NuxtLink to="/post" class="hover:text-indigo-600">Post</NuxtLink>
        </nav>
        <a href="#" class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Sign Up
        </a>
      </div>
    </header>
    <div class="min-h-screen container mx-auto px-6 py-10">
      <slot />
    </div>
    <footer class="bg-gray-900 text-gray-400 py-8">
      <div class="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center">
        <p>&copy; 2025 Brand. All rights reserved.</p>
        <div class="space-x-4 mt-4 md:mt-0">
          <a href="#" class="hover:text-white">Privacy</a>
          <a href="#" class="hover:text-white">Terms</a>
          <a href="#" class="hover:text-white">Support</a>
        </div>
      </div>
    </footer>
  </div>
</template>
<style>
.router-link-exact-active {
  font-weight: bold;
  color: #4f46e5; /* Indigo-600 */
}
</style>
