<script setup lang="ts">
const { $api } = useNuxtApp();

definePageMeta({
  middleware: ["auth"],
});

const { form, errors, send, pending } = useForm(
  $api.posts.add,
  {
    title: "",
    url: "",
    content: "",
  },
  () => {
    navigateTo(`/posts`);
  }
);

watch(
  () => form.title,
  (newTitle) => {
    form.url = newTitle
      .toLowerCase()
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/(^-|-$)+/g, "");
  }
);
</script>

<template>
  <BlockForm title="Create Post">
    <form class="space-y-6" @submit.prevent="send">
      <UiInput
        id="url"
        v-model="form.title"
        label="Title"
        type="text"
        placeholder="Enter post title:"
        :errors="errors['title']"
        required />

      <UiInput
        id="url"
        v-model="form.url"
        label="URL"
        type="text"
        placeholder="Enter post URL:"
        :errors="errors['url']"
        :disabled="true"
        required />

      <UiTextarea
        id="content"
        v-model="form.content"
        label="Content"
        :errors="errors['content']"
        placeholder="Enter post content:"
        :count_chars="true"
        :required_chars_length="25"
        required />

      <!-- Submit Button -->
      <button
        type="submit"
        :disabled="pending"
        class="w-full bg-indigo-600 text-white font-semibold py-2 px-4 rounded-md hover:bg-indigo-700 transition">
        Submit
      </button>
    </form>
  </BlockForm>
</template>
