<script setup lang="ts">
const auth_store = useAuthStore();
console.log(auth_store.token, "auth_store.token");
</script>

<template>
  <div class="home">
    <section class="bg-indigo-600 text-white">
      <div class="container mx-auto flex flex-col items-center text-center py-24 px-6">
        <h2 class="text-4xl md:text-5xl font-bold mb-4">Welcome to Our Website</h2>
        <p class="max-w-2xl mb-6 text-lg">
          We provide amazing solutions to grow your business with modern design and technology.
        </p>
        <a
          href="#"
          class="bg-white text-indigo-600 font-semibold px-6 py-3 rounded-md hover:bg-gray-100">
          Get Started
        </a>
      </div>
    </section>

    <!-- Features Section -->
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-6 text-center">
        <h3 class="text-3xl font-bold mb-12">Our Features</h3>
        <div class="grid gap-8 md:grid-cols-3">
          <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 class="text-xl font-semibold mb-2">Fast</h4>
            <p>Experience lightning-fast performance with our optimized solutions.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 class="text-xl font-semibold mb-2">Secure</h4>
            <p>Your data is safe with our top-notch security practices and tools.</p>
          </div>
          <div class="p-6 bg-white rounded-lg shadow hover:shadow-lg transition">
            <h4 class="text-xl font-semibold mb-2">Reliable</h4>
            <p>Depend on us for uptime and consistent service quality.</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
