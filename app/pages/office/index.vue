<script setup lang="ts"></script>

<template>
  <div class="office">
    <h2>Office Page</h2>
    <NuxtLink to="/">Go to Home</NuxtLink>
    <hr>
    <NuxtLink :to="{name: 'auth-login'}">Login</NuxtLink>
  </div>
</template>
