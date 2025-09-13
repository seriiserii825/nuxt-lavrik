<script setup lang="ts">
import type { TLoginResponse } from "~/types/TLoginResponse";
const auth_store = useAuthStore();

const form = ref({
  login: "admin",
  password: "password",
});

const { $api } = useNuxtApp();

async function onSubmit() {
  try {
    const response = await $api<TLoginResponse>("/auth/login", {
      method: "POST",
      body: { login: form.value.login, password: form.value.password },
    });

    auth_store.setUser(response.user);
    console.log(response, "response");
  } catch (error) {
    auth_store.setUser(null);
    console.error("Login failed:", error);
  }
}
</script>

<template>
  <div class="login bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
      <h1 class="text-2xl font-bold text-center text-indigo-600 mb-6">Login</h1>

      <form @submit.prevent="onSubmit" class="space-y-6">
        <!-- Username / Email -->
        <div>
          <label for="login" class="block text-sm font-medium text-gray-700 mb-1">
            Username or Email
          </label>
          <input
            type="text"
            id="login"
            name="login"
            v-model="form.login"
            placeholder="Enter your username"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required />
        </div>

        <!-- Password -->
        <div>
          <label for="password" class="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            v-model="form.password"
            placeholder="Enter your password"
            class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none"
            required />
        </div>

        <!-- Submit Button -->
        <button
          type="submit"
          class="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition">
          Login
        </button>
      </form>

      <!-- Register Link -->
      <p class="mt-6 text-center text-sm text-gray-600">
        Don’t have an account?
        <a href="/register" class="text-indigo-600 font-semibold hover:underline">Sign up</a>
      </p>
    </div>
  </div>
</template>
