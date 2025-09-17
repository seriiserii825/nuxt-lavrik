<script setup lang="ts">
defineProps({
  label: {
    type: String,
    required: false,
    default: null,
  },
  placeholder: {
    type: String,
    required: false,
    default: null,
  },
  id: {
    type: String,
    required: true,
  },
  errors: {
    type: Array as () => string[],
    required: false,
    default: () => [],
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
  rows: {
    type: Number,
    required: false,
    default: 4, // sensible default
  },
  count_chars: {
    type: Boolean,
    required: false,
    default: false,
  },
  required_chars_length: {
    type: Number,
    required: false,
    default: 0,
  },
});

const value = defineModel<string>({ default: "" });
</script>

<template>
  <div class="textarea">
    <label v-if="label" :for="id" class="block text-sm font-medium text-gray-700 mb-1">
      {{ label }}
    </label>

    <textarea
      :id="id"
      v-model="value"
      :name="id"
      :placeholder="placeholder"
      :required="required"
      :rows="rows"
      class="w-full px-4 py-2 border border-gray-300 rounded-md resize-y focus:ring-2 focus:ring-indigo-500 focus:outline-none" />

    <div
      v-if="count_chars"
      class="text-right text-sm text-gray-500 mt-1"
      :class="{
        'text-red-600': required_chars_length > 0 && value.length < required_chars_length,
      }">
      <span>{{ value.length }} characters</span>
      <span v-if="required_chars_length"> / {{ required_chars_length }}</span>
    </div>

    <div v-if="errors && errors.length" class="textarea__message textarea__message--error">
      <p v-for="(error, index) in errors" :key="index" class="text-red-600 text-sm">{{ error }}</p>
    </div>
  </div>
</template>

<style lang="scss">
.textarea {
  &__message {
    margin-top: 0.6rem;
    font-size: 1.2rem;
    color: var(--error);
  }
}
</style>
