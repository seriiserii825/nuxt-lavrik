<script setup lang="ts">
import type { TPostStore, TPostStoreErrors } from "~/types/TPostStore";
import { FetchError } from "ofetch";

const { $api } = useNuxtApp();

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
    await $api.posts.add(form.value);
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
    <form class="space-y-6" @submit.prevent="onSubmit">
      <UiInput
        id="url"
        v-model="form.title"
        label="Title"
        type="text"
        placeholder="Enter post title:"
        :errors="errors.title"
        required />

      <UiInput
        id="url"
        v-model="form.url"
        label="URL"
        type="text"
        placeholder="Enter post URL:"
        :errors="errors.url"
        :disabled="true"
        required />

      <UiTextarea
        id="content"
        v-model="form.content"
        label="Content"
        :errors="errors.content"
        placeholder="Enter post content:"
        :count_chars="true"
        :required_chars_length="25"
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
