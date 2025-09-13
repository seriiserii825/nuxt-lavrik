<script setup lang="ts"></script>

<template>
  <!-- Posts List -->
  <main class="container mx-auto px-6 py-12">
    <h2 class="text-3xl font-bold mb-8">Latest Posts</h2>
    <div class="space-y-8">
      <!-- Post Card -->
      <article class="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <h3 class="text-2xl font-semibold text-indigo-600 mb-2">
          <a href="/posts/3">3 Post</a>
        </h3>
        <p class="text-sm text-gray-500 mb-4">
          By
          <span class="font-medium text-gray-700">manager</span>
          •
          <time datetime="2025-09-13T06:54:16.483Z">Sep 13, 2025</time>
        </p>
        <p class="text-gray-700 mb-4 line-clamp-3">3 4 test, some big content placed here</p>
        <a href="/posts/3" class="inline-block text-indigo-600 font-semibold hover:underline">
          Read More →
        </a>
      </article>

      <!-- Another example post -->
      <article class="bg-white rounded-lg shadow hover:shadow-lg transition p-6">
        <h3 class="text-2xl font-semibold text-indigo-600 mb-2">
          <a href="/posts/4">Another Post Title</a>
        </h3>
        <p class="text-sm text-gray-500 mb-4">
          By
          <span class="font-medium text-gray-700">admin</span>
          •
          <time datetime="2025-09-12T14:20:00Z">Sep 12, 2025</time>
        </p>
        <p class="text-gray-700 mb-4 line-clamp-3">
          Short excerpt from the content goes here for preview purposes…
        </p>
        <a href="/posts/4" class="inline-block text-indigo-600 font-semibold hover:underline">
          Read More →
        </a>
      </article>
    </div>
  </main>

  <!-- Footer -->
</template>
