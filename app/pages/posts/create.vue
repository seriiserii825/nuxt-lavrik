<script setup lang="ts">
definePageMeta({
  middleware: ["auth"],
});
const { $fetchApi } = useNuxtApp();
const form = ref({
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
    const response = await $fetchApi("/posts", {
      method: "POST",
      body: { ...form.value },
    });
    console.log(response, "response");
    navigateTo("/posts");
  } catch (error) {
    useSweetAlert("error", "Could not create post", error.message);
    console.error("Create post error", error);
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
        required />

      <UiInput
        v-model="form.url"
        label="URL"
        type="text"
        id="url"
        placeholder="Enter post URL:"
        :disabled="true"
        required />

      <UiTextarea
        v-model="form.content"
        label="Content"
        id="content"
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
