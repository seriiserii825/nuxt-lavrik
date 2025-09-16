<script setup lang="ts">
import { FetchError } from "ofetch";
import type { TLoginStore } from "~/types/TLoginStore";
import type { TLoginStoreErrors } from "~/types/TLoginStoreErrors";

const auth_store = useAuthStore();

const form = ref<TLoginStore>({
  login: "admin",
  password: "password",
});

const errors = ref<TLoginStoreErrors>({
  login: [],
  password: [],
});

async function onSubmit() {
  try {
    const response = await useNuxtApp().$api.auth.login(form.value);
    auth_store.setUser(response.user);
    auth_store.setToken(response.token);
    navigateTo("/");
  } catch (error) {
    if (error instanceof FetchError) {
      Object.assign(errors.value, useFormError(error, form.value));
    } else {
      console.error("Unexpected error:", error);
    }
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
        :errors="errors.login"
        required />

      <UiInput
        v-model="form.password"
        label="Password"
        type="password"
        id="password"
        placeholder="Enter your password"
        :errors="errors.password"
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
