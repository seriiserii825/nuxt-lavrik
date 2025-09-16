<script setup lang="ts">
defineProps({
  type: {
    type: String,
    default: "text",
  },
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
  disabled: {
    type: Boolean,
    required: false,
    default: false,
  },
  errors: {
    type: Array,
    required: false,
    default: () => [],
  },
  required: {
    type: Boolean,
    required: false,
    default: false,
  },
});

const value = defineModel<string>({ default: "" });
</script>
<template>
  <div class="input">
    <label class="block text-sm font-medium text-gray-700 mb-1" v-if="label" :for="id">
      {{ label }}
    </label>
    <input
      :id="id"
      v-model="value"
      :name="id"
      :type="type"
      :placeholder="placeholder"
      :disabled="disabled"
      :required="required"
      :class="{ 'bg-gray-100 cursor-not-allowed': disabled }"
      class="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-indigo-500 focus:outline-none" />
    <div v-if="errors && errors.length" class="input__message input__message--error">
      <p v-for="(error, index) in errors" :key="index" class="text-red-600 text-sm">{{ error }}</p>
    </div>
  </div>
</template>
<style lang="scss">
.input {
  &__message {
    margin-top: 0.6rem;
    font-size: 1.2rem;
    color: var(--error);
  }
}
</style>
