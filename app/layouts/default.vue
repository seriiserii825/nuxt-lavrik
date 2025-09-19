<script setup lang="ts">
const auth_store = useAuthStore();
const { user } = storeToRefs(auth_store);
function logout() {
  auth_store.logout();
  const origin = window.location.origin;
  window.location.href = `${origin}/login`;
}
</script>

<template>
  <div class="bg-gray-50 text-gray-800">
    <header class="bg-white shadow">
      <div class="container mx-auto flex items-center justify-between py-4 px-6">
        <h1 class="text-xl font-bold text-indigo-600">Brand</h1>
        <nav class="menu space-x-6">
          <NuxtLink to="/" class="hover:text-indigo-600">Home</NuxtLink>
          <NuxtLink to="/posts" class="hover:text-indigo-600">Posts</NuxtLink>
          <a href="/post" class="hover:text-indigo-600">Post</a>
        </nav>
        <button
          v-if="user"
          @click="logout"
          class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Sign Up
        </button>
        <NuxtLink
          v-else
          to="/login"
          class="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
          Login
        </NuxtLink>
      </div>
    </header>
    <div class="min-h-[80vh] container mx-auto px-6 py-10 flex justify-center items-center">
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
.menu .router-link-exact-active {
  font-weight: bold;
  color: #4f46e5; /* Indigo-600 */
}
</style>
