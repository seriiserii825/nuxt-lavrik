<script setup lang="ts">
import type { TPostStore, TPostStoreErrors } from "~/types/TPostStore";
import { FetchError } from "ofetch";

definePageMeta({
  middleware: ["auth"],
});

const errors = ref<TPostStoreErrors>({
  title: [],
  url: [],
  content: [],
});

const form = ref<TPostStore>({
  title: "",
  url: "",
  content: "",
});

watch(
  () => form.value.title,
  (newTitle) => {
    form.value.url = newTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
);

async function onSubmit() {
  try {
    const response = await useNuxtApp().$api.posts.add(form.value);
    console.log(response, "response");
    navigateTo("/posts");
  } catch (error) {
    if (error instanceof FetchError) {
      Object.assign(errors.value, useFormError(error, form.value));
    } else {
      console.error("Unexpected error:", error);
    }
  }
}
</script>

<template>
  <BlockForm title="Create Post">
    <form @submit.prevent="onSubmit" class="space-y-6">
      <UiInput
        v-model="form.title"
        label="Title"
        type="text"
        id="url"
        placeholder="Enter post title:"
        :errors="errors.title"
        required />

      <UiInput
        v-model="form.url"
        label="URL"
        type="text"
        id="url"
        placeholder="Enter post URL:"
        :errors="errors.url"
        :disabled="true"
        required />

      <UiTextarea
        v-model="form.content"
        label="Content"
        id="content"
        :errors="errors.content"
        placeholder="Enter post content:"
        required />

      <!-- Submit Button -->
      <button
        type="submit"
        class="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition">
        Submit
      </button>
    </form>
  </BlockForm>
</template>
