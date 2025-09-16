<script setup lang="ts">
const route = useRoute();
const post_id = route.params.id;

const { error, pending, data } = await useAsyncData("post", () =>
  useNuxtApp().$api.posts.one(post_id as string)
);
let created_at = "";
if (data.value) {
  created_at = useGetDate(data.value.createdAt);
}
</script>

<template>
  <div class="single-post" v-if="!pending && !error && data">
    <NuxtLink to="/posts" class="inline-block mt-6 ml-6 text-blue-600 hover:underline">
      Back to Posts
    </NuxtLink>
    <!-- Content -->
    <section class="container mx-auto px-4 py-10">
      <article
        id="post"
        class="bg-white shadow-sm rounded-2xl border p-6 md:p-8"
        aria-busy="true"
        aria-live="polite">
        <div id="content">
          <h1 id="post-title" class="text-2xl md:text-3xl font-semibold tracking-tight">
            {{ data.title }}
          </h1>

          <div class="mt-2 flex flex-wrap items-center gap-2 text-sm text-gray-500">
            <time id="post-date" datetime="">{{ created_at }}</time>
            <span class="hidden md:inline">•</span>
          </div>
          <div id="post-body" class="prose prose-lg mt-6 max-w-none" v-html="data.content"></div>
        </div>

        <!-- Error state -->
        <div v-if="error" id="error" class="hidden">
          <p class="text-red-600">{{ error }}</p>
        </div>
      </article>
    </section>
  </div>
</template>
