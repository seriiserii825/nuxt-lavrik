<script setup lang="ts">
const { $api } = useNuxtApp();
const auth_store = useAuthStore();

const { form, errors, send, pending } = useForm(
  $api.auth.login,
  {
    login: "",
    password: "",
  },
  (res) => {
    auth_store.setUser(res.user);
    auth_store.setToken(res.token);
    navigateTo("/");
  }
);
</script>

<template>
  <BlockForm title="Login">
    <form class="space-y-6" @submit.prevent="send">
      <UiInput
        id="login"
        v-model="form.login"
        label="Login"
        type="text"
        placeholder="Enter your login"
        :errors="errors['login']"
        required />

      <UiInput
        id="password"
        v-model="form.password"
        label="Password"
        type="password"
        placeholder="Enter your password"
        :errors="errors['password']"
        required />

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="pending"
        class="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition">
        Login
      </button>
    </form>
  </BlockForm>
</template>
