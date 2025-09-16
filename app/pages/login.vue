<script setup lang="ts">
import type { TLoginResponse } from "~/types/TLoginResponse";
const auth_store = useAuthStore();

const form = ref({
  login: "admin",
  password: "password",
});

const { $fetchApi } = useNuxtApp();

async function onSubmit() {
  try {
    const response = await $fetchApi<TLoginResponse>("/auth/login", {
      method: "POST",
      body: { login: form.value.login, password: form.value.password },
    });

    auth_store.setUser(response.user);
    auth_store.setToken(response.token);
    navigateTo("/");
  } catch (error) {
    auth_store.setUser(null);
    auth_store.setToken(null);
    console.error("Login failed:", error);
  }
}
</script>

<template>
  <BlockForm title="Login">
    <form @submit.prevent="onSubmit" class="space-y-6">
      <UiInput
        v-model="form.login"
        label="Login"
        type="text"
        id="login"
        placeholder="Enter your login"
        required />

      <UiInput
        v-model="form.password"
        label="Password"
        type="password"
        id="password"
        placeholder="Enter your password"
        required />

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition">
        Login
      </button>
    </form>
  </BlockForm>
</template>
